---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 3

::date::
Mayo 20 de 2026

<!--
Notas del presentador:
Dar la bienvenida a la Open Class de la semana 3. Enfatizar que la sesión se centra en comprender cómo los datos pueden almacenarse, replicarse, particionarse, recuperarse y procesarse mediante varios nodos conectados en red. Presentar la clase como una oportunidad para pasar de la idea general de Big Data a una comprensión más técnica de los clústeres, la consistencia, la latencia, los bloques, los metadatos y el procesamiento distribuido.
-->

---
layout: slide-08-titulo-texto
---

::title::
Almacenamiento distribuido, clústeres y procesamiento paralelo

::content::
En Big Data, almacenar información no significa únicamente guardar archivos en un disco. Significa diseñar una infraestructura capaz de recibir grandes volúmenes de datos, distribuirlos entre varios nodos, mantener copias de seguridad, responder consultas y recuperarse ante fallos.

Un sistema distribuido evita depender de un único servidor. En su lugar, organiza los datos en un clúster compuesto por varios equipos que trabajan de manera coordinada. Esta arquitectura mejora la escalabilidad, la disponibilidad y la tolerancia a fallos, pero también introduce desafíos como la consistencia, la latencia y la administración de metadatos.

<!--
Notas del presentador:
Usar un ejemplo cercano: si una plataforma académica dependiera de un solo servidor y este fallara durante la entrega de una actividad, todos los usuarios quedarían sin acceso. En cambio, si la información se distribuye en varios nodos, el sistema puede seguir funcionando aunque uno de ellos presente problemas. Explicar que esta ventaja no es automática: requiere reglas para saber dónde está cada dato, cuántas copias existen, qué versión es la más reciente y cómo responder cuando los nodos no se actualizan al mismo tiempo.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Actividad corta de integración: ¿Dónde pondrías el dato?

::image:: 
<img src="/imagenes/cluster.png" alt="Imagen de apoyo sobre distribución de datos en varios nodos" />

::content::
**Duración:** 10 minutos.

**Reto:** imagine que una universidad necesita almacenar registros de notas, archivos de estudiantes, reportes financieros y videos de clase.

**Instrucciones:**
* Propongan cómo distribuirían esos datos en tres servidores.
* Decidan qué información debería tener copia.
* Identifiquen qué dato no podría perderse.
* Expliquen qué pasaría si un servidor falla.

<!--
Notas del presentador:
Esta actividad permite activar saberes previos sin entrar todavía en definiciones técnicas. El objetivo es que los estudiantes descubran intuitivamente que no todos los datos tienen la misma criticidad. Las notas y datos financieros requieren alta consistencia y respaldo; los videos pueden tolerar mayor latencia o almacenamiento por segmentos; los archivos académicos necesitan disponibilidad y trazabilidad. Cerrar la actividad mostrando que esas decisiones se formalizan en arquitecturas distribuidas reales.
-->

---
layout: slide-08-titulo-texto
---

::title::
Concepto central: almacenamiento distribuido

::content::
Un sistema de almacenamiento distribuido guarda datos en varios nodos conectados por red. Cada nodo puede almacenar una parte de la información, una copia de respaldo o ambas.

Su propósito es ofrecer mayor capacidad, disponibilidad y tolerancia a fallos que un sistema centralizado. Para lograrlo, utiliza mecanismos como particionado, replicación, servidores de metadatos, control de consistencia y recuperación ante fallos.

En Big Data, esta arquitectura permite manejar datos que superan la capacidad de un solo equipo y habilita el procesamiento paralelo sobre grandes conjuntos de información.

<!--
Notas del presentador:
Relacionar el concepto con el crecimiento de los datos. Cuando una organización genera archivos, transacciones, registros de sensores, clics, videos o eventos en tiempo real, un único equipo puede quedarse corto en almacenamiento y velocidad de respuesta. En un sistema distribuido, el dato puede ubicarse en varios nodos y el procesamiento puede dividirse. Esta idea está presente en tecnologías como HDFS, bases NoSQL distribuidas, sistemas cloud y plataformas de analítica.
Fuentes base consultadas: la documentación de HDFS describe la arquitectura basada en NameNode, DataNode, bloques y replicación; la documentación de Spark lo presenta como un motor unificado para procesamiento de datos a gran escala. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Clúster, nodo y red de almacenamiento

