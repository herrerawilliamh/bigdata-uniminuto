---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 4

::date::
Mayo 27 de 2026

<!--
Notas del presentador:
Dé la bienvenida al grupo y explique que esta Open Class se centra en comprender cómo las plataformas de procesamiento de datos permiten transformar grandes volúmenes de información en conocimiento útil para la toma de decisiones. Insista en que la sesión no busca memorizar nombres de herramientas, sino comprender qué problema resuelve cada una: almacenamiento, procesamiento distribuido, consulta, búsqueda, aprendizaje automático, coordinación de recursos y analítica empresarial.
-->

---
layout: slide-02-titulo
---

::title::
Plataformas de procesamiento

<!--
Notas del presentador:
Presente la idea central de la semana: las organizaciones no solo almacenan datos, sino que requieren plataformas capaces de procesarlos, consultarlos, analizarlos y convertirlos en acciones. Conecte esta idea con contextos cercanos para estudiantes de pregrado: comercio electrónico, salud, banca, industria, educación, manufactura, logística y ciudades inteligentes.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Contextualización

::image:: 
<img src="/imagenes/ecosistema_bigdata.png" alt="Imagen de apoyo sobre plataformas de procesamiento de datos en Big Data" />

::content::
En Big Data, el reto no consiste únicamente en tener muchos datos.

El verdadero desafío es lograr que esos datos puedan ser:

* almacenados de forma escalable;
* procesados de manera distribuida;
* consultados con rapidez;
* analizados con modelos inteligentes;
* protegidos, gobernados y usados éticamente;
* convertidos en decisiones oportunas.

<!--
Notas del presentador:
Explique que una organización puede tener datos de ventas, sensores, transacciones, logs, redes sociales, historias clínicas, inventarios o procesos industriales. Sin plataformas adecuadas, esos datos permanecen fragmentados. Las plataformas de Big Data permiten integrar, procesar y analizar datos para responder preguntas estratégicas: qué está ocurriendo, por qué ocurre, qué podría pasar y qué acción conviene tomar.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad corta de integración — ¿Qué plataforma usarías?

::content::
**Duración:** 10 a 15 minutos.

**Dinámica:** clasificación rápida de casos.

El docente presenta cinco situaciones y cada estudiante propone qué tipo de plataforma sería más adecuada:

* Procesar millones de registros históricos de ventas.
* Consultar datos almacenados en Hadoop usando un lenguaje similar a SQL.
* Buscar documentos y registros en tiempo casi real.
* Replicar datos entre varios nodos para evitar un único punto de falla.
* Entrenar un modelo de aprendizaje automático.

<!--
Notas del presentador:
Solicite respuestas rápidas por participación oral, chat, formulario breve o tablero colaborativo. No se busca una respuesta perfecta al inicio, sino diagnosticar saberes previos. Después de escuchar algunas respuestas, conecte cada caso con las herramientas de la semana: Spark, Hive, Elasticsearch, Cassandra, TensorFlow o MLlib. Esta actividad prepara el terreno para el desarrollo conceptual.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ecosistema Big Data: una mirada integrada

::content::
Un ecosistema Big Data combina varias capas:

* **Fuentes de datos:** sensores, aplicaciones, transacciones, logs, redes sociales, archivos.
* **Ingesta:** entrada y captura de datos.
* **Almacenamiento:** sistemas distribuidos, Data Lake, bases NoSQL.
* **Procesamiento:** motores por lotes, en memoria o en tiempo real.
* **Consulta y búsqueda:** SQL, HiveQL, DSL, APIs.
* **Analítica:** visualización, machine learning, inteligencia artificial.
* **Gobierno:** seguridad, calidad, linaje, auditoría y cumplimiento.

<!--
Notas del presentador:
Explique que Big Data no es una sola herramienta. Es una arquitectura en la que múltiples componentes trabajan juntos. Una plataforma puede ser excelente para almacenamiento, pero no para machine learning; otra puede ser ideal para búsqueda, pero no para coordinación de recursos. El criterio profesional consiste en elegir y combinar tecnologías según el problema.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Procesamiento distribuido

::image:: 
<img src="/imagenes/procesamiento_distribuido.png" alt="Imagen de apoyo sobre procesamiento distribuido en varios nodos" />

::content::
El procesamiento distribuido divide una tarea grande en partes más pequeñas que se ejecutan en varios nodos o recursos computacionales.

Permite:

* reducir tiempos de procesamiento;
* trabajar con volúmenes superiores a una sola máquina;
* aprovechar múltiples núcleos o servidores;
* tolerar fallos parciales;
* escalar según la necesidad de negocio.

