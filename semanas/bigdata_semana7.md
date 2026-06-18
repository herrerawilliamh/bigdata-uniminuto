---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 7

::date::
Junio 17 de 2026

<!--
Notas del presentador:
Inicie la sesión dando la bienvenida formal a los estudiantes de la Electiva CPC: Big Data. Presente la semana 7 como un punto de integración entre los conceptos de almacenamiento, procesamiento, analítica, escalabilidad y toma de decisiones que se han venido trabajando durante el curso. Explique que la sesión se concentrará en tres plataformas líderes de computación en la nube: Amazon Web Services, Microsoft Azure y Google Cloud Platform. No se trata de memorizar nombres de servicios, sino de comprender qué problema resuelve cada plataforma, cómo se relaciona con Big Data y qué criterios permiten seleccionar una solución adecuada para una organización real.

Ubique el tema en un contexto empresarial cercano. Las organizaciones actuales producen datos desde ventas en línea, sensores IoT, aplicaciones móviles, redes sociales, sistemas contables, plataformas educativas y canales de atención al cliente. Cuando esos datos crecen en volumen, velocidad y variedad, la infraestructura tradicional suele quedarse corta. Por eso aparecen las soluciones cloud: permiten aprovisionar recursos bajo demanda, procesar grandes cantidades de información, pagar según consumo, integrar servicios administrados y responder con rapidez a necesidades cambiantes del negocio.

Explique que AWS se suele reconocer por su amplitud de servicios y madurez del ecosistema; Azure, por su integración con herramientas empresariales de Microsoft y sus capacidades para aplicaciones corporativas; y Google Cloud, por su fortaleza en analítica, datos, machine learning y servicios administrados como BigQuery, Pub/Sub, Dataflow y Dataproc. Señale que esta comparación no busca declarar un “ganador universal”, porque la mejor plataforma depende del problema, el presupuesto, el equipo técnico, la regulación, la ubicación de los usuarios, la arquitectura existente y los objetivos estratégicos.

Mencione que durante la clase habrá una activación inicial, desarrollo conceptual, lectura aplicada de casos similares a la evaluación, una práctica guiada en Python sobre autoescalado multicloud y un cierre con preguntas para el foro. Invite a los estudiantes a participar desde su experiencia: algunos pueden haber usado Google Drive, OneDrive, correo institucional, servicios de almacenamiento, servidores web o aplicaciones alojadas, y todos esos ejemplos ayudan a conectar la nube con situaciones cotidianas.
-->

---
layout: slide-02-titulo
---

::title::
Soluciones cloud para transformar negocios y optimizar recursos

::content::
Semana 7 · Open Class de 90 minutos
Tema central: AWS, Azure y Google Cloud Platform
Enfoque: escalabilidad, analítica, seguridad, costos y aplicación práctica

<!--
Notas del presentador:
Presente el encuadre académico de la sesión. Indique que esta Open Class está diseñada para 90 minutos efectivos y que se organizará en bloques cortos: bienvenida y agenda, activación de saberes previos, desarrollo conceptual, relación con la evaluación, práctica guiada, socialización, dudas y cierre institucional. Esta estructura permite cumplir con la tolerancia máxima de cinco minutos, mantener la clase enfocada y asegurar que el espacio no se limite a una exposición teórica, sino que incluya análisis, aplicación y participación.

Explique que el curso de Big Data no se reduce al manejo de herramientas aisladas. Big Data implica pensar en arquitecturas completas: dónde nacen los datos, cómo se capturan, cómo viajan, cómo se almacenan, cómo se procesan, cómo se consultan, cómo se protegen y cómo se convierten en valor. En ese marco, las plataformas cloud funcionan como ecosistemas integrados que ofrecen cómputo, almacenamiento, bases de datos, redes, seguridad, gobierno, analítica, inteligencia artificial y herramientas para automatizar operaciones. Cada proveedor organiza estos componentes con nombres distintos, pero los principios arquitectónicos son comparables.

Aclare que durante la clase se usará un tono práctico. Los estudiantes no necesitan tener una cuenta activa en AWS, Azure o Google Cloud para aprovechar la sesión. La práctica se realizará en Windows 11 Pro con Python, simulando una función típica de nube: el autoescalado ante picos de tráfico. Esta decisión permite trabajar el concepto sin depender de tarjetas de crédito, permisos institucionales, costos inesperados ni configuraciones complejas. La idea es que los estudiantes comprendan la lógica detrás de una decisión cloud antes de implementarla en un proveedor real.

Conecte la sesión con la evaluación de la semana. Explique que las preguntas propuestas en el aula virtual abordan conceptos como autoescalado, Dataproc, machine learning en Google Cloud, bases de datos relacionales en AWS, bases de datos orientadas a columnas, Azure App Service, cumplimiento normativo, BigQuery, nube híbrida y computación serverless. Por tanto, la clase ayudará a interpretar esos conceptos en escenarios empresariales y no solo como definiciones de opción múltiple.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
¿Por qué la nube es central en Big Data?

::image:: 
<img src="/imagenes/bigdata-semana7-ecosistema-cloud-multicloud.png" alt="Imagen de apoyo sobre ecosistemas cloud para Big Data" />

::content::
La nube permite que las organizaciones:

* Capturen datos desde múltiples fuentes.
* Almacenen información estructurada, semiestructurada y no estructurada.
* Procesen datos por lotes o en tiempo real.
* Escalen recursos ante cambios de demanda.
* Integren analítica, machine learning, seguridad y gobierno.
* Paguen de forma flexible según uso, capacidad o servicio contratado.

<!--
Notas del presentador:
Desarrolle la idea de que Big Data y nube se complementan. Big Data surge cuando los datos superan la capacidad de las herramientas tradicionales en términos de volumen, velocidad, variedad, veracidad y valor. Una empresa puede tener millones de registros de ventas, navegación web, inventario, comportamiento de usuarios, transacciones financieras, sensores o interacciones en redes sociales. Si esa información se almacena de manera dispersa, se procesa lentamente o no se protege correctamente, pierde valor. La nube ofrece una forma de organizar y escalar ese ecosistema sin comprar todos los servidores por adelantado.

Explique que, en un modelo local tradicional, la organización debe adquirir equipos, instalar software, configurar redes, asegurar energía, refrigeración, copias de seguridad, monitoreo y mantenimiento. En cambio, en la nube se pueden aprovisionar recursos bajo demanda y usar servicios administrados. Esto no elimina la responsabilidad técnica, pero cambia su naturaleza: el equipo se concentra más en arquitectura, datos, seguridad, automatización y valor de negocio que en la operación física del centro de datos.

Use ejemplos concretos. Un comercio electrónico durante Black Friday necesita atender miles de usuarios simultáneos. Una universidad virtual necesita soportar picos de ingreso en semanas de entrega de trabajos. Un sistema IoT puede recibir datos de sensores cada pocos segundos. Un área de mercadeo puede requerir analizar campañas y segmentar usuarios. En cada caso, la nube ofrece componentes para recibir datos, procesarlos, almacenarlos, analizarlos y presentar resultados.

También conviene aclarar que la nube no siempre significa menor costo automáticamente. El costo depende de diseño, consumo, regiones, almacenamiento, transferencia de datos, licencias, soporte y eficiencia operativa. Un mal diseño cloud puede ser más costoso que una infraestructura local. Por eso se requiere pensamiento arquitectónico: elegir bien los servicios, apagar recursos innecesarios, usar escalabilidad automática, monitorear consumo, aplicar seguridad desde el diseño y documentar decisiones. Esta mirada prepara a los estudiantes para responder la evaluación y participar con argumentos en el foro.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad de integración: “La nube bajo presión”

::left::
Docente:

* Presente tres casos rápidos.
* Pida a los estudiantes elegir el concepto cloud más adecuado.
* Recoja respuestas por chat o intervención oral.
* Solicite una justificación breve por cada elección.

Casos:

* Tienda en línea con tráfico extremo en Cyber Monday.
* Universidad que debe analizar registros académicos históricos.
* Empresa financiera con datos sensibles y regulación estricta.

::right::
Estudiantes:

* Responden en máximo un minuto por caso.
* Usan una palabra clave: autoescalado, data warehouse, nube híbrida, serverless, cumplimiento, base relacional o streaming.
* Justifican con una frase.
* Comparan su respuesta con la de otro equipo.

Duración sugerida: 10 a 15 minutos.

<!--
Notas del presentador:
Esta actividad busca activar saberes previos y conectar el tema con situaciones empresariales. No requiere herramientas complejas. Puede realizarse en clase sincrónica mediante el chat, una pizarra colaborativa, una encuesta rápida o participación oral. Presente el primer caso: una tienda en línea con tráfico extremo en Cyber Monday. Pregunte qué característica de la nube ayuda a soportar picos de usuarios simultáneos sin comprometer la experiencia. Oriente la conversación hacia autoescalado, balanceo de carga, monitoreo y elasticidad. Si alguien responde “almacenamiento ilimitado”, explique que el almacenamiento ayuda a guardar datos, pero no necesariamente resuelve el incremento súbito de solicitudes web. Si alguien menciona “reducción de latencia global”, reconozca que es importante, pero destaque que el cuello de botella del caso está en la capacidad de atender carga variable.