::left::
**Clúster**
Conjunto de equipos conectados que funcionan como una infraestructura coordinada.

**Nodo**
Servidor o máquina que participa en el almacenamiento, procesamiento o coordinación.

**Cliente**
Aplicación o usuario que solicita guardar, leer, actualizar o procesar datos.

::right::
**Red**
Medio que conecta los nodos y permite transferir bloques, réplicas, metadatos y resultados.

**Coordinación**
Reglas que permiten decidir dónde se escribe, desde dónde se lee y cómo se recupera el sistema ante fallos.

<!--
Notas del presentador:
Explicar que un clúster no es simplemente un grupo de computadores encendidos. Es un conjunto coordinado de recursos. Cada nodo puede cumplir funciones distintas: almacenar datos, ejecutar tareas de procesamiento, mantener metadatos o coordinar consultas. En sistemas reales, la red es crítica porque la comunicación entre nodos afecta directamente la latencia. Si la red es lenta o inestable, el sistema puede estar bien diseñado, pero responder mal al usuario.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave del almacenamiento distribuido

::content::
* Un **bloque** es la unidad mínima en la que se divide un archivo para distribuirlo entre varios nodos.
* El **particionado** consiste en dividir los datos para ubicarlos en diferentes servidores, permitiendo que varios nodos trabajen al mismo tiempo.
* La **replicación** crea copias de los datos en distintas ubicaciones para aumentar disponibilidad y tolerancia a fallos.
* Un **metadata server** administra información sobre nombres, permisos, estructura y ubicación física de los bloques; no necesariamente almacena los datos reales, sino la información necesaria para encontrarlos.
* La **latencia** es el tiempo de espera que ocurre entre una solicitud y su respuesta; puede estar asociada a lectura, escritura, procesamiento o transferencia por red.
* La **consistencia fuerte** garantiza que todos los nodos vean la misma actualización al mismo tiempo o antes de responder nuevas lecturas.
* La **consistencia eventual** acepta que durante un periodo breve algunos nodos tengan versiones distintas, pero asegura que, si no hay nuevas escrituras, todos terminarán convergiendo al último valor.
* La **consistencia causal** preserva relaciones de causa y efecto entre operaciones relacionadas.
* La **consistencia monótona** evita que un usuario vea versiones antiguas después de haber observado una versión más reciente.
* **Hadoop** es un ecosistema asociado al almacenamiento y procesamiento distribuido de grandes datos.
* **HDFS** divide archivos en bloques y los distribuye en nodos.
* **MapReduce** organiza el procesamiento en fases de mapeo y reducción sobre datos distribuidos.
* **Apache Spark** permite procesamiento distribuido en memoria para acelerar tareas analíticas.

<!--
Notas del presentador:
Esta diapositiva concentra más de trescientas palabras conceptuales si se complementa oralmente. Se recomienda leer parcialmente y explicar con ejemplos. Por ejemplo, una nota académica exige consistencia fuerte porque no sería aceptable que dos usuarios vean calificaciones diferentes al mismo tiempo. En cambio, una plataforma de recomendaciones puede tolerar consistencia eventual porque no afecta gravemente que la recomendación tarde unos segundos en actualizarse. El metadata server puede compararse con un índice de biblioteca: no contiene todos los libros, pero sabe dónde están ubicados y cómo acceder a ellos.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Bloques, particionado y replicación

::image:: 
<img src="/imagenes/bloques.png" alt="Imagen de apoyo sobre bloques, particionado y replicación de datos" />

::content::
* Un archivo grande puede dividirse en bloques.
* Cada bloque puede ubicarse en un nodo distinto.
* Cada bloque puede tener una o más réplicas.
* Si un nodo falla, otra réplica permite recuperar el dato.
* El sistema necesita metadatos para saber dónde está cada bloque y qué copia debe usarse.

<!--
Notas del presentador:
Usar un ejemplo sencillo: un video institucional de gran tamaño puede dividirse en bloques A, B, C y D. El bloque A puede estar en el nodo 1 y tener copia en el nodo 3; el bloque B puede estar en el nodo 2 y tener copia en el nodo 1. Si el nodo 2 falla, el sistema no necesariamente pierde el archivo, porque puede reconstruirlo desde las copias disponibles. En HDFS, los archivos se dividen en bloques y la replicación es un mecanismo fundamental para tolerar fallos. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Consistencia fuerte vs. consistencia eventual

