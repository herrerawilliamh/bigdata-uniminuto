---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 8

::date::
Junio 24 de 2026

<!--
Notas del presentador:
Dé la bienvenida a los estudiantes con un tono cercano, académico y orientado a la aplicación. Explique que esta sesión cierra el recorrido del curso conectando Big Data con plataformas de computación en la nube, servicios de analítica, machine learning, serverless, recuperación ante desastres, seguridad y toma de decisiones empresariales. La idea no es memorizar marcas, sino comprender qué problema resuelve cada servicio y cómo elegir una alternativa tecnológica según el caso de negocio.

Presente la semana como un escenario de integración. Durante el curso se han revisado conceptos como volumen, variedad, velocidad, almacenamiento distribuido, procesamiento, análisis y visualización. En esta semana se observa cómo esos conceptos se materializan en plataformas reales como AWS, Microsoft Azure y Google Cloud. Aclare que la nube no elimina la necesidad de diseñar bien la arquitectura; por el contrario, exige comprender costos, seguridad, escalabilidad, disponibilidad, gobierno de datos y responsabilidades compartidas.

Conecte la sesión con la evaluación semanal. Indique que varias preguntas se centran en reconocer servicios concretos: AWS, Azure Site Recovery, funciones serverless, BigQuery, SageMaker y AWS Elemental MediaConvert. Sin embargo, el enfoque de la clase será conceptual: entender por qué esos servicios existen, qué necesidad atienden y cómo se relacionan con soluciones de Big Data en organizaciones reales.

Explique la ruta de trabajo: primero habrá una activación rápida, luego desarrollo conceptual, ejemplos aplicados, revisión de claves para la evaluación, práctica guiada en Python sobre predicción de demanda y selección de arquitectura, socialización breve, resolución de dudas y cierre institucional. Subraye que la práctica se realizará de manera local en Windows 11 Pro con herramientas libres, sin necesidad de crear cuentas en la nube.
-->

---
layout: slide-02-titulo
---

::title::
Plataformas cloud, analítica y servicios inteligentes

---
layout: slide-04-imagen-derecha
---

::title::
Big Data ya no vive solo en servidores locales

::image:: 
<img src="/imagenes/bigdata_semana8_ecosistema_cloud.png" alt="Imagen de apoyo sobre ecosistema cloud para Big Data" />

::content::
Las organizaciones modernas combinan datos transaccionales, sensores, aplicaciones, redes sociales, multimedia, APIs y modelos inteligentes.

La nube permite convertir esa complejidad en servicios escalables: almacenamiento, procesamiento, analítica, inteligencia artificial, seguridad, automatización y continuidad del negocio.

<!--
Notas del presentador:
Comience esta diapositiva con una pregunta sencilla: ¿dónde están hoy los datos de una organización? Permita que los estudiantes mencionen ejemplos: bases de datos internas, archivos de Excel, formularios web, sistemas contables, redes sociales, sensores IoT, videos, plataformas educativas, comercio electrónico, aplicaciones móviles o sistemas de atención al cliente. Luego explique que el problema de Big Data no se limita a tener “muchos datos”; también consiste en integrar fuentes distintas, analizarlas oportunamente, protegerlas y convertirlas en decisiones.

Explique que durante muchos años las empresas dependían principalmente de centros de datos propios. Eso implicaba comprar servidores, instalar almacenamiento, configurar redes, contratar personal especializado, estimar capacidad futura y asumir costos aunque los recursos no se usaran todo el tiempo. La nube cambia esa lógica porque ofrece recursos bajo demanda y servicios administrados. Sin embargo, aclare que “subir a la nube” no significa resolver automáticamente todos los problemas. Si los datos están mal gobernados, si no hay estrategia de seguridad, si no se controlan costos o si se eligen servicios sin criterio, la nube puede aumentar la complejidad.

Relacione el tema con Big Data: una arquitectura moderna puede incluir almacenamiento de objetos para datos crudos, data lakes, data warehouses, motores de procesamiento distribuido, colas de eventos, funciones serverless, modelos de machine learning, tableros analíticos y mecanismos de recuperación. Cada componente cumple una función dentro de un flujo de valor.

Mencione que las principales plataformas de nube han creado servicios especializados para estos escenarios. AWS se presenta como una nube ampliamente adoptada y con una infraestructura global extensa. :contentReference[oaicite:1]{index=1} Google Cloud describe BigQuery como una plataforma de datos completamente administrada y serverless para análisis. :contentReference[oaicite:2]{index=2} Microsoft documenta Azure Site Recovery como servicio orientado a replicación y recuperación de cargas de trabajo. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
¿Qué nube elegiría?

::left::
Para estudiantes:

* Lea el caso asignado.
* Identifique la necesidad principal.
* Proponga una categoría de servicio.
* Comparta una respuesta breve en el chat.

Casos rápidos:

* Analizar millones de registros de ventas.
* Recuperar una aplicación crítica ante fallos.
* Ejecutar código sin administrar servidores.
* Entrenar un modelo predictivo.
* Convertir miles de videos a varios formatos.

::right::
Para el docente:

* Forme respuestas por categorías.
* No busque respuestas perfectas.
* Pregunte: ¿qué palabra clave orientó la elección?
* Cierre conectando cada caso con servicios reales.

Duración sugerida:

5 minutos de lectura y respuesta.

5 minutos de socialización.

Máximo 15 minutos.

<!--
Notas del presentador:
Explique la actividad como una activación de saberes previos, no como una evaluación formal. La intención es que todos participen rápidamente y que el grupo empiece a pensar como arquitecto de soluciones. Indique que no necesitan conocer todavía el nombre exacto del servicio. Lo importante es reconocer la necesidad: análisis, recuperación, serverless, machine learning o procesamiento multimedia.

Puede proyectar los cinco casos y pedir que cada estudiante elija uno. Si el grupo es grande, pida respuestas por chat usando un formato corto: “Caso 1: analítica”, “Caso 2: recuperación ante desastres”, “Caso 3: serverless”, “Caso 4: machine learning”, “Caso 5: transcodificación”. Si el grupo es pequeño, permita participación oral. Evite convertir la actividad en una discusión extensa; el objetivo es preparar el terreno para la teoría.

Durante la socialización, agrupe las respuestas. Para analizar millones de registros de ventas, la categoría probable es data warehouse o analítica masiva. Para recuperar una aplicación crítica ante fallos, la categoría es alta disponibilidad, replicación y recuperación ante desastres. Para ejecutar código sin administrar servidores, la categoría es serverless. Para entrenar un modelo predictivo, la categoría es machine learning administrado. Para convertir miles de videos, la categoría es procesamiento multimedia o transcodificación.

Después de agrupar, conecte con servicios específicos que aparecerán en la evaluación: BigQuery para análisis de grandes volúmenes en Google Cloud, Azure Site Recovery para continuidad y recuperación, AWS Lambda o Azure Functions para serverless, SageMaker para construir y entrenar modelos en AWS, y AWS Elemental MediaConvert para transcodificación de video. Aclare que otras plataformas tienen equivalentes, por lo que el razonamiento conceptual es más importante que la memorización.

Cierre la actividad con una idea clave: las preguntas de evaluación suelen describir un problema de negocio y esperan que el estudiante reconozca la familia de servicio adecuada. Esa lectura crítica será útil durante toda la sesión.
-->

---
layout: slide-08-titulo-texto
---

::title::
Cloud computing aplicado a Big Data

::content::
Cloud computing es el uso de recursos tecnológicos bajo demanda a través de internet.

En Big Data, la nube permite:

* Almacenar datos masivos sin comprar infraestructura física desde el inicio.
* Procesar cargas variables.
* Integrar servicios de analítica y machine learning.
* Automatizar despliegues.
* Mejorar disponibilidad y recuperación.
* Colaborar entre equipos distribuidos.

<!--
Notas del presentador:
Desarrolle el concepto de cloud computing desde una perspectiva práctica. Explique que la nube no es “un computador de otra persona” en sentido simplista, aunque esa frase ayuda a iniciar la conversación. La nube es un modelo de provisión de recursos tecnológicos que permite acceder a cómputo, almacenamiento, redes, bases de datos, analítica, inteligencia artificial y seguridad mediante servicios administrados y escalables. La organización consume esos recursos de acuerdo con sus necesidades, y el proveedor se encarga de una parte importante de la infraestructura física y operativa.

