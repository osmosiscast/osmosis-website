import json
import os
from datetime import datetime
from discord_webhook import DiscordWebhook, DiscordEmbed


def discord_episode_release(
    title: str,
    description: str,
    release_date: datetime,
    youtube_url: str,
    website_url: str,
    audio_url: str,
    video_url: str,
    output_filename: str,
) -> dict:
    prerelease_webhook = DiscordWebhook(
        url=str(os.getenv("EPISODE_PRERELEASE_WEBHOOK"))
    )
    release_webhook = DiscordWebhook(url=str(os.getenv("EPISODE_RELEASE_WEBHOOK")))

    description_embed = DiscordEmbed(title=title, description=description)
    description_embed.set_timestamp(release_date)
    prerelease_webhook.add_embed(description_embed)
    release_webhook.add_embed(description_embed)

    youtube_embed = DiscordEmbed(title="Live on YouTube")
    youtube_embed.set_url(url=youtube_url)
    prerelease_webhook.add_embed(youtube_embed)
    release_webhook.add_embed(youtube_embed)

    website_embed = DiscordEmbed(title="Website post")
    website_embed.set_url(url=website_url)
    prerelease_webhook.add_embed(website_embed)
    release_webhook.add_embed(website_embed)

    audio_embed = DiscordEmbed(title="Direct audio")
    audio_embed.set_url(url=audio_url)
    prerelease_webhook.add_embed(audio_embed)
    release_webhook.add_embed(audio_embed)

    video_embed = DiscordEmbed(title="Direct video")
    video_embed.set_url(url=video_url)
    prerelease_webhook.add_embed(video_embed)
    release_webhook.add_embed(video_embed)

    prerelease_webhook.execute()
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(release_webhook.json, f)
    return release_webhook.json
