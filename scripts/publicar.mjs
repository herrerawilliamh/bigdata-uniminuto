import { execSync } from "node:child_process";

const fecha = new Date().toLocaleString("es-CO", {
  timeZone: "America/Bogota",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const mensaje = `Actualizacion de diapositivas - ${fecha}`;

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

console.log("\nVerificando cambios...");
const status = execSync("git status --porcelain").toString().trim();

if (!status) {
  console.log("No hay cambios para publicar.");
  process.exit(0);
}

console.log("\nPreparando archivos...");
run("git add -A");

console.log("\nConfirmando cambios...");
run(`git commit -m "${mensaje}"`);

console.log("\nSubiendo a GitHub...");
run("git push");

console.log(`\nPublicado: ${mensaje}`);
console.log("GitHub Actions desplegara el sitio automaticamente.\n");