Conecte esta idea con Big Data. Cuando una empresa trabaja con grandes volúmenes de datos, sus necesidades pueden cambiar rápidamente. Un día puede requerir almacenar terabytes de datos históricos; otro día puede necesitar procesar información de una campaña comercial; otro día puede entrenar un modelo predictivo; y luego puede reducir el consumo. En un centro de datos tradicional, anticipar esa capacidad exige inversión y planeación compleja. En la nube, la elasticidad permite ajustar recursos con mayor rapidez.

Explique también que la nube facilita la colaboración. Equipos de datos, desarrollo, operaciones, seguridad y negocio pueden trabajar sobre servicios compartidos, con permisos diferenciados y trazabilidad. Esto no significa que la colaboración ocurra automáticamente; se requieren buenas prácticas de gobierno, documentación, control de accesos y definición de responsabilidades.

Mencione que existen modelos de servicio. Infraestructura como servicio permite alquilar máquinas virtuales, redes y almacenamiento. Plataforma como servicio ofrece entornos administrados para bases de datos, aplicaciones o analítica. Software como servicio entrega aplicaciones completas. Serverless abstrae aún más la infraestructura y permite ejecutar funciones o consultas sin administrar servidores.

Concluya señalando que Big Data en la nube combina tres decisiones: dónde se almacenan los datos, cómo se procesan y cómo se convierten en valor. La plataforma elegida debe responder a esas decisiones sin descuidar seguridad, costos y continuidad.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Términos clave

::rightTitle::
Pregunta orientadora

::left::

* IaaS: infraestructura bajo demanda.
* PaaS: plataforma administrada.
* SaaS: software listo para usar.
* Serverless: ejecución sin administrar servidores.
* Data warehouse: análisis estructurado.
* Data lake: almacenamiento flexible.
* Alta disponibilidad: reducción de interrupciones.
* Recuperación ante desastres: continuidad después de fallos.

::right::
Para cada término pregunte:

¿Qué problema resuelve?

¿Qué responsabilidad conserva la organización?

¿Qué responsabilidad asume el proveedor cloud?

¿Qué costo, riesgo o dependencia puede aparecer?

<!--
Notas del presentador:
Use esta diapositiva para ordenar el vocabulario de la semana. Explique que uno de los errores comunes en el aprendizaje de cloud es mezclar términos. IaaS, PaaS, SaaS y serverless no son marcas, sino modelos de responsabilidad. En infraestructura como servicio, la organización tiene más control pero también más tareas: sistema operativo, parches, configuración, escalado y seguridad de la instancia. En plataforma como servicio, el proveedor administra más capas y el equipo se concentra en la aplicación o el dato. En software como servicio, la organización consume una aplicación completa. En serverless, el equipo despliega funciones o consultas y el proveedor gestiona la infraestructura de ejecución.

Luego explique data warehouse y data lake. Un data warehouse está orientado a análisis estructurado, consultas, indicadores y decisiones empresariales. Suele organizar datos limpios, modelados y listos para explotación. Un data lake almacena datos en formatos diversos, muchas veces en estado crudo o semiprocesado, para permitir análisis posteriores, ciencia de datos o exploración. En arquitecturas modernas, ambos pueden coexistir.

Aclare los conceptos de alta disponibilidad y recuperación ante desastres. Alta disponibilidad busca que un servicio siga funcionando frente a fallos parciales. Recuperación ante desastres se centra en restaurar operación cuando ocurre un evento grave: caída regional, pérdida de infraestructura, desastre físico o error crítico. Aquí aparecen conceptos como replicación, failover, RTO y RPO. RTO se refiere al tiempo objetivo para recuperar el servicio. RPO se refiere a la cantidad máxima de datos que la organización está dispuesta a perder medida en tiempo.

Conecte con la responsabilidad compartida. El proveedor cloud protege la infraestructura física y ofrece mecanismos de seguridad, pero la organización debe configurar accesos, clasificar datos, cifrar información, definir respaldos, monitorear costos y capacitar al personal. Esta idea será útil para responder preguntas de seguridad y migración.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Tres grandes plataformas: AWS, Azure y Google Cloud

::image:: 
<img src="/imagenes/bigdata_semana8_multicloud.png" alt="Imagen de apoyo sobre ecosistema multicloud para Big Data" />

::content::
AWS suele asociarse con amplitud de servicios, madurez de mercado e infraestructura global.

Azure se integra fuertemente con entornos Microsoft, identidades empresariales y continuidad de negocio.

Google Cloud destaca en analítica de datos, BigQuery, inteligencia artificial y ecosistema de datos.

La decisión depende del caso, no de la popularidad.

<!--
Notas del presentador:
Explique que AWS, Azure y Google Cloud son plataformas líderes, pero que ninguna es “la mejor” en todos los contextos. La selección debe partir del problema de negocio, las capacidades del equipo, los sistemas existentes, la regulación, el presupuesto, la estrategia de datos y el nivel de dependencia aceptable. En una empresa con ecosistema Microsoft consolidado, Azure puede ofrecer ventajas por integración con Active Directory, Microsoft 365, Power BI y servicios empresariales. En una organización con énfasis fuerte en analítica y grandes consultas SQL, Google Cloud puede ser atractivo por BigQuery. En una startup o empresa que busca amplitud de servicios y madurez de infraestructura, AWS puede ser una alternativa robusta.

Mencione que AWS fue lanzado en 2006 con la intención de replantear el acceso a infraestructura tecnológica, lo que ayuda a entender por qué muchas evaluaciones lo asocian con haber sido una de las primeras plataformas de nube a gran escala. :contentReference[oaicite:4]{index=4} Aun así, evite presentar la historia como único criterio de decisión. La madurez importa, pero también importan soporte, costos, contratos, disponibilidad regional, cumplimiento normativo y talento disponible.

Explique que en la vida real muchas organizaciones adoptan estrategias multicloud o híbridas. Multicloud significa usar más de un proveedor de nube. Híbrido significa combinar nube pública con infraestructura local o privada. Estas estrategias pueden reducir dependencia de un proveedor, pero también aumentan complejidad operativa. Para estudiantes de Big Data, esto implica aprender principios transferibles: almacenamiento, procesamiento, seguridad, calidad de datos, monitoreo y gobierno.

Cierre con una idea aplicada: cuando una pregunta de evaluación menciona “primera en lanzar servicios de computación en la nube y mayor cuota de mercado”, el estudiante debe identificar el contexto histórico y comercial. Pero cuando una empresa real selecciona nube, debe realizar una evaluación técnica, económica y organizacional más amplia.
-->

---
layout: slide-08-titulo-texto
---

::title::
Del origen a la decisión

::content::
Un flujo típico de Big Data en la nube incluye:

1. Fuentes de datos.
2. Ingesta por lotes o en tiempo real.
3. Almacenamiento crudo y procesado.
4. Procesamiento y transformación.
5. Analítica descriptiva, predictiva o prescriptiva.
6. Visualización y toma de decisiones.
7. Seguridad, monitoreo y gobierno transversal.

<!--
Notas del presentador:
Describa la arquitectura como una cadena de valor. Los datos por sí solos no generan impacto; generan impacto cuando se capturan, se integran, se limpian, se analizan y se transforman en acciones. El primer componente son las fuentes: bases de datos transaccionales, sensores, aplicaciones móviles, archivos CSV, logs, redes sociales, plataformas educativas, sistemas de ventas o contenidos multimedia. Cada fuente tiene estructura, frecuencia, calidad y sensibilidad distintas.

El segundo componente es la ingesta. La ingesta por lotes sirve cuando se cargan datos periódicamente, por ejemplo al final del día. La ingesta en tiempo real o streaming se usa cuando el valor depende de reaccionar rápidamente, por ejemplo fraude, monitoreo de sensores o seguimiento logístico. Luego aparece el almacenamiento. Los datos crudos pueden ir a un data lake, mientras los datos estructurados y listos para análisis pueden ir a un data warehouse.

El procesamiento transforma los datos. Puede incluir limpieza, normalización, agregación, enriquecimiento, unión de fuentes y creación de variables. En Big Data, este procesamiento puede ejecutarse en motores distribuidos, servicios administrados o funciones serverless. Después viene la analítica. La analítica descriptiva responde qué pasó; la diagnóstica busca explicar por qué pasó; la predictiva estima qué podría pasar; y la prescriptiva sugiere qué acción tomar.

La visualización conecta el análisis con la decisión. Un tablero no debe ser un adorno, sino una herramienta para priorizar acciones. Por ejemplo, si un modelo predice alta demanda de envíos en una zona, la empresa puede reasignar vehículos o personal.