<!--
Notas del presentador:
Utilice una analogía: revisar un millón de registros entre una sola persona y un equipo coordinado. El procesamiento distribuido reparte el trabajo, combina resultados y permite responder más rápido. Conecte esta idea con Spark y Hadoop. Apache Spark se presenta oficialmente como un motor multilenguaje para ingeniería de datos, ciencia de datos y machine learning en una máquina o en clústeres. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Procesamiento por lotes y procesamiento en tiempo real

::left::
**Procesamiento por lotes**

* Trabaja con datos acumulados.
* Se ejecuta en ventanas programadas.
* Es útil para reportes, cierres, auditorías y análisis histórico.
* Ejemplo: analizar ventas del mes.

::right::
**Procesamiento en tiempo real o streaming**

* Trabaja con eventos que llegan continuamente.
* Busca respuestas rápidas.
* Es útil para alertas, monitoreo, fraude o sensores.
* Ejemplo: detectar una anomalía mientras ocurre.

<!--
Notas del presentador:
Aclare que muchas organizaciones necesitan ambos enfoques. El procesamiento por lotes permite profundidad histórica, mientras que el streaming permite reacción oportuna. Spark dispone de capacidades para procesamiento por lotes y streaming; su documentación describe Structured Streaming y Spark Streaming como opciones para procesar flujos de datos. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-08-titulo-texto
---

::title::
Apache Spark: procesamiento rápido y en memoria

::content::
Apache Spark es un motor de procesamiento de datos a gran escala que permite trabajar con datos por lotes, consultas SQL, streaming, machine learning y grafos.

Una de sus ventajas principales es el procesamiento en memoria, lo que puede mejorar el rendimiento frente a sistemas que dependen principalmente de lectura y escritura constante en disco.

En la evaluación de la semana, esta idea se relaciona con la ventaja de Spark: **realizar procesamiento de datos en memoria**.

<!--
Notas del presentador:
Explique que Spark se hizo muy relevante porque unifica varias necesidades: análisis de datos, procesamiento distribuido, consultas SQL, streaming y machine learning. La documentación oficial lo describe como un motor unificado con APIs en varios lenguajes y herramientas como Spark SQL, MLlib, GraphX y Structured Streaming. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-08-titulo-texto
---

::title::
MLlib: machine learning dentro de Spark

::content::
MLlib es la biblioteca de Apache Spark orientada al aprendizaje automático.

Permite construir flujos de trabajo de machine learning usando datos distribuidos y se relaciona con tareas como:

* clasificación;
* regresión;
* agrupamiento;
* recomendación;
* extracción de características;
* construcción de pipelines de entrenamiento.

En la evaluación, MLlib corresponde a una de las librerías principales de Spark para machine learning.

<!--
Notas del presentador:
Indique que MLlib no reemplaza toda la ciencia de datos, pero permite llevar modelos a contextos donde los datos son grandes y requieren procesamiento distribuido. La documentación oficial de Spark define MLlib como la biblioteca de machine learning de Spark, orientada a hacer el aprendizaje automático práctico, escalable y sencillo. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-08-titulo-texto
---

::title::
TensorFlow: modelos de aprendizaje automático

::content::
TensorFlow es una plataforma de código abierto usada para crear, entrenar y desplegar modelos de machine learning.

En el contexto de Big Data, TensorFlow puede integrarse con flujos de datos para desarrollar modelos predictivos, clasificadores, redes neuronales y soluciones de inteligencia artificial.

En la evaluación, su uso principal corresponde al **desarrollo de modelos de machine learning**.

<!--
Notas del presentador:
Diferencie Spark MLlib y TensorFlow. MLlib se integra al ecosistema Spark para machine learning distribuido clásico y pipelines sobre datos grandes; TensorFlow se asocia con modelos de machine learning y deep learning, especialmente redes neuronales y despliegue en diferentes entornos. La página oficial de TensorFlow indica que facilita la creación de modelos de ML ejecutables en distintos ambientes. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-08-titulo-texto
---

::title::
Hadoop, HDFS, YARN y Hive

::content::
En el ecosistema Hadoop se articulan varias funciones:

* **HDFS:** almacenamiento distribuido.
* **YARN:** coordinación y gestión de recursos del clúster.
* **Hive:** interfaz de consulta similar a SQL mediante HiveQL.
* **MapReduce u otros motores:** procesamiento distribuido.

En la evaluación, YARN se reconoce como la herramienta usada para la coordinación y gestión de recursos en un clúster Hadoop.

