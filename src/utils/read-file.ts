import { readFileSync } from "fs";
import path from "path";

export const readFile = (filePath: string) =>
  readFileSync(path.resolve(filePath), "utf-8");