Finalmente, subraye que seguridad, monitoreo y gobierno no son etapas finales, sino capas transversales. Desde el origen hasta la visualización se debe controlar acceso, cifrado, calidad, linaje, costos, cumplimiento y disponibilidad. Sin estas capas, una arquitectura cloud puede ser técnicamente potente pero organizacionalmente riesgosa.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Serverless: ejecutar sin administrar servidores

::image:: 
<img src="/imagenes/bigdata_semana8_serverless.png" alt="Imagen de apoyo sobre arquitectura serverless y eventos de datos" />

::content::
Serverless permite ejecutar código o consultas sin gestionar directamente servidores.

Ejemplos de servicios:

* AWS Lambda.
* Azure Functions.
* Google Cloud Functions.
* Oracle Functions.

En Big Data se usa para automatizar tareas, responder a eventos, procesar archivos, activar flujos y reducir carga operativa.

<!--
Notas del presentador:
Explique serverless como un cambio de responsabilidad. No significa que no existan servidores; significa que el equipo de desarrollo no administra directamente esos servidores. El proveedor cloud se encarga de aprovisionar, escalar, mantener y ejecutar la infraestructura necesaria para correr una función o proceso. El usuario se concentra en el código, el evento que lo activa y el resultado esperado.

Use un ejemplo sencillo. Suponga que una empresa recibe archivos CSV de ventas cada hora. En un enfoque tradicional, podría mantener un servidor encendido permanentemente esperando archivos. En un enfoque serverless, cuando llega un archivo al almacenamiento, se activa una función que valida el archivo, limpia datos, registra errores y mueve el resultado a una zona procesada. La función se ejecuta solo cuando se necesita. Esto puede reducir costos y simplificar operación, especialmente en cargas intermitentes.

Conecte con la evaluación. Una pregunta pregunta por servicios de computación sin servidor y menciona opciones como Oracle Functions, Google Cloud Functions, Azure Functions y AWS Lambda. Explique que todos pertenecen a la familia serverless, aunque la pregunta puede estar formulada para reconocer una oferta específica. AWS describe Lambda como un servicio de cómputo serverless que permite ejecutar código sin aprovisionar ni administrar servidores. :contentReference[oaicite:5]{index=5} La documentación de AWS también señala que Lambda escala automáticamente y opera con pago por uso. :contentReference[oaicite:6]{index=6}

Aclare beneficios y límites. Serverless es útil para eventos, automatización, APIs ligeras, procesamiento de archivos y tareas de integración. Pero no siempre es ideal para procesos largos, dependencias muy pesadas, baja latencia extrema o cargas que requieren control fino del entorno. Además, puede generar dependencia de proveedor si se usan servicios muy específicos.

Cierre con una pregunta: si una organización quiere reducir administración de infraestructura, responder a eventos y escalar automáticamente, ¿qué familia de servicios debería considerar? La respuesta conceptual es serverless.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Analítica avanzada: BigQuery, Redshift y Synapse

::image:: 
<img src="/imagenes/bigdata_semana8_datawarehouse.png" alt="Imagen de apoyo sobre data warehouse cloud y analítica de datos" />

::content::
Un data warehouse cloud permite consultar grandes volúmenes de datos con enfoque analítico.

Servicios relacionados:

* Google BigQuery.
* Amazon Redshift.
* Azure Synapse Analytics.
* Snowflake.

La clave es convertir datos integrados en preguntas de negocio respondibles.

<!--
Notas del presentador:
Explique que una organización puede tener muchos datos almacenados y aun así no poder analizarlos bien. El valor de un data warehouse está en organizar los datos para consultas, indicadores, segmentaciones, tendencias y análisis empresarial. A diferencia de una base de datos transaccional, que se optimiza para registrar operaciones frecuentes, un data warehouse se optimiza para leer grandes volúmenes, combinar dimensiones y calcular métricas.

Presente BigQuery como un ejemplo central porque aparece en la evaluación. Google Cloud describe BigQuery como una plataforma de datos totalmente administrada y serverless, con capacidades para análisis, machine learning, búsqueda, análisis geoespacial e inteligencia empresarial. :contentReference[oaicite:7]{index=7} También lo presenta como un data warehouse empresarial completamente administrado. :contentReference[oaicite:8]{index=8} Esto significa que el usuario puede concentrarse en consultas y análisis sin administrar directamente servidores o clústeres.

Compare sin convertirlo en una competencia de marcas. Amazon Redshift cumple un rol similar en AWS; Azure Synapse Analytics cumple ese rol en el ecosistema Microsoft; Snowflake es una plataforma cloud de datos que puede operar en varios proveedores. Lo importante es identificar la necesidad: análisis estructurado de grandes volúmenes de datos. Si una pregunta menciona “BigQuery”, la respuesta esperada se asocia con Google Cloud.

Incluya un ejemplo. Una universidad virtual podría analizar participación en aulas, entregas de actividades, tiempos de conexión y resultados académicos. Un data warehouse permitiría responder preguntas como: ¿qué grupos presentan mayor riesgo de deserción?, ¿qué actividades generan más interacción?, ¿qué semanas concentran mayor carga académica? Sin una arquitectura analítica, esas preguntas quedan dispersas en múltiples sistemas.

Cierre con una advertencia: un data warehouse no reemplaza la calidad de datos. Si los datos están incompletos, duplicados o mal definidos, el servicio puede procesarlos rápidamente, pero las conclusiones seguirán siendo débiles. Big Data requiere tecnología y criterio analítico.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Machine learning en la nube

::left::
Necesidades frecuentes:

* Preparar datos.
* Entrenar modelos.
* Evaluar desempeño.
* Desplegar predicciones.
* Monitorear resultados.
* Reentrenar con nuevos datos.

Algoritmos comunes:

* Regresión lineal.
* Árboles de decisión.
* K-means.
* Redes neuronales.

::right::
Servicios relacionados:

* Amazon SageMaker.
* Azure Machine Learning.
* Google Vertex AI.
* Watson Studio.

Ejemplos:

* Predicción de demanda.
* Clasificación de clientes.
* Detección de fraude.
* Análisis de sentimiento.
* Recomendaciones.

<!--
Notas del presentador:
Explique que machine learning es una de las aplicaciones más visibles de Big Data porque permite crear modelos que aprenden patrones a partir de datos. Sin embargo, aclare que machine learning no comienza con el algoritmo; comienza con una pregunta bien formulada, datos relevantes y una métrica de evaluación. Si la pregunta está mal definida o los datos no representan el fenómeno, el modelo puede ser sofisticado pero inútil.

Describa algunos algoritmos que aparecen en la evaluación. La regresión lineal se usa para estimar valores numéricos continuos, como ventas, demanda o temperatura. Los árboles de decisión pueden servir para clasificación o regresión, y tienen la ventaja de ser interpretables. K-means es un algoritmo no supervisado que agrupa datos por similitud; se usa para segmentación, no para clasificar con etiquetas previamente conocidas. Las redes neuronales son modelos más flexibles que pueden capturar relaciones complejas, útiles en imágenes, lenguaje, series temporales y problemas con gran cantidad de datos.

Conecte con el caso de logística. Si la empresa necesita predecir la demanda de envíos, la tarea se parece a una predicción numérica. Un punto de partida razonable puede ser regresión lineal o árboles de decisión, dependiendo de la complejidad del patrón. Si el problema consiste en agrupar clientes sin etiquetas, K-means sería más apropiado. Si se requiere clasificar textos como positivos, negativos o neutrales, hablamos de análisis de sentimiento.

Mencione SageMaker porque aparece en la evaluación. AWS presenta SageMaker como un servicio administrado para preparar datos y construir, entrenar y desplegar modelos de machine learning con infraestructura, herramientas y flujos administrados. :contentReference[oaicite:9]{index=9} La documentación de AWS también lo orienta al entrenamiento de modelos. :contentReference[oaicite:10]{index=10}

Cierre destacando que el valor profesional está en elegir el algoritmo y servicio de acuerdo con el problema: predicción, clasificación, agrupamiento, recomendación, procesamiento de lenguaje natural o visión por computador.
-->

---
layout: slide-08-titulo-texto
---

::title::
Seguridad, disponibilidad y recuperación ante desastres

::content::
Migrar a la nube exige proteger datos, servicios y continuidad operativa.

Aspectos clave:

* Identidad y control de accesos.
* Cifrado.
* Copias de seguridad.
* Replicación.
* Monitoreo.
* Respuesta ante incidentes.
* Alta disponibilidad.
* Recuperación ante desastres.

En Azure, Site Recovery se asocia con replicación, failover y continuidad.