::left::
**Consistencia fuerte**

* Todos los nodos deben reflejar la actualización antes de que el sistema permita lecturas inconsistentes.
* Es adecuada cuando el dato es crítico.

**Ejemplos:** saldo bancario, calificación definitiva, inventario confirmado.

::right::
**Consistencia eventual**

* Los nodos pueden tardar en sincronizarse.
* Si no hay nuevas actualizaciones, todos terminarán mostrando el último valor.
* Es útil cuando se prioriza disponibilidad y velocidad.

**Ejemplos:** conteo de “me gusta”, recomendaciones, catálogos replicados.

<!--
Notas del presentador:
Explicar que no existe una única consistencia perfecta para todos los casos. La consistencia fuerte protege la coherencia inmediata, pero puede aumentar la latencia porque exige coordinación. La consistencia eventual mejora disponibilidad y rendimiento, pero acepta una ventana temporal de diferencia entre nodos. Conectar directamente con la pregunta de evaluación: la consistencia fuerte es la que garantiza que todos los nodos vean las mismas actualizaciones al mismo tiempo. La consistencia eventual significa que todos convergerán al último valor si no hay nuevas escrituras.
-->

---
layout: slide-08-titulo-texto
---

::title::
Latencia: el tiempo que el usuario sí percibe

::content::
La latencia es el retraso entre una solicitud y la respuesta del sistema.

En almacenamiento distribuido puede aparecer cuando:

* El cliente solicita un dato ubicado en un nodo remoto.
* El sistema debe consultar metadatos antes de leer.
* Se requiere confirmar una escritura en varias réplicas.
* La red entre nodos está congestionada.
* El procesamiento se distribuye, pero los resultados deben reunirse.

Reducir latencia no siempre significa eliminar nodos; muchas veces implica acercar los datos al usuario, usar caché, balancear cargas y elegir una estrategia de consistencia adecuada.

<!--
Notas del presentador:
Conectar la latencia con la experiencia del usuario. Un sistema puede ser muy robusto, pero si tarda demasiado en responder, el usuario percibe baja calidad. En la evaluación aparece una pregunta sobre el significado de latencia. Aclarar que, en términos generales, es el tiempo requerido para obtener una respuesta; en la pregunta específica, se aproxima al tiempo requerido para recuperar un dato desde el almacenamiento. También se puede mencionar que la latencia se mide normalmente en milisegundos, pero sus efectos se sienten en procesos masivos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Hadoop, HDFS y MapReduce

::left::
**Hadoop**

Ecosistema utilizado para almacenar y procesar grandes volúmenes de datos en clústeres.

**HDFS**

Sistema de archivos distribuido que divide archivos en bloques, los distribuye y los replica.

**NameNode / Metadata Server**

Administra metadatos: nombres, estructura, permisos y ubicación de bloques.

::right::
**DataNode**

Almacena bloques reales de datos.

**MapReduce**

Modelo de procesamiento distribuido con fases de mapeo y reducción.

**Idea clave**

El dato se distribuye y el procesamiento se acerca a donde está el dato.

<!--
Notas del presentador:
Explicar que Hadoop no es una base de datos relacional ni un lenguaje de programación. Es un ecosistema asociado al procesamiento distribuido de grandes volúmenes de datos. HDFS usa una lógica donde los metadatos permiten ubicar los bloques y los DataNodes almacenan los datos reales. MapReduce permite dividir una tarea en subtareas que se ejecutan sobre partes del conjunto de datos y luego se combinan. La publicación original de MapReduce lo describe como un modelo de programación para procesar grandes conjuntos de datos mediante funciones map y reduce. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-08-titulo-texto
---

::title::
Apache Spark: procesamiento distribuido en memoria

::content::
* Apache Spark es un motor de analítica distribuida para procesamiento de datos a gran escala.

* Su fortaleza está en ejecutar operaciones sobre datos distribuidos usando memoria, lo que puede acelerar tareas iterativas, analíticas y de transformación.