En el segundo caso, la universidad que analiza registros académicos históricos permite introducir data warehouse, procesamiento por lotes, consultas SQL, gobierno de datos y visualización. Aquí pueden aparecer servicios como BigQuery, Redshift, Synapse o soluciones equivalentes. Aclare que no basta con guardar archivos; se necesita una arquitectura que permita consultar, limpiar, transformar y analizar datos con eficiencia.

En el tercer caso, la empresa financiera con datos sensibles permite discutir seguridad, cumplimiento normativo, residencia de datos, cifrado, controles de acceso, auditoría y nube híbrida. Explique que una nube híbrida puede combinar recursos locales o privados para datos críticos con servicios públicos para analítica, aplicaciones o escalabilidad. No obstante, la nube híbrida no es automáticamente segura: requiere diseño, políticas, identidad unificada, monitoreo y responsabilidades claras.

Cierre la actividad preguntando qué patrones aparecen en los tres casos. Se espera que los estudiantes identifiquen que la decisión cloud depende del problema: tráfico, datos históricos, regulación, costos, soporte, desempeño y capacidad del equipo. Esta síntesis abre la puerta al desarrollo conceptual.
-->

---
layout: slide-04-imagen-derecha
---

::title::
La tríada cloud: AWS, Azure y Google Cloud Platform

::image:: 
<img src="/imagenes/bigdata-semana7-autoescalado-ecommerce.png" alt="Imagen de apoyo sobre comparación de plataformas cloud" />

::content::
AWS:

* Ecosistema amplio de servicios.
* Alta madurez en infraestructura, cómputo, almacenamiento y bases de datos.
* Servicios destacados: EC2, S3, Lambda, RDS, Aurora, Redshift.

Azure:

* Integración fuerte con Microsoft 365, Windows, Entra ID, Power BI y entornos corporativos.
* Servicios destacados: App Service, Virtual Machines, SQL Database, Blob Storage, Synapse.

Google Cloud:

* Fortaleza en analítica, datos, machine learning y servicios administrados.
* Servicios destacados: BigQuery, Pub/Sub, Dataflow, Dataproc, Vertex AI.

<!--
Notas del presentador:
Explique que la comparación entre AWS, Azure y Google Cloud debe hacerse por categorías y no por popularidad. Una plataforma cloud es un ecosistema de servicios interconectados. Cada proveedor ofrece alternativas para cómputo, almacenamiento, red, bases de datos, seguridad, inteligencia artificial, analítica, integración, monitoreo y gobierno. Lo importante es reconocer patrones equivalentes: una aplicación web necesita una plataforma de despliegue; una base de datos transaccional requiere consistencia y disponibilidad; una solución analítica necesita almacenamiento optimizado para consulta; un sistema de eventos requiere mensajería; una arquitectura de datos necesita procesamiento por lotes o streaming.

Presente AWS como un proveedor muy amplio y maduro. Puede mencionar Amazon EC2 para máquinas virtuales, S3 para almacenamiento de objetos, Lambda para ejecución de código sin administrar servidores, RDS y Aurora para bases de datos relacionales administradas, y Redshift para analítica en data warehouse. La documentación de AWS describe EC2 Auto Scaling como un mecanismo para lanzar o terminar instancias automáticamente mediante políticas, programación y verificaciones de salud, lo cual se relaciona directamente con el caso de picos de tráfico. :contentReference[oaicite:0]{index=0}

Presente Azure desde la perspectiva empresarial. Muchas organizaciones ya usan herramientas Microsoft, por lo que Azure facilita integración con identidades, aplicaciones, bases de datos, Power BI, Microsoft 365 y entornos híbridos. Azure App Service permite hospedar aplicaciones web y escalar capacidad del plan o de la aplicación, incluso con escalado automático según carga HTTP en determinados escenarios. :contentReference[oaicite:1]{index=1}

Presente Google Cloud como una plataforma muy fuerte en datos y analítica. BigQuery permite consultar grandes volúmenes mediante GoogleSQL, y Dataproc, actualmente integrado bajo la marca Managed Service for Apache Spark en la consola de Google Cloud, permite usar tecnologías como Spark y Hadoop con menor administración de infraestructura. :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Modelos de servicio

::rightTitle::
Modelos de implementación

::left::
IaaS: Máquinas virtuales, redes, discos y capacidad flexible. Mayor control, mayor responsabilidad operativa.

PaaS: Despliegue de aplicaciones sin administrar toda la infraestructura.  **Ejemplo conceptual:** Azure App Service.

Serverless: Ejecución de funciones o componentes bajo demanda. El proveedor administra servidores y escalado.

SaaS: Aplicaciones listas para usar.El usuario configura y consume el servicio.

::right::
Nube pública: Infraestructura compartida del proveedor. Alta elasticidad y amplio catálogo.

Nube privada: Mayor control sobre infraestructura y políticas.

Nube híbrida: Integra recursos locales, privados y públicos. Útil cuando hay regulación, datos sensibles o transición gradual.

Multicloud: Uso coordinado de varios proveedores. Reduce dependencia, pero aumenta complejidad.

<!--
Notas del presentador:
Dedique esta diapositiva a ordenar vocabulario. Muchos errores en la evaluación y en las discusiones sobre cloud ocurren porque se mezclan modelos de servicio con modelos de implementación. Los modelos de servicio explican qué tanto administra el proveedor y qué tanto administra el cliente. En IaaS, el proveedor ofrece infraestructura básica como cómputo, almacenamiento y red, pero el cliente conserva más responsabilidad sobre sistema operativo, configuraciones, parches, runtime y aplicaciones. Es útil cuando se requiere control, migración de servidores existentes o configuraciones muy específicas.

En PaaS, el proveedor abstrae una parte mayor de la infraestructura. El equipo puede desplegar una aplicación sin administrar directamente los servidores subyacentes. Azure App Service es un ejemplo pertinente para la evaluación porque se utiliza para hospedar, administrar y escalar aplicaciones web. La documentación de Azure indica que los planes de App Service comparten recursos de cómputo y pueden escalarse manualmente o mediante reglas de autoscale. :contentReference[oaicite:4]{index=4}

Serverless lleva la abstracción más lejos. AWS Lambda, por ejemplo, permite ejecutar código sin aprovisionar ni administrar servidores; el código escala automáticamente y el modelo de pago se basa en uso. Esto conecta con una de las preguntas de la evaluación: el término adecuado para ejecutar funciones sin gestionar servidores es computación sin servidor o serverless. :contentReference[oaicite:5]{index=5}

Luego explique los modelos de implementación. La nube pública ofrece recursos del proveedor a múltiples clientes bajo aislamiento lógico. La nube privada se orienta a control dedicado. La nube híbrida combina entornos locales o privados con nube pública, y suele ser relevante cuando existen restricciones regulatorias, datos sensibles o una migración progresiva. Multicloud implica usar varios proveedores al mismo tiempo. Aunque suena atractivo, exige gobernanza, monitoreo, integración de identidades, control de costos y habilidades técnicas. Cierre con una idea clave: no hay un modelo universalmente superior; el modelo correcto depende del riesgo, el costo, la carga de trabajo, la regulación y la estrategia de la organización.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Servicios cloud para Big Data: del dato al insight

::image:: 
<img src="/imagenes/bigdata-semana7-pipeline-bigdata-cloud.png" alt="Imagen de apoyo sobre pipeline de datos en la nube" />

::content::
Un pipeline de Big Data en la nube suele incluir:

* Ingesta: eventos, archivos, APIs, sensores o bases de datos.
* Transporte: colas, tópicos, streaming o mensajería.
* Almacenamiento: data lake, data warehouse o bases operacionales.
* Procesamiento: ETL, ELT, Spark, jobs por lotes o flujos.
* Analítica: consultas SQL, dashboards, modelos predictivos.
* Gobierno: seguridad, catálogo, auditoría y trazabilidad.

Ejemplo GCP: Pub/Sub → Dataflow → BigQuery → Looker Studio o Power BI.

<!--
Notas del presentador:
Presente la arquitectura de datos como una cadena de valor. El dato crudo no produce valor por sí solo. Primero debe capturarse, moverse, almacenarse, transformarse, validarse, consultarse, protegerse y convertirse en información útil para decisiones. En un pipeline de Big Data, la ingesta puede venir de formularios, ventas en línea, sensores, transacciones, archivos CSV, logs de servidores, APIs o aplicaciones móviles. Luego aparece la capa de transporte, que puede trabajar con eventos y mensajes. En Google Cloud, Pub/Sub se usa con frecuencia para mensajería y eventos; Dataflow puede procesar flujos o trabajos de transformación; BigQuery funciona como data warehouse administrado para consultas analíticas. La documentación de Dataflow muestra un flujo típico de Pub/Sub hacia BigQuery para datos en streaming. :contentReference[oaicite:6]{index=6}