<!--
Notas del presentador:
Explique que la nube no debe presentarse únicamente como eficiencia y ahorro. Una migración responsable también debe considerar seguridad, disponibilidad y recuperación ante desastres. Cuando una organización traslada aplicaciones empresariales críticas, no basta con que la aplicación “funcione”; debe seguir funcionando ante fallos, proteger información sensible, cumplir regulaciones y permitir recuperación en tiempos aceptables.

Desarrolle el principio de identidad. En cloud, una parte importante de la seguridad depende de quién puede acceder a qué recurso, desde dónde y con qué permisos. El exceso de privilegios es una causa frecuente de incidentes. Por eso se recomienda aplicar mínimo privilegio, autenticación multifactor, roles bien definidos y revisión periódica de accesos. Luego hable del cifrado. Los datos deben protegerse en tránsito y en reposo, especialmente cuando contienen información personal, financiera, académica o estratégica.

Explique copias de seguridad y replicación. Un backup permite recuperar datos después de eliminación, corrupción o ataque. La replicación mantiene copias sincronizadas en otra zona o región para continuar operación. La alta disponibilidad busca reducir interrupciones mediante redundancia. La recuperación ante desastres define cómo volver a operar después de una falla mayor.

Conecte con Azure Site Recovery, una respuesta esperada en la evaluación. Microsoft documenta Azure Site Recovery como un servicio que administra replicación de máquinas virtuales entre regiones, entornos locales, Azure Stack y servidores físicos. :contentReference[oaicite:11]{index=11} También se describe como una opción para failover automatizado en escenarios de continuidad, alta disponibilidad y recuperación ante desastres. :contentReference[oaicite:12]{index=12}

Cierre con un ejemplo: si una multinacional migra aplicaciones críticas y prioriza continuidad, debe diseñar RTO, RPO, replicación, pruebas de conmutación y monitoreo. La pregunta no es solamente “qué servicio existe”, sino “qué riesgo empresarial se intenta reducir”.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Procesamiento multimedia en la nube

::image:: 
<img src="/imagenes/bigdata_semana8_prediccion_logistica.png" alt="Imagen de apoyo sobre transcodificación de video en la nube" />

::content::
Los datos no son solo filas y columnas.

En medios digitales, Big Data también aparece como grandes volúmenes de video, audio, imágenes y transmisiones.

Para transcodificación de video en AWS, el servicio asociado es AWS Elemental MediaConvert.

<!--
Notas del presentador:
Amplíe la visión de Big Data más allá de bases de datos y archivos CSV. En muchas industrias, los datos más costosos y voluminosos son multimedia: videos educativos, transmisiones en vivo, grabaciones de seguridad, contenidos de entretenimiento, imágenes médicas, fotografías satelitales, audios de atención al cliente o material generado por usuarios. Estos datos requieren almacenamiento, procesamiento, indexación, compresión, conversión y distribución.

Explique qué significa transcodificación. Transcodificar es convertir un archivo de audio o video de un formato, resolución, códec o tasa de bits a otro. Una empresa de medios necesita que el mismo video pueda reproducirse en celulares, televisores, navegadores, conexiones lentas y conexiones rápidas. También puede necesitar versiones con diferentes resoluciones, subtítulos, pistas de audio o empaquetados para streaming. Hacer esto manualmente o en servidores locales puede ser costoso y poco escalable.

Conecte con la evaluación. AWS Elemental MediaConvert es el servicio que aparece asociado con transcodificación de video en AWS. AWS lo describe como un servicio de procesamiento de video basado en archivos que transcodifica contenido para distribución de broadcast y múltiples pantallas a escala. :contentReference[oaicite:13]{index=13} La documentación de AWS también lo define como un servicio de procesamiento de video escalable para propietarios y distribuidores de contenido. :contentReference[oaicite:14]{index=14}

Use un ejemplo universitario. Una institución que graba clases puede necesitar convertir videos a distintos formatos para plataforma web, dispositivos móviles y repositorios. Puede requerir subtítulos, miniaturas, control de calidad y distribución global. En ese contexto, los servicios de medios en la nube permiten automatizar flujos que antes requerían infraestructura especializada.

Cierre destacando que Big Data no se limita a “analítica empresarial”. La explosión de datos multimedia exige arquitecturas cloud que combinen almacenamiento, procesamiento, distribución, metadatos, inteligencia artificial y seguridad.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Palabras clave:

::left::

* Primera nube y mayor mercado.
* Alta disponibilidad y recuperación.
* Serverless.
* Predicción de demanda.
* BigQuery.
* Clasificación o agrupamiento.
* Análisis de sentimiento.
* Desarrollo y pruebas.
* Entrenamiento de modelos.
* Transcodificación de video.

::right::
Criterio técnico:

* Identifique la necesidad.
* Reconozca la familia de servicio.
* Descarte opciones de otras plataformas.
* Diferencie algoritmo, producto y proveedor.
* Lea el caso antes de mirar las opciones.
* Justifique con una frase.

<!--
Notas del presentador:
Use esta diapositiva como puente entre la teoría y la evaluación, sin convertirla en una entrega mecánica de respuestas. Explique que las preguntas están diseñadas como casos cortos. Cada caso contiene pistas. La tarea del estudiante consiste en subrayar mentalmente la necesidad principal y luego relacionarla con una categoría.

Para la primera pregunta, la pista es “primera en lanzar servicios de computación en la nube” y “mayor cuota de mercado”. Esto apunta a AWS desde una perspectiva histórica y de adopción. Para la segunda, las pistas son “alta disponibilidad” y “recuperación ante desastres” en Azure; el servicio esperado es Site Recovery. Para serverless, la pista es “escribir y desplegar código sin preocuparse por infraestructura”; servicios como AWS Lambda, Azure Functions, Google Cloud Functions y Oracle Functions pertenecen a esa familia, aunque la pregunta puede pedir reconocer una oferta específica.

En predicción de demanda, la palabra “predecir” orienta hacia algoritmos de regresión o modelos supervisados. Regresión lineal puede ser un punto de partida para estimar valores continuos; árboles de decisión también pueden emplearse para predicción si se formulan como regresores. Clustering se usa para agrupar sin etiquetas, y redes neuronales pueden utilizarse cuando los patrones son complejos, pero no siempre son la primera respuesta esperada en una pregunta básica.

Para BigQuery, la pista es análisis de grandes volúmenes en Google Cloud. Para clasificación de datos en categorías, pueden aparecer árboles de decisión o redes neuronales según el contexto; K-means agrupa, pero no clasifica con etiquetas. Para análisis de sentimiento, la respuesta conceptual es determinar polaridad positiva, negativa o neutral. Para desarrollo y pruebas, la nube reduce tiempo de lanzamiento al mercado al permitir aprovisionamiento rápido de ambientes. Para AWS y machine learning, SageMaker es el servicio asociado. Para transcodificación de video en AWS, el servicio es Elemental MediaConvert.

Invite a los estudiantes a responder cada pregunta con una justificación breve, no solo con una opción.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
📌CLOUD COMPUTING ¿Qué es IaaS, PaaS y Saas? | Modelos de Servicio Cloud

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/VR8aXePkQ5M?si=IWAk55WQd7iqLeqZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Indique que esta diapositiva queda preparada para insertar un video corto y verificado antes de la sesión. Como criterio de curaduría, el video debe ser breve, claro, preferiblemente en español, sin publicidad excesiva, y debe explicar cloud computing desde sus fundamentos. No utilice videos largos durante una sesión de noventa minutos porque consumen tiempo que debe dedicarse a interacción, práctica y análisis.

Explique al grupo que el video, cuando se incorpore, no reemplaza la explicación docente. Su función es activar una representación visual: recursos bajo demanda, escalabilidad, modelos de servicio y acceso por internet. Después del video, el docente puede formular tres preguntas rápidas: ¿qué recurso de nube aparece como más importante?, ¿qué ventaja se menciona?, ¿qué riesgo o responsabilidad no se debe olvidar? Estas preguntas permiten convertir un video introductorio en una actividad de aprendizaje, no en una pausa pasiva.

Si decide usar el video antes de clase, puede enviarlo como recurso previo y dedicar en la sesión solo dos minutos a recoger ideas. Si decide usarlo en clase, limite la reproducción a un fragmento específico. El video debe tener duración máxima de cinco minutos para cumplir con la administración del tiempo y no desplazar la práctica.

La justificación académica está en que cloud computing es un concepto transversal. Sin esta base, servicios como Lambda, BigQuery, Site Recovery o SageMaker se perciben como nombres aislados. Con una explicación visual, el estudiante puede comprender que todos esos servicios pertenecen a una lógica común: abstraer infraestructura, escalar recursos y ofrecer capacidades especializadas.

