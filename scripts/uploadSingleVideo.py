import argparse
import os
from osmosisDistributeAudio import PrepareVideo


def argument_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser("Osmosis Single Video Upload")
    parser.add_argument(
        "--source-video",
        "-s",
        type=os.path.abspath,  # type: ignore
        required=True,
        help="Video file prepared for distribution.",
    )
    return parser


def main() -> None:
    parser = argument_parser()
    arguments = parser.parse_args()

    video = PrepareVideo(source_filename=arguments.source_video)
    video_filename = video.source_filename
    season = 1
    number = 1

    video_filename = video.write_to_r2(season, number)

    print(f"Uploaded {arguments.source_video} to {video_filename}")

    return None


if __name__ == "__main__":
    main()