Explique la diferencia entre data lake y data warehouse. Un data lake almacena datos en formatos diversos, usualmente en almacenamiento de objetos, con flexibilidad para datos crudos y procesados. Un data warehouse organiza datos para consulta analítica, con esquemas y optimizaciones que favorecen reportes, agregaciones y análisis. En cloud, ambos enfoques pueden convivir: por ejemplo, archivos en S3, Azure Blob Storage o Cloud Storage pueden alimentar servicios analíticos como Redshift, Synapse o BigQuery.

Aclare que Spark y Hadoop siguen siendo importantes, pero su administración directa puede ser compleja. Por eso existen servicios administrados como Dataproc o Managed Service for Apache Spark. Estos permiten crear clústeres, ejecutar jobs y apagar recursos cuando no se necesitan, reduciendo tiempo de administración. Google Cloud describe Dataproc como un servicio administrado de Spark y Hadoop orientado a procesamiento por lotes, consultas, streaming y aprendizaje automático. :contentReference[oaicite:7]{index=7}

Cierre conectando con el curso: cuando un estudiante diseña una solución Big Data, debe identificar qué parte de la arquitectura resuelve cada servicio y evitar respuestas genéricas. No basta decir “usar la nube”; se debe explicar cómo viaja el dato y qué servicio cumple cada rol.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Términos clave

::image:: 
<img src="/imagenes/bigdata-semana7-seguridad-nube-hibrida.png" alt="Imagen de apoyo sobre términos cloud esenciales" />

::content::
Autoescalado:

* Ajusta recursos según demanda.
* Responde a picos de tráfico o carga.

Base de datos relacional:

* Organiza datos en tablas, claves y relaciones.
* Ejemplos AWS: Amazon RDS y Aurora.

Base orientada a columnas:

* Optimiza lectura analítica por columnas.
* Útil para consultas agregadas y grandes volúmenes.

BigQuery:

* Data warehouse administrado de Google Cloud.
* Consulta principalmente con SQL/GoogleSQL.

Vertex AI / AI Platform:

* Servicios para entrenamiento, despliegue y operación de modelos.

<!--
Notas del presentador:
Use esta diapositiva para preparar directamente a los estudiantes frente a los términos que aparecen en la evaluación. Empiece con autoescalado. En un sitio de comercio electrónico, el tráfico no es constante. Puede haber horas de baja actividad y momentos de saturación por promociones, campañas o eventos como Black Friday. El autoescalado permite aumentar o reducir recursos según métricas o políticas. En AWS, EC2 Auto Scaling puede lanzar o terminar instancias automáticamente según políticas, programación y comprobaciones de salud. Este concepto explica por qué, ante picos de tráfico, la respuesta más adecuada es autoescalado automático y no simplemente almacenamiento ilimitado. :contentReference[oaicite:8]{index=8}

Continúe con bases relacionales. Amazon RDS facilita configurar, operar y escalar bases de datos relacionales en la nube. Amazon Aurora es un motor relacional totalmente administrado, compatible con MySQL y PostgreSQL, y forma parte de Amazon RDS. Esto permite discutir por qué RDS y Aurora pertenecen al campo relacional, mientras que DynamoDB es NoSQL y Redshift se orienta más al análisis como data warehouse. :contentReference[oaicite:9]{index=9}

Explique la idea de base orientada a columnas. En una base orientada a filas, los registros completos se almacenan juntos; en una orientada a columnas, los valores de una misma columna se almacenan de forma que las consultas analíticas pueden leer solo las columnas necesarias. Esta estructura favorece agregaciones, filtros y análisis de grandes volúmenes. Servicios como Redshift usan principios columnares para analítica, y tecnologías como HBase y Cassandra se estudian dentro del ecosistema de bases distribuidas orientadas por columnas o familias de columnas.

Luego explique BigQuery. Google documenta que BigQuery usa GoogleSQL, antes llamado Google Standard SQL, para consultar datos. Por tanto, cuando la pregunta menciona el lenguaje principal de consulta de BigQuery, la clave conceptual es SQL. :contentReference[oaicite:10]{index=10}

Finalmente, aclare el caso de AI Platform. La evaluación puede usar el nombre AI Platform, pero Google anunció que AI Platform Unified pasó a ser Vertex AI. En una clase actualizada, conviene reconocer ambos nombres para no confundir el contenido del aula con la evolución del proveedor. :contentReference[oaicite:11]{index=11}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Servicios destacados por necesidad organizacional

::left::
Necesidad: aplicación web escalable

* AWS: Elastic Beanstalk, ECS, Lambda, EC2 Auto Scaling.
* Azure: App Service, Container Apps, Virtual Machines.
* Google Cloud: App Engine, Cloud Run, GKE.

Necesidad: base de datos operacional

* AWS: RDS, Aurora, DynamoDB.
* Azure: SQL Database, Cosmos DB.
* Google Cloud: Cloud SQL, Firestore, Spanner.

::right::
Necesidad: analítica masiva

* AWS: Redshift, Athena, Glue.
* Azure: Synapse, Fabric, Data Factory.
* Google Cloud: BigQuery, Dataflow, Dataproc.

Necesidad: IA y machine learning

* AWS: SageMaker.
* Azure: Azure Machine Learning.
* Google Cloud: Vertex AI.

Necesidad: eventos y streaming

* AWS: Kinesis, SQS, SNS.
* Azure: Event Hubs, Service Bus.
* Google Cloud: Pub/Sub.

<!--
Notas del presentador:
Esta diapositiva permite pasar de una visión de proveedores a una visión de necesidades. Explique que una buena decisión cloud comienza con la pregunta “¿qué problema debo resolver?” y no con “¿qué servicio está de moda?”. Si la necesidad es desplegar una aplicación web, se requieren servicios de cómputo y despliegue. Azure App Service aparece en la evaluación como servicio para gestionar y escalar aplicaciones web. En Google Cloud, Cloud Run o App Engine pueden cumplir roles similares; en AWS, Lambda, ECS, Elastic Beanstalk o EC2 Auto Scaling pueden participar según arquitectura.

Si la necesidad es base de datos operacional, la decisión depende del tipo de datos, consistencia, latencia, relaciones y escalabilidad. RDS y Aurora son relacionales en AWS; DynamoDB es NoSQL; Azure SQL Database ofrece una base relacional administrada; Cosmos DB se orienta a modelos distribuidos y NoSQL; Cloud SQL ofrece bases relacionales administradas en Google Cloud. Aquí puede preguntar a los estudiantes: ¿un carrito de compras requiere necesariamente una base analítica? Probablemente no. Requiere transacciones consistentes, disponibilidad y baja latencia. En cambio, el análisis histórico de ventas sí requiere otra arquitectura.

Si la necesidad es analítica masiva, aparecen data warehouses y servicios de procesamiento. BigQuery es una referencia en Google Cloud para consultas SQL a gran escala. AWS Redshift y Azure Synapse cumplen roles analíticos similares en sus ecosistemas. Dataflow, Glue o Data Factory participan en procesos de transformación e integración. Dataproc o Managed Service for Apache Spark permite usar Spark y Hadoop de forma administrada, lo cual es útil cuando la organización tiene cargas de procesamiento distribuido o pipelines existentes en tecnologías open source. :contentReference[oaicite:12]{index=12}

Para inteligencia artificial, explique que las tres plataformas ofrecen servicios para entrenar, desplegar, monitorear y consumir modelos. Google Cloud Vertex AI permite crear trabajos de entrenamiento, desplegar modelos y servir inferencias. :contentReference[oaicite:13]{index=13} Cierre con la idea de equivalencia funcional: los nombres cambian, pero las categorías ayudan a comparar.
-->

---
layout: slide-08-titulo-texto
---

::title::
Criterios para comparar AWS, Azure y Google Cloud

::content::
Servicios:

* ¿El proveedor ofrece el servicio adecuado para la carga de trabajo?
* ¿El servicio es administrado o requiere operación manual?
* ¿Se integra con datos, aplicaciones e identidades existentes?

Precios:

* ¿Se cobra por uso, instancia, almacenamiento, transferencia, consulta o soporte?
* ¿Hay costos ocultos por salida de datos, regiones, monitoreo o recursos inactivos?

Soporte:

* ¿Existe documentación clara?
* ¿Hay soporte empresarial?
* ¿El equipo tiene experiencia en ese ecosistema?

Gobierno:

* ¿Cumple requisitos normativos?
* ¿Permite auditoría, cifrado, identidad, roles y trazabilidad?

<!--
Notas del presentador:
Desarrolle los criterios de comparación con enfoque académico y aplicado. Explique que comparar proveedores cloud únicamente por precio inicial puede llevar a decisiones deficientes. El costo depende de múltiples variables: cantidad de recursos, tiempo de uso, almacenamiento, transferencia de datos, número de consultas, región, licenciamiento, soporte, respaldos, monitoreo, tráfico saliente, redundancia, cumplimiento y nivel de automatización. Un servicio aparentemente barato puede encarecerse si se usa de manera ineficiente; un servicio más costoso puede ser conveniente si reduce administración, errores y tiempo de desarrollo.

En servicios, pregunte si la organización necesita infraestructura flexible, aplicación web, base transaccional, data warehouse, streaming, entrenamiento de modelos o gobierno de datos. También importa si el servicio es administrado. Un clúster autogestionado ofrece control, pero requiere mantenimiento, parches, monitoreo y personal capacitado. Un servicio administrado reduce esa carga, aunque puede aumentar dependencia del proveedor y limitar configuraciones muy específicas.

En soporte, recuerde que la documentación oficial y la comunidad son parte del ecosistema. AWS, Microsoft y Google tienen documentación extensa, rutas de certificación y planes de soporte. Sin embargo, para una organización concreta también cuenta la experiencia del equipo. Si el equipo domina herramientas Microsoft, Azure puede reducir la curva de aprendizaje; si el equipo trabaja fuertemente con analítica SQL y servicios Google, BigQuery y Google Cloud pueden ser atractivos; si la organización tiene arquitecturas distribuidas en AWS, su ecosistema amplio puede ser ventajoso.

En gobierno y cumplimiento, enfatice que las empresas con datos sensibles no pueden elegir proveedor por popularidad. Deben revisar certificaciones, residencia de datos, cifrado, gestión de identidades, auditorías, segregación de funciones, registros de actividad y políticas de respaldo. Google Cloud recomienda realizar evaluaciones de riesgo antes de desplegar recursos para determinar controles requeridos según requisitos internos y externos. :contentReference[oaicite:14]{index=14} Esta reflexión conecta con la pregunta de evaluación sobre certificaciones de cumplimiento normativo como consideración principal.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Seguridad en nube híbrida y multicloud

::image:: 
<img src="/imagenes/bigdata-semana7-comparacion-servicios-cloud.png" alt="Imagen de apoyo sobre seguridad en nube híbrida y multicloud" />

::content::
Buenas prácticas:

* Definir responsabilidad compartida por proveedor y servicio.
* Usar identidad centralizada y mínimo privilegio.
* Cifrar datos en tránsito y reposo.
* Segmentar redes y controlar accesos.
* Registrar auditorías, métricas y eventos.
* Automatizar políticas de cumplimiento.
* Gestionar respaldos, recuperación y continuidad.
* Monitorear costos, riesgos y configuraciones.

<!--
Notas del presentador:
Explique que la seguridad en nube híbrida y multicloud requiere una visión integral. En entornos tradicionales, muchas decisiones de seguridad se concentraban en el perímetro de red. En cloud, el perímetro se distribuye: hay usuarios remotos, APIs, identidades federadas, servicios administrados, datos en varias regiones, aplicaciones que escalan automáticamente y recursos creados mediante automatización. Por eso, la seguridad no puede añadirse al final; debe diseñarse desde el inicio.

Presente el modelo de responsabilidad compartida. El proveedor protege infraestructura física, centros de datos, hardware, redes base y servicios administrados según el modelo contratado. El cliente mantiene responsabilidad sobre datos, identidades, permisos, configuraciones, aplicaciones, claves, cumplimiento interno y uso adecuado del servicio. La proporción cambia según se use IaaS, PaaS, serverless o SaaS. En serverless, por ejemplo, el proveedor administra más infraestructura, pero el cliente sigue siendo responsable del código, permisos, datos y eventos que activan la función.

En nube híbrida, el reto aumenta porque se conectan recursos locales con nube pública. Puede haber datos financieros o personales que por regulación permanezcan en un entorno controlado, mientras que cargas analíticas, portales web o servicios de integración se ejecutan en nube pública. Azure Cloud Adoption Framework plantea el uso de estrategias híbridas y multicloud para unificar operaciones, identidad, gestión y política en ambientes locales, edge, AWS y Google Cloud, cuando la arquitectura lo requiere. :contentReference[oaicite:15]{index=15}

Explique las prácticas listadas. Mínimo privilegio significa que cada usuario, servicio o aplicación solo recibe los permisos necesarios. Cifrado en tránsito protege datos durante comunicación; cifrado en reposo protege almacenamiento. Auditoría y monitoreo permiten detectar accesos anómalos, errores de configuración o consumo inesperado. La segmentación reduce impacto si un componente falla. Los respaldos y recuperación son esenciales para continuidad. Cierre con una pregunta: si una empresa maneja información financiera y datos personales, ¿qué criterio debe pesar más: popularidad del proveedor o cumplimiento verificable? La respuesta conceptual es cumplimiento normativo y controles demostrables.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Claves conceptuales para estudiar:

::image:: 
<img src="/imagenes/bigdata-semana7-comparacion-servicios.png" alt="Imagen de apoyo sobre análisis de preguntas de evaluación cloud" />

::content::

* Picos de tráfico: elasticidad y autoescalado.
* Dataproc: creación y gestión de clústeres Spark/Hadoop.
* Machine learning en GCP: AI Platform en el aula; Vertex AI en la documentación actual.
* AWS relacional: RDS y Aurora.
* Analítica columnar: Redshift, HBase y familias de columnas según enfoque.
* Azure web apps: App Service.
* Datos sensibles: cumplimiento normativo.
* BigQuery: consultas SQL/GoogleSQL.
* Multinacional regulada: nube híbrida.
* Lambda: computación serverless.

<!--
Notas del presentador:
Use esta diapositiva para orientar la preparación de la evaluación sin convertir la clase en una simple entrega de respuestas. Explique que cada pregunta puede resolverse si se identifica el problema central. En el primer caso, una empresa de comercio electrónico enfrenta picos de tráfico. El problema no es almacenar más archivos ni usar blockchain; el problema es ajustar capacidad computacional ante demanda variable. Por eso el concepto relevante es autoescalado automático.

En Dataproc, el enunciado habla de integración con BigQuery, Dataflow y Pub/Sub, y de construir pipelines sin administrar infraestructura subyacente. La característica principal se relaciona con facilitar la creación y gestión de clústeres. La documentación de Google describe Dataproc como servicio administrado para Spark y Hadoop, orientado a reducir administración y permitir concentración en trabajos y datos. :contentReference[oaicite:16]{index=16}

En machine learning de Google Cloud, el aula puede mencionar AI Platform. Es importante aclarar que Google anunció que AI Platform Unified pasó a ser Vertex AI. Por tanto, si la evaluación usa el nombre AI Platform, los estudiantes deben reconocerlo como el servicio que históricamente facilitaba entrenamiento y despliegue de modelos; en documentación actual, el referente es Vertex AI. :contentReference[oaicite:17]{index=17}

En AWS, diferencie bases de datos. RDS y Aurora son relacionales; DynamoDB es NoSQL; Redshift es analítico. Amazon RDS facilita operar y escalar bases relacionales en la nube, y Aurora es un motor relacional administrado compatible con MySQL y PostgreSQL. :contentReference[oaicite:18]{index=18}

Para BigQuery, recuerde que el lenguaje principal es SQL, específicamente GoogleSQL, documentado como el nombre actual de Google Standard SQL. :contentReference[oaicite:19]{index=19} Para Lambda, la idea clave es serverless, porque se ejecuta código sin aprovisionar ni administrar servidores. :contentReference[oaicite:20]{index=20} Cierre indicando que estudiar por concepto permite responder incluso si el enunciado cambia.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad práctica guiada: simulador de autoescalado multicloud

::left::
Propósito:

* Comprender cómo una arquitectura cloud responde a picos de tráfico.
* Simular decisiones de escalado para una tienda en línea.
* Comparar costo estimado entre proveedores.
* Relacionar la práctica con AWS, Azure y Google Cloud.

Componentes necesarios:

* Windows 11 Pro.
* Python 3.11 o superior.
* Visual Studio Code.
* Terminal PowerShell.
* Navegador web.
* Carpeta de trabajo local.

::right::
Conexiones sugeridas:

* Usuarios → aplicación web.
* Aplicación web → balanceador de carga.
* Balanceador → instancias o contenedores.
* Instancias → base de datos.
* Eventos → analítica.
* Métricas → política de autoescalado.

Producto esperado:

* Archivo `simulador_autoscaling.py`.
* Resultado en consola.
* Archivo `resultado_autoscaling.csv`.
* Conclusión breve para foro.

