export default {
  async scheduled(controller, env) {
    const headers = { Authorization: `Bearer ${env.CF_API_TOKEN}` };
    const base = `https://api.cloudflare.com/client/v4/accounts/${env.ACCOUNT_ID}/workers/scripts`;

    const response = await fetch(`${base}/${env.PREVIEW_NAME}`, { headers });
    const data = await response.json();

    if (!data.success) {
      console.log(`Preview ${env.PREVIEW_NAME} already gone, deleting self.`);
      await fetch(`${base}/${env.CLEANUP_NAME}`, { method: "DELETE", headers });
      return;
    }

    const modified = new Date(data.result.modified_on);
    const ageMs = Date.now() - modified.getTime();
    const ttlMs = 3 * 60 * 60 * 1000;

    if (ageMs < ttlMs) {
      const minsLeft = ((ttlMs - ageMs) / 60000).toFixed(0);
      console.log(`Preview ${env.PREVIEW_NAME} has ${minsLeft}m remaining.`);
      return;
    }

    console.log(`Preview ${env.PREVIEW_NAME} expired (${(ageMs / 3600000).toFixed(1)}h old). Tearing down.`);
    await fetch(`${base}/${env.PREVIEW_NAME}`, { method: "DELETE", headers });
    await fetch(`${base}/${env.CLEANUP_NAME}`, { method: "DELETE", headers });
  },
};
