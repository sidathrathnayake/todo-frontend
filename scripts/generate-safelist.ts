import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const types = ["bg", "border", "text", "from", "via", "to"];
const shades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
const colors = [
  "blue",
  "brown",
  "gray",
  "green",
  "lime",
  "cyan",
  "black",
  "white",
  "red",
  "teal",
  "orange",
  "pink",
  "purple",
  "yellow",
  "magenta",
  "indigo",
  "violet",
  "amber",
  "emerald",
  "fuchsia",
  "rose",
  "sky",
  "zinc",
  "neutral",
  "stone",
  "slate",
  "coolGray",
  "warmGray",
];

const generatedClasses: string[] = [];

for (const type of types) {
  for (const color of colors) {
    generatedClasses.push(`${type}-${color}`);
    for (const shade of shades) {
      generatedClasses.push(`${type}-${color}-${shade}`);
    }
  }
}

const filePath = path.resolve(
  __dirname,
  "../public/css/safelist-tailwindcss.txt"
);
fs.writeFileSync(filePath, generatedClasses.join("\n"));

console.log(
  "Safelist file generated with",
  generatedClasses.length,
  "classes."
);
