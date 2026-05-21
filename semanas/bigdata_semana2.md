---
layout: slide-01-portada
---

::title::
Ecosistema Big Data: Almacenamiento, Procesamiento y Análisis

::week::
Semana 2

::date::
Mayo 13 de 2026

<!--
Notas del presentador:
Bienvenida cordial a los estudiantes. Esta es la segunda sesión del curso Electiva CPC: Big Data. Presentar el tema central de la semana: el ecosistema Big Data, sus componentes, bases de datos NoSQL, herramientas del entorno Hadoop, motores de consulta y plataformas de visualización. Mencionar que al final de la sesión los estudiantes estarán en capacidad de identificar las piezas clave del ecosistema y relacionarlas con la evaluación de la semana.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
¿Por qué importa el ecosistema Big Data?

::image::
<img src="/imagenes/contextualizacion-bigdata.png" alt="Volumen masivo de datos generados por usuarios y dispositivos en la era digital" />

::content::
Las organizaciones generan hoy más datos en un día que toda la humanidad en siglos enteros.

- Una sola plataforma de streaming registra miles de millones de eventos diarios.
- Los hospitales producen historias clínicas, imágenes y señales biomédicas que requieren almacenamiento especializado.
- Las redes sociales operan con grafos de relaciones entre millones de usuarios.
- El comercio electrónico necesita búsquedas de baja latencia para no perder ventas.

Ninguna base de datos relacional tradicional resuelve estos retos por sí sola. Por eso existe un ecosistema completo de tecnologías complementarias.

<!--
Notas del presentador:
Aterrizar el concepto con ejemplos cercanos. Mencionar Netflix, Rappi, Spotify o cualquier servicio que los estudiantes usen a diario. Explicar que el ecosistema Big Data no es una sola herramienta sino un conjunto de tecnologías especializadas. Conectar con la idea de que cada componente resuelve un problema específico y que aprenderlos como sistema es la clave del curso.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad de integración: clasifica el caso

::content::
Escoge uno de estos escenarios:

1. Una red social que conecta amigos de amigos hasta cinco grados de separación.
2. Una tienda online que necesita carrito de compras con respuesta inferior a 50 milisegundos.
3. Un hospital que guarda historias clínicas con estructura variable por paciente.
4. Un sistema de monitoreo de sensores IoT con millones de lecturas por minuto.

Responde: ¿qué tipo de base de datos NoSQL recomendarías y por qué?

Socialización: comparte su elección en 30 segundos.

<!--
Notas del presentador:
Esta actividad activa saberes previos y prepara el terreno para el desarrollo conceptual. No se busca la respuesta perfecta sino la argumentación. Las respuestas esperadas son: grafos para red social, clave-valor para carrito, documentos para historia clínica y columnas anchas para IoT. Tomar nota en el tablero de las intuiciones de los estudiantes para retomarlas durante la explicación teórica.
-->

---
layout: slide-02-titulo
---

::title::
El ecosistema Big Data por dentro

<!--
Notas del presentador:
Slide de transición. Anunciar que entramos en el bloque conceptual más denso de la sesión. Pedir atención plena durante los próximos 25 minutos. Indicar que después vendrán ejemplos aplicados y la práctica.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Capas del ecosistema Big Data

::left::
Capa de almacenamiento

- HDFS para archivos distribuidos.
- HBase para datos columnares.
- Bases NoSQL: MongoDB, Cassandra, Redis, Neo4j.
- Data lakes en la nube.

::right::
Capa de procesamiento y consulta

- MapReduce para lotes.
- Apache Spark para procesamiento en memoria.
- Hive, Pig, Impala y Presto para análisis SQL.
- Sqoop y Flume para ingesta.
- Visualización con Apache Zeppelin y Kibana.

<!--
Notas del presentador:
Explicar que el ecosistema se organiza por capas funcionales. La capa de almacenamiento responde a la pregunta dónde guardo los datos. La capa de procesamiento responde a cómo los transformo y consulto. Es importante que el estudiante diferencie ambas capas porque en la evaluación se preguntan herramientas específicas por capa. Mencionar que algunas herramientas cruzan capas, como HBase, que es almacenamiento pero está fuertemente ligado al procesamiento de Hadoop.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Bases de datos NoSQL: cuatro familias

::image::
<img src="/imagenes/familias-nosql.png" alt="Cuatro familias de bases de datos NoSQL representadas con iconografía técnica" />

::content::
NoSQL significa "Not Only SQL". No reemplaza al modelo relacional, lo complementa cuando el esquema rígido o la escalabilidad vertical se quedan cortos.