Para verificar el recurso, revise fecha de publicación, canal, duración, claridad del audio, pertinencia del lenguaje y ausencia de afirmaciones engañosas. Si encuentra un video oficial o académico en español menor a cinco minutos, puede reemplazar el marcador por un iframe con el formato solicitado:
<iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO" allowfullscreen></iframe>
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
[GOOGLE CLOUD] INTRODUCCIÓN BÁSICA A GOOGLE BIGQUERY 

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/t2ajLvICKyg?si=H-oTHB5w7jSSTXS9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Presente este recurso como una ampliación opcional. El objetivo no es enseñar BigQuery en profundidad, sino mostrar cómo se materializa la analítica de datos en la nube. Un video adecuado debería mostrar la idea de consultas sobre grandes volúmenes, almacenamiento administrado, escalabilidad y uso de SQL o interfaces analíticas. Es preferible que el recurso no se centre únicamente en una demostración comercial, sino que explique el problema que resuelve.

Conecte el video con la evaluación. Una de las preguntas se refiere a BigQuery como servicio para análisis de grandes volúmenes de datos. Google Cloud describe BigQuery como una plataforma de datos administrada y serverless para análisis con capacidades integradas de machine learning, búsqueda, geoespacial e inteligencia empresarial. :contentReference[oaicite:15]{index=15} Esta referencia permite explicar que BigQuery no es simplemente “una base de datos”, sino una plataforma analítica diseñada para preguntas empresariales sobre grandes conjuntos de datos.

Después de reproducir el video, sugiera una pregunta de reflexión: ¿qué cambia cuando la organización no administra servidores directamente para consultar datos? Las respuestas pueden incluir rapidez, menor carga operativa, escalabilidad, pero también dependencia del proveedor, necesidad de controlar costos por consulta y cuidado en la gobernanza de datos.

Si el video no está disponible o no cumple duración, omítalo y utilice la diapositiva como recomendación para estudio autónomo. La clase no debe depender de videos externos para cumplir sus objetivos. El docente puede reemplazar el video con una explicación breve apoyada en el diagrama de arquitectura.

Recuerde que no deben inventarse enlaces. Si no se ha verificado duración y disponibilidad, mantenga el marcador. Cuando se tenga el enlace confirmado, use el formato:
<iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO" allowfullscreen></iframe>
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada · Predicción de demanda logística con Python

::content::
Propósito:

Construir un flujo sencillo de analítica predictiva para estimar demanda de envíos y relacionarlo con decisiones cloud.

Caso:

Una empresa de logística desea anticipar cuántos envíos tendrá por día para planear personal, vehículos y capacidad operativa.

Herramienta:

Python local en Windows 11 Pro con VS Code.

Duración:

18 minutos.

<!--
Notas del presentador:
Introduzca la práctica como una simulación de un problema empresarial realista. La empresa de logística no necesita únicamente almacenar datos; necesita anticiparse. Si puede estimar la demanda de envíos, puede planear mejor turnos, rutas, vehículos, combustible, tiempos de entrega y atención al cliente. Este caso se conecta directamente con una de las preguntas de evaluación, donde se menciona predicción de demanda para optimizar cadena de suministro.

Explique que la práctica será local para evitar barreras de cuentas cloud, tarjetas de crédito o permisos institucionales. Se usará Python porque es una herramienta libre, ampliamente utilizada en ciencia de datos y ejecutable en Windows 11 Pro. Aunque el entorno sea local, el flujo reproduce un patrón cloud: datos de entrada, transformación, entrenamiento, evaluación y generación de salidas. En una implementación real, este mismo flujo podría ejecutarse en Amazon SageMaker, Google Vertex AI, Azure Machine Learning o incluso integrarse con un data warehouse como BigQuery.

Indique que se generará un conjunto de datos sintético. Esto significa que los datos se crean artificialmente para fines educativos. No representan una empresa real, pero contienen patrones plausibles: tendencia de crecimiento, efecto de día de la semana, campañas promocionales, clima y eventos especiales. Esto permite entrenar un modelo sin depender de archivos externos.

Explique el modelo. Se comparará una regresión lineal con un árbol de decisión. La regresión lineal sirve como modelo base e interpretable. El árbol de decisión captura relaciones no lineales simples. El objetivo no es encontrar el mejor modelo del mundo, sino comprender el proceso: preparar variables, dividir entrenamiento y prueba, entrenar, evaluar error, seleccionar un modelo y visualizar resultados.

Cierre diciendo que el producto esperado será una salida en consola, un archivo CSV con predicciones y una gráfica comparativa. Esos productos permitirán socializar resultados y responder preguntas de análisis.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Componentes necesarios e instalación en Windows 11 Pro

::left::
Componentes:

* Windows 11 Pro.
* Python 3.11 o superior.
* Visual Studio Code.
* Extensión Python para VS Code.
* Terminal PowerShell.
* Conexión a internet para instalar paquetes.

Paquetes:

* pandas.
* numpy.
* scikit-learn.
* matplotlib.

::right::
Comandos sugeridos:

```powershell
python --version
mkdir bigdata_semana8
cd bigdata_semana8
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install pandas numpy scikit-learn matplotlib
code .
```

<!--
Notas del presentador:
Explique los componentes necesarios de forma gradual. Primero, verifique que los estudiantes tengan Python instalado. En Windows 11 Pro pueden revisar desde PowerShell con el comando `python --version`. Si el comando no responde, deben instalar Python desde el sitio oficial y activar la opción de agregar Python al PATH. No dedique demasiado tiempo a instalación durante la sesión; si varios estudiantes no tienen el entorno listo, realice la práctica en pantalla y comparta el código para réplica posterior.

Explique qué es un entorno virtual. Un entorno virtual permite aislar paquetes de un proyecto para evitar conflictos con otras instalaciones de Python. En la práctica se crea una carpeta llamada `bigdata_semana8`, luego un entorno `.venv`, se activa y se instalan las librerías necesarias. Esta es una buena práctica profesional porque evita instalar dependencias globales innecesarias.

Comente brevemente cada paquete. `pandas` se usa para trabajar datos en estructuras tipo DataFrame. `numpy` permite cálculos numéricos y generación de datos. `scikit-learn` proporciona algoritmos de machine learning, división de datos y métricas de evaluación. `matplotlib` permite crear gráficas para comparar resultados. Todos son paquetes comunes, libres y adecuados para una práctica universitaria introductoria.

Explique la conexión con cloud. En una plataforma administrada, muchas de estas dependencias ya vienen preparadas o se configuran en notebooks administrados. En local, el estudiante entiende qué herramientas usa el flujo. En cloud, el mismo flujo podría empaquetarse como notebook, job, función, pipeline o servicio de predicción. Comprender la base local ayuda a no depender ciegamente de interfaces gráficas.

Aclare que el comando `code .` abre la carpeta en Visual Studio Code si el comando de VS Code está registrado en el PATH. Si no funciona, pueden abrir VS Code manualmente y seleccionar la carpeta. Recomiende crear un archivo llamado `prediccion_demanda.py` y pegar el código completo de la siguiente diapositiva.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Conexiones sugeridas

::rightTitle::
Producto esperado

::left::
Flujo de trabajo:

Fuente simulada de datos.

Preparación con Python.

Modelo predictivo.

Evaluación de error.

Exportación de resultados.

Interpretación para arquitectura cloud.

Conexión conceptual:

CSV local → pipeline cloud.

Modelo local → SageMaker, Vertex AI o Azure ML.

Reporte local → dashboard empresarial.

::right::
Al finalizar, el estudiante debe obtener:

* Datos simulados de demanda logística.
* Comparación entre modelos.
* Métricas MAE y RMSE.
* Archivo `predicciones_demanda.csv`.
* Gráfica `comparacion_demanda.png`.
* Recomendación técnica breve.

<!--
Notas del presentador:
Explique que “conexiones sugeridas” no se refiere aquí a cables físicos, sino a conexiones lógicas entre componentes de una arquitectura de datos. En Big Data, una solución rara vez es una única herramienta. Es un flujo: los datos nacen en una fuente, se mueven por un proceso de ingesta, se almacenan, se transforman, se analizan y se presentan a quienes toman decisiones. En la práctica local, ese flujo se representa de manera simple con un script de Python. En la nube, el mismo flujo se distribuiría entre servicios administrados.