<!--
Notas del presentador:
Explique que Hadoop no debe verse como una sola pieza. HDFS almacena, YARN gestiona recursos y Hive facilita consultas tipo SQL. La documentación oficial de Hadoop describe YARN como una arquitectura que separa la gestión de recursos y la planificación o monitoreo de trabajos mediante ResourceManager y ApplicationMaster. :contentReference[oaicite:5]{index=5}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Apache Hive: consulta sobre grandes datos

::left::
**Problema que resuelve**

Muchas organizaciones tienen datos almacenados en Hadoop, pero requieren consultarlos con una lógica cercana a SQL.

Hive permite que perfiles analíticos consulten datos sin escribir procesos distribuidos desde cero.

::right::
**Relación con la evaluación**

El principal objetivo de Apache Hive en un entorno Big Data es proporcionar una interfaz para consultas SQL o similares a SQL sobre grandes conjuntos de datos.

<!--
Notas del presentador:
Aclare que Hive no es simplemente una base de datos relacional tradicional. Su valor está en facilitar consultas analíticas sobre datos distribuidos. Puede explicar que HiveQL acerca el ecosistema Hadoop a usuarios que ya conocen SQL, reduciendo la barrera de entrada para analistas y equipos de negocio.
-->

---
layout: slide-08-titulo-texto
---

::title::
Apache Cassandra: disponibilidad y replicación distribuida

::content::
Apache Cassandra es una base de datos NoSQL distribuida, diseñada para alta disponibilidad, escalabilidad y tolerancia a fallos.

Su arquitectura permite replicar datos en diferentes nodos y ubicaciones, evitando que exista un único punto de falla.

En la evaluación, el modelo asociado es la **consistencia eventual**, entendida como la convergencia progresiva de las réplicas hacia un estado consistente.

<!--
Notas del presentador:
Explique con un ejemplo: si una aplicación global registra datos en diferentes sedes, puede priorizar disponibilidad aunque temporalmente algunas réplicas no estén sincronizadas. Cassandra permite ajustar niveles de consistencia, pero en la pregunta de evaluación la opción esperada se orienta a consistencia eventual. La documentación oficial de Cassandra describe la consistencia eventual como un compromiso para lograr alta disponibilidad, donde las actualizaciones alcanzan eventualmente todas las réplicas. :contentReference[oaicite:6]{index=6}
-->

---
layout: slide-08-titulo-texto
---

::title::
Elasticsearch: búsqueda y análisis en tiempo casi real

::content::
Elasticsearch se usa para indexar, buscar y analizar grandes volúmenes de documentos y registros.

Es común en escenarios como:

* motores de búsqueda internos;
* análisis de logs;
* monitoreo de aplicaciones;
* analítica de seguridad;
* exploración de documentos;
* observabilidad de sistemas.

En la evaluación, Elasticsearch se asocia con bases de datos de **documentos** y con el uso de **Query DSL**.

<!--
Notas del presentador:
Explique que Elasticsearch no debe confundirse con una base de datos relacional. Su fortaleza es la indexación y búsqueda flexible sobre documentos, especialmente en formatos cercanos a JSON. Elastic documenta Query DSL como un lenguaje de consulta estilo JSON para búsquedas, filtros y agregaciones en Elasticsearch. :contentReference[oaicite:7]{index=7}
-->

---
layout: slide-08-titulo-texto
---

::title::
Databricks: analítica colaborativa sobre Spark

::content::
Databricks es una plataforma de análisis unificada basada en Apache Spark.

Su valor frente a un clúster Spark convencional está en ofrecer un entorno gestionado y colaborativo para equipos de datos, ingeniería, ciencia de datos y analítica.

En la evaluación, la ventaja esperada es: **un entorno colaborativo y gestionado para el análisis de datos**.

<!--
Notas del presentador:
Explique que en un clúster Spark convencional el equipo puede necesitar administrar infraestructura, configuración y operación. Databricks busca simplificar la colaboración, la gestión de notebooks, el trabajo sobre Lakehouse y el desarrollo analítico. La documentación de Databricks describe su plataforma como un entorno para que equipos de datos colaboren sobre datos almacenados en Lakehouse. :contentReference[oaicite:8]{index=8}
-->

---
layout: slide-08-titulo-texto
---

::title::
Cloudera: gestión, seguridad y gobierno empresarial

::content::
Cloudera es una plataforma empresarial asociada históricamente al ecosistema Hadoop y a soluciones de datos a escala.

En entornos corporativos, su valor se relaciona con:

* administración de servicios;
* seguridad;
* gobierno de datos;
* monitoreo;
* integración de componentes;
* operación de plataformas híbridas.

En la evaluación, la opción correcta se orienta a que Cloudera **incluye herramientas para la gestión y seguridad**.

<!--
Notas del presentador:
Enfatice que en ambientes empresariales no basta con procesar datos. También se requiere seguridad, cumplimiento, control de accesos, auditoría y trazabilidad. Cloudera documenta SDX como una capa de seguridad y gobierno que articula tecnologías sobre metadatos y contexto persistente. :contentReference[oaicite:9]{index=9}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Mapa conceptual de la semana

::left::

* Cassandra: consistencia eventual.
* TensorFlow: modelos de machine learning.
* Databricks: entorno colaborativo y gestionado.
* Elasticsearch: Query DSL.
* Hadoop: YARN gestiona recursos.
* Spark: procesamiento en memoria.

::right::

* Hive: interfaz de consulta tipo SQL.
* Spark MLlib: machine learning en Spark.
* Elasticsearch: base de datos orientada a documentos.
* Cloudera: gestión, seguridad y gobierno.
* La clave es asociar herramienta, problema y propósito.

<!--
Notas del presentador:
Presente este mapa como una guía de estudio, no como memorización aislada. Pida al grupo que explique cada relación con una frase. Por ejemplo: “YARN coordina recursos porque un clúster necesita decidir qué aplicación usa memoria y CPU”; “Query DSL es importante porque Elasticsearch necesita consultas flexibles sobre documentos”.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Ejemplo aplicado 1 — Salud

::image:: 
<img src="/imagenes/datos_salud.png" alt="Imagen de apoyo sobre análisis de datos en salud" />

::content::
Una red de clínicas puede integrar datos de citas, signos vitales, resultados de laboratorio y ocupación hospitalaria.

Posibles usos:

* detectar saturación de servicios;
* priorizar pacientes con alertas tempranas;
* consultar historiales clínicos anonimizados;
* analizar patrones de demanda;
* entrenar modelos predictivos de riesgo.

<!--
Notas del presentador:
Use este ejemplo para mostrar cómo conviven varias tecnologías. Spark puede procesar grandes volúmenes; Elasticsearch puede facilitar búsquedas rápidas; TensorFlow puede apoyar modelos predictivos; Cloudera o plataformas empresariales pueden fortalecer gobierno, seguridad y auditoría.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Ejemplo aplicado 2 — Finanzas

::image:: 
<img src="/imagenes/datos_finanzas.png" alt="Imagen de apoyo sobre procesamiento de datos financieros" />

::content::
Una entidad financiera puede analizar millones de transacciones para identificar patrones de riesgo.

Posibles usos:

* detección de fraude;
* segmentación de clientes;
* monitoreo de operaciones en tiempo casi real;
* consulta histórica de transacciones;
* análisis de logs de seguridad;
* modelos de recomendación.

<!--
Notas del presentador:
Explique que en finanzas el tiempo de respuesta es crítico. Algunas tareas se ejecutan por lotes, como reportes regulatorios; otras requieren reacción rápida, como detección de fraude. Esta diferencia ayuda a comprender batch y streaming.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Ejemplo aplicado 3 — Manufactura

::image:: 
<img src="/imagenes/datos_manufactura.png" alt="Imagen de apoyo sobre Big Data en manufactura inteligente" />

::content::
Una planta industrial puede recibir datos de sensores, máquinas, inventarios y calidad.

Posibles usos:

* mantenimiento predictivo;
* detección de fallas;
* control de calidad;
* optimización energética;
* trazabilidad de producción;
* alertas operativas.

<!--
Notas del presentador:
Conecte este ejemplo con Industria 4.0 e IoT. Los sensores generan datos constantes; una plataforma Big Data permite procesar esos datos, detectar anomalías y tomar decisiones operativas. Esto vincula el curso con automatización, analítica, ingeniería y administración.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Apache Spark en 5 minutos

::media::

<iframe src="https://www.youtube.com/embed/1F2kNxKsuzw" allowfullscreen></iframe>

<!--
Notas del presentador:
Título sugerido: “APACHE SPARK, conceptos clave en 5 minutos”.

Propósito pedagógico: introducir de manera breve el papel de Spark como motor de procesamiento de datos.

Momento recomendado: después de explicar procesamiento distribuido y antes de la práctica.

Duración aproximada: alrededor de 5 minutos, según el título del recurso consultado.

Justificación académica: permite reforzar visualmente los conceptos de procesamiento distribuido, rapidez, escalabilidad y análisis de datos en contextos de ingeniería de datos.
-->

