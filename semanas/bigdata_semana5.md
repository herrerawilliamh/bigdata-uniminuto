---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 5 

::date::
Junio 06 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la semana 5 del curso y ubicar la sesión dentro del recorrido general de Big Data. Explicar que, después de estudiar almacenamiento, procesamiento distribuido y ecosistemas de datos, esta clase se concentra en una pregunta práctica: ¿cómo procesar datos cuando no llegan como archivos terminados, sino como eventos continuos que deben analizarse casi en tiempo real? Presentar la sesión como un puente entre arquitectura, analítica y toma de decisiones empresariales.
-->

---
layout: slide-02-titulo
---

::title::
Streaming y analítica en tiempo real

<!--
Notas del presentador:
Iniciar la sesión recordando que una Open Class no debe repetir el aula virtual, sino ampliar, conectar y aplicar los conceptos. Señalar que la clase estará orientada a comprender plataformas de streaming, colas de mensajería, integración de datos y una práctica guiada en Python para simular un flujo de eventos en tiempo real.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Del archivo terminado al evento continuo

::image:: 
<img src="/imagenes/bigdata_semana5_batch_vs_streaming.png" alt="Imagen de apoyo sobre transición del procesamiento por lotes al streaming de datos" />

::content::
Durante años, muchas organizaciones analizaron datos cuando ya estaban almacenados en archivos, bases de datos o reportes consolidados.

En streaming, el dato se entiende como un **evento que ocurre en el tiempo**:

<v-clicks animation="fade-in">

* Una compra realizada.
* Una alerta de temperatura.
* Un clic en una plataforma.
* Un movimiento financiero.
* Un mensaje enviado por un sistema.
* Un registro de un sensor IoT.

</v-clicks>

El reto cambia: ya no basta con guardar datos; ahora se requiere **capturarlos, moverlos, procesarlos y reaccionar** con rapidez.

<!--
Notas del presentador:
Explicar con un ejemplo cotidiano: en un modelo por lotes, una empresa revisa las ventas al final del día; en un modelo de streaming, cada venta puede generar una actualización inmediata de inventario, una alerta de fraude o una recomendación personalizada. La documentación oficial de Apache Kafka define el event streaming como la captura de eventos desde fuentes como bases de datos, sensores, dispositivos móviles, servicios en la nube y aplicaciones, para almacenarlos, procesarlos y reaccionar en tiempo real o de forma retrospectiva. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Batch vs. streaming

::left::
**Procesamiento por lotes**

<v-clicks animation="fade-in">

* Trabaja con datos acumulados.
* Se ejecuta en horarios definidos.
* Es útil para informes históricos.
* Tolera mayor latencia.
* Suele procesar archivos o tablas completas.

</v-clicks>

**Ejemplo:** consolidar ventas diarias al finalizar la jornada.

::right::
**Procesamiento en streaming**

<v-clicks animation="fade-in">

* Trabaja con eventos continuos.
* Procesa a medida que los datos llegan.
* Favorece decisiones oportunas.
* Requiere baja latencia.
* Se orienta a alertas, monitoreo y reacción.

</v-clicks>

**Ejemplo:** detectar una transacción sospechosa en el momento en que ocurre.

<!--
Notas del presentador:
Insistir en que batch y streaming no son enemigos. Muchas arquitecturas modernas combinan ambos enfoques. El batch permite análisis profundo, cierre financiero o entrenamiento histórico; el streaming permite monitoreo, alertas y decisiones inmediatas. En contextos empresariales, la elección depende de la necesidad de oportunidad, costo, volumen, criticidad y capacidad técnica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad de integración · ¿archivo, evento o alerta?

::content::
**Duración:** 10 a 15 minutos.

**Propósito:** activar saberes previos y diferenciar situaciones donde conviene usar procesamiento por lotes, streaming o mensajería.

**Instrucciones para estudiantes:**

<v-clicks depth="2" animation="fade-in">

1. El docente presenta varios casos rápidos.
2. Cada estudiante clasifica el caso como:
   * Procesamiento por lotes.
   * Streaming de eventos.
   * Cola de mensajería.
   * Alerta en tiempo real.
3. Se comparten respuestas en voz alta o por chat.
4. El grupo justifica brevemente por qué eligió esa categoría.

</v-clicks>

<!--
Notas del presentador:
La actividad debe ser ágil. No se busca una definición perfecta, sino observar cómo los estudiantes reconocen la naturaleza temporal del dato. Pedir respuestas rápidas y luego contrastarlas. El docente puede usar gestos, chat o participación oral. La clave es llevar a los estudiantes a pensar: ¿el dato ya está acumulado?, ¿el dato llega continuamente?, ¿se requiere desacoplar sistemas?, ¿se necesita una alerta inmediata?
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Casos para clasificar

::rightTitle::
Preguntas detonadoras

::left::

<v-clicks animation="fade-in">

* Reporte mensual de ventas.
* Sensor de temperatura que envía datos cada 3 segundos.
* Confirmación de pago enviada a facturación.
* Alerta por retiro bancario inusual.
* Registro de clics en una tienda virtual.
* Carga nocturna de archivos CSV.
* Pedido de comercio electrónico enviado a bodega.
* Dashboard operativo actualizado cada minuto.

</v-clicks>

::right::

<v-clicks animation="fade-in">

* ¿El dato ya está consolidado o está ocurriendo?
* ¿La decisión puede esperar?
* ¿Se requiere orden de mensajes?
* ¿Se necesita desacoplar productores y consumidores?
* ¿Conviene almacenar el historial de eventos?
* ¿Hay múltiples sistemas interesados en el mismo evento?
* ¿Qué pasa si un consumidor está temporalmente caído?
* ¿El objetivo es informar, alertar o automatizar?

</v-clicks>

<!--
Notas del presentador:
Guiar la discusión hacia la diferencia entre mover datos y procesar datos. Una cola de mensajería puede ser útil cuando un sistema no debe depender directamente de la disponibilidad de otro. Un stream es útil cuando los eventos forman una secuencia continua que puede ser consumida por varios sistemas. Una alerta surge cuando el análisis del evento exige una acción inmediata.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Términos clave de la semana

