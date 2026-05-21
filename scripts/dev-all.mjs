import { spawn } from "node:child_process";
import { decks } from "./decks.mjs";

const COLORS = [
  "bgBlue.bold",
  "bgGreen.bold",
  "bgYellow.bold",
  "bgMagenta.bold",
  "bgCyan.bold",
  "bgRed.bold",
];

const portal = decks.find((deck) => deck.entry === "slides.md");
const semanas = decks.filter((deck) => deck.entry !== "slides.md");
const BASE_PORT = 3000;

const commands = [
  `slidev ${portal?.entry ?? "slides.md"} --open --port ${BASE_PORT}`,
  ...semanas.map((deck, i) => `slidev ${deck.entry} --port ${BASE_PORT + i + 1}`),
];

const names = ["portal", ...semanas.map((deck) => deck.name)].join(",");
const colors = COLORS.slice(0, commands.length).join(",");

console.log("\nIniciando servidores de desarrollo...");
console.log(`   portal -> http://localhost:${BASE_PORT}`);
semanas.forEach((deck, i) => {
  console.log(`   ${deck.name} -> http://localhost:${BASE_PORT + i + 1}`);
});
console.log("");

spawn("concurrently", ["-n", names, "-c", colors, ...commands], {
  stdio: "inherit",
  shell: true,
});
