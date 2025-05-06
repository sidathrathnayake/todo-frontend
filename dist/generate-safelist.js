"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var url_1 = require("url");
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
var types = ["bg", "border", "text"];
var shades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
var colors = [
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
var generatedClasses = [];
for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
    var type = types_1[_i];
    for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
        var color = colors_1[_a];
        generatedClasses.push("".concat(type, "-").concat(color));
        for (var _b = 0, shades_1 = shades; _b < shades_1.length; _b++) {
            var shade = shades_1[_b];
            generatedClasses.push("".concat(type, "-").concat(color, "-").concat(shade));
        }
    }
}
var filePath = path_1.default.resolve(__dirname, "../public/css/safelist-tailwindcss.txt");
fs_1.default.writeFileSync(filePath, generatedClasses.join("\n"));
console.log("Safelist file generated with", generatedClasses.length, "classes.");