<!--
Notas del presentador:
Presente la práctica como una simulación didáctica, no como un reemplazo de la nube real. Explique que se trabajará una función típica de soluciones cloud: el autoescalado. En plataformas reales, AWS, Azure o Google Cloud usan métricas como CPU, solicitudes HTTP, latencia, cola de mensajes, memoria, tráfico de red o reglas programadas para aumentar o disminuir capacidad. La práctica simplifica esa lógica para que los estudiantes comprendan el razonamiento: si hay más usuarios concurrentes, se necesitan más instancias; si el tráfico disminuye, conviene reducir capacidad para evitar gasto innecesario.

Indique que el escenario será una tienda de comercio electrónico con tráfico variable durante un evento como Black Friday. El programa recibirá una serie de valores de tráfico por hora, calculará cuántas instancias se necesitan, aplicará límites mínimos y máximos, estimará costo por proveedor y generará un archivo CSV con los resultados. Esto conecta directamente con la pregunta de evaluación sobre picos de tráfico y autoescalado automático. Además, permite discutir precios, porque una plataforma cloud no solo debe responder técnicamente, sino hacerlo con eficiencia económica.

Explique los componentes necesarios. Windows 11 Pro será el sistema de referencia. Python 3.11 o superior permitirá ejecutar el script sin librerías externas, para evitar problemas de instalación. Visual Studio Code se propone como editor libre y ampliamente usado. PowerShell se usará para crear la carpeta, verificar la versión de Python y ejecutar el programa. El navegador se puede usar para consultar documentación o compartir el archivo resultante.

Aclare las conexiones sugeridas. Aunque el código no crea recursos reales, la arquitectura conceptual representa una aplicación web detrás de un balanceador, con instancias escalables, una base de datos y una capa de analítica. Las métricas alimentan la política de escalado. En proveedores reales, esos componentes se traducirían en servicios específicos: Auto Scaling en AWS, escalado de App Service en Azure, Cloud Run o Managed Instance Groups en Google Cloud, entre otros. Cierre indicando que la práctica ayudará a redactar aportes para el foro sobre diferencias, ventajas, costos y seguridad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Instalación y preparación en Windows 11 Pro

::content::
Pasos previos:

* Instalar Python desde `python.org`.
* Marcar la opción “Add Python to PATH”.
* Instalar Visual Studio Code.
* Crear una carpeta llamada `bigdata_semana7_cloud`.
* Abrir la carpeta en VS Code.
* Abrir PowerShell dentro de VS Code.
* Verificar instalación:

`python --version`

* Crear el archivo:

`simulador_autoscaling.py`

<!--
Notas del presentador:
Guíe la preparación paso a paso. En Windows 11 Pro, lo más importante es asegurar que Python quede agregado al PATH. Si Python no se reconoce en PowerShell, el problema suele deberse a que no se marcó la opción “Add Python to PATH” durante la instalación o a que existe una instalación previa desde Microsoft Store que genera confusión. Recomiende descargar Python desde el sitio oficial y verificar con `python --version`. Si el comando no funciona, puede probarse `py --version`. En un ambiente institucional, algunos equipos pueden tener restricciones, por lo que conviene que el docente tenga una alternativa lista: ejecutar el código en un entorno en línea como Google Colab, siempre que haya conexión.

Explique que Visual Studio Code se usará como editor, pero no es obligatorio para comprender la práctica. También se podría usar IDLE, PyCharm Community, Thonny o cualquier editor de texto. Sin embargo, VS Code facilita abrir terminal, guardar archivos, revisar errores y copiar resultados. Pida a los estudiantes crear una carpeta de trabajo llamada `bigdata_semana7_cloud` para mantener ordenados los archivos. Dentro de esa carpeta se creará el archivo `simulador_autoscaling.py`.

Aclare que el código no requiere librerías externas como pandas, NumPy o matplotlib. Esta decisión reduce la fricción técnica y permite concentrarse en el concepto. Se usará la biblioteca estándar de Python, específicamente `math`, `csv` y `statistics`. La salida será visible en consola y también se guardará en un archivo CSV que puede abrirse con Excel, LibreOffice Calc o importarse luego en Power BI si se desea ampliar la actividad.

Durante la explicación, conecte cada paso técnico con el propósito académico. Crear un archivo, ejecutar un script y leer un CSV no es solo una tarea de programación: representa el ciclo básico de experimentación en analítica de datos. Se define un escenario, se implementa una lógica, se generan resultados, se interpretan y se formulan decisiones. Esta secuencia será útil para el foro, donde los estudiantes deben argumentar diferencias entre proveedores y mejores prácticas de seguridad.
-->

---
layout: slide-codigo
---

::title::
Código completo: `simulador_autoscaling.py`

::content::

```python {lines:true}
"""
Simulador de autoescalado multicloud para Big Data - Semana 7

Escenario:
Una tienda de comercio electrónico tiene picos de tráfico durante un evento
de ventas. El programa estima cuántas instancias se requieren por hora,
calcula costos aproximados por proveedor y genera un archivo CSV.

No usa servicios reales ni genera costos en la nube.
Solo utiliza librerías estándar de Python.
"""

import csv
import math
from statistics import mean


# -----------------------------
# 1. Parámetros del escenario
# -----------------------------

TRAFICO_POR_HORA = [
    120, 180, 260, 400, 650, 900,
    1500, 2300, 3800, 5200, 7600, 9800,
    12000, 10500, 8600, 6200, 4100, 2800,
    1900, 1300, 900, 600, 350, 200
]

CAPACIDAD_USUARIOS_POR_INSTANCIA = 800
INSTANCIAS_MINIMAS = 2
INSTANCIAS_MAXIMAS = 20

# Costos aproximados ficticios por instancia-hora.
# Se usan con fines didácticos, no como cotización real.
COSTO_POR_INSTANCIA_HORA = {
    "AWS": 0.096,
    "Azure": 0.102,
    "Google Cloud": 0.089
}


# -----------------------------
# 2. Funciones del simulador
# -----------------------------

def calcular_instancias_requeridas(usuarios_concurrentes: int) -> int:
    """
    Calcula el número de instancias necesarias para atender usuarios concurrentes.
    Aplica límites mínimos y máximos para simular una política de autoescalado.
    """
    instancias = math.ceil(usuarios_concurrentes / CAPACIDAD_USUARIOS_POR_INSTANCIA)
    instancias = max(INSTANCIAS_MINIMAS, instancias)
    instancias = min(INSTANCIAS_MAXIMAS, instancias)
    return instancias


def clasificar_carga(usuarios_concurrentes: int) -> str:
    """
    Clasifica la carga para facilitar la interpretación del escenario.
    """
    if usuarios_concurrentes < 1000:
        return "baja"
    if usuarios_concurrentes < 5000:
        return "media"
    if usuarios_concurrentes < 9000:
        return "alta"
    return "critica"


def estimar_costos(instancias: int) -> dict:
    """
    Calcula el costo por hora en cada proveedor cloud.
    """
    costos = {}
    for proveedor, costo_unitario in COSTO_POR_INSTANCIA_HORA.items():
        costos[proveedor] = round(instancias * costo_unitario, 4)
    return costos


def construir_reporte() -> list:
    """
    Construye una lista de resultados por hora.
    """
    reporte = []

    for hora, usuarios in enumerate(TRAFICO_POR_HORA):
        instancias = calcular_instancias_requeridas(usuarios)
        carga = clasificar_carga(usuarios)
        costos = estimar_costos(instancias)

        fila = {
            "hora": hora,
            "usuarios_concurrentes": usuarios,
            "nivel_carga": carga,
            "instancias_requeridas": instancias,
            "costo_aws": costos["AWS"],
            "costo_azure": costos["Azure"],
            "costo_google_cloud": costos["Google Cloud"]
        }

        reporte.append(fila)

    return reporte


def guardar_csv(reporte: list, nombre_archivo: str) -> None:
    """
    Guarda el reporte en un archivo CSV para análisis posterior.
    """
    campos = [
        "hora",
        "usuarios_concurrentes",
        "nivel_carga",
        "instancias_requeridas",
        "costo_aws",
        "costo_azure",
        "costo_google_cloud"
    ]

    with open(nombre_archivo, mode="w", newline="", encoding="utf-8") as archivo:
        escritor = csv.DictWriter(archivo, fieldnames=campos)
        escritor.writeheader()
        escritor.writerows(reporte)


def imprimir_resumen(reporte: list) -> None:
    """
    Muestra un resumen ejecutivo en consola.
    """
    total_aws = sum(fila["costo_aws"] for fila in reporte)
    total_azure = sum(fila["costo_azure"] for fila in reporte)
    total_google = sum(fila["costo_google_cloud"] for fila in reporte)

    pico_trafico = max(reporte, key=lambda fila: fila["usuarios_concurrentes"])
    promedio_usuarios = round(mean(fila["usuarios_concurrentes"] for fila in reporte), 2)
    promedio_instancias = round(mean(fila["instancias_requeridas"] for fila in reporte), 2)

    print("\nSIMULADOR DE AUTOESCALADO MULTICLOUD")
    print("-" * 50)
    print(f"Promedio de usuarios concurrentes: {promedio_usuarios}")
    print(f"Promedio de instancias requeridas: {promedio_instancias}")
    print(f"Hora de mayor tráfico: {pico_trafico['hora']}:00")
    print(f"Usuarios en el pico: {pico_trafico['usuarios_concurrentes']}")
    print(f"Instancias durante el pico: {pico_trafico['instancias_requeridas']}")
    print("\nCosto total estimado del día:")
    print(f"AWS: ${total_aws:.4f}")
    print(f"Azure: ${total_azure:.4f}")
    print(f"Google Cloud: ${total_google:.4f}")

    proveedor_menor_costo = min(
        {
            "AWS": total_aws,
            "Azure": total_azure,
            "Google Cloud": total_google
        },
        key={
            "AWS": total_aws,
            "Azure": total_azure,
            "Google Cloud": total_google
        }.get
    )

    print(f"\nProveedor con menor costo estimado: {proveedor_menor_costo}")
    print("\nInterpretación:")
    print(
        "El autoescalado permite aumentar capacidad durante picos de tráfico "
        "y reducir recursos en horas de baja demanda. En una arquitectura real, "
        "también deben evaluarse seguridad, cumplimiento, soporte, latencia, "
        "integración con datos y experiencia del equipo técnico."
    )


# -----------------------------
# 3. Ejecución principal
# -----------------------------

if __name__ == "__main__":
    reporte_autoscaling = construir_reporte()
    guardar_csv(reporte_autoscaling, "resultado_autoscaling.csv")
    imprimir_resumen(reporte_autoscaling)

    print("\nArchivo generado: resultado_autoscaling.csv")
```

