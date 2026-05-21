import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { decks } from "./decks.mjs";

const isWindows = process.platform === "win32";

function run(args) {
  const result = spawnSync("npx", ["slidev", "build", ...args], {
    stdio: "inherit",
    shell: isWindows,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

let built = 0;

for (const deck of decks) {
  const marker = path.join(deck.out, "index.html");

  if (fs.existsSync(marker)) {
    console.log(`Omitiendo: ${deck.name} ya existe en ${deck.out}`);
    continue;
  }

  console.log(`\nConstruyendo: ${deck.name}`);
  run([deck.entry, "--out", deck.out, "--base", deck.base, "--without-notes"]);
  built++;
}

if (built === 0) {
  console.log("\nTodo esta al dia. No se construyo ninguna presentacion nueva.");
  console.log("Para forzar una reconstruccion, elimina dist/ y ejecuta build:all.\n");
} else {
  console.log(`\nListo. Se construyeron ${built} presentacion(es) nueva(s).\n`);
}