::image:: 
<img src="/imagenes/bigdata_semana5_kafka_particiones.png" alt="Imagen de apoyo sobre transición del procesamiento por lotes al streaming de datos" />

::content::
<v-clicks animation="fade-in">

**Evento:** hecho registrado en un momento específico.

**Mensaje:** unidad de información enviada entre sistemas.

**Productor:** aplicación que publica eventos o mensajes.

**Broker:** intermediario que recibe, almacena y entrega mensajes.

**Consumidor:** aplicación que lee y procesa mensajes.

**Tópico:** canal lógico donde se publican eventos.

**Partición:** división de un tópico para escalar lectura y escritura.

**Cola:** estructura donde los mensajes esperan ser procesados.

</v-clicks>

<!--
Notas del presentador:
Presentar los términos como vocabulario mínimo para comprender la evaluación. Un evento representa algo que ocurrió; un mensaje es la forma en que ese evento viaja; el productor lo emite; el broker lo organiza; el consumidor lo procesa. El concepto de tópico es central en Kafka y Pulsar; el de cola es central en sistemas como RabbitMQ. En Kafka, los tópicos pueden estar particionados, lo que permite escalar y conservar orden dentro de una partición para eventos con la misma clave. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Arquitectura general de streaming

::image:: 
<img src="/imagenes/bigdata_semana5_pulsar_colas_streams.png" alt="Imagen de apoyo sobre arquitectura productor broker consumidor en streaming de datos" />

::content::
Una arquitectura de streaming suele organizarse como una tubería de eventos:

<v-clicks animation="fade-in">

* **Fuentes:** aplicaciones, sensores, bases de datos, logs, API.
* **Productores:** publican eventos.
* **Broker o plataforma:** recibe, ordena, almacena y distribuye.
* **Consumidores:** procesan, transforman o analizan.
* **Destinos:** dashboards, alertas, data lake, bases analíticas o modelos predictivos.

</v-clicks>

La arquitectura permite que varios sistemas trabajen sin depender directamente unos de otros.

<!--
Notas del presentador:
Explicar que esta arquitectura reduce acoplamiento. Un productor no necesita conocer todos los consumidores; publica eventos en un tópico o cola. Los consumidores pueden leer a su ritmo, procesar, generar alertas o persistir resultados. Esta idea es fundamental para entender por qué las organizaciones adoptan plataformas de mensajería y streaming en ecosistemas de Big Data.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Mensajería y streaming: parecidos, pero no iguales

::left::
**Mensajería**

<v-clicks animation="fade-in">

* Prioriza comunicación entre sistemas.
* Se enfoca en entrega confiable.
* Puede usar colas.
* Suele apoyar procesos asíncronos.
* Útil para desacoplar microservicios.

</v-clicks>

**Ejemplo:** enviar un pedido a inventario, facturación y despacho.

::right::
**Streaming**

<v-clicks animation="fade-in">

* Prioriza flujo continuo de eventos.
* Permite varios consumidores.
* Conserva historial por retención.
* Facilita analítica en tiempo real.
* Útil para monitoreo, alertas y patrones.

</v-clicks>

**Ejemplo:** analizar eventos de navegación para detectar abandono de carrito.

<!--
Notas del presentador:
Aclarar que muchas plataformas modernas combinan capacidades de mensajería y streaming. Apache Pulsar, por ejemplo, se presenta como una plataforma distribuida de mensajería y streaming, y su documentación lo describe como una solución que permite consumir mensajes individualmente o como streams. :contentReference[oaicite:2]{index=2} Esto explica por qué una pregunta de evaluación puede enfatizar que Pulsar soporta tanto colas de mensajes como flujos de datos.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Apache Kafka: plataforma de streaming distribuido

::image:: 
<img src="/imagenes/bigdata_semana5_storm_beam_pipelines.png" alt="Imagen de apoyo sobre Apache Kafka, topics, particiones, productores y consumidores" />

::content::
Apache Kafka es una de las plataformas más reconocidas para construir arquitecturas basadas en eventos.

Ideas centrales:

<v-clicks animation="fade-in">

* Los productores publican eventos en tópicos.
* Los consumidores se suscriben a tópicos.
* Los tópicos pueden dividirse en particiones.
* Los eventos pueden retenerse durante un periodo configurable.
* El orden se garantiza dentro de una partición.
* La replicación favorece tolerancia a fallos.

</v-clicks>

En Big Data, Kafka se usa para ingesta, integración, analítica, monitoreo y transmisión de eventos.

<!--
Notas del presentador:
Conectar Kafka con la evaluación. Cuando se pregunte qué caracteriza a Kafka, la idea central es plataforma distribuida de streaming de eventos. La documentación oficial indica que los tópicos son multi-productor y multi-suscriptor, que los eventos no se eliminan inmediatamente después del consumo y que las particiones permiten escalar lectura y escritura. También señala que Kafka garantiza el orden para eventos leídos dentro de una misma partición. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-04-imagen-derecha
---

::title::
Apache Pulsar: mensajería y streaming en una misma plataforma

::image:: 
<img src="/imagenes/bigdata_semana5_practica_python_streaming.png" alt="Imagen de apoyo sobre Apache Pulsar y su arquitectura de mensajería y streaming" />

::content::
Apache Pulsar combina características de sistemas de colas y plataformas de streaming.

Aspectos clave:

<v-clicks animation="fade-in">

* Modelo publicador-suscriptor.
* Productores publican mensajes en tópicos.
* Consumidores se suscriben y confirman procesamiento.
* Permite consumo individual de mensajes.
* Permite consumo como flujo de eventos.
* Arquitectura orientada a escalabilidad y baja latencia.

</v-clicks>

**Idea para evaluación:** su ventaja diferencial es soportar tanto colas de mensajes como flujos de datos.

