#!/usr/bin/env node
/**
 * Add a drop to HelgoIQ Work Hub.
 * Usage:
 *   node scripts/add-drop.mjs --title=… --tags=a,b --type=report --file=path.md
 * Options: --date=YYYY-MM-DD --id=… --summary=… --project=… --tip=… --issue=url
 * Multiple --file= allowed.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INDEX = path.join(ROOT, "index.json");

const TAG_VOCAB = new Set([
  "ambient", "booking", "payments", "isolation", "command-centre",
  "dataset", "smoke", "ai-85", "m1", "census", "findings", "status", "finance",
]);
const TYPE_VOCAB = new Set([
  "report", "checklist", "matrix", "status", "proposal", "evidence", "finding", "pack",
]);

function parseArgs(argv) {
  const out = { files: [] };
  for (const a of argv.slice(2)) {
    if (!a.startsWith("--")) continue;
    const eq = a.indexOf("=");
    const key = eq === -1 ? a.slice(2) : a.slice(2, eq);
    const val = eq === -1 ? true : a.slice(eq + 1);
    if (key === "file") out.files.push(val);
    else out[key] = val;
  }
  return out;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function stripCredentialLines(text) {
  const bad =
    /password\s*[:=]|passwd\s*[:=]|api[_-]?key\s*[:=]|secret\s*[:=]|ghp_[A-Za-z0-9]|sk_live_|sk_test_|Bearer\s+[A-Za-z0-9\-_.]{20,}/i;
  return text
    .split(/\r?\n/)
    .filter((line) => !bad.test(line))
    .join("\n");
}

function todayLondon() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

const args = parseArgs(process.argv);
if (!args.title || !args.type || !args.files.length) {
  console.error(
    "Required: --title=… --type=… --file=path.md  (optional --tags=a,b --date --id --summary --project --tip --issue)"
  );
  process.exit(1);
}
if (!TYPE_VOCAB.has(args.type)) {
  console.warn(`Warning: type "${args.type}" not in vocab: ${[...TYPE_VOCAB].join(", ")}`);
}
const tags = (args.tags || "")
  .split(",")
  .map((t) => t.trim())
  .filter(Boolean);
for (const t of tags) {
  if (!TAG_VOCAB.has(t)) console.warn(`Warning: tag "${t}" not in vocab`);
}

const date = args.date || todayLondon();
const id = args.id || `${date}-${slugify(args.title)}`;
const dir = path.join(ROOT, "drops", id);
fs.mkdirSync(dir, { recursive: true });

const paths = [];
for (const f of args.files) {
  const src = path.resolve(f);
  if (!fs.existsSync(src)) {
    console.error("File not found:", src);
    process.exit(1);
  }
  if (path.basename(src) === "README-SEATS.md") {
    console.error("Refusing to copy README-SEATS.md");
    process.exit(1);
  }
  let body = fs.readFileSync(src, "utf8");
  body = stripCredentialLines(body);
  const destName = path.basename(src);
  const dest = path.join(dir, destName);
  fs.writeFileSync(dest, body, "utf8");
  paths.push(path.posix.join("drops", id, destName));
  console.log("Copied", src, "→", dest);
}

const index = JSON.parse(fs.readFileSync(INDEX, "utf8"));
const drop = {
  id,
  title: args.title,
  date,
  summary: args.summary || args.title,
  tags,
  type: args.type,
  project: args.project || "helgoiq-platform",
  paths,
};
if (args.tip) drop.tip = args.tip;
if (args.issue) drop.githubIssue = args.issue;

index.drops = (index.drops || []).filter((d) => d.id !== id);
index.drops.unshift(drop);
index.updatedAt = new Date().toISOString();
fs.writeFileSync(INDEX, JSON.stringify(index, null, 2) + "\n", "utf8");
console.log("Updated index.json — drop", id, `(${index.drops.length} total)`);
