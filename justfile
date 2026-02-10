install:
    npm ci
    poetry install --with dev

build:
    npm run build

serve:
    npx @11ty/eleventy --serve

deploy-preview:
    gh workflow run "Deploy Preview" --ref "$(git branch --show-current)"