Describa el flujo local. El script generará datos simulados con variables como día, mes, día de la semana, promociones, lluvia, eventos especiales y demanda. Luego preparará variables de entrada, dividirá datos en entrenamiento y prueba, entrenará dos modelos, calculará métricas y elegirá el mejor. Después exportará predicciones a CSV y guardará una gráfica. Este producto permite al estudiante ver el ciclo completo de analítica predictiva.

Conecte cada etapa con su equivalente cloud. Un CSV local podría ser un archivo en almacenamiento de objetos, como Amazon S3, Azure Blob Storage o Google Cloud Storage. El script local podría convertirse en un job programado, una función serverless o un pipeline. El entrenamiento local podría migrarse a SageMaker, Vertex AI o Azure Machine Learning. La salida CSV podría alimentar un data warehouse o un tablero. La gráfica local podría convertirse en un dashboard de Power BI, Looker Studio o QuickSight.

Explique las métricas. MAE mide el error absoluto promedio; es fácil de interpretar porque está en la misma unidad de la demanda. RMSE penaliza más los errores grandes. En un negocio logístico, no todos los errores tienen el mismo costo. Subestimar demanda puede generar retrasos y mala experiencia. Sobreestimar demanda puede aumentar costos por recursos ociosos. Por eso la interpretación debe considerar impacto operativo, no solo número matemático.

Cierre con el producto esperado: no basta con ejecutar código; se debe explicar qué modelo funcionó mejor, por qué podría ser útil y qué decisiones permitiría tomar.
-->

---
layout: slide-codigo
---

::title::
Código completo · prediccion_demanda.py

::content::

```python {lines:true}
"""
Big Data - Semana 8
Práctica guiada: Predicción de demanda logística con Python

Objetivo:
Simular datos diarios de una empresa de logística, entrenar modelos
predictivos sencillos y generar productos de análisis para apoyar
decisiones de capacidad operativa.

Requisitos:
pip install pandas numpy scikit-learn matplotlib
"""

from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error


# ------------------------------------------------------------
# 1. Configuración general
# ------------------------------------------------------------

RANDOM_STATE = 42
np.random.seed(RANDOM_STATE)

OUTPUT_DIR = Path("salidas")
OUTPUT_DIR.mkdir(exist_ok=True)


# ------------------------------------------------------------
# 2. Generación de datos simulados
# ------------------------------------------------------------

def generar_datos_logistica(dias: int = 240) -> pd.DataFrame:
    """
    Genera un conjunto de datos sintético para demanda diaria de envíos.

    Variables:
    - fecha: día de operación
    - dia_semana: 0 lunes, 6 domingo
    - mes: mes calendario
    - promocion: si hubo campaña comercial
    - lluvia: si hubo lluvia fuerte
    - evento_especial: si hubo evento que aumentó la demanda
    - demanda_envios: cantidad diaria estimada de envíos
    """

    fechas = pd.date_range(start="2026-01-01", periods=dias, freq="D")

    df = pd.DataFrame({"fecha": fechas})
    df["dia"] = np.arange(1, dias + 1)
    df["dia_semana"] = df["fecha"].dt.dayofweek
    df["mes"] = df["fecha"].dt.month

    # Variables de contexto simuladas
    df["promocion"] = np.random.binomial(1, 0.22, dias)
    df["lluvia"] = np.random.binomial(1, 0.18, dias)
    df["evento_especial"] = np.random.binomial(1, 0.08, dias)

    # Patrón base de demanda
    tendencia = 0.18 * df["dia"]
    efecto_semana = np.where(df["dia_semana"].isin([0, 1, 2, 3, 4]), 35, -20)
    efecto_promocion = df["promocion"] * 55
    efecto_lluvia = df["lluvia"] * -18
    efecto_evento = df["evento_especial"] * 75
    ruido = np.random.normal(0, 18, dias)

    df["demanda_envios"] = (
        180
        + tendencia
        + efecto_semana
        + efecto_promocion
        + efecto_lluvia
        + efecto_evento
        + ruido
    ).round().astype(int)

    # Evitar valores negativos en escenarios extremos
    df["demanda_envios"] = df["demanda_envios"].clip(lower=0)

    return df


# ------------------------------------------------------------
# 3. Preparación de datos
# ------------------------------------------------------------

datos = generar_datos_logistica(dias=240)

variables_entrada = [
    "dia",
    "dia_semana",
    "mes",
    "promocion",
    "lluvia",
    "evento_especial",
]

X = datos[variables_entrada]
y = datos["demanda_envios"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=RANDOM_STATE,
    shuffle=True,
)


# ------------------------------------------------------------
# 4. Entrenamiento de modelos
# ------------------------------------------------------------

modelos = {
    "Regresion lineal": LinearRegression(),
    "Arbol de decision": DecisionTreeRegressor(
        max_depth=5,
        random_state=RANDOM_STATE,
    ),
}

resultados = []

for nombre, modelo in modelos.items():
    modelo.fit(X_train, y_train)
    predicciones = modelo.predict(X_test)

    mae = mean_absolute_error(y_test, predicciones)
    rmse = np.sqrt(mean_squared_error(y_test, predicciones))

    resultados.append(
        {
            "modelo": nombre,
            "MAE": mae,
            "RMSE": rmse,
        }
    )

resultados_df = pd.DataFrame(resultados).sort_values(by="RMSE")
mejor_modelo_nombre = resultados_df.iloc[0]["modelo"]
mejor_modelo = modelos[mejor_modelo_nombre]


# ------------------------------------------------------------
# 5. Predicción sobre todo el conjunto
# ------------------------------------------------------------

datos["prediccion_demanda"] = mejor_modelo.predict(X).round().astype(int)
datos["error_absoluto"] = (
    datos["demanda_envios"] - datos["prediccion_demanda"]
).abs()

ruta_csv = OUTPUT_DIR / "predicciones_demanda.csv"
datos.to_csv(ruta_csv, index=False, encoding="utf-8")


# ------------------------------------------------------------
# 6. Visualización
# ------------------------------------------------------------

plt.figure(figsize=(12, 6))
plt.plot(datos["fecha"], datos["demanda_envios"], label="Demanda real simulada")
plt.plot(datos["fecha"], datos["prediccion_demanda"], label="Predicción del modelo")
plt.title("Predicción de demanda logística")
plt.xlabel("Fecha")
plt.ylabel("Cantidad diaria de envíos")
plt.legend()
plt.tight_layout()

ruta_grafica = OUTPUT_DIR / "comparacion_demanda.png"
plt.savefig(ruta_grafica, dpi=160)
plt.close()


# ------------------------------------------------------------
# 7. Reporte ejecutivo en consola
# ------------------------------------------------------------

print("\n=== Comparación de modelos ===")
print(resultados_df.to_string(index=False, formatters={
    "MAE": "{:.2f}".format,
    "RMSE": "{:.2f}".format,
}))

print("\n=== Mejor modelo seleccionado ===")
print(f"{mejor_modelo_nombre}")

print("\n=== Productos generados ===")
print(f"Archivo CSV: {ruta_csv}")
print(f"Gráfica PNG: {ruta_grafica}")

print("\n=== Interpretación sugerida ===")
print(
    "Use el modelo como apoyo para planear capacidad operativa. "
    "En una arquitectura cloud, este flujo podría ejecutarse como "
    "pipeline programado, función serverless o entrenamiento administrado "
    "en una plataforma de machine learning."
)
```

<!--
Notas del presentador:
Antes de ejecutar el código, indique que este script está completo y no depende de archivos externos. Esto reduce errores y permite concentrarse en la interpretación. Señale que los datos son simulados, por lo tanto no se busca una conclusión sobre una empresa real. El objetivo es observar cómo se construye un flujo predictivo de extremo a extremo.

Explique la primera parte del código. Se importan librerías, se define una semilla aleatoria para reproducibilidad y se crea una carpeta de salida. La reproducibilidad es importante en ciencia de datos porque permite que varias personas obtengan resultados similares al ejecutar el mismo experimento. Luego se define una función para generar datos logísticos. Esta función crea fechas, variables temporales y variables de contexto como promoción, lluvia y evento especial.

Describa cómo se construye la demanda. El código combina una demanda base con tendencia, efecto de días laborales, efecto de promoción, efecto de lluvia, efecto de evento especial y ruido. Esta combinación representa algo que ocurre en problemas reales: la demanda no depende de un solo factor. Puede aumentar por campañas, variar por día de semana, verse afectada por clima o cambiar por eventos. El ruido representa variabilidad que el modelo no explica completamente.

Luego explique la preparación. Las variables de entrada son las que el modelo usará para predecir. La variable objetivo es `demanda_envios`. El conjunto se divide en entrenamiento y prueba para evaluar si el modelo generaliza. Si se entrenara y evaluara sobre los mismos datos, el resultado podría ser engañoso.