---
layout: slide-02-titulo
---

::title::
Procesamiento Python y PySpark

<!--
Notas del presentador:
Transite hacia la práctica indicando que se usará PySpark en modo local para simular una lógica de procesamiento distribuido. La idea no es montar un clúster real, sino comprender cómo se estructura una sesión Spark, cómo se cargan datos, cómo se agregan registros y cómo se obtiene información útil para decisiones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Mini plataforma de análisis de telemetría organizacional con PySpark.

::content::

**Propósito:** simular el procesamiento de eventos de una organización que recibe datos de diferentes sedes, calcula indicadores agregados y genera alertas básicas.

**Competencia aplicada:** interpretar cómo una plataforma de procesamiento de datos transforma registros dispersos en información útil para decisiones operativas.

<!--
Notas del presentador:
Explique que los datos simulados representan eventos de una organización: sede, región, canal, monto, latencia, estado de error y tiempo del evento. Con PySpark se calcularán agregaciones por región y canal, tasas de error y alertas. Este ejercicio permite conectar Spark con procesamiento de datos sin requerir infraestructura empresarial.
-->

---
layout: slide-08-titulo-texto
---

::title::
Componentes necesarios

::content::
Para Windows 11 Pro:

* Equipo con Windows 11 Pro.
* Conexión a internet para instalar paquetes.
* Python 3.10 o superior.
* Java JDK instalado.
* Terminal de Windows o PowerShell.
* Editor de código: Visual Studio Code, Notepad++ o similar.
* Paquete PySpark instalado con `pip`.
* Carpeta de trabajo local para guardar el script y las salidas.

<!--
Notas del presentador:
Indique que PySpark puede instalarse con pip para uso local o como cliente de conexión a un clúster. La documentación oficial de PySpark incluye instalación mediante pip y señala soporte para Python 3.10 o superior. :contentReference[oaicite:10]{index=10}
-->

---
layout: slide-08-titulo-texto
---

::title::
Instalación en Windows 11 Pro

::content::
Ejecute estos pasos en PowerShell:

```powershell
python --version
java -version

mkdir C:\bigdata_semana4
cd C:\bigdata_semana4

python -m venv .venv
.\.venv\Scripts\activate

python -m pip install --upgrade pip
pip install pyspark pandas
```

Verificación básica:

```powershell
python -c "import pyspark; print('PySpark instalado correctamente')"
```

<!--
Notas del presentador:
Acompañe al grupo verificando primero Python y Java. Si Java no aparece, se debe instalar un JDK antes de ejecutar Spark. Enfatice que para esta práctica no se instalará Hadoop ni un clúster; PySpark se ejecutará localmente usando todos los núcleos disponibles del equipo mediante local[*]. La guía oficial de Spark indica que, si PySpark está instalado con pip, una aplicación puede ejecutarse con el intérprete regular de Python. :contentReference[oaicite:11]{index=11}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Conexiones sugeridas de la práctica

::left::
**Conexión lógica**

- Python crea datos simulados de eventos organizacionales.
- PySpark recibe los datos en un DataFrame.
- Spark procesa y agrega la información.
- La consola muestra resultados y alertas.

::right::
**Flujo de datos**

Eventos simulados
→ DataFrame Spark
→ limpieza y tipado
→ agregaciones por región
→ alertas operativas
→ archivos CSV de salida

<!--
Notas del presentador:
Aclare que no hay conexiones electrónicas físicas. La palabra “conexiones” se entiende aquí como conexiones lógicas entre componentes de software. Este flujo representa una versión simplificada de lo que en una arquitectura real podría conectar sensores, aplicaciones, colas de mensajes, motores de procesamiento y tableros de visualización.
-->

---
layout: slide-codigo
---

::title::
Código completo — bigdata_semana4_pyspark.py

::content::