* Spark trabaja con APIs de alto nivel para Python, SQL, Scala, Java y R, y permite abordar procesamiento por lotes, consultas estructuradas, aprendizaje automático y streaming.

"La descripción más adecuada es: **computación distribuida en el procesamiento en memoria**."

<!--
Notas del presentador:
Diferenciar Spark de Hadoop MapReduce. Ambos se relacionan con Big Data, pero Spark se destaca por su motor de ejecución optimizado y por su capacidad de trabajar con datos en memoria en tareas distribuidas. Esto resulta útil en análisis iterativos, aprendizaje automático y flujos de datos. La documentación oficial de Apache Spark lo presenta como un motor unificado para procesamiento de datos a gran escala con APIs en varios lenguajes. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Ejemplo aplicado 1

::rightTitle::
Ejemplo aplicado 2

::left::
**Universidad digital**

Una institución almacena documentos, notas, videos, reportes y registros de acceso.

Los documentos se particionan en bloques.

Las notas se replican con alta consistencia.

Los videos se distribuyen para mejorar disponibilidad.

::right::
**Comercio electrónico**

Un catálogo se replica en varias regiones.

El inventario requiere consistencia más estricta.

Las recomendaciones pueden usar consistencia eventual.

La latencia afecta directamente la experiencia de compra.

<!--
Notas del presentador:
Usar estos dos ejemplos para que los estudiantes vean que las decisiones técnicas dependen del tipo de dato. No se debe tratar igual un video grabado que una nota final o un saldo bancario. Los sistemas distribuidos son decisiones de arquitectura: qué se replica, dónde se guarda, qué tan rápido debe responder, cuánta inconsistencia temporal se tolera y qué ocurre cuando falla un nodo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Glosario de términos clave:

::content::
* **Consistencia fuerte:** todos los nodos ven la misma actualización al mismo tiempo.
* **Consistencia eventual:** sin nuevas escrituras, todos los accesos terminarán devolviendo el último value.
* **Latencia:** tiempo requerido para recuperar o responder una solicitud.
* **Apache Spark:** computación distribuida en memoria.
* **Metadata server:** gestiona ubicación y estructura de archivos.
* **Particionado:** dividir datos o archivos para distribuirlos.
* **Hadoop:** tecnología usada para grandes volúmenes de datos.
* **MapReduce:** fases map y reduce.
* **Desafío común:** consistencia de datos.
* **Bloque:** unidad mínima de almacenamiento distribuido.

<!--
Notas del presentador:
Esta diapositiva prepara al estudiante para interpretar las preguntas sin limitarse a memorizar. Se recomienda explicar por qué las demás opciones pueden ser distractores. Por ejemplo, SQLite, MySQL y MongoDB pueden almacenar datos, pero la pregunta sobre infraestructura robusta para grandes volúmenes distribuidos apunta a Hadoop. Del mismo modo, el metadata server no almacena necesariamente los datos reales: administra información para localizarlos.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Apache Spark en 5 minutos

::media::
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/B038xGcnaG4?si=cXyqS2c1vP8S34cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: introducir Apache Spark como tecnología de procesamiento distribuido en memoria para reforzar la pregunta de evaluación sobre Spark.

Momento recomendado: antes de la explicación de Spark o como refuerzo después de la diapositiva conceptual.

Duración aproximada: verificar en YouTube antes de clase.

Justificación académica: ayuda a diferenciar Spark de Hadoop y a comprender por qué el procesamiento en memoria puede mejorar tareas analíticas.

Video localizado mediante búsqueda web; verificar disponibilidad y duración exacta antes de proyectarlo. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-07-multimedia-con-titulo
---


::title::
¿Qué es MapReduce?

::media::
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/y2V-NViTVcc?si=8y8nBJ4pFxDVZiLG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: reforzar el modelo MapReduce y su lógica de procesamiento distribuido.

Momento recomendado: después de explicar Hadoop y HDFS.

Duración aproximada: verificar en YouTube antes de clase.

Justificación académica: permite visualizar el proceso de mapear datos, agrupar resultados intermedios y reducirlos para obtener una salida agregada.