<!--
Notas del presentador:
Explique el código por secciones. Primero, el bloque de parámetros representa el escenario. La lista `TRAFICO_POR_HORA` contiene veinticuatro valores, uno por cada hora del día. Los valores crecen hasta un pico y luego disminuyen, simulando el comportamiento típico de un evento comercial. La variable `CAPACIDAD_USUARIOS_POR_INSTANCIA` define cuántos usuarios concurrentes puede atender una instancia. Este número es ficticio y sirve para comprender la relación entre demanda y capacidad. En una arquitectura real, esa capacidad se determinaría mediante pruebas de carga, métricas de CPU, memoria, latencia, base de datos, red y experiencia de usuario.

Luego explique los límites de escalado. `INSTANCIAS_MINIMAS` evita que el sistema quede sin capacidad base. `INSTANCIAS_MAXIMAS` representa una restricción de presupuesto, cuota o diseño. En nubes reales, los límites máximos son importantes para controlar costos y evitar escalados descontrolados por errores, ataques o configuraciones incorrectas. La política de escalado no solo debe aumentar recursos; también debe proteger financieramente a la organización.

La función `calcular_instancias_requeridas` usa `math.ceil` porque no se pueden aprovisionar fracciones de instancia. Si el tráfico requiere 2.1 instancias, se necesitan 3. Después se aplican límites mínimos y máximos. La función `clasificar_carga` facilita interpretar si el tráfico es bajo, medio, alto o crítico. La función `estimar_costos` calcula un costo aproximado por proveedor. Insista en que esos valores son ficticios para fines didácticos y no deben presentarse como cotización real de AWS, Azure o Google Cloud. En una decisión profesional, se deben usar calculadoras oficiales y revisar precios actualizados por región, tipo de instancia y modelo de compra.

La función `construir_reporte` integra todo: recorre cada hora, calcula instancias, clasifica carga y estima costos. `guardar_csv` exporta los resultados para análisis posterior. `imprimir_resumen` produce una lectura ejecutiva: promedio de usuarios, pico de tráfico, instancias necesarias, costo total y proveedor con menor costo estimado. Cierre señalando que esta práctica muestra cómo una función cloud se traduce en lógica: observar demanda, aplicar política, ajustar capacidad, calcular impacto y tomar decisiones.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::
En PowerShell, dentro de la carpeta del proyecto:

`python simulador_autoscaling.py`

Verifique que aparezca:

* Resumen del simulador.
* Hora de mayor tráfico.
* Instancias requeridas en el pico.
* Costo estimado por proveedor.
* Proveedor con menor costo estimado.
* Mensaje de archivo generado.

Luego abra:

`resultado_autoscaling.csv`

Revise:

* Cómo cambian las instancias por hora.
* En qué momento se alcanza carga crítica.
* Cómo se modifica el costo total.
* Qué pasaría si cambia la capacidad por instancia.

<!--
Notas del presentador:
Acompañe la ejecución en vivo. Pida a los estudiantes que abran la terminal de PowerShell dentro de Visual Studio Code y se ubiquen en la carpeta donde guardaron el archivo. Si el archivo se llama distinto, el comando debe coincidir con el nombre real. El comando esperado es `python simulador_autoscaling.py`. Si aparece un error de sintaxis, revise que el código se haya copiado completo y que no falten comillas, paréntesis o indentación. Si aparece un error indicando que Python no se reconoce, verifique la instalación o pruebe con `py simulador_autoscaling.py`.

Una vez ejecutado, pida observar el resumen. Pregunte cuál fue la hora de mayor tráfico y cuántas instancias se necesitaron. Luego pida comparar los costos estimados por proveedor. Reitere que no son precios reales, sino valores simulados para razonar sobre costos. Esta aclaración es importante para evitar interpretaciones incorrectas. En un caso profesional, los precios se verifican con calculadoras oficiales y se complementan con factores como soporte, almacenamiento, transferencia, licencias, compromisos de uso, descuentos y necesidades regulatorias.

Después, indique que se abrió o generó el archivo `resultado_autoscaling.csv`. Puede abrirse con Excel, LibreOffice Calc o un editor de texto. Solicite que identifiquen filas donde el nivel de carga sea “crítica”. Pregunte qué ocurriría si se reduce la capacidad por instancia de 800 a 500 usuarios. Los estudiantes deberían anticipar que aumentará el número de instancias requeridas y, por tanto, el costo. Luego cambie `INSTANCIAS_MAXIMAS` de 20 a 10 y pregunte qué riesgo aparece. La respuesta esperada es que el sistema podría no atender adecuadamente la demanda pico, aunque el costo se controle.

Cierre vinculando con la nube real: el autoescalado no es solo una función técnica, sino una decisión de arquitectura que equilibra disponibilidad, rendimiento, costo y experiencia del usuario. Esta lectura ayuda a responder el foro con evidencia práctica.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y preguntas de análisis

::left::
Producto esperado:

* Script funcional en Python.
* Archivo CSV con resultados por hora.
* Lectura del pico de tráfico.
* Comparación de costos simulados.
* Explicación de cómo el autoescalado protege la experiencia del usuario.
* Conclusión breve para el foro.

::right::
Preguntas de análisis:

* ¿Qué variable impacta más el número de instancias?
* ¿Qué riesgo aparece si el máximo de instancias es muy bajo?
* ¿Por qué el menor costo no siempre implica la mejor plataforma?
* ¿Qué controles de seguridad faltan en una implementación real?
* ¿Cómo se relaciona esta práctica con AWS, Azure y Google Cloud?

<!--
Notas del presentador:
Use esta diapositiva para orientar la reflexión posterior a la ejecución. El producto esperado no debe limitarse a que el programa “corra”. En una clase de Big Data, el valor está en interpretar resultados. El script funcional demuestra una lógica de autoescalado; el CSV permite revisar el comportamiento por hora; el pico de tráfico muestra el momento de mayor exigencia; la comparación de costos simulados permite discutir economía cloud; la explicación final conecta con experiencia de usuario y continuidad de negocio.

Desarrolle la primera pregunta: ¿qué variable impacta más el número de instancias? La respuesta inmediata es el número de usuarios concurrentes, pero también influyen la capacidad por instancia, los límites mínimos y máximos, y la política de escalado. En nubes reales también influyen la latencia, la base de datos, el caché, los recursos estáticos, el balanceador, la eficiencia del código y los servicios externos. Esta pregunta ayuda a evitar una visión simplista de “más tráfico = más servidores”; en realidad, la arquitectura completa determina la capacidad.

La segunda pregunta aborda riesgo. Si el máximo de instancias es muy bajo, el sistema puede saturarse durante picos. Si es demasiado alto y no hay controles, puede generar costos inesperados. Esta tensión entre disponibilidad y costo es una de las decisiones centrales de cloud. La tercera pregunta invita a pensar en selección de proveedor. Un proveedor con menor costo estimado en la simulación no necesariamente es el mejor si no cumple regulaciones, no tiene región adecuada, no se integra con sistemas existentes o no cuenta con soporte apropiado.

