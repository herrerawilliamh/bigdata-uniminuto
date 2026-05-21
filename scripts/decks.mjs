function normalizeBase(value) {
  let base = value || "/";
  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}

const SITE_BASE = normalizeBase(process.env.SITE_BASE || "/");

function withBase(path = "") {
  return `${SITE_BASE}${path.replace(/^\/+/, "")}`;
}

export const decks = [
  {
    name: "openclass-bigdata",
    entry: "slides.md",
    out: "dist",
    base: SITE_BASE,
    exportable: true,
  },
  {
    name: "bigdata_semana1",
    entry: "bigdata_semana1.md",
    out: "dist/semanas/bigdata_semana1",
    base: withBase("semanas/bigdata_semana1/"),
    exportable: true,
  },
  {
    name: "bigdata_semana2",
    entry: "bigdata_semana2.md",
    out: "dist/semanas/bigdata_semana2",
    base: withBase("semanas/bigdata_semana2/"),
    exportable: true,
  },
  {
    name: "bigdata_semana3",
    entry: "bigdata_semana3.md",
    out: "dist/semanas/bigdata_semana3",
    base: withBase("semanas/bigdata_semana3/"),
    exportable: true,
  },

  // Activa cada semana aqui cuando exista su archivo en semanas/.
  // {
  //   name: "bigdata_semana4",
  //   entry: "bigdata_semana4.md",
  //   out: "dist/semanas/bigdata_semana4",
  //   base: withBase("semanas/bigdata_semana4/"),
  //   exportable: true,
  // },
];