Video localizado mediante búsqueda web; verificar disponibilidad y duración exacta antes de proyectarlo. :contentReference[oaicite:5]{index=5}
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Hadoop en 5 minutos

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/aReuLtY0YMI?si=9Aewjy3ldsCNXorb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Propósito pedagógico: presentar Hadoop como ecosistema para almacenamiento y procesamiento de grandes volúmenes de datos.

Momento recomendado: al iniciar la sección de tecnologías.

Duración aproximada: verificar en YouTube antes de clase.

Justificación académica: permite introducir la importancia de HDFS, bloques, nodos y procesamiento distribuido desde una visión general.

Video localizado mediante búsqueda web; verificar disponibilidad y duración exacta antes de proyectarlo. :contentReference[oaicite:6]{index=6}
-->

---
layout: slide-08-titulo-texto
---


::title::
Práctica guiada: simulador de almacenamiento distribuido

::content::
**Título:** Mini clúster distribuido en Python.

**Propósito:** simular cómo un sistema divide registros, los asigna a nodos, crea réplicas, registra metadatos y mide tiempos de lectura.

**Herramientas en Windows 11 Pro:**

* Python 3.12 o superior.
* Visual Studio Code.
* Terminal de Windows o PowerShell.
* Carpeta de trabajo llamada `bigdata_semana3`.

**Componentes necesarios:**

* Un archivo Python llamado `simulador_cluster.py`.
* Librerías estándar de Python.
* No requiere instalación de paquetes externos.

<!--
Notas del presentador:
Aclarar que esta práctica no instala Hadoop ni Spark. Es una simulación pedagógica para comprender los conceptos antes de trabajar con plataformas reales. El estudiante observará nodos, réplicas, metadatos, latencia simulada y recuperación ante fallo. La ventaja de usar Python estándar es que todos pueden ejecutar la actividad sin depender de librerías pesadas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Instalación y preparación en Windows 11 Pro

::content::

1. Descargar Python desde el sitio oficial de Python.
2. Durante la instalación, activar la opción **Add Python to PATH**.
3. Abrir PowerShell y verificar:

```bash
python --version
```

4. Instalar Visual Studio Code si aún no está instalado.
5. Crear una carpeta:

```bash
mkdir bigdata_semana3
cd bigdata_semana3
code .
```

6. Crear el archivo:

```bash
simulador_cluster.py
```

7. Copiar el código completo de la siguiente diapositiva y ejecutarlo.

<!--
Notas del presentador:
Indicar que la práctica está pensada para Windows 11 Pro, pero también puede ejecutarse en Linux o macOS con ajustes mínimos. Si algún estudiante tiene problemas con Python, puede usar el lanzador py en Windows: py --version y py simulador_cluster.py. Evitar dedicar demasiado tiempo a instalación durante la sesión; si el grupo no tiene Python preparado, el docente puede ejecutar la práctica en pantalla y los estudiantes analizan los resultados.
-->

---
layout: slide-08-titulo-texto
---

::title::
Conexiones sugeridas de la simulación

::content::
En esta práctica, las conexiones son conceptuales:

* El **cliente** envía escrituras y lecturas.
* El **metadata server** registra en qué nodos quedó cada bloque.
* Los **nodos de datos** almacenan los bloques.
* La **red** se representa mediante latencia simulada.
* La **replicación** guarda copias en más de un nodo.
* El **fallo de nodo** permite observar tolerancia a fallos.
* La **lectura** recupera el dato desde una réplica disponible.

Producto esperado: una salida en consola que muestre particiones, réplicas, metadatos, lecturas, latencia y recuperación ante falla.

<!--
Notas del presentador:
Relacionar cada elemento del código con el concepto visto en clase. El metadata server no guarda todos los datos, sino el mapa que permite ubicarlos. Cada nodo funciona como un servidor de almacenamiento. La latencia artificial ayuda a entender que la recuperación de datos no es instantánea. La réplica disponible permite que el sistema continúe respondiendo aunque un nodo falle.
-->

---
layout: slide-codigo
---

::title::
Código completo en Python

::content::