La cuarta pregunta introduce seguridad. El script no implementa identidad, cifrado, auditoría, protección de datos, respaldo ni cumplimiento normativo. En una arquitectura real, esos elementos serían obligatorios, especialmente si se manejan datos personales o financieros. Finalmente, relacione con AWS, Azure y Google Cloud: cada proveedor ofrece servicios para escalar, monitorear y automatizar; la práctica representa la lógica común que luego se implementa con herramientas específicas de cada ecosistema.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Foro: aporte principal

::rightTitle::
Foro: retroalimentación y cierre

::left::
Estructura sugerida:

* Presentar brevemente el caso o código implementado.
* Explicar qué función cloud se simuló.
* Comparar AWS, Azure y Google Cloud en servicios.
* Comparar criterios de precios y soporte.
* Mencionar ventajas y límites de cada plataforma.
* Relacionar con Big Data y analítica.

Idea central:

El proveedor debe elegirse por ajuste al problema, no solo por popularidad.

::right::
Retroalimentación:

* Comentar si la comparación es clara.
* Agregar un criterio omitido: seguridad, costos, soporte, cumplimiento o escalabilidad.
* Formular una pregunta al equipo.

Conclusión:

* Sintetizar aprendizajes.
* Defender una decisión cloud contextual.
* Proponer buenas prácticas para nube híbrida.
* Cerrar con implicaciones para negocios y datos.

<!--
Notas del presentador:
Explique la dinámica del foro de acuerdo con la orientación de la semana. La participación es en equipo, mínimo tres y máximo cinco integrantes. Indique que la distribución de roles es flexible: un integrante puede realizar la participación principal, otros dos retroalimentar y otro cerrar con la conclusión. Si el equipo tiene cinco integrantes, pueden dividir retroalimentaciones o complementar el cierre. Lo importante es que todos participen, porque la evaluación depende de la interacción y no solo de una publicación aislada.

Para el aporte principal, recomiende una estructura clara. Primero, describir el código implementado o la simulación desarrollada. En esta clase se propone el autoescalado, pero los estudiantes podrían adaptar la idea a otra función cloud, como almacenamiento de objetos, procesamiento por lotes, serverless o análisis de datos. Segundo, explicar qué problema empresarial resuelve. Tercero, comparar AWS, Azure y Google Cloud en términos de servicios. Aquí no se necesita listar decenas de productos; basta con seleccionar categorías relevantes para el caso: cómputo, base de datos, analítica, IA, seguridad y monitoreo.

Luego deben comparar precios y soporte. Aclare que no se deben inventar cifras reales si no fueron verificadas. Pueden hablar de modelos de cobro: pago por uso, instancia-hora, almacenamiento, consultas, transferencia, soporte empresarial, descuentos por compromiso o costos de administración. En soporte, pueden considerar documentación, comunidad, planes oficiales, experiencia del equipo y disponibilidad de especialistas.

Para la retroalimentación, enfatice que no debe limitarse a frases como “estoy de acuerdo”. Una buena retroalimentación agrega un criterio, corrige una omisión, pregunta por seguridad, discute costos o propone una mejora técnica. Para la conclusión, el equipo debe sintetizar una postura: por ejemplo, una empresa con alta variabilidad de tráfico y pocos administradores puede preferir servicios administrados y autoescalado; una organización regulada puede requerir nube híbrida; una empresa centrada en analítica puede priorizar data warehouse y pipelines administrados. Cierre invitando a que el foro sea argumentativo, respetuoso y basado en evidencias.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
Cada equipo comparte en máximo un minuto:

* Qué proveedor elegiría para el caso de comercio electrónico.
* Qué servicio o categoría sería prioritaria.
* Qué riesgo técnico o de seguridad debe mitigarse.
* Qué evidencia del simulador respalda la decisión.
* Qué pregunta llevaría al foro.

Criterio de escucha:

* Identificar coincidencias.
* Detectar diferencias justificadas.
* Relacionar decisiones con costo, escalabilidad, soporte y cumplimiento.

<!--
Notas del presentador:
La socialización debe ser breve y enfocada. Después de la práctica, los equipos pueden tener interpretaciones diferentes. Algunos priorizarán menor costo; otros, facilidad de integración; otros, seguridad o analítica. Permita que compartan en máximo un minuto por equipo para mantener el tiempo. Si la clase es numerosa, seleccione tres o cuatro equipos y pida a los demás publicar su conclusión en el chat. La socialización no busca uniformidad, sino argumentación.

Oriente la primera pregunta: ¿qué proveedor elegiría el equipo para el caso de comercio electrónico? La respuesta puede variar. AWS podría elegirse por madurez del ecosistema y opciones amplias de escalado, cómputo y bases de datos. Azure podría ser adecuado si la empresa ya tiene infraestructura Microsoft, identidades corporativas y aplicaciones integradas con herramientas empresariales. Google Cloud podría destacarse si el foco del negocio está en analítica avanzada, BigQuery, machine learning y procesamiento de datos. Lo fundamental es que el equipo justifique con criterios y no con preferencias personales.

La segunda pregunta pide servicio o categoría prioritaria. En el caso de picos de tráfico, deben aparecer cómputo escalable, balanceo de carga, monitoreo, caché, base de datos escalable y posiblemente CDN. Si alguien menciona solo almacenamiento, pregunte cómo eso resolvería usuarios concurrentes. Si alguien menciona serverless, explore cuándo tendría sentido: funciones de eventos, procesamiento asincrónico, microservicios o cargas intermitentes.

La tercera pregunta introduce riesgo. Puede ser saturación de base de datos, costos inesperados, mala configuración de permisos, pérdida de datos, incumplimiento regulatorio, latencia internacional o dependencia de proveedor. La cuarta pregunta exige usar evidencia del simulador: pico de usuarios, instancias requeridas, costos estimados, límites de escalado. Finalmente, pida una pregunta para el foro. Esto ayuda a que la clase derive en una participación académica más profunda, no en respuestas superficiales.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Azure vs AWS vs GCP | ¿Por qué EMPEZAR a estudiar el CLOUD? | ¿Cuál deberías APRENDER? - Recursos

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/w054RS4-l7Y?si=IM3gc9_-Jksa0csU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Explique que los videos son recursos complementarios y no reemplazan el desarrollo de clase. Se proponen tres tipos de videos, cada uno con un propósito distinto. El primero debe servir como introducción comparativa entre AWS, Azure y Google Cloud. Idealmente debe ser breve, claro y en español, con una explicación general de qué ofrece cada proveedor. Este video puede usarse antes de la clase como recurso de preparación o al inicio si el grupo necesita una contextualización visual rápida.

El segundo video debe enfocarse en autoescalado y elasticidad. Este es el recurso más directamente conectado con la evaluación y la práctica. Debe mostrar cómo la nube puede aumentar o disminuir capacidad según demanda. Si se encuentra un video con animaciones sencillas o un ejemplo de comercio electrónico, puede ayudar mucho a los estudiantes que aún no visualizan cómo se atienden picos de tráfico. Use este video antes de la práctica para reforzar el sentido del simulador.

El tercer video debe abordar BigQuery o data warehouse en la nube. Conviene que explique que BigQuery es un servicio administrado para análisis de grandes volúmenes de datos mediante SQL o GoogleSQL. Esto ayuda a conectar la semana con Big Data y no solo con infraestructura cloud. Si no se encuentra un video verificado de menos de cinco minutos, mantenga el espacio marcado para agregar enlace verificado. Es preferible dejar el marcador que inventar enlaces o usar videos demasiado largos.

Indique que los criterios de curaduría son académicos: duración razonable, claridad conceptual, pertinencia para pregrado, relación directa con la temática, ausencia de publicidad excesiva y calidad técnica aceptable. También se debe verificar que el enlace funcione y que el contenido no esté desactualizado de forma crítica. En cloud, los nombres de servicios cambian; por ejemplo, AI Platform pasó a Vertex AI. Por tanto, un video puede ser útil aunque tenga un nombre anterior, siempre que el docente haga la aclaración correspondiente durante la clase.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué significa elasticidad en cloud ☁?

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/fgk_heW9cDw?si=pXokCoR4QRzQLahR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Explique que los videos son recursos complementarios y no reemplazan el desarrollo de clase. Se proponen tres tipos de videos, cada uno con un propósito distinto. El primero debe servir como introducción comparativa entre AWS, Azure y Google Cloud. Idealmente debe ser breve, claro y en español, con una explicación general de qué ofrece cada proveedor. Este video puede usarse antes de la clase como recurso de preparación o al inicio si el grupo necesita una contextualización visual rápida.

