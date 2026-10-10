import { writeFileSync } from "node:fs";
import { buildLlmsFull } from "../lib/content";

writeFileSync("public/llms-full.txt", buildLlmsFull());
