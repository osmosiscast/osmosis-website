import { readFileSync } from "fs";

const config = JSON.parse(
  readFileSync("content/config.json", "utf-8")
);

config.copyright = `© ${new Date().getFullYear()} Osmosis`;

export default config;
