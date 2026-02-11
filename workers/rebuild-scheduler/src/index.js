export default {
  async scheduled(controller, env) {
    const response = await fetch(
      "https://api.github.com/repos/osmosiscast/osmosis-website/actions/workflows/deploy.yml/dispatches",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "osmosis-rebuild-scheduler",
        },
        body: JSON.stringify({ ref: "main" }),
      }
    );

    if (response.ok) {
      console.log("Deploy dispatch triggered.");
      return;
    }

    const body = await response.text();
    const message = `Deploy dispatch failed: HTTP ${response.status} — ${body}`;
    console.error(message);

    if (env.DISCORD_WEBHOOK) {
      await fetch(env.DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `⚠️ **Osmosis rebuild failed**\n${message}`,
        }),
      });
    }
  },
};
