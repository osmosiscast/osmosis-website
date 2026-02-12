# Rebuild Scheduler

Cloudflare Cron Worker that triggers a production site rebuild via GitHub Actions `workflow_dispatch`.

Runs every Sunday at 21:50 UTC (`50 21 * * 1` — Cloudflare uses 1=Sun, 7=Sat), 10 minutes before the Synology episode release notification. This keeps scheduled episodes (future `date` frontmatter) publishing without manual intervention.

On failure, posts a plain text alert to the **#episode-release** Discord channel:

```
⚠️ **Osmosis rebuild failed**
Deploy dispatch failed: HTTP 401 — ...
```

This channel also receives rich episode release embeds from the Python distribution scripts (`scripts/osmosisDiscord.py` via `scripts/osmosisScheduler.sh`). The episode notifications are independent — they run from the Synology using pre-built JSON payloads.

## Secrets

| Name | Value | Source |
|------|-------|--------|
| `GITHUB_TOKEN` | Fine-grained PAT with **Actions: Read and write** on `osmosiscast/osmosis-website` | github.com > Settings > Developer settings > Fine-grained tokens |
| `DISCORD_WEBHOOK` | The **episode-release** webhook URL | `EPISODE_RELEASE_WEBHOOK` env var |

## Deploy

```bash
cd workers/rebuild-scheduler
npx wrangler deploy
```

## Set secrets

```bash
npx wrangler secret put GITHUB_TOKEN --name osmosis-rebuild-scheduler
npx wrangler secret put DISCORD_WEBHOOK --name osmosis-rebuild-scheduler
```

Both commands prompt interactively — paste the value when asked.

## Test

There is no manual trigger button in the Cloudflare dashboard. To test, temporarily change the cron to fire a few minutes from now:

1. Update `wrangler.toml` cron to a near-future time (e.g. `crons = ["30 14 * * *"]` for 14:30 UTC)
2. `npx wrangler deploy`
3. Tail logs: `npx wrangler tail osmosis-rebuild-scheduler --format pretty`
4. Wait for the cron to fire — logs will show the result
5. Revert `wrangler.toml` to `50 21 * * 1` and redeploy

**Happy path:** Verify the GitHub Actions `deploy.yml` workflow fires on `osmosiscast/osmosis-website` (`gh run list --workflow deploy.yml --limit 1`).

**Error path:** Set a bogus `GITHUB_TOKEN` (`echo "invalid" | npx wrangler secret put GITHUB_TOKEN --name osmosis-rebuild-scheduler`), trigger, and verify the alert appears in `#episode-release` on Discord. Restore the real token afterwards.