import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");
const seed = path.join(root, "db.seed.json");
const db = path.join(root, "db.json");
fs.copyFileSync(seed, db);
console.log("db.json has been reset from db.seed.json");