El segundo video debe enfocarse en autoescalado y elasticidad. Este es el recurso más directamente conectado con la evaluación y la práctica. Debe mostrar cómo la nube puede aumentar o disminuir capacidad según demanda. Si se encuentra un video con animaciones sencillas o un ejemplo de comercio electrónico, puede ayudar mucho a los estudiantes que aún no visualizan cómo se atienden picos de tráfico. Use este video antes de la práctica para reforzar el sentido del simulador.

El tercer video debe abordar BigQuery o data warehouse en la nube. Conviene que explique que BigQuery es un servicio administrado para análisis de grandes volúmenes de datos mediante SQL o GoogleSQL. Esto ayuda a conectar la semana con Big Data y no solo con infraestructura cloud. Si no se encuentra un video verificado de menos de cinco minutos, mantenga el espacio marcado para agregar enlace verificado. Es preferible dejar el marcador que inventar enlaces o usar videos demasiado largos.

Indique que los criterios de curaduría son académicos: duración razonable, claridad conceptual, pertinencia para pregrado, relación directa con la temática, ausencia de publicidad excesiva y calidad técnica aceptable. También se debe verificar que el enlace funcione y que el contenido no esté desactualizado de forma crítica. En cloud, los nombres de servicios cambian; por ejemplo, AI Platform pasó a Vertex AI. Por tanto, un video puede ser útil aunque tenga un nombre anterior, siempre que el docente haga la aclaración correspondiente durante la clase.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué es el escalado automático en la nube ☁ ?

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/tfZR2qtzEYE?si=1QbVFFhYPam_O3mS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Explique que los videos son recursos complementarios y no reemplazan el desarrollo de clase. Se proponen tres tipos de videos, cada uno con un propósito distinto. El primero debe servir como introducción comparativa entre AWS, Azure y Google Cloud. Idealmente debe ser breve, claro y en español, con una explicación general de qué ofrece cada proveedor. Este video puede usarse antes de la clase como recurso de preparación o al inicio si el grupo necesita una contextualización visual rápida.

El segundo video debe enfocarse en autoescalado y elasticidad. Este es el recurso más directamente conectado con la evaluación y la práctica. Debe mostrar cómo la nube puede aumentar o disminuir capacidad según demanda. Si se encuentra un video con animaciones sencillas o un ejemplo de comercio electrónico, puede ayudar mucho a los estudiantes que aún no visualizan cómo se atienden picos de tráfico. Use este video antes de la práctica para reforzar el sentido del simulador.

El tercer video debe abordar BigQuery o data warehouse en la nube. Conviene que explique que BigQuery es un servicio administrado para análisis de grandes volúmenes de datos mediante SQL o GoogleSQL. Esto ayuda a conectar la semana con Big Data y no solo con infraestructura cloud. Si no se encuentra un video verificado de menos de cinco minutos, mantenga el espacio marcado para agregar enlace verificado. Es preferible dejar el marcador que inventar enlaces o usar videos demasiado largos.

Indique que los criterios de curaduría son académicos: duración razonable, claridad conceptual, pertinencia para pregrado, relación directa con la temática, ausencia de publicidad excesiva y calidad técnica aceptable. También se debe verificar que el enlace funcione y que el contenido no esté desactualizado de forma crítica. En cloud, los nombres de servicios cambian; por ejemplo, AI Platform pasó a Vertex AI. Por tanto, un video puede ser útil aunque tenga un nombre anterior, siempre que el docente haga la aclaración correspondiente durante la clase.
-->

---
layout: slide-08-titulo-texto
---

::title::
Dudas y cierre académico

::content::
Ideas clave de la semana:

* La nube permite escalar, integrar y analizar datos con mayor flexibilidad.
* AWS, Azure y Google Cloud ofrecen servicios equivalentes, pero con fortalezas distintas.
* El mejor proveedor depende del problema, el presupuesto, la regulación y el equipo.
* Big Data requiere arquitectura: ingesta, almacenamiento, procesamiento, analítica y gobierno.
* Seguridad, cumplimiento y costos deben diseñarse desde el inicio.
* El autoescalado es esencial para cargas variables y picos de tráfico.

Espacio final:

* Preguntas conceptuales.
* Preguntas sobre la práctica.
* Orientación para el foro.

<!--
Notas del presentador:
Utilice esta diapositiva para resolver dudas sin extender demasiado la sesión. Recuerde que la resolución de preguntas debe mantenerse dentro de los últimos quince minutos, y en esta planificación se reservan cinco minutos finales después de la socialización. Si hay muchas preguntas, priorice las que afecten la comprensión de la evaluación, la práctica o el foro. Las preguntas muy específicas sobre precios reales, configuración avanzada o cuentas cloud pueden orientarse a consulta posterior con documentación oficial, porque los valores y paneles cambian con frecuencia.

Sintetice los aprendizajes. Primero, la nube aporta flexibilidad, pero no elimina la necesidad de diseñar. Segundo, AWS, Azure y Google Cloud compiten y se solapan en muchas categorías, pero cada uno tiene fortalezas y ecosistemas propios. Tercero, la elección de proveedor debe responder al caso: una tienda en línea con picos de tráfico requiere autoescalado; una empresa con alta analítica requiere data warehouse y pipelines; una organización financiera requiere seguridad, cumplimiento y posiblemente nube híbrida; una aplicación web corporativa puede beneficiarse de PaaS y herramientas integradas.

Refuerce la práctica. El simulador mostró una lógica básica: la demanda cambia por hora, las instancias deben ajustarse, los costos se acumulan y los límites de escalado importan. En una arquitectura real, habría monitoreo, balanceadores, bases de datos, caché, colas, CDN, alertas, políticas de identidad, cifrado y auditoría. La práctica es un modelo simplificado que permite discutir decisiones sin depender de cuentas cloud ni costos.

Oriente el foro. Pida que el aporte no sea una copia de definiciones, sino una reflexión aplicada. Deben mencionar qué función cloud implementaron o simularon, comparar proveedores en servicios, precios y soporte, y proponer buenas prácticas de seguridad para nube híbrida. Sugiera que usen ejemplos de la práctica: pico de tráfico, límites, costos y riesgos. Cierre agradeciendo la participación y dejando claro que las dudas pueden retomarse en los canales académicos definidos por el curso.
-->

---
layout: slide-12-cierre
---

::title::
Cierre institucional

::content::
Gracias por su participación en la Open Class de la semana 7.

Recuerden:

* Revisar los materiales del aula virtual.
* Participar oportunamente en el foro “Soluciones cloud: transformando negocios y optimizando recursos”.
* Coordinar roles dentro del equipo.
* Sustentar sus aportes con argumentos técnicos y ejemplos.
* Diligenciar la Encuesta de Percepción Estudiantil.

Nos vemos en la próxima sesión.

<!--
Notas del presentador:
Cierre la sesión con tono institucional y académico. Agradezca la participación y reconozca el esfuerzo de los estudiantes durante la actividad práctica y la socialización. Recuérdeles que la Open Class es un espacio de apoyo y profundización, pero no sustituye la revisión completa del aula virtual, las lecturas, las orientaciones del foro ni las instrucciones específicas de evaluación. Invite a revisar nuevamente los conceptos trabajados: AWS, Azure, Google Cloud, autoescalado, Dataproc, BigQuery, App Service, RDS, Aurora, bases orientadas a columnas, nube híbrida, cumplimiento normativo y serverless.

Insista en la organización del foro. Como la participación es en equipo, los estudiantes deben coordinar roles con anticipación. Un integrante puede realizar el aporte principal, otros pueden retroalimentar y otro puede construir la conclusión. Si el equipo tiene más integrantes, pueden distribuir comentarios o complementar el análisis. Lo importante es que todos participen y que las intervenciones no sean repetitivas. Una retroalimentación válida debe agregar valor: ampliar una idea, cuestionar un criterio, aportar un ejemplo, conectar con seguridad o costos, o proponer una mejora.

Recuerde que el foro pide generar un código que implemente alguna función de soluciones cloud. La práctica de autoescalado puede servir como punto de partida. Los estudiantes pueden adaptarla, modificar parámetros, cambiar costos simulados, generar nuevos escenarios o explicar cómo se traduciría en AWS, Azure o Google Cloud. También deben responder las preguntas sobre diferencias y ventajas entre proveedores, así como buenas prácticas para seguridad en nube híbrida.

Finalmente, haga el recordatorio de la Encuesta de Percepción Estudiantil. Explique que este instrumento permite valorar la experiencia académica y aportar al mejoramiento continuo de los cursos y espacios de acompañamiento. Mantenga un tono positivo: la encuesta no es un trámite aislado, sino una oportunidad para que la voz estudiantil contribuya a fortalecer la calidad del proceso formativo. Despídase cordialmente y deje abierta la posibilidad de continuar resolviendo inquietudes por los canales institucionales definidos.
-->
