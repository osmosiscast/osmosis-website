import { readFileSync } from "fs";

const config = JSON.parse(
  readFileSync("content/config.json", "utf-8")
);

export default config;
