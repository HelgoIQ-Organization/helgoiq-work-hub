#!/usr/bin/env node
/**
 * Build history/index.json from history/*.json for the Progress today snapshot picker.
 * Skips latest.json (duplicate of tip snap). Includes morning + tip + pack snaps.
 *
 * Usage: node scripts/build-history-index.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const historyDir = path.join(root, "history");
const outPath = path.join(historyDir, "index.json");

function shortTip(tip) {
  return String(tip || "").slice(0, 8) || "";
}

function headlineFrom(dash) {
  if (dash.progressToday && dash.progressToday.nowHeadlinePercent != null) {
    return Number(dash.progressToday.nowHeadlinePercent);
  }
  if (dash.health && dash.health.overallLaunchPercent != null) {
    return Number(dash.health.overallLaunchPercent);
  }
  return null;
}

function tipFrom(dash) {
  return dash.tip || (dash.meta && dash.meta.buildStamp) || "";
}

const names = fs
  .readdirSync(historyDir)
  .filter((f) => f.endsWith(".json") && f !== "index.json" && f !== "latest.json")
  .sort()
  .reverse();

const files = [];
for (const name of names) {
  const rel = "history/" + name;
  const abs = path.join(historyDir, name);
  let dash;
  try {
    dash = JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch {
    continue;
  }
  const tip = tipFrom(dash);
  const headline = headlineFrom(dash);
  files.push({
    path: rel,
    label: name,
    tip: shortTip(tip) || tip || null,
    headline: headline,
  });
}

const index = {
  generatedAt: new Date().toISOString(),
  files,
};

fs.writeFileSync(outPath, JSON.stringify(index, null, 2) + "\n");
console.log("Wrote", outPath, "(" + files.length + " files)");