<!--
Notas del presentador:
Explicar que Pulsar ayuda a superar una separación tradicional: por un lado, colas de mensajes; por otro, sistemas de streaming. La documentación oficial de Pulsar lo presenta como una plataforma distribuida de mensajería y streaming, construida sobre el patrón publicador-suscriptor, en el que productores publican a tópicos y consumidores procesan mensajes y envían acuses de recibo. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Apache Storm y Apache Beam

::left::
**Apache Storm**

<v-clicks animation="fade-in">

* Procesamiento de flujos en tiempo real.
* Usa topologías.
* Una topología conecta spouts y bolts.
* Los spouts reciben o generan datos.
* Los bolts filtran, transforman, agregan o analizan.
* Está orientado a procesamiento continuo.

</v-clicks>

::right::
**Apache Beam**

<v-clicks animation="fade-in">

* Modelo unificado para batch y streaming.
* Permite definir pipelines.
* Usa abstracciones como PCollection y PTransform.
* Puede ejecutarse con diferentes runners.
* Favorece portabilidad del pipeline.
* Se entiende como programación declarativa de canalizaciones.

</v-clicks>

<!--
Notas del presentador:
Explicar que Storm se asocia con topologías de procesamiento. Una topología en Storm es un grafo de spouts y bolts conectado por agrupamientos de streams; a diferencia de un trabajo MapReduce, puede ejecutarse continuamente. :contentReference[oaicite:5]{index=5} En Beam, el estudiante debe reconocer el modelo de programación basado en pipelines, PCollections y PTransforms; el runner ejecuta el grafo de procesamiento en el backend seleccionado. :contentReference[oaicite:6]{index=6}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Kafka Connect y Apache Flume

::left::
**Kafka Connect**

<v-clicks animation="fade-in">

* Herramienta para integrar Kafka con otros sistemas.
* Usa conectores de origen y destino.
* Facilita mover datos entre bases, archivos, sistemas analíticos y tópicos Kafka.
* Reduce código repetitivo de integración.
* Es clave en arquitecturas de ingesta y sincronización.

</v-clicks>

::right::
**Apache Flume**

<v-clicks animation="fade-in">

* Diseñado para recolectar, agregar y mover grandes volúmenes de datos.
* Usa fuentes, canales y sumideros.
* Puede enviar datos hacia HDFS u otros destinos.
* Incluye conectores como Twitter Source experimental y Kafka Source.
* Históricamente se asocia con ingestión hacia ecosistemas Hadoop.

</v-clicks>

<!--
Notas del presentador:
Diferenciar integración de procesamiento. Kafka Connect conecta sistemas con Kafka; Flume recolecta y transporta datos mediante agentes compuestos por source, channel y sink. La guía oficial de Flume muestra la estructura source-channel-sink y documenta fuentes como Twitter 1% firehose Source experimental y Kafka Source. :contentReference[oaicite:7]{index=7}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
RabbitMQ

::rightTitle::
Apache Cassandra

::left::
RabbitMQ es una tecnología de mensajería.

<v-clicks animation="fade-in">

* Trabaja con colas.
* Permite comunicación asíncrona.
* Usa exchanges para enrutar mensajes.
* Favorece desacoplamiento entre aplicaciones.
* Es útil para tareas de fondo, pedidos, notificaciones y microservicios.

</v-clicks>

::right::
Apache Cassandra no es un sistema de mensajería.

<v-clicks animation="fade-in">

* Es una base de datos NoSQL distribuida.
* Se orienta a escalabilidad y alta disponibilidad.
* Almacena grandes volúmenes de datos.
* No cumple el rol de broker de mensajes.
* Puede ser destino o fuente de datos, pero no cola de mensajería.

</v-clicks>

<!--
Notas del presentador:
Esta diapositiva es clave para evitar una confusión frecuente en evaluación. RabbitMQ sí es una tecnología de mensajería, mientras que Cassandra es una base de datos distribuida NoSQL. RabbitMQ organiza mensajes mediante colas y exchanges; Cassandra se describe oficialmente como una base de datos NoSQL distribuida, de modelo wide-column, diseñada para escalabilidad y disponibilidad. :contentReference[oaicite:8]{index=8}
-->

---
layout: slide-08-titulo-texto
---

::title::
Azure Stream Analytics

::content::
Azure Stream Analytics es una plataforma administrada de Microsoft para analítica en tiempo real.

Permite:

<v-clicks animation="fade-in">

* Procesar flujos de datos en movimiento.
* Analizar eventos de fuentes conectadas.
* Generar salidas hacia reportes, alertas o almacenamiento.
* Construir soluciones de monitoreo sin administrar toda la infraestructura.
* Conectar escenarios de IoT, telemetría, fraude, logs y tableros operativos.

</v-clicks>

**Idea para evaluación:** entre las opciones propuestas, Azure Stream Analytics es la plataforma de streaming desarrollada por Microsoft.

<!--
Notas del presentador:
Aclarar que no todas las herramientas del ecosistema son Apache. Microsoft ofrece Azure Stream Analytics como servicio administrado para analizar y procesar streams rápidos de datos, generar reportes, construir insights o activar alertas y acciones. :contentReference[oaicite:9]{index=9} En la evaluación, esta pista permite diferenciarla de Spark, Samza y Flink.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Ejemplo aplicado: comercio electrónico

::image:: 
<img src="/imagenes/bigdata_semana5_practica_python_streaming2.png" alt="Imagen de apoyo sobre eventos en comercio electrónico y analítica en tiempo real" />

::content::
Una tienda virtual puede producir eventos como:

<v-clicks animation="fade-in">

* Usuario inicia sesión.
* Producto agregado al carrito.
* Pago rechazado.
* Compra confirmada.
* Inventario actualizado.
* Pedido enviado.
* Reclamo creado.

</v-clicks>

Con streaming y mensajería, cada evento puede activar respuestas:

<v-clicks animation="fade-in">

* Actualizar dashboard.
* Enviar notificación.
* Detectar fraude.
* Reservar inventario.
* Generar factura.
* Alimentar un modelo predictivo.

</v-clicks>

