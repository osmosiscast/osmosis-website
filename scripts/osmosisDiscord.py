import json
import os
from datetime import datetime, timezone
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
    webhook = DiscordWebhook(url=str(os.getenv("EPISODE_RELEASE_WEBHOOK")))

    description_embed = DiscordEmbed(title=title, description=description)
    description_embed.set_timestamp(release_date)
    webhook.add_embed(description_embed)

    youtube_embed = DiscordEmbed(title="Live on YouTube")
    youtube_embed.set_url(url=youtube_url)
    webhook.add_embed(youtube_embed)

    website_embed = DiscordEmbed(title="Website post")
    website_embed.set_url(url=website_url)
    webhook.add_embed(website_embed)

    audio_embed = DiscordEmbed(title="Direct audio")
    audio_embed.set_url(url=audio_url)
    webhook.add_embed(audio_embed)

    video_embed = DiscordEmbed(title="Direct video")
    video_embed.set_url(url=video_url)
    webhook.add_embed(video_embed)

    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(webhook.json, f)
    return webhook.json
