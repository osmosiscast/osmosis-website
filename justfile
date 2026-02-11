install:
    npm ci
    poetry install --with dev

build:
    npx @11ty/eleventy

serve:
    npx @11ty/eleventy --serve

deploy-preview:
    #!/usr/bin/env bash
    set -euo pipefail
    branch=$(git branch --show-current)
    slug=$(echo "$branch" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
    echo "Deploying branch '${branch}'..."
    gh workflow run "Deploy Preview" --ref "$branch"
    sleep 3
    run_id=$(gh run list --workflow "Deploy Preview" --branch "$branch" --limit 1 --json databaseId --jq '.[0].databaseId')
    gh run watch "$run_id" --exit-status
    echo ""
    echo "Preview: https://osmosis-preview-${slug}.osmosiscast.workers.dev"