Las cuatro familias son:

- Clave-valor: pares simples llave igual a valor. Velocidad extrema.
- Documentos: estructuras JSON o BSON con campos variables.
- Columnas anchas: tablas con familias de columnas, optimizadas para escritura masiva.
- Grafos: nodos y relaciones, ideales para conexiones complejas.

Cada familia tiene fortalezas y debilidades. Elegir bien la familia es una decisión arquitectónica crítica.

<!--
Notas del presentador:
Subrayar que NoSQL no es un único modelo sino una categoría amplia. Explicar que en la evaluación de la semana hay preguntas directas sobre estas familias. Pedir a los estudiantes que en sus apuntes asocien cada familia con al menos un motor de base de datos y un caso de uso.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Clave-valor y documentos

::rightTitle::
Columnas anchas y grafos

::left::
Clave-valor

- Ejemplo: Redis.
- Modelo más simple: clave única apunta a un valor.
- Uso: cachés, sesiones, contadores en tiempo real.

Documentos

- Ejemplo: MongoDB.
- Modelo: documentos JSON con estructura flexible.
- Uso ideal: datos jerárquicos como historias clínicas, catálogos o perfiles de usuario.

::right::
Columnas anchas

- Ejemplo: Cassandra, HBase.
- Modelo: filas con familias de columnas dinámicas.
- Uso: series temporales, logs, telemetría IoT.

Grafos

- Ejemplo: Neo4j.
- Modelo: nodos, relaciones y propiedades.
- Uso: redes sociales, detección de fraude, motores de recomendación.

<!--
Notas del presentador:
Aterrizar cada familia con un ejemplo del producto líder. Resaltar que Redis es la respuesta a la pregunta sobre clave-valor en la evaluación. MongoDB representa documentos. Cassandra y HBase son columnas anchas. Neo4j es el motor de grafos más conocido. Esta diapositiva es base directa de varias preguntas del cuestionario semanal.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Términos clave: consistencia eventual

::image::
<img src="/imagenes/consistencia-eventual.png" alt="Servidores distribuidos sincronizando datos hacia un estado convergente" />

::content::
En sistemas distribuidos no es viable garantizar que todos los nodos vean la misma información en el mismo instante.

La consistencia eventual significa que, con el tiempo, todas las copias de los datos convergen al mismo estado.

- No es ausencia total de consistencia.
- No es consistencia inmediata.
- Es un compromiso a favor de la disponibilidad y la tolerancia a particiones de red.

Este principio aparece en el teorema CAP, que explica por qué los sistemas distribuidos deben renunciar a una de las tres garantías: consistencia, disponibilidad o tolerancia a particiones.

<!--
Notas del presentador:
Concepto frecuentemente mal entendido. Aclarar que consistencia eventual no es lo mismo que datos inconsistentes para siempre. Es una garantía suave pero real. Mencionar que la pregunta sobre consistencia eventual aparece en la evaluación y que la opción correcta es justamente la convergencia con el tiempo. Si hay tiempo, dibujar en el tablero el triángulo CAP.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Herramientas del entorno Hadoop

::left::
Procesamiento y consulta

- Hive: SQL sobre datos en HDFS, orientado a procesamiento por lotes.
- Pig: lenguaje Pig Latin para flujos de transformación.
- Impala: consultas ad hoc de baja latencia, ideal para análisis interactivo.
- HBase: base de datos columnar sobre Hadoop.

::right::
Ingesta, transferencia y especializadas

- Sqoop: transferencia entre Hadoop y bases relacionales.
- Flume: ingesta de logs en streaming.
- GeoMesa: análisis de datos geoespaciales sobre Hadoop, Spark y Kafka.
- Apache Drill: consultas SQL sobre múltiples fuentes sin esquema previo.

<!--
Notas del presentador:
Resaltar que Impala se usa para consultas ad hoc e interactivas, mientras que Hive es por lotes. Sqoop conecta el mundo relacional con el mundo Hadoop, una pregunta literal de la evaluación. GeoMesa es la respuesta para datos geoespaciales. Pedir a los estudiantes que escriban estos pares herramienta y propósito en sus apuntes.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Motores de consulta especializados

::image::
<img src="/imagenes/motores-consulta.png" alt="Motores de consulta distribuidos procesando datos en paralelo" />

::content::
Las grandes tecnológicas desarrollaron motores propios optimizados para sus necesidades:

- Presto: creado por Facebook para consultas SQL distribuidas de baja latencia sobre múltiples fuentes.
- Spark SQL: módulo de Apache Spark que ejecuta consultas SQL estándar sobre DataFrames distribuidos.
- Apache Drill: motor SQL libre de esquema.

Spark SQL utiliza SQL como lenguaje de consulta, no HQL ni Pig Latin. Esta distinción es importante: cada herramienta tiene su sintaxis y aprenderlas no es intercambiable.

<!--
Notas del presentador:
Presto es la respuesta a la pregunta sobre el motor desarrollado por Facebook. Spark SQL utiliza SQL estándar, no un dialecto propietario. Hive utiliza HiveQL o HQL. Pig utiliza Pig Latin. Pedir que los estudiantes hagan una mini ficha mental de cada motor con su lenguaje asociado.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Visualización en el ecosistema Big Data

::image::
<img src="/imagenes/visualizacion-bigdata.png" alt="Dashboards analíticos con gráficos y métricas en tiempo real" />

::content::
La visualización es el último eslabón: convierte datos procesados en insights accionables.

- Apache Zeppelin: notebook web interactivo integrado nativamente con Hadoop y Spark.
- Kibana: visualización sobre Elasticsearch, ideal para logs y métricas en tiempo real.
- Tableau y Power BI: herramientas comerciales con conectores hacia el ecosistema Big Data.

Apache Zeppelin destaca por su integración directa con Spark y Hadoop, lo que permite ejecutar Scala, Python, SQL y R en una misma sesión.

<!--
Notas del presentador:
Apache Zeppelin es la respuesta a la pregunta sobre visualización integrada con Hadoop y Spark. Diferenciarlo de Tableau y Power BI, que son herramientas excelentes pero no nacieron dentro del ecosistema Hadoop. Kibana se asocia con Elasticsearch, una pieza importante para búsqueda de texto.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Introducción al ecosistema Big Data

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/ejifwGane9c?si=l-fTm3bzklkv4m3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Reproducir un video corto, máximo 5 minutos, que introduzca las herramientas principales del ecosistema Hadoop y NoSQL. Sugerencias de búsqueda: "Ecosistema Hadoop explicado en español", "Qué es NoSQL en 5 minutos", "Apache Spark introducción". Verificar enlace y duración antes de la clase. El video se utiliza como pausa cognitiva entre el bloque conceptual y los ejemplos aplicados.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Ejemplos aplicados en la industria

::image::
<img src="/imagenes/ejemplos-industria.png" alt="Industrias diversas conectadas por flujos de datos hacia un núcleo central" />

::content::
- Netflix utiliza Cassandra para almacenar el historial de visualización de cientos de millones de usuarios.
- Uber emplea Presto para análisis interactivo sobre petabytes de datos de viajes.
- LinkedIn desarrolló Kafka y lo combina con HDFS y Spark para sus pipelines.
- Bancos colombianos usan MongoDB para gestionar perfiles dinámicos de clientes y Neo4j para detectar fraude transaccional.
- Sistemas de salud pública implementan GeoMesa para rastrear brotes epidemiológicos con datos georreferenciados.

Cada caso ilustra cómo la elección tecnológica responde a un problema de negocio específico.

<!--
Notas del presentador:
Aterrizar la teoría en casos reales. Si los estudiantes conocen empresas locales, invitarlos a pensar qué tecnologías estarían usando. Explicar que el ecosistema Big Data no es un experimento académico sino la base operativa de las empresas más valiosas del mundo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preparación para la evaluación

::content::
Los temas vistos hoy:

- Bases de datos NoSQL clave-valor: Redis.
- Análisis interactivo y consultas ad hoc: Impala.
- Motor de consulta de Facebook: Presto.
- Datos geoespaciales: GeoMesa.
- Lenguaje de Spark SQL: SQL.
- Ejemplo de NoSQL: MongoDB.
- Consistencia eventual: convergencia con el tiempo.
- Transferencia Hadoop con relacionales: Sqoop.
- Datos jerárquicos: bases de documentos.
- Visualización integrada con Hadoop y Spark: Apache Zeppelin.

<!--
Notas del presentador:
Esta diapositiva es un mapa explícito entre la clase y la evaluación. No es una lista de respuestas, es una guía de estudio. Animar a los estudiantes a revisar el material complementario del aula virtual para profundizar en cada punto antes de responder el cuestionario.
-->

---
layout: slide-02-titulo
---

::title::
NoSQL con MongoDB y Python