Explique los modelos. La regresión lineal intenta encontrar una relación lineal entre variables y demanda. El árbol de decisión puede capturar reglas más flexibles. Se calculan MAE y RMSE para comparar. El modelo con menor RMSE se selecciona y se usa para generar predicciones sobre todo el conjunto.

Finalmente, describa los productos: CSV, gráfica y reporte. Conecte con cloud: este script podría convertirse en un pipeline diario que lea datos reales, entrene o actualice predicciones y alimente un dashboard operativo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::

1. Cree la carpeta `bigdata_semana8`.

2. Active el entorno virtual.

3. Instale los paquetes requeridos.

4. Cree el archivo `prediccion_demanda.py`.

5. Pegue el código completo.

6. Ejecute:

```powershell
python prediccion_demanda.py
```

7. Revise la carpeta `salidas`.

8. Abra el CSV y la imagen generada.

<!--
Notas del presentador:
Guíe la ejecución paso a paso. Primero, confirme que el entorno virtual está activo. En PowerShell normalmente se verá el prefijo `(.venv)` antes de la ruta. Si no aparece, deben activar el entorno con `.\.venv\Scripts\Activate.ps1`. Si PowerShell bloquea la ejecución de scripts, explique que puede abrir una terminal de símbolo del sistema o ajustar temporalmente la política de ejecución con orientación cuidadosa. Para evitar demoras, el docente puede ejecutar desde su equipo y los estudiantes replicar después.

Después de crear el archivo, recomiende guardar antes de ejecutar. En VS Code, verifique que el intérprete seleccionado corresponda al entorno `.venv`. Esto se puede revisar en la esquina inferior o mediante la paleta de comandos. Si el paquete `sklearn` no se encuentra, normalmente significa que las librerías se instalaron en otro entorno o que el entorno virtual no está activo.

Al ejecutar `python prediccion_demanda.py`, la consola debe mostrar una comparación entre modelos, el mejor modelo seleccionado y las rutas de los productos generados. Explique que el valor de MAE representa el error promedio en cantidad de envíos. Si el MAE es 15, por ejemplo, el modelo se equivoca en promedio en 15 envíos diarios. El RMSE penaliza más errores grandes, por lo que es útil cuando la organización quiere evitar desviaciones importantes.

Pida a los estudiantes abrir la carpeta `salidas`. Allí deben encontrar `predicciones_demanda.csv` y `comparacion_demanda.png`. El CSV permite revisar fecha, variables, demanda simulada, predicción y error absoluto. La gráfica permite observar si el modelo sigue la tendencia general de la demanda.

Conecte el proceso con pruebas profesionales. En una empresa, después de ejecutar el modelo no se despliega automáticamente. Primero se revisa calidad de datos, error, estabilidad, interpretabilidad y costo operativo. Luego se define si el modelo alimentará un dashboard, una alerta o una decisión automática.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Preguntas de análisis de la práctica

::left::
Para responder individualmente:

* ¿Qué variable parece más relacionada con el aumento de demanda?
* ¿Qué modelo obtuvo menor error?
* ¿El error sería aceptable para una empresa real?
* ¿Qué dato adicional podría mejorar la predicción?
* ¿Qué riesgo existe si el modelo se usa sin supervisión?

::right::
Para conectar con cloud:

* ¿Dónde almacenarían los datos históricos?
* ¿Qué servicio usarían para entrenar modelos?
* ¿El flujo debería ser batch o streaming?
* ¿Qué parte podría ser serverless?
* ¿Qué controles de seguridad aplicarían?

<!--
Notas del presentador:
Utilice estas preguntas para convertir la práctica en aprendizaje reflexivo. No permita que la actividad termine en “el código funcionó”. En Big Data, ejecutar una herramienta es solo una parte del proceso. Lo fundamental es interpretar resultados y tomar decisiones. Pida a los estudiantes responder dos preguntas de la columna izquierda y una de la columna derecha. Si el tiempo es limitado, pueden escribir respuestas breves en el chat.

Sobre la primera pregunta, los estudiantes pueden observar que promoción, eventos especiales y días laborales influyen en la demanda simulada. Sin embargo, como el conjunto es sintético, la interpretación depende de cómo fue construido. Esta es una oportunidad para explicar que en datos reales no siempre conocemos las causas; debemos explorarlas con análisis estadístico, conocimiento del negocio y validación.

Sobre el modelo con menor error, invite a no asumir que un modelo más complejo siempre es mejor. En algunos casos la regresión lineal puede funcionar suficientemente bien y ser más fácil de explicar. En otros, un árbol puede capturar patrones no lineales. La decisión debe considerar precisión, interpretabilidad, costo, estabilidad y facilidad de mantenimiento.

Pregunte si el error sería aceptable. La respuesta depende del negocio. Un error de 20 envíos puede ser pequeño para una operación de miles de paquetes, pero grande para una operación pequeña. Este razonamiento ayuda a conectar métricas técnicas con impacto empresarial. También pregunte qué datos podrían mejorar el modelo: clima real, campañas, festivos, zonas geográficas, precios, capacidad de flota, tráfico o comportamiento histórico por cliente.

En la columna cloud, guíe la transferencia conceptual. Los datos históricos podrían almacenarse en un data lake o data warehouse. El entrenamiento podría hacerse en SageMaker, Vertex AI o Azure ML. Si la predicción se ejecuta una vez al día, batch puede ser suficiente. Si requiere reaccionar en tiempo real, streaming o eventos serverless serían adecuados. En seguridad, se aplicarían permisos, cifrado, auditoría y control de acceso.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
Cada grupo o estudiante comparte en máximo un minuto:

* Modelo con mejor resultado.
* Error obtenido.
* Una decisión operativa que apoyaría la predicción.
* Un servicio cloud que podría escalar la solución.
* Una precaución de seguridad o gobierno de datos.

La socialización debe centrarse en argumentos, no solo en números.

<!--
Notas del presentador:
Explique que la socialización es breve porque la sesión tiene un límite de tiempo. Seleccione dos o tres participaciones representativas. No intente escuchar a todos si el grupo es grande; puede pedir respuestas por chat y comentar patrones comunes. La meta es que los estudiantes practiquen argumentación técnica en lenguaje claro.

Pida que cada intervención incluya cinco elementos. Primero, el modelo con mejor resultado. Segundo, el error obtenido, preferiblemente MAE o RMSE. Tercero, una decisión operativa que la predicción apoyaría. Por ejemplo, aumentar vehículos en días con mayor demanda, planear personal, ajustar turnos, programar mantenimiento en días de baja demanda o preparar rutas alternativas. Cuarto, un servicio cloud que podría escalar la solución. Pueden mencionar SageMaker, Azure Machine Learning, Vertex AI, BigQuery, un data warehouse, almacenamiento de objetos o funciones serverless. Quinto, una precaución de seguridad o gobierno, como controlar acceso a datos, anonimizar información, monitorear costos o validar sesgos.

Insista en que un buen análisis no se limita a “el árbol ganó”. Un estudiante debe poder decir: “El árbol de decisión obtuvo menor RMSE en esta simulación, por lo que podría apoyar la planeación diaria; sin embargo, antes de llevarlo a producción necesitaríamos datos reales, monitoreo de error y control de acceso”. Esa frase muestra pensamiento profesional.

Si aparecen resultados diferentes entre estudiantes, explique que puede deberse a versiones de librerías, modificación del código o aleatoriedad si cambiaron la semilla. Use eso para hablar de reproducibilidad. En proyectos de datos, documentar versiones, parámetros y datos usados es esencial.

Cierre la socialización vinculando con la evaluación. Muchas preguntas describen casos; en la práctica también se partió de un caso. La habilidad común es identificar necesidad, seleccionar técnica, interpretar resultado y justificar decisión.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::

* ¿Cómo diferenciar serverless de máquinas virtuales?
* ¿Cuándo usar data lake y cuándo data warehouse?
* ¿Qué significa recuperación ante desastres?
* ¿Por qué BigQuery se asocia con Google Cloud?
* ¿Qué problema resuelve SageMaker?
* ¿Qué algoritmo conviene para predicción de demanda?
* ¿Cómo se conecta la práctica con una arquitectura cloud real?

<!--
Notas del presentador:
Reserve esta sección para dudas concretas. La instrucción institucional sugiere que la resolución de dudas no supere quince minutos; en esta sesión se dispone de aproximadamente cinco minutos finales, por lo que conviene priorizar preguntas relacionadas con evaluación y práctica. Si aparecen dudas amplias, responda de manera sintética y ofrezca retomarlas en el aula virtual o en el espacio de acompañamiento correspondiente.

