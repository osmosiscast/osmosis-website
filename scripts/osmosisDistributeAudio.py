#!/opt/homebrew/bin/python3

from __future__ import annotations

import argparse
import os
import subprocess
import shutil
import tempfile
import yaml

from dataclasses import dataclass
from typing import Optional
# commment


@dataclass
class ShowNotes:
    """
    With a show notes file, return all attributes needed to build website page
    """

    metadata: dict

    @classmethod
    def read_file(self, filename: str) -> ShowNotes:
        with tempfile.NamedTemporaryFile() as temporary_input_metadata:
            os.system(
                f"sed '1d;/---/,$d' {filename} >| {temporary_input_metadata.name}"
            )

            with open(temporary_input_metadata.name) as stream:
                try:
                    metadata = yaml.safe_load(stream)
                except yaml.YAMLError as exc:
                    print(exc)

        # Static metadata values
        metadata["template"] = "post"
        metadata["draft"] = False
        metadata["socialImage"] = "./../../osmosis-logo-square.png"

        metadata["season"] = int(metadata["season"])
        metadata["number"] = int(metadata["number"])
        metadata["slug"] = (
            "/posts/"
            + subprocess.run(
                ["osmosisKebabCase", metadata["title"]], capture_output=True, text=True
            ).stdout.strip()
        )
        metadata["description"] = subprocess.run(
            ["osmosisExtractDescription", filename], capture_output=True, text=True
        ).stdout.strip()
        metadata["body"] = subprocess.run(
            ["osmosisExtractBody", filename], capture_output=True, text=True
        ).stdout.strip()

        return self(metadata=metadata)


class PrepareAudio:
    """
    Apply validation to audio file and ship to storage
    """

    size: int
    duration: int

    def __init__(self, source_filename: str) -> None:
        self.source_filename = source_filename
        self.size = int(
            subprocess.run(
                ["osmosisRetrieveAudioMetadata", "-s", self.source_filename],
                capture_output=True,
                text=True,
            ).stdout.strip()
        )
        self.duration = int(
            subprocess.run(
                ["osmosisRetrieveAudioMetadata", "-d", self.source_filename],
                capture_output=True,
                text=True,
            ).stdout.strip()
        )
        return None

    def apply_audio_metadata(self, title: str, date: str) -> None:
        exit_status = os.system(
            f'osmosisApplyAudioMetadata {self.source_filename} "{title}" "{date}" '
        )
        if exit_status != 0:
            raise ValueError(
                f"Unable to apply audio metadata to {self.source_filename}"
            )

        return None

    def write_to_r2(self, season_number: int, episode_number: int) -> str:
        bucket = "osmosis-assets-prod/content/episodes"
        domain = "https://assets.osmosiscast.com/content/episodes"
        season_string = f"{season_number:03.0f}"
        episode_string = f"{episode_number:03.0f}"
        local_filepath = os.path.basename(self.source_filename)
        upload_filepath = os.path.join(
            bucket, season_string, episode_string, local_filepath
        )
        audio_url = os.path.join(domain, season_string, episode_string, local_filepath)

        exit_status = os.system(
            f'npx wrangler r2 object put --file {self.source_filename} "{upload_filepath}"'
        )
        if exit_status == 0:
            return audio_url
        else:
            raise ValueError(
                f"{upload_filepath} failed to upload to R2 with this exit code {exit_status}"
            )


class PrepareEpisodePage:
    """
    Write a markdown file to a directory with all required gubbins
    """

    show_notes: ShowNotes
    audio_filename: str
    output_directory: str

    def __init__(
        self,
        show_notes: ShowNotes,
        audio_filename: str,
        output_directory: Optional[str],
    ) -> None:
        self.show_notes = show_notes
        self.audio_filename = audio_filename

        if output_directory is None:
            date = self.show_notes.metadata["date"].replace("-", "")
            season = f"{self.show_notes.metadata['season']:03.0f}"
            episode = f"{self.show_notes.metadata['number']:03.0f}"
            title = subprocess.run(
                ["osmosisKebabCase", self.show_notes.metadata["title"]],
                capture_output=True,
                text=True,
            ).stdout.strip()

            website_repository_directory = os.path.expanduser(
                "~/Documents/Development/osmosis-website/content/posts"
            )
            content_directory = f"{date}-{season}-{episode}-{title}"

            self.output_directory = os.path.join(
                website_repository_directory, content_directory
            )
        else:
            self.output_directory = output_directory

        os.makedirs(self.output_directory, exist_ok=True)

        return None

    def write_markdown(self) -> str:
        """
        Write information into a structured markdown file
        """

        header_metadata = dict(self.show_notes.metadata)
        header_metadata.pop("body", None)
        with tempfile.NamedTemporaryFile() as temporary_output_metadata:
            with open(temporary_output_metadata.name, "a") as stream:
                try:
                    stream.write("---\n")
                    yaml.dump(header_metadata, stream, allow_unicode=True)
                except yaml.YAMLError as exc:
                    print(exc)

            with open(temporary_output_metadata.name, "a") as stream:
                try:
                    stream.write("---\n\n")
                    stream.write(self.show_notes.metadata["body"])
                except ValueError as exc:
                    print(exc)

            output_filepath = os.path.join(self.output_directory, "index.md")
            destination = shutil.copy(temporary_output_metadata.name, output_filepath)

        return destination


def argument_parser() -> argparse.ArgumentParser:
    """
    osmosisDistributionAudio --source-audio {file} --source-markdown {file} [--output-directory {directory}]
    """

    parser = argparse.ArgumentParser("Osmosis Audio Distribution")
    parser.add_argument(
        "--source-audio",
        "-a",
        type=os.path.abspath,  # type: ignore
        required=True,
        help="Audio file prepared for distribution.",
    )
    parser.add_argument(
        "--source-markdown",
        "-m",
        type=os.path.abspath,  # type: ignore
        required=True,
        help="Show notes file prepared for parsing.",
    )
    parser.add_argument(
        "--output-directory",
        "-o",
        type=os.path.dirname,  # type: ignore
        required=False,
        help="Optional directory to write episode content to. Expected usage is for testing.",
    )
    return parser


def main() -> None:
    parser = argument_parser()
    arguments = parser.parse_args()
    show_notes = ShowNotes.read_file(filename=arguments.source_markdown)

    audio = PrepareAudio(source_filename=arguments.source_audio)
    audio_filename = audio.source_filename

    show_notes.metadata["size"] = audio.size
    show_notes.metadata["duration"] = audio.duration
    audio.apply_audio_metadata(
        show_notes.metadata["title"], show_notes.metadata["date"]
    )

    if arguments.output_directory is None:
        audio_filename = audio.write_to_r2(
            show_notes.metadata["season"], show_notes.metadata["number"]
        )
    if arguments.output_directory is not None:
        audio_filename = arguments.source_audio

    show_notes.metadata["url"] = audio_filename
    episode_page = PrepareEpisodePage(
        show_notes=show_notes,
        audio_filename=audio_filename,
        output_directory=arguments.output_directory,
    )
    destination = episode_page.write_markdown()

    print(f"Episode prepared at\n{destination}")

    return None


if __name__ == "__main__":
    main()