<!--
Notas del presentador:
Usar este ejemplo para mostrar el valor empresarial. Un mismo evento puede interesar a varias áreas: ventas, inventario, marketing, soporte, logística y analítica. Si cada sistema se conecta directamente con todos los demás, la arquitectura se vuelve frágil. Un broker o plataforma de streaming centraliza la distribución de eventos y permite consumidores especializados.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Ejemplo aplicado: sensores e IoT

::image:: 
<img src="/imagenes/bigdata_semana5_telemetría-iot.png" alt="Imagen de apoyo sobre sensores IoT enviando telemetría hacia una plataforma de streaming" />

::content::
En un sistema IoT, los dispositivos pueden emitir datos cada pocos segundos:

<v-clicks animation="fade-in">

* Temperatura.
* Humedad.
* Consumo eléctrico.
* Vibración.
* Presencia.
* Ubicación.
* Estado del dispositivo.

</v-clicks>

Una arquitectura de streaming permite:

<v-clicks animation="fade-in">

* Detectar anomalías.
* Generar alertas.
* Alimentar dashboards.
* Guardar histórico.
* Automatizar mantenimiento.
* Prever fallas operativas.

</v-clicks>

<!--
Notas del presentador:
Conectar esta idea con cursos o proyectos de IoT. Un sensor no produce un informe final; produce eventos continuos. El reto consiste en recibirlos, filtrarlos, agregarlos y actuar. Esta lógica se parece a la práctica guiada que se realizará en Python, donde se simulan eventos de ventas y sensores para producir alertas y un archivo de resultados.
-->

---
layout: slide-08-titulo-texto
---

::title::
El ecosistema de streaming y mensajería:
::content::

<v-clicks animation="fade-in">

* Pulsar como plataforma que combina colas de mensajes y flujos de datos.
* Storm como arquitectura basada en topologías de procesamiento.
* Beam como modelo de programación para definir pipelines.
* Kafka Connect como herramienta de integración de datos en tiempo real.
* Cassandra como base de datos distribuida, no como sistema de mensajería.
* Kafka como plataforma distribuida con tópicos, particiones, durabilidad y orden por partición.
* RabbitMQ como cola de mensajería.
* Flume como herramienta de ingestión con conectores de fuentes.

</v-clicks>

<!--
Notas del presentador:
Presentar esta diapositiva como una guía de estudio, no como memorización mecánica. Cada pregunta de la evaluación apunta a distinguir el rol de una tecnología. Recomendar a los estudiantes crear una frase corta por herramienta: Kafka transmite eventos, Pulsar combina mensajería y streaming, Storm usa topologías, Beam define pipelines portables, Kafka Connect integra sistemas, Flume ingiere datos, RabbitMQ gestiona colas y Cassandra almacena datos distribuidos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Claves conceptuales para responder mejor

::left::
**Asociaciones fuertes**

<v-clicks animation="fade-in">

* Kafka → streaming distribuido.
* Pulsar → colas y streams.
* Storm → topologías.
* Beam → pipelines.
* Kafka Connect → integración.
* Flume → ingestión.
* RabbitMQ → cola de mensajería.
* Cassandra → base de datos NoSQL distribuida.

</v-clicks>

::right::
**Distractores frecuentes**

<v-clicks animation="fade-in">

* Confundir base de datos con broker.
* Creer que todo Big Data es batch.
* Pensar que Kafka solo es una cola.
* Asociar Storm con microservicios.
* Confundir Beam con MapReduce.
* Olvidar que Kafka conserva orden dentro de una partición, no necesariamente en todo el sistema.
* Creer que Flume solo trabaja con archivos.

</v-clicks>

<!--
Notas del presentador:
Usar esta diapositiva para preparar la evaluación. Recalcar que las preguntas no solo buscan reconocer nombres, sino comprender categorías. Las tecnologías de Big Data cumplen roles diferentes: almacenamiento, ingestión, mensajería, procesamiento, integración, visualización y analítica. Identificar el rol evita caer en distractores.
-->

---
layout: slide-08-titulo-texto
---

::title::
Respuestas conceptuales orientadoras

::content::
Para estudiar la evaluación, tenga presente:

<v-clicks animation="fade-in">

* Apache Pulsar destaca por soportar tanto colas de mensajes como flujos de datos.
* Apache Storm utiliza topologías de procesamiento.
* Apache Beam permite definir pipelines mediante un modelo declarativo y portable.
* Kafka Connect integra datos en tiempo real con sistemas de almacenamiento y análisis.
* Apache Cassandra no es un sistema de mensajería; es una base de datos NoSQL distribuida.
* Kafka se distingue por durabilidad, particionamiento y procesamiento distribuido de eventos.
* Azure Stream Analytics corresponde a Microsoft.
* RabbitMQ es una cola de mensajería.
* En Apache Flume, Twitter aparece como fuente experimental documentada.

</v-clicks>

<!--
Notas del presentador:
Indicar que estas respuestas deben entenderse con criterio. Por ejemplo, Kafka no debe reducirse a “cola”, porque su fortaleza está en el log distribuido de eventos y en la posibilidad de múltiples consumidores. Beam no es simplemente “paralelismo”, sino un modelo de pipelines. Flume no es solo HDFS; su arquitectura de fuentes, canales y sumideros permite varios patrones de ingestión.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué es el procesamiento de datos en streaming?

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/55ivUqsKETI?si=qTvq8TaHmXvWWVub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
No reproducir videos extensos durante la sesión. Si se usa un video, debe ser breve y servir como disparador conceptual. El docente puede pausar al minuto dos para preguntar: ¿qué cambia cuando el dato llega continuamente? Si no se cuenta con un enlace verificado de menos de cinco minutos, se recomienda dejarlo como recurso para consulta posterior y no consumir tiempo de clase.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Kafka: Qué es y cómo funciona

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/wO6DCLU4uxE?si=RLZRnQIrH_bvcqEC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Enfatizar que el video debe acompañar la explicación, no reemplazarla. Antes de reproducirlo, pedir a los estudiantes que identifiquen cuatro palabras: productor, consumidor, tópico y partición. Después del video, pedir que expliquen esas palabras con un ejemplo de una tienda virtual o un sensor IoT.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
RabbitMQ - Todo lo que debes saber en 4 minutos

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/0EZHnUfqpA4?si=bsxeg6VqW-6sTdzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Relacionar este recurso con la pregunta de evaluación sobre RabbitMQ. Un sistema de colas no es simplemente un lugar donde se guardan datos; es un mecanismo para comunicar componentes distribuidos, organizar trabajo pendiente y evitar que un sistema dependa directamente de la disponibilidad inmediata de otro.
-->

