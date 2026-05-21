import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { decks } from "./decks.mjs";

const isWindows = process.platform === "win32";

fs.mkdirSync("public/descargas", { recursive: true });

const commonOptions = [
  "--timeout",
  "120000",
  "--wait",
  "3000",
  "--wait-until",
  "none",
];

function run(args) {
  const result = spawnSync("npx", ["slidev", "export", ...args], {
    stdio: "inherit",
    shell: isWindows,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

let exported = 0;

for (const deck of decks.filter((item) => item.exportable)) {
  const pdf = `public/descargas/${deck.name}.pdf`;
  const pptx = `public/descargas/${deck.name}.pptx`;
  const pdfOk = fs.existsSync(pdf);
  const pptxOk = fs.existsSync(pptx);

  if (pdfOk && pptxOk) {
    console.log(`Omitiendo: ${deck.name} ya tiene PDF y PPTX`);
    continue;
  }

  if (!pdfOk) {
    console.log(`\nExportando PDF: ${deck.name}`);
    run([deck.entry, "--format", "pdf", ...commonOptions, "--output", pdf]);
    exported++;
  }

  if (!pptxOk) {
    console.log(`\nExportando PPTX: ${deck.name}`);
    run([
      deck.entry,
      "--format",
      "pptx",
      "--with-clicks",
      "false",
      ...commonOptions,
      "--output",
      pptx,
    ]);
    exported++;
  }
}

if (exported === 0) {
  console.log("\nTodo esta al dia. No se exporto ningun archivo nuevo.");
  console.log("Para forzar una re-exportacion, elimina archivos en public/descargas/.\n");
} else {
  console.log(`\nListo. Se exportaron ${exported} archivo(s) nuevo(s).\n`);
}
