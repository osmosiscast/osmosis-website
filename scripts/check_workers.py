"""List stranded Osmosis preview and cleanup workers on Cloudflare.

Requires CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID environment variables.

Usage:
    npm run check-workers
    # or directly:
    poetry run python scripts/check_workers.py
"""

import http.client
import json
import os
import sys

PREVIEW_PREFIX = "osmosis-preview-"
CLEANUP_PREFIX = "osmosis-cleanup-"


def fetch_workers(api_token: str, account_id: str) -> list[dict]:
    connection = http.client.HTTPSConnection("api.cloudflare.com")
    connection.request(
        "GET",
        f"/client/v4/accounts/{account_id}/workers/scripts",
        headers={"Authorization": f"Bearer {api_token}"},
    )
    response = connection.getresponse()
    data = json.loads(response.read())
    connection.close()
    if not data.get("success"):
        print("API request failed:", data.get("errors"), file=sys.stderr)
        sys.exit(1)
    return data["result"]


def main() -> None:
    api_token = os.environ.get("CLOUDFLARE_API_TOKEN")
    account_id = os.environ.get("CLOUDFLARE_ACCOUNT_ID")

    if not api_token or not account_id:
        print(
            "Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID environment variables.",
            file=sys.stderr,
        )
        sys.exit(1)

    workers = fetch_workers(api_token, account_id)

    preview_workers = [w for w in workers if w["id"].startswith(PREVIEW_PREFIX)]
    cleanup_workers = [w for w in workers if w["id"].startswith(CLEANUP_PREFIX)]
    scheduled_count = sum(1 for w in workers if "scheduled" in w.get("handlers", []))

    print(f"Cron trigger usage: {scheduled_count}/5\n")

    if not preview_workers and not cleanup_workers:
        print("No stranded workers found.")
        return

    if cleanup_workers:
        print(f"Cleanup workers ({len(cleanup_workers)}):")
        for w in sorted(cleanup_workers, key=lambda w: w["id"]):
            print(f"  {w['id']}")

    if preview_workers:
        print(f"\nPreview workers ({len(preview_workers)}):")
        for w in sorted(preview_workers, key=lambda w: w["id"]):
            print(f"  {w['id']}")

    print(f"\nTo delete a worker:")
    print(f"  npx wrangler delete --name <worker-name>")


if __name__ == "__main__":
    main()
