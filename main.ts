import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(out, "entry.png");
mkdirSync(out, { recursive: true });
copyFileSync(src, dst);
// Verify the copy is byte-identical to the source.
if (!readFileSync(src).equals(readFileSync(dst))) {
  throw new Error("entry.png copy mismatch");
}