```python {lines:true}
"""
Simulador pedagógico de almacenamiento distribuido.
Curso: Big Data - Semana 3
Tema: clústeres, particionado, replicación, metadatos y latencia.

Este programa no usa librerías externas.
Ejecutar con:
python simulador_cluster.py
"""

import hashlib
import random
import time
from dataclasses import dataclass, field
from typing import Dict, List, Tuple, Optional


@dataclass
class DataNode:
    """Representa un nodo de almacenamiento."""
    name: str
    is_online: bool = True
    blocks: Dict[str, str] = field(default_factory=dict)

    def write_block(self, block_id: str, value: str) -> None:
        """Guarda un bloque si el nodo está activo."""
        if not self.is_online:
            raise RuntimeError(f"El nodo {self.name} está fuera de línea.")
        self.blocks[block_id] = value

    def read_block(self, block_id: str) -> Optional[str]:
        """Lee un bloque si existe y el nodo está activo."""
        if not self.is_online:
            return None
        return self.blocks.get(block_id)

    def fail(self) -> None:
        """Simula la caída del nodo."""
        self.is_online = False

    def recover(self) -> None:
        """Simula la recuperación del nodo."""
        self.is_online = True


@dataclass
class MetadataServer:
    """Registra ubicación, estructura y réplicas de los bloques."""
    block_locations: Dict[str, List[str]] = field(default_factory=dict)

    def register(self, block_id: str, node_names: List[str]) -> None:
        self.block_locations[block_id] = node_names

    def locate(self, block_id: str) -> List[str]:
        return self.block_locations.get(block_id, [])

    def show_metadata(self) -> None:
        print("\n=== METADATA SERVER ===")
        for block_id, nodes in self.block_locations.items():
            print(f"{block_id} -> réplicas en {nodes}")


class DistributedStorageCluster:
    """Simula un clúster con particionado, replicación y lectura."""

    def __init__(self, node_names: List[str], replication_factor: int = 2) -> None:
        if replication_factor > len(node_names):
            raise ValueError("El factor de replicación no puede superar el número de nodos.")

        self.nodes: Dict[str, DataNode] = {
            name: DataNode(name=name) for name in node_names
        }
        self.metadata = MetadataServer()
        self.replication_factor = replication_factor

    def _hash_partition(self, key: str) -> int:
        """Calcula la partición base usando hash."""
        digest = hashlib.sha256(key.encode("utf-8")).hexdigest()
        return int(digest, 16) % len(self.nodes)

    def _select_replica_nodes(self, key: str) -> List[DataNode]:
        """Selecciona nodos de réplica a partir de la partición base."""
        node_list = list(self.nodes.values())
        start = self._hash_partition(key)
        selected = []

        for offset in range(len(node_list)):
            node = node_list[(start + offset) % len(node_list)]
            if len(selected) < self.replication_factor:
                selected.append(node)

        return selected

    def write(self, key: str, value: str) -> str:
        """Escribe un dato como bloque replicado."""
        block_id = f"block_{key}"
        replica_nodes = self._select_replica_nodes(key)
        successful_nodes = []

        for node in replica_nodes:
            try:
                simulated_latency = random.uniform(0.02, 0.10)
                time.sleep(simulated_latency)
                node.write_block(block_id, value)
                successful_nodes.append(node.name)
            except RuntimeError as error:
                print(f"Advertencia: {error}")

        self.metadata.register(block_id, successful_nodes)
        return block_id

    def read_eventual(self, key: str) -> Tuple[Optional[str], float, Optional[str]]:
        """
        Lectura con enfoque eventual:
        intenta responder desde la primera réplica disponible.
        """
        block_id = f"block_{key}"
        start_time = time.perf_counter()

        for node_name in self.metadata.locate(block_id):
            node = self.nodes[node_name]
            simulated_latency = random.uniform(0.01, 0.08)
            time.sleep(simulated_latency)
            value = node.read_block(block_id)

            if value is not None:
                latency = time.perf_counter() - start_time
                return value, latency, node_name

        latency = time.perf_counter() - start_time
        return None, latency, None

    def read_strong(self, key: str) -> Tuple[Optional[str], float, str]:
        """
        Lectura con enfoque fuerte simplificado:
        consulta réplicas disponibles y verifica si coinciden.
        """
        block_id = f"block_{key}"
        start_time = time.perf_counter()
        values = []

        for node_name in self.metadata.locate(block_id):
            node = self.nodes[node_name]
            simulated_latency = random.uniform(0.03, 0.12)
            time.sleep(simulated_latency)
            value = node.read_block(block_id)

            if value is not None:
                values.append(value)

        latency = time.perf_counter() - start_time

        if not values:
            return None, latency, "sin réplicas disponibles"

        if len(set(values)) == 1:
            return values[0], latency, "réplicas coherentes"

        return None, latency, "inconsistencia detectada"

    def fail_node(self, node_name: str) -> None:
        self.nodes[node_name].fail()

    def recover_node(self, node_name: str) -> None:
        self.nodes[node_name].recover()

    def show_cluster(self) -> None:
        print("\n=== ESTADO DEL CLÚSTER ===")
        for node in self.nodes.values():
            status = "ONLINE" if node.is_online else "OFFLINE"
            print(f"{node.name} [{status}] almacena: {list(node.blocks.keys())}")


def main() -> None:
    random.seed(7)

    cluster = DistributedStorageCluster(
        node_names=["Nodo_A", "Nodo_B", "Nodo_C", "Nodo_D"],
        replication_factor=2
    )

    registros = {
        "estudiante_001": "Nota final: 4.5",
        "estudiante_002": "Nota final: 3.8",
        "reporte_ventas": "Ventas acumuladas: 25000000",
        "video_clase": "Archivo multimedia segmentado"
    }

    print("Escribiendo datos en el clúster...\n")
    for key, value in registros.items():
        block_id = cluster.write(key, value)
        print(f"{key} guardado como {block_id}")

    cluster.metadata.show_metadata()
    cluster.show_cluster()

    print("\n=== LECTURAS EVENTUALES ===")
    for key in registros:
        value, latency, node = cluster.read_eventual(key)
        print(f"{key}: {value} | nodo: {node} | latencia: {latency:.4f} s")

    print("\n=== LECTURA FUERTE SIMPLIFICADA ===")
    value, latency, status = cluster.read_strong("estudiante_001")
    print(f"estudiante_001: {value} | estado: {status} | latencia: {latency:.4f} s")

    print("\nSimulando caída del Nodo_A...")
    cluster.fail_node("Nodo_A")
    cluster.show_cluster()

    print("\nLectura después de la falla:")
    value, latency, node = cluster.read_eventual("estudiante_001")
    print(f"estudiante_001: {value} | nodo usado: {node} | latencia: {latency:.4f} s")

    print("\nRecuperando Nodo_A...")
    cluster.recover_node("Nodo_A")
    cluster.show_cluster()


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
El código simula un clúster con cuatro nodos. Cada clave se transforma en un identificador de bloque y se asigna a nodos mediante una función hash. La replicación guarda el mismo bloque en dos nodos. La lectura eventual responde desde la primera réplica disponible, mientras que la lectura fuerte simplificada consulta las réplicas y valida si coinciden. El fallo de Nodo_A permite observar que una réplica alternativa puede mantener el dato disponible.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::

1. Guardar el archivo como `simulador_cluster.py`.
2. Abrir PowerShell dentro de la carpeta de trabajo.
3. Ejecutar:

```bash
python simulador_cluster.py
```

4. Observar:

* Qué bloque se crea para cada dato.
* En qué nodos queda cada réplica.
* Qué muestra el metadata server.
* Qué latencia aparece en cada lectura.
* Qué ocurre cuando falla un nodo.
* Desde qué réplica se recupera el dato.

5. Cambiar `replication_factor=2` por `replication_factor=3` y comparar resultados.

<!--
Notas del presentador:
Pedir a los estudiantes que no se queden únicamente con la ejecución. Deben interpretar la salida. Preguntar qué pasaría si el factor de replicación fuera uno. También preguntar si la latencia aumenta cuando se exige una lectura fuerte. Enfatizar que la simulación no representa todos los detalles de un sistema real, pero sí permite comprender los principios que sostienen tecnologías distribuidas.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis de la práctica

::content::

* ¿Qué diferencia observa entre lectura eventual y lectura fuerte?
* ¿Qué función cumple el metadata server en la simulación?
* ¿Qué ocurre cuando un nodo queda fuera de línea?
* ¿Por qué la replicación mejora disponibilidad?
* ¿Qué riesgo aparece si no hay suficientes réplicas?
* ¿Qué relación existe entre consistencia fuerte y latencia?
* ¿Qué datos del ejemplo deberían requerir mayor consistencia?
* ¿Qué datos podrían tolerar consistencia eventual?
* ¿Cómo se relaciona el concepto de bloque con HDFS?
* ¿Qué parte del código representa el particionado?

<!--
Notas del presentador:
Usar estas preguntas para guiar el análisis después de la ejecución. No es necesario responderlas todas en plenaria. Se puede pedir que cada estudiante elija dos preguntas y las responda en voz alta o en el chat. La intención es conectar la evidencia de consola con los conceptos de evaluación. Cerrar esta sección recordando que una buena arquitectura de Big Data balancea disponibilidad, consistencia, latencia y costo.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
**Compartan en una frase:**

* Qué concepto comprendieron mejor.
* Qué resultado de la práctica les llamó la atención.
* Qué decisión tomarían para proteger datos críticos.

::right::
**Recojamos tres intervenciones:**

* Una sobre consistencia.
* Una sobre latencia.
* Una sobre replicación.

<!--
Notas del presentador:
Mantener esta sección en máximo siete minutos. La socialización debe ser breve y orientada a consolidar ideas. Evitar que se convierta en una discusión extensa de código. Lo importante es que los estudiantes verbalicen los conceptos: un dato crítico necesita consistencia; una réplica ayuda ante fallos; la latencia afecta la experiencia; el metadata server permite ubicar bloques.
-->

---
layout: slide-08-titulo-texto
---


::title::
Resolución de dudas

::content::
Espacio máximo: 15 minutos.

Prioridad de preguntas:

* Glosario de palabras.
* Diferencia entre consistencia fuerte y eventual.
* Latencia y recuperación de datos.
* Bloques, particionado y réplicas.
* Papel del metadata server.
* Diferencia entre Hadoop, HDFS, MapReduce y Spark.
* Interpretación del código de la práctica.

<!--
Notas del presentador:
Administrar el tiempo con claridad. Si surgen preguntas muy técnicas sobre instalación real de Hadoop o Spark, responder de forma general y sugerir tratarlas en otro espacio para no desplazar el cierre. Enfatizar las dudas directamente relacionadas con la evaluación y con la práctica desarrollada.
-->

---
layout: slide-08-titulo-texto
---


::title::
Para recordar

::content::
Los sistemas distribuidos permiten que Big Data sea posible a escala real.

La descentralización mejora capacidad, disponibilidad y tolerancia a fallos, pero exige resolver desafíos de consistencia, latencia, metadatos, particionado y replicación.

Hadoop, HDFS, MapReduce y Spark son tecnologías clave para comprender cómo se almacenan y procesan grandes volúmenes de información en clústeres.

La práctica en Python permitió observar estos principios de manera simplificada y aplicable.

<!--
Notas del presentador:
Cerrar la clase retomando la idea inicial: no se trata solo de guardar datos, sino de diseñar sistemas capaces de sostener operación, consulta y recuperación. Reforzar que las decisiones técnicas responden a necesidades del negocio o del contexto educativo. Un dato crítico requiere mayor control; un dato menos crítico puede priorizar disponibilidad o rendimiento.
-->

---
layout: slide-08-titulo-texto
---


::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerde diligenciar la **Encuesta de Percepción Estudiantil**.

Su participación permite valorar la experiencia de aprendizaje, reconocer fortalezas de la Open Class e identificar oportunidades de mejora para las siguientes sesiones.

Gracias por su asistencia, participación y disposición durante la actividad práctica.

<!--
Notas del presentador:
Hacer el recordatorio de forma clara y cordial. Explicar que la encuesta no es un trámite aislado, sino un mecanismo institucional para mejorar la calidad académica. Reservar el último minuto para verificar que los estudiantes conocen dónde acceder a la encuesta.
-->

---
layout: slide-12-cierre
---

::title::
Gracias

::content::
Big Data · Semana 3
Almacenamiento distribuido, clústeres y procesamiento paralelo

<!--
Notas del presentador:
Finalizar agradeciendo la participación. Invitar a revisar los conceptos de la evaluación semanal y a practicar nuevamente el simulador en casa, modificando el número de nodos, el factor de replicación y los datos almacenados.
-->