---
layout: slide-02-titulo
---

::title::
Simulación de streaming y mensajería

<!--
Notas del presentador:
Presentar la práctica como una simulación pedagógica. Aclarar que no se instalará Kafka ni RabbitMQ durante la clase para no consumir el tiempo en configuración. En su lugar, se usará Python para representar productor, cola, consumidor, latencia, ventana de análisis y alerta. La lógica permite comprender el comportamiento antes de pasar a plataformas reales.
-->

---
layout: slide-08-titulo-texto
---

::title::
Propósito de la práctica

::content::
**Título:** Simulador de eventos en tiempo real para alertas operativas.

**Propósito:** construir una simulación sencilla donde un productor genera eventos, una cola los almacena temporalmente y un consumidor los procesa para detectar alertas y calcular métricas.

**Resultado esperado:**

<v-clicks animation="fade-in">

* Comprender el flujo productor → cola → consumidor.
* Observar latencia de procesamiento.
* Detectar alertas por reglas simples.
* Generar un archivo CSV con eventos procesados.
* Relacionar la simulación con conceptos como Kafka, RabbitMQ, Pulsar y Storm.

</v-clicks>

<!--
Notas del presentador:
Explicar que esta práctica no pretende reemplazar plataformas reales. Su valor está en hacer visible el patrón general. El productor representa aplicaciones o sensores; la cola representa un broker simplificado; el consumidor representa un proceso de análisis. Las reglas de alerta simulan decisiones empresariales, por ejemplo detectar una compra de alto valor o una temperatura fuera de rango.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios y herramienta

::left::
**Equipo**

<v-clicks animation="fade-in">

* Computador con Windows 11 Pro.
* Acceso a PowerShell o Terminal.
* Permisos para instalar Python si no está disponible.
* Carpeta de trabajo local.

</v-clicks>

**Software libre**

<v-clicks animation="fade-in">

* Python 3.12 o superior.
* Editor de texto: IDLE, Thonny, VS Code o cualquier editor disponible.
* No se requieren librerías externas.

</v-clicks>

::right::
**Archivos de trabajo**

<v-clicks animation="fade-in">

* `streaming_mensajeria.py`
* `stream_resultados.csv`

</v-clicks>

**Conceptos simulados**

<v-clicks animation="fade-in">

* Productor.
* Cola de mensajes.
* Consumidor.
* Evento JSON.
* Latencia.
* Ventana de análisis.
* Alerta.
* Persistencia en CSV.

</v-clicks>

<!--
Notas del presentador:
Aclarar que Python incluye las librerías necesarias: queue, threading, time, random, json, csv, datetime, statistics y collections. No se usará pandas para evitar instalación adicional. Esto reduce barreras técnicas y permite que el estudiante se concentre en el comportamiento del sistema.
-->

---
layout: slide-08-titulo-texto
---

::title::
Instalación y preparación en Windows 11 Pro

::content::

1. Verificar si Python está instalado:

```bash
python --version
```

2. Si no aparece la versión, instalar Python desde el sitio oficial y activar la opción **Add Python to PATH** durante la instalación.

3. Crear una carpeta de trabajo:

```bash
mkdir C:\bigdata_semana5
cd C:\bigdata_semana5
```

4. Crear el archivo:

```bash
notepad streaming_mensajeria.py
```

5. Pegar el código completo de la práctica y guardar.

6. Ejecutar:

```bash
python streaming_mensajeria.py
```

<!--
Notas del presentador:
Guiar a los estudiantes paso a paso. Si algunos ya tienen Python instalado, pedir que acompañen a quienes no lo tienen. La práctica puede ejecutarse desde PowerShell, CMD, Windows Terminal o desde el editor. Recalcar que el archivo CSV se generará en la misma carpeta desde donde se ejecute el script.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Conexiones sugeridas de la práctica

::image:: 
<img src="/imagenes/bigdata_semana5_práctica.png" alt="Imagen de apoyo sobre flujo productor cola consumidor y archivo CSV" />

::content::
La simulación representa esta conexión lógica:

<v-clicks animation="fade-in">

**Fuente de eventos**

Genera ventas, sensores y acciones de usuario.

**Productor**

Convierte cada hecho en un mensaje JSON.

**Cola**

Almacena temporalmente los eventos pendientes.

**Consumidor**

Lee, procesa, calcula métricas y detecta alertas.

**Salida**

Imprime resultados en consola y guarda `stream_resultados.csv`.

</v-clicks>

<!--
Notas del presentador:
Relacionar esta conexión con las plataformas reales. En Kafka, la cola conceptual sería un tópico particionado; en RabbitMQ, sería una cola asociada a exchanges; en Pulsar, podría ser un tópico con diferentes tipos de suscripción; en Storm, los eventos fluirían entre spouts y bolts; en Beam, formarían parte de una canalización de procesamiento.
-->

---
layout: slide-codigo
---

::title::
Código completo de la práctica

::content::