Puede orientar la conversación con las preguntas de la diapositiva. Para serverless versus máquinas virtuales, explique que en una máquina virtual el equipo administra sistema operativo, configuración y escalado; en serverless se despliega código y el proveedor administra la infraestructura de ejecución. Para data lake versus data warehouse, indique que el data lake almacena datos diversos y flexibles, mientras el data warehouse organiza datos para análisis estructurado. Para recuperación ante desastres, use la idea de “cómo continúa o se recupera la operación después de un evento grave”.

Para BigQuery, recuerde que se asocia con Google Cloud y análisis de grandes volúmenes de datos. Para SageMaker, explique que se asocia con construir, entrenar y desplegar modelos de machine learning en AWS. Para predicción de demanda, aclare que puede iniciar con regresión lineal si se busca un modelo simple para valores numéricos; árboles de decisión pueden capturar patrones más flexibles; redes neuronales pueden ser útiles en escenarios complejos; clustering no predice una variable objetivo, sino que agrupa observaciones.

Si un estudiante pregunta por costos, responda que la nube permite pago por uso, pero también requiere monitoreo. Una mala consulta, datos duplicados o recursos encendidos sin control pueden generar gastos innecesarios. Si pregunta por seguridad, enfatice identidad, cifrado, backups, auditoría y responsabilidad compartida.

Cierre la sección validando las preguntas. En tecnología, preguntar es parte del aprendizaje profesional. Las dudas muestran que el estudiante está conectando conceptos con decisiones reales.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordemos...

::content::
La nube potencia Big Data porque permite escalar almacenamiento, procesamiento, analítica y machine learning.

Pero el valor no está solo en usar servicios cloud.

El valor aparece cuando una organización formula buenas preguntas, protege sus datos, selecciona servicios pertinentes, controla costos y convierte resultados analíticos en decisiones responsables.

<!--
Notas del presentador:
Realice un cierre integrador. Recuerde que la semana 8 presenta la nube como un habilitador de innovación empresarial. Las plataformas cloud permiten que organizaciones de distintos tamaños accedan a capacidades que antes requerían grandes inversiones: infraestructura global, almacenamiento masivo, analítica avanzada, machine learning, procesamiento multimedia y recuperación ante desastres. Sin embargo, la tecnología por sí sola no garantiza transformación.

Subraye que Big Data requiere una relación equilibrada entre tecnología, datos, personas y procesos. Una empresa puede contratar servicios avanzados, pero si no entiende sus datos, no define objetivos, no prepara al equipo y no gobierna adecuadamente la información, el resultado puede ser costoso y poco útil. Por eso el profesional debe aprender a formular preguntas: ¿qué problema queremos resolver?, ¿qué datos necesitamos?, ¿qué servicio es adecuado?, ¿qué riesgos aparecen?, ¿cómo medimos éxito?, ¿cómo protegemos información?, ¿cómo explicamos resultados?

Recapitule los conceptos principales. AWS, Azure y Google Cloud ofrecen servicios de cómputo, almacenamiento, analítica, inteligencia artificial y continuidad. Serverless permite ejecutar código sin administrar servidores. BigQuery ejemplifica analítica administrada para grandes volúmenes de datos. SageMaker representa machine learning administrado en AWS. Azure Site Recovery se asocia con recuperación ante desastres. AWS Elemental MediaConvert se asocia con transcodificación de video. Los algoritmos como regresión, árboles, K-means y redes neuronales deben elegirse según el tipo de problema.

Conecte con la práctica. La predicción de demanda mostró que un flujo de datos puede pasar de una necesidad empresarial a un modelo y luego a una decisión. Aunque fue local, refleja la lógica de una arquitectura cloud real. El estudiante debe llevarse la capacidad de razonar: si el problema crece, ¿qué parte escalo?, ¿qué automatizo?, ¿qué protejo?, ¿qué monitoreo?

Finalice invitando a revisar la evaluación con lectura crítica de casos, no con memorización aislada.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar la semana, recuerde:

* Revisar los recursos del aula virtual.
* Presentar la evaluación o actividad correspondiente.
* Repasar los conceptos clave de plataformas cloud.
* Participar en los espacios de acompañamiento.
* Diligenciar la Encuesta de Percepción Estudiantil.

Su retroalimentación contribuye al mejoramiento continuo del curso.

<!--
Notas del presentador:
Dedique esta diapositiva al cierre institucional. Recuerde a los estudiantes que la Open Class es un espacio de acompañamiento, pero el proceso completo incluye revisión del aula virtual, lectura de recursos, participación en actividades y presentación de la evaluación. Invite a no dejar la evaluación para el último momento, especialmente porque las preguntas requieren lectura cuidadosa de casos.

Explique que la Encuesta de Percepción Estudiantil es un mecanismo de mejoramiento continuo. No la presente como un trámite. Indique que la retroalimentación permite identificar fortalezas, dificultades, claridad de materiales, pertinencia de actividades y oportunidades de mejora. En un curso de modalidad virtual, esta información es especialmente valiosa porque ayuda a ajustar estrategias de acompañamiento, recursos y comunicación.

Recomiende una estrategia de repaso para la evaluación. Primero, revisar términos clave: cloud computing, serverless, data warehouse, machine learning, recuperación ante desastres, análisis de sentimiento y transcodificación. Segundo, leer cada pregunta identificando la necesidad principal. Tercero, relacionar esa necesidad con la familia de servicio. Cuarto, descartar opciones que pertenecen a otros proveedores o a otras categorías. Quinto, justificar mentalmente la respuesta antes de seleccionarla.

Recuerde que la práctica realizada puede servir como material de estudio. Aunque no use directamente servicios cloud, ayuda a comprender predicción de demanda, entrenamiento de modelos y generación de productos analíticos. Sugiera conservar el código y modificar variables para experimentar: aumentar días, cambiar probabilidad de promociones, agregar festivos o probar otros modelos.

Cierre con un mensaje de responsabilidad académica. El aprendizaje en Big Data no termina en reconocer servicios; se fortalece cuando el estudiante puede explicar cómo una decisión tecnológica impacta costos, seguridad, operación y valor empresarial. Invite a continuar explorando plataformas cloud con criterio, curiosidad y prudencia profesional.
-->

---
layout: slide-12-cierre
---

::title::
Cierre

::content::
Gracias por su participación.

Big Data en la nube no consiste solo en almacenar más datos.

Consiste en diseñar mejores decisiones: escalables, seguras, oportunas y orientadas al valor organizacional.

Nos vemos en el próximo espacio académico.

<!--
Notas del presentador:
Finalice con un mensaje breve y motivador. Agradezca la participación y reconozca el esfuerzo de los estudiantes durante el curso. Reitere que la semana 8 integra muchos elementos: plataformas cloud, analítica, machine learning, serverless, recuperación ante desastres, seguridad y casos empresariales. Esta integración es valiosa porque se parece a los retos reales del mundo profesional, donde los problemas no vienen separados por temas de una asignatura.

Invite a los estudiantes a continuar estudiando con criterio. En tecnología aparecen constantemente nuevos servicios, nombres comerciales y tendencias. Sin embargo, los principios permanecen: entender el problema, identificar datos relevantes, seleccionar arquitectura, proteger información, evaluar costos, medir resultados y comunicar decisiones. Un profesional de Big Data no se limita a ejecutar herramientas; debe interpretar necesidades y construir soluciones responsables.

Recuerde la evaluación de la semana y la Encuesta de Percepción Estudiantil. Hágalo de manera amable, sin extender el cierre. Indique que revisar los conceptos trabajados en clase les ayudará a responder con mayor seguridad. Sugiera repasar especialmente la relación entre palabras clave y servicios: AWS como plataforma histórica de nube, Azure Site Recovery para recuperación ante desastres, funciones serverless para ejecución sin servidores administrados, BigQuery para analítica en Google Cloud, SageMaker para machine learning en AWS, análisis de sentimiento para polaridad textual y MediaConvert para transcodificación de video.

Cierre enfatizando la idea final de la diapositiva: Big Data en la nube no se trata de acumular datos ni contratar servicios por moda. Se trata de diseñar decisiones más oportunas, escalables y seguras. La innovación responsable ocurre cuando la tecnología se pone al servicio de problemas concretos y genera valor para la organización y las personas.

Despídase con claridad, agradezca el tiempo y deje abierto el canal institucional para dudas posteriores.
-->