```python {lines:true}
# bigdata_semana4_pyspark.py
# Práctica guiada — Semana 4 Big Data
# Mini plataforma local de análisis de telemetría organizacional con PySpark

import os
import random
from datetime import datetime, timedelta

from pyspark.sql import SparkSession
from pyspark.sql.functions import (
    avg,
    col,
    count,
    current_timestamp,
    lit,
    round,
    sum as spark_sum,
    to_timestamp,
    when,
    window,
)
from pyspark.sql.types import (
    StructType,
    StructField,
    StringType,
    IntegerType,
    DoubleType,
)


def crear_spark_session():
    """
    Crea una sesión local de Spark.
    local[*] usa todos los núcleos disponibles del equipo.
    """
    spark = (
        SparkSession.builder
        .appName("BigDataSemana4Telemetria")
        .master("local[*]")
        .config("spark.sql.shuffle.partitions", "4")
        .getOrCreate()
    )
    spark.sparkContext.setLogLevel("ERROR")
    return spark


def generar_eventos(cantidad=120):
    """
    Genera eventos simulados de una organización.
    Cada evento representa una transacción, lectura o interacción digital.
    """
    regiones = ["Centro", "Norte", "Sur", "Oriente", "Occidente"]
    canales = ["web", "app", "punto_fisico", "api"]
    servicios = ["ventas", "soporte", "inventario", "pagos", "logistica"]

    ahora = datetime.now()
    eventos = []

    for i in range(cantidad):
        region = random.choice(regiones)
        canal = random.choice(canales)
        servicio = random.choice(servicios)

        # Simula valores de operación
        registros = random.randint(1, 600)
        monto = round(random.uniform(20_000, 2_500_000), 2)
        latencia_ms = random.randint(80, 4500)

        # Mayor latencia implica mayor probabilidad de error
        prob_error = 0.05
        if latencia_ms > 2500:
            prob_error = 0.22
        if servicio == "pagos" and latencia_ms > 2000:
            prob_error = 0.30

        error = 1 if random.random() < prob_error else 0

        tiempo_evento = ahora - timedelta(minutes=random.randint(0, 59))

        eventos.append(
            (
                f"evt_{i+1:04d}",
                tiempo_evento.strftime("%Y-%m-%d %H:%M:%S"),
                region,
                canal,
                servicio,
                registros,
                monto,
                latencia_ms,
                error,
            )
        )

    return eventos


def construir_dataframe(spark, eventos):
    """
    Convierte los eventos simulados en un DataFrame de Spark con esquema definido.
    """
    esquema = StructType(
        [
            StructField("id_evento", StringType(), False),
            StructField("fecha_hora", StringType(), False),
            StructField("region", StringType(), False),
            StructField("canal", StringType(), False),
            StructField("servicio", StringType(), False),
            StructField("registros", IntegerType(), False),
            StructField("monto", DoubleType(), False),
            StructField("latencia_ms", IntegerType(), False),
            StructField("error", IntegerType(), False),
        ]
    )

    df = spark.createDataFrame(eventos, schema=esquema)

    df = (
        df.withColumn("event_time", to_timestamp(col("fecha_hora")))
        .withColumn(
            "estado_operativo",
            when((col("error") == 1) | (col("latencia_ms") > 3000), "ALERTA")
            .when(col("latencia_ms") > 1800, "PRECAUCION")
            .otherwise("NORMAL"),
        )
        .withColumn("procesado_en", current_timestamp())
    )

    return df


def analizar_eventos(df):
    """
    Ejecuta análisis básicos:
    - volumen por región;
    - promedio de latencia;
    - monto total;
    - tasa de error;
    - conteo de alertas.
    """
    resumen_region = (
        df.groupBy("region")
        .agg(
            spark_sum("registros").alias("total_registros"),
            round(spark_sum("monto"), 2).alias("monto_total"),
            round(avg("latencia_ms"), 2).alias("latencia_promedio_ms"),
            round(avg("error") * 100, 2).alias("tasa_error_porcentaje"),
            count("*").alias("eventos"),
        )
        .orderBy(col("tasa_error_porcentaje").desc(), col("latencia_promedio_ms").desc())
    )

    resumen_canal = (
        df.groupBy("canal")
        .agg(
            count("*").alias("eventos"),
            spark_sum("registros").alias("total_registros"),
            round(avg("latencia_ms"), 2).alias("latencia_promedio_ms"),
        )
        .orderBy(col("eventos").desc())
    )

    alertas = (
        df.filter(col("estado_operativo") == "ALERTA")
        .select(
            "id_evento",
            "fecha_hora",
            "region",
            "canal",
            "servicio",
            "latencia_ms",
            "error",
            "estado_operativo",
        )
        .orderBy(col("latencia_ms").desc())
    )

    ventanas_tiempo = (
        df.groupBy(window(col("event_time"), "15 minutes"), "servicio")
        .agg(
            count("*").alias("eventos"),
            spark_sum("registros").alias("registros_procesados"),
            round(avg("latencia_ms"), 2).alias("latencia_promedio_ms"),
        )
        .orderBy("window", "servicio")
    )

    return resumen_region, resumen_canal, alertas, ventanas_tiempo


def guardar_resultados(resumen_region, resumen_canal, alertas, ventanas_tiempo):
    """
    Guarda resultados en carpetas CSV.
    Spark escribe cada salida como una carpeta con archivos part.
    """
    salida_base = "salidas_bigdata_semana4"
    os.makedirs(salida_base, exist_ok=True)

    resumen_region.coalesce(1).write.mode("overwrite").option("header", True).csv(
        os.path.join(salida_base, "resumen_region")
    )
    resumen_canal.coalesce(1).write.mode("overwrite").option("header", True).csv(
        os.path.join(salida_base, "resumen_canal")
    )
    alertas.coalesce(1).write.mode("overwrite").option("header", True).csv(
        os.path.join(salida_base, "alertas")
    )
    ventanas_tiempo.coalesce(1).write.mode("overwrite").option("header", True).csv(
        os.path.join(salida_base, "ventanas_tiempo")
    )


def main():
    spark = crear_spark_session()

    print("\n=== Mini plataforma local de Big Data con PySpark ===")
    print("Generando eventos simulados...\n")

    eventos = generar_eventos(cantidad=180)
    df = construir_dataframe(spark, eventos)

    print("Muestra de eventos procesados:")
    df.select(
        "id_evento",
        "fecha_hora",
        "region",
        "canal",
        "servicio",
        "registros",
        "monto",
        "latencia_ms",
        "error",
        "estado_operativo",
    ).show(10, truncate=False)

    resumen_region, resumen_canal, alertas, ventanas_tiempo = analizar_eventos(df)

    print("\n=== Resumen por región ===")
    resumen_region.show(truncate=False)

    print("\n=== Resumen por canal ===")
    resumen_canal.show(truncate=False)

    print("\n=== Alertas operativas detectadas ===")
    alertas.show(20, truncate=False)

    print("\n=== Ventanas de tiempo de 15 minutos por servicio ===")
    ventanas_tiempo.show(30, truncate=False)

    guardar_resultados(resumen_region, resumen_canal, alertas, ventanas_tiempo)

    print("\nResultados guardados en la carpeta: salidas_bigdata_semana4")
    print("Revise los archivos CSV generados para evidenciar el producto de la práctica.\n")

    spark.stop()


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
Este código es completo y puede copiarse en un archivo llamado bigdata_semana4_pyspark.py. Explique cada bloque de forma general: creación de sesión Spark, generación de eventos simulados, construcción del DataFrame, análisis agregado, detección de alertas y exportación de resultados. No es necesario explicar cada línea; concentre la atención en el flujo de datos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::

1. Crear la carpeta `C:\bigdata_semana4`.
2. Crear y activar el entorno virtual.
3. Instalar `pyspark` y `pandas`.
4. Crear el archivo `bigdata_semana4_pyspark.py`.
5. Copiar el código completo.
6. Ejecutar:

```powershell
python bigdata_semana4_pyspark.py
```

7. Revisar la consola.
8. Abrir la carpeta `salidas_bigdata_semana4`.
9. Identificar los archivos CSV generados.

<!--
Notas del presentador:
Durante la ejecución, algunos equipos pueden tardar un poco en iniciar la sesión Spark. Si aparece un error de Java, verifique la instalación del JDK y la variable PATH. Si aparece un bloqueo por permisos, sugiera ejecutar la terminal como usuario con permisos o usar una carpeta dentro del perfil del usuario.
-->

---
layout: slide-08-titulo-texto
---

::title::
Producto esperado

::content::
Al finalizar la práctica, se debe evidenciar:

* ejecución del script en consola;
* muestra de eventos procesados;
* resumen por región;
* resumen por canal;
* listado de alertas operativas;
* análisis por ventanas de tiempo;
* carpeta de salida con archivos CSV;
* interpretación breve de los hallazgos.

<!--
Notas del presentador:
Explique que el producto no es únicamente el código ejecutado. El resultado central es la interpretación. El estudiante debe poder decir qué región presenta mayor tasa de error, qué canal concentra más eventos, qué servicios tienen latencia alta y qué decisiones podría tomar una organización con esa información.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Preguntas de análisis de la práctica

::left::

* ¿Qué región presenta mayor tasa de error?
* ¿Qué canal concentra más eventos?
* ¿Qué servicio tiene mayor latencia promedio?
* ¿Qué alertas podrían priorizarse?
* ¿Qué dato sería útil agregar al modelo?

::right::

* ¿Qué parte del ejercicio representa procesamiento distribuido?
* ¿Qué cambiaría si los datos llegaran en tiempo real?
* ¿Qué herramienta usaría para buscar eventos específicos?
* ¿Qué herramienta usaría para entrenar un modelo predictivo?
* ¿Qué riesgos de seguridad aparecen en este flujo?

<!--
Notas del presentador:
Use estas preguntas para orientar la socialización. Pida respuestas breves y conecte cada respuesta con una herramienta: Spark para procesamiento, Elasticsearch para búsqueda, TensorFlow o MLlib para modelos, Cloudera para gobierno y seguridad, Cassandra para disponibilidad distribuida.
-->

---
layout: slide-08-titulo-texto
---

::title::
Relación entre la práctica y las plataformas de la semana

::content::
La práctica se concentra en Spark mediante PySpark, pero permite comprender el ecosistema completo:

* Spark procesa y agrega datos.
* Hive podría facilitar consultas tipo SQL sobre datos históricos.
* Elasticsearch permitiría buscar eventos y logs.
* Cassandra podría replicar datos operativos entre nodos.
* TensorFlow o MLlib podrían entrenar modelos predictivos.
* Cloudera o Databricks podrían gestionar ambientes empresariales.
* YARN podría coordinar recursos en un clúster Hadoop.

<!--
Notas del presentador:
Explique que un caso real puede integrar varias herramientas. Por ejemplo, una empresa puede recibir eventos, almacenarlos, procesarlos, consultarlos, visualizarlos, buscar incidentes y entrenar modelos. La práctica simplifica ese recorrido, pero la lógica general es la misma.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Socialización breve

::rightTitle::
Criterios de participación

::left::
Cada grupo o estudiante comparte:

* un hallazgo del resumen por región;
* una alerta relevante;
* una decisión que tomaría la organización;
* una herramienta adicional que integraría.

::right::
La intervención debe ser:

* breve;
* sustentada en datos;
* conectada con una plataforma;
* orientada a una decisión;
* respetuosa de las respuestas del grupo.

<!--
Notas del presentador:
Asigne entre cinco y siete minutos para socialización. El objetivo es que los estudiantes verbalicen el aprendizaje, no que presenten exposiciones extensas. Puede escoger dos o tres intervenciones y pedir al resto del grupo que complemente con una herramienta diferente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::

* diferencias entre herramientas;
* relación con la evaluación;
* instalación de PySpark;
* interpretación de resultados;
* errores comunes de ejecución;
* uso de plataformas Big Data en escenarios reales.

**Tiempo máximo sugerido:** 15 minutos.

<!--
Notas del presentador:
Organice las dudas por categorías para no dispersar la sesión. Si una duda es muy técnica y excede el tiempo, proponga revisarla como profundización posterior o recurso complementario. Mantenga el cierre dentro del tiempo total de 90 minutos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Síntesis académica

::content::
Las plataformas de Big Data permiten que las organizaciones pasen de acumular datos a generar conocimiento accionable.

La clave no está en usar todas las herramientas, sino en seleccionar la plataforma adecuada según el problema:

* almacenar;
* procesar;
* consultar;
* buscar;
* coordinar recursos;
* entrenar modelos;
* gobernar y proteger datos.

<!--
Notas del presentador:
Cierre el componente académico retomando la idea inicial. Una organización madura en datos no se define por tener muchos sistemas, sino por articularlos con propósito. El estudiante debe terminar la sesión con una lectura más clara del ecosistema: cada herramienta tiene una función y una razón de ser.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, se recuerda la importancia de diligenciar la **Encuesta de Percepción Estudiantil**.

Este instrumento permite reconocer fortalezas, identificar oportunidades de mejora y fortalecer la calidad del proceso formativo.

La participación responsable contribuye al mejoramiento continuo del curso y de la experiencia académica.

<!--
Notas del presentador:
Haga el recordatorio de manera clara y respetuosa. Explique que la encuesta es un mecanismo institucional para escuchar la voz estudiantil y mejorar la experiencia de aprendizaje. Si corresponde, indique dónde se encuentra disponible la encuesta dentro del aula virtual o plataforma institucional.
-->

---
layout: slide-12-cierre
---

::title::
Cierre de la sesión

::content::
Hoy analizamos cómo las plataformas de Big Data permiten procesar, consultar, buscar, modelar y gobernar datos a escala.

El reto profesional consiste en convertir los datos en decisiones responsables, oportunas y sustentadas.

**Gracias por su participación.**

<!--
Notas del presentador:
Agradezca la participación del grupo y refuerce que el aprendizaje de la semana será útil para comprender arquitecturas de datos modernas. Invite a revisar la evaluación, practicar nuevamente el script y relacionar cada pregunta con el mapa conceptual trabajado.
-->