```python {lines:true}
"""
Semana 5 - Big Data
Simulación de streaming y mensajería con Python

Objetivo:
Representar un flujo productor -> cola -> consumidor para analizar eventos
en tiempo casi real, calcular latencia y generar alertas operativas.

No requiere librerías externas.
Ejecutar en Windows 11 Pro con:
python streaming_mensajeria.py
"""

import csv
import json
import queue
import random
import statistics
import threading
import time
from collections import deque
from datetime import datetime


TOTAL_EVENTOS = 40
TAMANO_VENTANA = 8
ARCHIVO_SALIDA = "stream_resultados.csv"


def ahora_iso():
    """Devuelve la fecha y hora actual en formato legible."""
    return datetime.now().isoformat(timespec="seconds")


def crear_evento(evento_id):
    """
    Crea un evento simulado.
    El evento puede representar una venta, una lectura de sensor o una acción web.
    """
    tipos = ["venta", "sensor", "web"]
    ciudades = ["Bucaramanga", "Bogota", "Medellin", "Cali", "Cucuta"]
    categorias = ["tecnologia", "hogar", "educacion", "salud", "moda"]

    tipo = random.choice(tipos)

    evento = {
        "id": evento_id,
        "tipo": tipo,
        "ciudad": random.choice(ciudades),
        "categoria": random.choice(categorias),
        "producido_en": ahora_iso(),
        "timestamp_produccion": time.time()
    }

    if tipo == "venta":
        evento["valor"] = random.randint(15000, 320000)
        evento["detalle"] = "compra_confirmada"

    elif tipo == "sensor":
        evento["temperatura"] = round(random.uniform(22.0, 52.0), 2)
        evento["detalle"] = "lectura_temperatura"

    else:
        evento["duracion_sesion"] = random.randint(5, 900)
        evento["detalle"] = random.choice(
            ["clic_producto", "agrego_carrito", "busqueda", "abandono_carrito"]
        )

    return evento


def productor(cola_eventos):
    """
    Publica eventos en la cola.
    En una arquitectura real, este rol podría ser una aplicación, API,
    sensor IoT, sistema transaccional o servicio web.
    """
    for evento_id in range(1, TOTAL_EVENTOS + 1):
        evento = crear_evento(evento_id)
        mensaje = json.dumps(evento, ensure_ascii=False)

        cola_eventos.put(mensaje)

        print(f"[PRODUCTOR] Evento publicado: {evento['id']} | tipo={evento['tipo']}")

        # Pausa breve para simular llegada continua de eventos.
        time.sleep(random.uniform(0.05, 0.25))

    # Señal de finalización para el consumidor.
    cola_eventos.put(None)


def evaluar_alerta(evento):
    """
    Aplica reglas simples de negocio.
    En una solución real, estas reglas podrían reemplazarse por modelos analíticos.
    """
    if evento["tipo"] == "venta" and evento.get("valor", 0) >= 250000:
        return "ALERTA_VENTA_ALTA"

    if evento["tipo"] == "sensor" and evento.get("temperatura", 0) >= 45:
        return "ALERTA_TEMPERATURA"

    if evento["tipo"] == "web" and evento.get("detalle") == "abandono_carrito":
        return "ALERTA_ABANDONO_CARRITO"

    return "SIN_ALERTA"


def consumidor(cola_eventos, resultados):
    """
    Lee mensajes desde la cola, los transforma en eventos,
    calcula latencia y genera una ventana móvil de valores de venta.
    """
    ventana_ventas = deque(maxlen=TAMANO_VENTANA)

    while True:
        mensaje = cola_eventos.get()

        if mensaje is None:
            print("[CONSUMIDOR] No hay más eventos. Finaliza el procesamiento.")
            break

        evento = json.loads(mensaje)
        procesado_en = time.time()
        latencia_ms = round(
            (procesado_en - evento["timestamp_produccion"]) * 1000, 2
        )

        alerta = evaluar_alerta(evento)

        valor_venta = evento.get("valor")
        if valor_venta is not None:
            ventana_ventas.append(valor_venta)

        promedio_movil = ""
        if len(ventana_ventas) >= 2:
            promedio_movil = round(statistics.mean(ventana_ventas), 2)

        fila = {
            "id": evento["id"],
            "tipo": evento["tipo"],
            "ciudad": evento["ciudad"],
            "categoria": evento["categoria"],
            "detalle": evento["detalle"],
            "valor": evento.get("valor", ""),
            "temperatura": evento.get("temperatura", ""),
            "duracion_sesion": evento.get("duracion_sesion", ""),
            "alerta": alerta,
            "latencia_ms": latencia_ms,
            "promedio_movil_ventas": promedio_movil,
            "producido_en": evento["producido_en"],
            "procesado_en": ahora_iso()
        }

        resultados.append(fila)

        print(
            f"[CONSUMIDOR] Evento {fila['id']} procesado | "
            f"tipo={fila['tipo']} | alerta={fila['alerta']} | "
            f"latencia={fila['latencia_ms']} ms"
        )

        # Simula tiempo de análisis del consumidor.
        time.sleep(random.uniform(0.03, 0.15))


def guardar_csv(resultados):
    """Guarda los eventos procesados en un archivo CSV."""
    campos = [
        "id",
        "tipo",
        "ciudad",
        "categoria",
        "detalle",
        "valor",
        "temperatura",
        "duracion_sesion",
        "alerta",
        "latencia_ms",
        "promedio_movil_ventas",
        "producido_en",
        "procesado_en"
    ]

    with open(ARCHIVO_SALIDA, mode="w", newline="", encoding="utf-8") as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=campos)
        escritor.writeheader()
        escritor.writerows(resultados)


def resumen_final(resultados):
    """Imprime métricas generales del flujo procesado."""
    total = len(resultados)
    alertas = [fila for fila in resultados if fila["alerta"] != "SIN_ALERTA"]
    latencias = [fila["latencia_ms"] for fila in resultados]

    print("\n====== RESUMEN DEL STREAM ======")
    print(f"Eventos procesados: {total}")
    print(f"Alertas generadas: {len(alertas)}")
    print(f"Latencia promedio: {round(statistics.mean(latencias), 2)} ms")
    print(f"Latencia máxima: {round(max(latencias), 2)} ms")
    print(f"Archivo generado: {ARCHIVO_SALIDA}")

    print("\nTipos de alerta encontrados:")
    conteo_alertas = {}
    for fila in alertas:
        conteo_alertas[fila["alerta"]] = conteo_alertas.get(fila["alerta"], 0) + 1

    if conteo_alertas:
        for alerta, cantidad in conteo_alertas.items():
            print(f"- {alerta}: {cantidad}")
    else:
        print("- No se generaron alertas.")


def main():
    """Coordina productor, cola y consumidor."""
    print("Simulación de streaming y mensajería - Semana 5 Big Data\n")

    cola_eventos = queue.Queue()
    resultados = []

    hilo_productor = threading.Thread(target=productor, args=(cola_eventos,))
    hilo_consumidor = threading.Thread(
        target=consumidor,
        args=(cola_eventos, resultados)
    )

    inicio = time.time()

    hilo_productor.start()
    hilo_consumidor.start()

    hilo_productor.join()
    hilo_consumidor.join()

    fin = time.time()

    guardar_csv(resultados)
    resumen_final(resultados)

    print(f"\nTiempo total de ejecución: {round(fin - inicio, 2)} segundos")
    print("Práctica finalizada correctamente.")


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
Indicar a los estudiantes que copien todo el código en el archivo streaming_mensajeria.py. Explicar que el productor genera eventos aleatorios, los convierte en JSON y los publica en una cola. El consumidor lee cada mensaje, calcula latencia, aplica reglas y guarda resultados. La cola de Python permite simular el papel de un broker de forma sencilla para fines didácticos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::

1. Abrir PowerShell en la carpeta `C:\bigdata_semana5`.

2. Ejecutar:

```bash
python streaming_mensajeria.py
```

3. Observar en consola los mensajes del productor y del consumidor.

4. Identificar eventos con alerta:

<v-clicks animation="fade-in">

* `ALERTA_VENTA_ALTA`
* `ALERTA_TEMPERATURA`
* `ALERTA_ABANDONO_CARRITO`

</v-clicks>

5. Abrir el archivo generado:

```bash
notepad stream_resultados.csv
```

6. Revisar columnas como `tipo`, `alerta`, `latencia_ms` y `promedio_movil_ventas`.

<!--
Notas del presentador:
Durante la prueba, pedir a los estudiantes que observen que los eventos no llegan todos al mismo tiempo. Hay una producción progresiva y un consumo progresivo. Esto permite hablar de latencia, presión sobre el consumidor y necesidad de escalar procesamiento. Si el consumidor fuera más lento que el productor, la cola crecería; este fenómeno es común en arquitecturas reales.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y evidencias

::left::
**Producto esperado**

<v-clicks animation="fade-in">

* Script ejecutado sin errores.
* Consola con eventos publicados y procesados.
* Archivo `stream_resultados.csv`.
* Al menos una alerta generada.
* Resumen final con métricas de latencia.

</v-clicks>

**Evidencia visible**

<v-clicks animation="fade-in">

* Captura de pantalla de la consola.
* Archivo CSV abierto.
* Identificación de una alerta y su causa.

</v-clicks>

::right::
**Interpretación esperada**

El estudiante debe poder explicar:

<v-clicks animation="fade-in">

* Qué componente actúa como productor.
* Qué componente representa la cola.
* Qué componente actúa como consumidor.
* Qué significa la latencia.
* Por qué se genera una alerta.
* Cómo se relaciona la práctica con Kafka, RabbitMQ o Pulsar.

</v-clicks>

<!--
Notas del presentador:
Indicar que la evidencia no es solo técnica. Lo importante es interpretar el flujo. Un estudiante puede ejecutar el código, pero debe explicar qué está pasando. El producto esperado permite evaluar comprensión conceptual y capacidad de aplicación. Relacionar el CSV con la idea de persistencia o salida analítica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Después de ejecutar el código, responda:

<v-clicks animation="fade-in">

1. ¿Qué representa el productor en un caso empresarial real?
2. ¿Qué pasaría si el consumidor procesa más lento que el productor?
3. ¿Por qué la cola ayuda a desacoplar componentes?
4. ¿Qué alerta tendría mayor prioridad para una empresa y por qué?
5. ¿Cómo cambiaría el ejercicio si los eventos vinieran de sensores reales?
6. ¿Dónde ubicaría Kafka, RabbitMQ o Pulsar dentro de esta simulación?
7. ¿Qué métrica adicional agregaría para mejorar la toma de decisiones?
8. ¿Qué dato del CSV serviría para construir un dashboard?

</v-clicks>

<!--
Notas del presentador:
Dar entre tres y cinco minutos para que los estudiantes respondan una o dos preguntas. No es necesario responder todas en plenaria. Seleccionar preguntas según el tiempo. La intención es conectar la práctica con diseño de arquitectura y análisis empresarial, no quedarse únicamente en la ejecución del script.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve · 7 minutos

::left::
**Dinámica sugerida**

<v-clicks animation="fade-in">

* Tres estudiantes comparten una alerta encontrada.
* Un estudiante explica el papel de la cola.
* Un estudiante propone una mejora al sistema.
* El docente conecta las respuestas con la evaluación.
* El grupo identifica qué herramienta real se parecería más al caso.

</v-clicks>

::right::
**Criterios de participación**

<v-clicks animation="fade-in">

* Claridad conceptual.
* Relación con el ejemplo.
* Uso adecuado de vocabulario técnico.
* Capacidad de explicar productor, cola y consumidor.
* Identificación de una decisión empresarial posible.
* Conexión con streaming o mensajería.

</v-clicks>

<!--
Notas del presentador:
Mantener la socialización breve para respetar el tiempo. Evitar que se convierta en revisión individual de código. Enfocar la conversación en los conceptos. Si hay errores técnicos, resolver solo los más comunes y dejar ajustes menores para trabajo autónomo o asesoría posterior.
-->

---
layout: slide-08-titulo-texto
---

::title::
Errores frecuentes al estudiar streaming y mensajería

::content::

<v-clicks animation="fade-in">

* Pensar que todos los sistemas de Big Data hacen lo mismo.
* Confundir almacenamiento distribuido con mensajería.
* Creer que una cola y un tópico son idénticos.
* Pensar que tiempo real significa “instantáneo absoluto”.
* Olvidar que la latencia siempre existe.
* Asociar Kafka únicamente con colas tradicionales.
* Confundir procesamiento de streams con visualización de datos.
* Memorizar herramientas sin comprender el problema que resuelven.

</v-clicks>

<!--
Notas del presentador:
Explicar que “tiempo real” en sistemas de datos suele significar baja latencia o respuesta oportuna, no necesariamente cero demora. La arquitectura debe diseñarse según el caso: una alerta médica puede requerir latencias muy bajas; un dashboard comercial puede tolerar segundos o minutos. El concepto de oportunidad depende del proceso.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Resolución de dudas

::rightTitle::
Cierre académico

::left::
Preguntas orientadoras para organizar las dudas:

<v-clicks animation="fade-in">

* ¿Qué diferencia hay entre cola y tópico?
* ¿Kafka reemplaza una base de datos?
* ¿Pulsar y Kafka cumplen el mismo rol?
* ¿Por qué Storm usa topologías?
* ¿Qué aporta Beam frente a escribir código para una sola plataforma?
* ¿Cuándo conviene Kafka Connect?
* ¿Por qué Cassandra no es sistema de mensajería?

</v-clicks>

::right::
Ideas centrales de la sesión:

<v-clicks animation="fade-in">

* Los datos también pueden analizarse mientras se mueven.
* La mensajería desacopla componentes.
* El streaming habilita reacción oportuna.
* Kafka, Pulsar, Storm y Beam tienen roles distintos.
* La evaluación se responde mejor entendiendo categorías.
* La práctica mostró el patrón productor, cola, consumidor y alerta.

</v-clicks>

<!--
Notas del presentador:
Usar máximo quince minutos para dudas, según el criterio institucional. Priorizar preguntas que beneficien a todo el grupo. Si una duda es muy técnica o individual, ofrecer revisarla en otro espacio académico. Cerrar reforzando que el pensamiento arquitectónico es tan importante como conocer la sintaxis de una herramienta.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, se recuerda a los estudiantes la importancia de diligenciar la **Encuesta de Percepción Estudiantil**.

Su participación permite:

<v-clicks animation="fade-in">

* Fortalecer el proceso académico.
* Identificar oportunidades de mejora.
* Valorar la pertinencia de las estrategias didácticas.
* Retroalimentar el acompañamiento docente.
* Contribuir a la calidad del curso y del programa.

</v-clicks>

<!--
Notas del presentador:
Realizar el recordatorio de forma clara y breve. Explicar que la encuesta no es un trámite aislado, sino una herramienta de mejora continua. Invitar a responderla con responsabilidad, honestidad y sentido constructivo. Evitar extender demasiado esta parte para conservar el cierre académico.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Recordatorio Evaluación Docente

::image:: 
<img src="/imagenes/40da6190-d19e-47f8-aa5c-148153777d31.png" alt="Imagen de apoyo sobre flujo productor cola consumidor y archivo CSV" />

::content::
¡Tu voz transforma la experiencia académica! 📚✨

Estimado estudiante,

Te invitamos a participar en la **Evaluación Estudiante al Profesor**, un espacio diseñado para escuchar tu percepción sobre el proceso formativo y continuar fortaleciendo la calidad académica.

Tu participación es muy importante, ya que tus comentarios y aportes contribuyen al mejoramiento continuo de las prácticas pedagógicas y al fortalecimiento de la experiencia de aprendizaje.

**🗓️ Fecha de participación:** del 25 de mayo al 14 de junio de 2026.
https://genesisplus.uniminuto.edu/StudentSelfService/

**Paso a paso:** https://www.youtube.com/watch?v=WcvhvkXY6FM

Agradecemos realizar el proceso con responsabilidad, respeto y compromiso.

¡Construimos juntos una mejor experiencia educativa! 

<!--
Notas del presentador:
Realizar el recordatorio de forma clara y breve. Explicar que la encuesta no es un trámite aislado, sino una herramienta de mejora continua. Invitar a responderla con responsabilidad, honestidad y sentido constructivo. Evitar extender demasiado esta parte para conservar el cierre académico.
-->

---
layout: slide-08-titulo-texto
---

::title::
Fuentes oficiales de apoyo

::content::
Para ampliar la sesión, se podrían consultar fuentes oficiales y técnicas sobre:

<v-clicks animation="fade-in">

* Apache Kafka y event streaming.
* Apache Pulsar y su modelo de mensajería.
* Apache Storm y topologías.
* Apache Beam, PCollections, PTransforms y runners.
* Apache Flume, fuentes, canales y sumideros.
* RabbitMQ, exchanges y colas.
* Apache Cassandra como base de datos NoSQL distribuida.
* Azure Stream Analytics como servicio administrado de analítica en tiempo real.

</v-clicks>

<!--
Notas del presentador:
Estas fuentes permiten respaldar la explicación conceptual y evitar depender únicamente de definiciones de terceros. Para Kafka se revisó la documentación oficial sobre event streaming, tópicos, particiones y retención. Para Pulsar se verificó su carácter de plataforma de mensajería y streaming. Para Storm se revisaron topologías, spouts y bolts. Para Beam se revisó su guía de programación. Para Flume se revisaron fuentes, canales y sumideros, incluyendo Twitter Source y Kafka Source. Para RabbitMQ, Cassandra y Azure Stream Analytics se revisó documentación oficial de sus respectivos proyectos o proveedores. :contentReference[oaicite:10]{index=10}
-->

---
layout: slide-12-cierre
---

::title::
Cierre

::content::
El streaming y la mensajería permiten que las organizaciones pasen de analizar datos cuando ya ocurrieron a reaccionar mientras los eventos están sucediendo.

En Big Data, esta capacidad es fundamental para integrar sistemas, automatizar procesos, detectar patrones, generar alertas y tomar decisiones más oportunas.

**Gracias por su participación.**

<!--
Notas del presentador:
Cerrar retomando el hilo de la sesión. La semana 5 se centra en comprender tecnologías que permiten mover y analizar datos en tiempo real. Reforzar que el estudiante debe estudiar las herramientas por su función: mensajería, streaming, integración, procesamiento o almacenamiento. Finalizar agradeciendo la participación e invitando a revisar la evaluación y completar la encuesta institucional.
-->