<!--
Notas del presentador:
Slide de transición hacia la práctica. Pedir a los estudiantes que abran su entorno de desarrollo. Recordar que la práctica está pensada para Windows 11 Pro y que toda la herramienta es de software libre.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Práctica: propósito y componentes

::image::
<img src="/imagenes/practica-mongodb.png" alt="Entorno de práctica con MongoDB y Python sobre Windows 11 Pro" />

::content::
Título: Mi primer catálogo de productos en MongoDB.

Propósito: aplicar el modelo de documentos NoSQL para almacenar, consultar y analizar datos jerárquicos usando MongoDB y Python.

Componentes necesarios:

- Windows 11 Pro.
- MongoDB Community Server 7.x.
- MongoDB Compass como interfaz visual.
- Python 3.11 o superior.
- Librería pymongo.
- Editor de código: Visual Studio Code o IDLE.

Conexiones sugeridas: conexión local en mongodb://localhost:27017 sin autenticación para fines didácticos.

<!--
Notas del presentador:
Enumerar cada componente y verificar que los estudiantes los tengan instalados. Si no, indicar que el primer paso de la práctica es la instalación. Aclarar que MongoDB en producción requiere autenticación, pero para el laboratorio se trabajará en modo local abierto. Esta práctica conecta directamente con la familia de bases de datos de documentos vista en teoría.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos de instalación en Windows 11 Pro

::content::
1. Descargar MongoDB Community Server desde el sitio oficial de MongoDB.
2. Ejecutar el instalador MSI y seleccionar instalación completa.
3. Marcar la opción "Install MongoDB as a Service" para que arranque automáticamente.
4. Aceptar la instalación de MongoDB Compass durante el asistente.
5. Verificar que el servicio MongoDB esté ejecutándose en services.msc.
6. Instalar Python desde python.org marcando "Add Python to PATH".
7. Abrir PowerShell y ejecutar: pip install pymongo.
8. Abrir MongoDB Compass y conectarse a mongodb://localhost:27017.

Con estos pasos el entorno queda listo para ejecutar el código de la práctica.

<!--
Notas del presentador:
Caminar por cada paso con paciencia. Algunos estudiantes pueden tener restricciones administrativas en sus equipos. Indicar que si hay problemas se puede usar MongoDB Atlas como alternativa en la nube con cuenta gratuita. Verificar que el servicio efectivamente arranque antes de pasar al código.
-->

---
layout: slide-08-titulo-texto
---

::title::
Código completo de la práctica

::content::
```python
# Práctica Big Data Semana 2: catálogo de productos en MongoDB
# Requisitos: pip install pymongo

from pymongo import MongoClient
from datetime import datetime

# 1. Conexión al servidor local de MongoDB
cliente = MongoClient("mongodb://localhost:27017")

# 2. Selección de la base de datos y la colección
# Si no existen, MongoDB las crea automáticamente al insertar
base_datos = cliente["tienda_bigdata"]
coleccion = base_datos["productos"]

# 3. Limpiar la colección para empezar siempre desde cero
coleccion.delete_many({})

# 4. Insertar documentos con estructura jerárquica variable
productos = [
    {
        "codigo": "P001",
        "nombre": "Laptop Gamer",
        "precio": 4500000,
        "categoria": "Tecnología",
        "stock": 12,
        "atributos": {"ram_gb": 16, "ssd_gb": 512, "gpu": "RTX 4060"},
        "fecha_ingreso": datetime.now()
    },
    {
        "codigo": "P002",
        "nombre": "Cafetera Espresso",
        "precio": 850000,
        "categoria": "Hogar",
        "stock": 30,
        "atributos": {"presion_bar": 15, "capacidad_ml": 1200},
        "fecha_ingreso": datetime.now()
    },
    {
        "codigo": "P003",
        "nombre": "Libro Big Data Fundamentos",
        "precio": 95000,
        "categoria": "Educación",
        "stock": 100,
        "atributos": {"paginas": 320, "idioma": "Español"},
        "fecha_ingreso": datetime.now()
    }
]

# 5. Inserción masiva
resultado = coleccion.insert_many(productos)
print(f"Documentos insertados: {len(resultado.inserted_ids)}")

# 6. Consulta simple: todos los productos
print("\n--- Catálogo completo ---")
for producto in coleccion.find():
    print(f"{producto['codigo']} - {producto['nombre']} - ${producto['precio']}")

# 7. Consulta con filtro: productos con precio mayor a 500000
print("\n--- Productos premium ---")
for producto in coleccion.find({"precio": {"$gt": 500000}}):
    print(f"{producto['nombre']} cuesta ${producto['precio']}")

# 8. Actualizar stock de un producto específico
coleccion.update_one(
    {"codigo": "P001"},
    {"$inc": {"stock": -1}}  # Disminuye stock en 1 (simula venta)
)

# 9. Agregación: contar productos por categoría
print("\n--- Productos por categoría ---")
pipeline = [
    {"$group": {"_id": "$categoria", "total": {"$sum": 1}}}
]
for grupo in coleccion.aggregate(pipeline):
    print(f"{grupo['_id']}: {grupo['total']} productos")

# 10. Cierre de la conexión
cliente.close()
print("\nPráctica finalizada con éxito.")
```

