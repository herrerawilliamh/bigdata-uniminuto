# OpenClass Big Data · Presentaciones Slidev

Presentaciones academicas semanales del curso **Big Data**, construidas con [Slidev](https://sli.dev), una plantilla institucional UNIMINUTO y archivos Markdown reutilizables por semana.

## Arquitectura

El proyecto usa tres niveles:

```text
slides.md                    -> Portal principal del curso
bigdata_semanaN.md           -> Lanzador raiz de cada semana
semanas/bigdata_semanaN.md   -> Contenido real de la presentacion
```

Regla principal:

- `slides.md` funciona como portal.
- `bigdata_semanaN.md` solo importa la semana correspondiente con `src`.
- `semanas/bigdata_semanaN.md` inicia directamente con un layout y contiene las diapositivas reales.

## Estructura

```text
openclass-bigdata/
├─ slides.md
├─ bigdata_semana1.md ... bigdata_semana8.md
├─ semanas/
│  └─ bigdata_semana1.md ... bigdata_semana3.md
├─ public/
│  ├─ fondos/
│  ├─ imagenes/
│  ├─ videos/
│  └─ descargas/
├─ scripts/
│  ├─ decks.mjs
│  ├─ build-site.mjs
│  ├─ build-incremental.mjs
│  ├─ export-downloads.mjs
│  ├─ export-incremental.mjs
│  ├─ dev-all.mjs
│  └─ publicar.mjs
└─ theme/uniminuto/
```

## Control de semanas activas

La fuente de verdad es `scripts/decks.mjs`. Solo las presentaciones listadas ahi se construyen y exportan.

Actualmente estan activas:

- Portal: `slides.md`
- Semana 1: `bigdata_semana1.md`
- Semana 2: `bigdata_semana2.md`
- Semana 3: `bigdata_semana3.md`

Cuando exista `semanas/bigdata_semana4.md`, agrega un nuevo bloque en `scripts/decks.mjs` siguiendo el ejemplo comentado.

## Comandos

```powershell
npm install
npm run dev
npm run dev:s3
npm run dev:todo
npm run build:all
npm run build:incremental
npm run export:downloads
npm run export:incremental
npm run vista
```

Comandos utiles:

- `npm run dev`: abre el portal en el puerto 3000.
- `npm run dev:sN`: abre una semana especifica.
- `npm run dev:todo`: abre portal y semanas activas en paralelo.
- `npm run vista`: limpia, exporta descargas, construye el sitio y sirve `dist/`.
- `npm run publicar`: hace `git add -A`, commit con fecha y `git push`.

## Layouts disponibles

```text
slide-01-portada
slide-02-titulo
slide-03-imagen-izquierda
slide-04-imagen-derecha
slide-05-titulo-superior-texto-derecha
slide-06-titulo-superior-texto-izquierda
slide-07-multimedia-con-titulo
slide-08-titulo-texto
slide-09-objetivos
slide-10-titulo-dos-columnas
slide-11-dos-titulos-dos-columnas
slide-12-cierre
slide-codigo
```

## Slots

Ejemplo para titulo y contenido:

```md
---
layout: slide-08-titulo-texto
---

::title::
Titulo de la diapositiva

::content::
Contenido de la diapositiva.
```

Ejemplo para imagen:

```md
::title::
Titulo de la diapositiva

::image::
<img src="/imagenes/archivo.png" alt="Descripcion de la imagen" />

::content::
Texto de apoyo.
```

No cierres los slots con `::`.

## Recursos publicos

Los archivos publicos viven en `public/` y se referencian desde Markdown asi:

```html
<img src="/imagenes/visualizacion-bigdata.png" alt="Visualizacion Big Data" />
<video src="/videos/test.mp4" controls></video>
```

Evita rutas como `../public/...`, `/public/...` o `./imagenes/...`.

## Publicacion

El workflow de GitHub Pages usa:

```text
SITE_BASE=/${{ github.event.repository.name }}/
```

Asi el sitio queda preparado para publicarse con el nombre real del repositorio, sin rutas quemadas.