<!--
Notas del presentador:
Recorrer el código línea por línea explicando: la conexión al cliente Mongo, la creación implícita de base de datos y colección, la naturaleza de documento JSON flexible donde cada producto puede tener atributos distintos sin romper el esquema, y las operaciones CRUD básicas más una agregación simple. Insistir en que esto es lo que diferencia una base de documentos de una relacional: campos variables sin penalización.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar y producto esperado

::content::
Pasos para probar:

1. Guardar el código como practica_bigdata_semana2.py.
2. Abrir PowerShell en la carpeta del archivo.
3. Ejecutar: python practica_bigdata_semana2.py.
4. Verificar la salida en consola.
5. Abrir MongoDB Compass, conectar a localhost y revisar la base tienda_bigdata, colección productos.

Producto esperado:

- Tres documentos visibles en MongoDB Compass.
- Consola con catálogo, productos premium y conteo por categoría.
- Captura de pantalla de la colección desde Compass para entregar.

<!--
Notas del presentador:
Solicitar que cada estudiante o equipo entregue la captura de pantalla como evidencia. Si la conexión a localhost falla, revisar que el servicio de MongoDB esté activo. Si pymongo no se reconoce, verificar la instalación con pip show pymongo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis

::content::
Reflexione y discuta con su equipo:

1. ¿Por qué fue posible insertar productos con atributos diferentes sin definir un esquema previo?
2. ¿Qué ventajas y qué riesgos tiene esa flexibilidad?
3. Si la tienda creciera a 50 millones de productos, ¿qué adaptaciones necesitaría esta base de datos?
4. ¿En qué casos preferiría una base relacional sobre MongoDB?
5. ¿Cómo se aplicaría la consistencia eventual si MongoDB estuviera replicada en varios servidores?

<!--
Notas del presentador:
Estas preguntas integran teoría y práctica. Conducen al estudiante a un análisis crítico y no solo descriptivo. Tomar nota de las respuestas más interesantes para retroalimentación durante la socialización.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
Tiempo: 7 minutos.

Dinámica:

- Dos o tres equipos comparten una respuesta clave a las preguntas de análisis.
- Cada equipo dispone de 90 segundos.
- El docente cierra con una síntesis articulando teoría, práctica y evaluación.

Objetivo: consolidar el aprendizaje colectivo y detectar vacíos antes del cierre.

<!--
Notas del presentador:
Moderar la socialización con firmeza para respetar el tiempo. Hacer preguntas dirigidas a equipos que no participaron en la actividad de integración inicial, garantizando equidad en la participación. Cerrar con una frase síntesis del ecosistema Big Data.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Encuesta de Percepción Estudiantil.

- Su retroalimentación es fundamental para la mejora continua del curso.
- Diligencie la encuesta dentro de las fechas habilitadas en el aula virtual.
- Sus respuestas son anónimas y confidenciales.
- Solo toma unos minutos completarla.

Gracias por su participación honesta y reflexiva.

<!--
Notas del presentador:
Hacer un recordatorio formal pero cercano. Indicar fecha límite y canal de acceso a la encuesta. Resaltar que la calidad de la retroalimentación impacta directamente en los ajustes del curso para semestres futuros.
-->

---
layout: slide-12-cierre
---

::title::
Hasta la próxima semana

::content::
Gracias por su participación activa en la sesión de hoy.

- Repase los conceptos del ecosistema Big Data.
- Termine la práctica si no la completó en clase.
- Resuelva el cuestionario evaluativo en el aula virtual.
- Diligencie la Encuesta de Percepción Estudiantil.

Nos encontramos en la Semana 3 para seguir explorando el universo de los datos masivos.

<!--
Notas del presentador:
Cierre cálido y profesional. Agradecer la atención y reforzar los compromisos académicos. Despedir la sesión con energía positiva, dejando claro que el curso avanza progresivamente y que cada semana suma piezas al rompecabezas del Big Data.
-->