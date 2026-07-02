---
layout: slide-01-portada
---

::title::
Big Data

::week::
Semana 6

::date::
Junio 10 de 2026

<!--
Notas del presentador:
Dar la bienvenida al grupo y ubicar la sesión dentro del curso Electiva CPC: Big Data. Explicar que esta semana se abordará el cloud computing como infraestructura habilitadora para almacenar, procesar, proteger y escalar datos. Señalar que la clase tendrá una orientación práctica: comprender conceptos, revisar casos, conectar con la evaluación y desarrollar una práctica guiada con Python y contenedores.
-->

---
layout: slide-02-titulo
---

::title::
Cloud Computing aplicado a Big Data

<!--
Notas del presentador:
Presentar el curso como un espacio de comprensión aplicada sobre datos masivos, infraestructura tecnológica, analítica y toma de decisiones. Recordar que Big Data no se limita al tamaño de los datos, sino a la necesidad de gestionar volumen, velocidad, variedad, veracidad y valor mediante arquitecturas, herramientas y criterios responsables.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Infraestructura cloud para Big Data

::image:: 
<img src="/imagenes/bigdata_cloud_arquitectura.png" alt="Imagen de apoyo sobre infraestructura cloud para Big Data" />

::content::
Cada vez que una empresa usa plataformas digitales, sensores IoT, aplicaciones móviles, comercio electrónico o sistemas académicos, genera datos que deben ser almacenados, protegidos, procesados y analizados.

El desafío aparece cuando los datos crecen más rápido que la infraestructura local.

La nube responde a esta necesidad mediante recursos bajo demanda, acceso por red, agrupación de recursos, elasticidad rápida y servicio medido, características descritas por NIST para el modelo de cloud computing. 

<!--
Notas del presentador:
Usar un ejemplo cercano: una universidad con aulas virtuales, formularios, calificaciones, videos, accesos de estudiantes y reportes administrativos. Explicar que, cuando estos datos aumentan, ya no basta con un computador local o un servidor aislado. Se requieren recursos que puedan crecer, integrarse, protegerse y medirse de manera eficiente.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad de integración: “¿Qué subiría usted a la nube?”

::left::

1. Piense en una empresa, institución educativa o emprendimiento.
2. Escriba tres tipos de datos que esa organización genera.
3. Clasifique cada dato según su sensibilidad:

   * Público.
   * Interno.
   * Confidencial.
   * Crítico.
4. Indique si lo almacenaría en nube pública, privada o híbrida.

::right::
**Seguido haremos...**

* Solicitar respuestas rápidas en chat, voz o tablero.
* Elegir 4 o 5 aportes del grupo.
* Preguntar:
  **¿Qué dato sería más riesgoso si se pierde, se altera o se filtra?**
* Conectar las respuestas con seguridad, escalabilidad y modelos de nube.

<!--
Notas del presentador:
Esta actividad activa saberes previos y permite reconocer que no todos los datos tienen el mismo valor ni el mismo riesgo. Orientar la conversación hacia la idea de que elegir nube pública, privada o híbrida no depende solo del costo, sino también de la criticidad del dato, las regulaciones, los tiempos de respuesta y la capacidad de integración con otros sistemas.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Caso A: matrícula universitaria

::rightTitle::
Caso B: tienda en línea

::left::
Una institución educativa recibe miles de accesos durante la inscripción de asignaturas.

Debe consultar bases de datos, validar pagos, actualizar cupos, guardar evidencias y evitar caídas del sistema.

**Pregunta detonadora**

¿Qué recursos deberían escalar temporalmente?

::right::
Un comercio electrónico lanza una campaña nacional.

Debe procesar clics, pagos, inventario, recomendaciones y entregas.

**Pregunta detonadora**

¿Qué datos deberían analizarse casi en tiempo real?

<!--
Notas del presentador:
Comparar ambos casos para mostrar que la nube no se usa únicamente por moda tecnológica. En el caso universitario, el pico ocurre en fechas específicas. En el comercio electrónico, la demanda puede crecer por campañas o temporadas. En ambos casos, la elasticidad, el balanceo de carga, los contenedores, las bases de datos escalables y la analítica permiten sostener la operación.
-->

---
layout: slide-08-titulo-texto
---

::title::
¿Qué es cloud computing?

::content::
El cloud computing es un modelo que permite acceder por red a recursos configurables como servidores, almacenamiento, redes, aplicaciones y servicios, los cuales pueden aprovisionarse y liberarse rápidamente con mínima gestión directa.

Desde una mirada aplicada a Big Data, la nube permite:

* Almacenar grandes volúmenes de datos.
* Ejecutar procesamiento distribuido.
* Integrar fuentes heterogéneas.
* Crear ambientes de prueba y producción.
* Medir consumo de recursos.
* Ajustar capacidad según la demanda.

NIST describe el modelo con cinco características esenciales, tres modelos de servicio y cuatro modelos de despliegue. 

<!--
Notas del presentador:
Aclarar que cloud computing no significa que los datos estén “en el aire”, sino en centros de datos operados con altos niveles de automatización, virtualización, redes, seguridad y monitoreo. Para Big Data, la nube es importante porque permite pasar de infraestructura rígida a recursos flexibles que se pueden activar, escalar y medir según la necesidad del proyecto.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Características esenciales de la nube

::left::
**1. Autoservicio bajo demanda**

El usuario puede aprovisionar recursos sin intervención manual permanente del proveedor.

**2. Acceso amplio por red**

Los servicios están disponibles a través de internet o redes privadas.

**3. Agrupación de recursos**

La infraestructura se comparte y asigna dinámicamente entre múltiples usuarios.

::right::
**4. Elasticidad rápida**

Los recursos pueden aumentar o disminuir según la demanda.

**5. Servicio medido**

El consumo puede monitorearse, controlarse y facturarse según uso.

Estas características explican por qué la nube es útil para cargas variables de datos.

<!--
Notas del presentador:
Relacionar cada característica con un ejemplo práctico. Autoservicio: crear una base de datos en minutos. Acceso por red: consultar un dashboard desde distintos lugares. Agrupación: usar infraestructura compartida sin conocer el servidor físico exacto. Elasticidad: aumentar procesamiento durante una campaña. Servicio medido: pagar o controlar consumo con base en uso real.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Modelos de servicio

::rightTitle::
Ejemplo aplicado a Big Data

::left::
**IaaS**

Infraestructura como servicio: máquinas virtuales, redes, discos y balanceadores.

**PaaS**

Plataforma como servicio: bases de datos gestionadas, entornos de ejecución, servicios de analítica.

**SaaS**

Software como servicio: aplicaciones completas listas para usar.

::right::
**IaaS**

Crear un clúster para procesamiento de datos.

**PaaS**

Usar un servicio administrado de bases NoSQL o Spark.

**SaaS**

Usar una plataforma de visualización o CRM analítico.

La elección depende del control requerido, el conocimiento técnico y el costo operativo.

<!--
Notas del presentador:
Explicar que IaaS da mayor control, pero también exige mayor responsabilidad técnica. PaaS reduce la carga de administración porque el proveedor gestiona parte de la plataforma. SaaS entrega aplicaciones listas, pero con menor control sobre la infraestructura. Relacionar esta decisión con la responsabilidad compartida: mientras más gestionado sea el servicio, más tareas técnicas asume el proveedor.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Modelos de despliegue

::rightTitle::
Criterio de elección

::left::
**Nube pública**

Servicios ofrecidos por un proveedor a múltiples clientes.

**Nube privada**

Infraestructura dedicada a una organización.

**Nube híbrida**

Combinación entre nube pública, privada y recursos locales.

**Multinube**

Uso de varios proveedores de nube.

::right::
La selección depende de:

* Sensibilidad de los datos.
* Regulaciones.
* Costos.
* Capacidad técnica.
* Integración con sistemas existentes.
* Continuidad del negocio.
* Riesgo de dependencia de proveedor.

<!--
Notas del presentador:
Diferenciar nube híbrida y multinube. La nube híbrida combina ambientes propios o privados con servicios públicos. La multinube usa más de un proveedor para evitar dependencia, mejorar disponibilidad o aprovechar servicios específicos. Señalar que la multinube puede reducir el riesgo de depender de un solo proveedor, pero también aumenta la complejidad de gobierno, seguridad e integración.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Arquitectura cloud para Big Data

::image:: 
<img src="/imagenes/modelos_nube_publica_privada_hibrida.png" alt="Imagen de apoyo sobre arquitectura cloud para Big Data" />

::content::
Una arquitectura típica de Big Data en la nube puede integrar:

* Fuentes de datos: aplicaciones, sensores, logs, bases transaccionales.
* Ingesta: APIs, colas, conectores o eventos.
* Almacenamiento: data lake, bases NoSQL, almacenamiento de objetos.
* Procesamiento: batch, streaming o procesamiento distribuido.
* Analítica: consultas, modelos, dashboards e indicadores.
* Seguridad: cifrado, identidad, auditoría y control de acceso.

<!--
Notas del presentador:
Explicar que la nube facilita separar responsabilidades dentro de la arquitectura. La ingesta captura datos; el almacenamiento conserva datos crudos o transformados; el procesamiento genera valor; la analítica comunica resultados; la seguridad atraviesa todas las capas. Reforzar que en Big Data no se trata solo de guardar datos, sino de convertirlos en información útil y confiable.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave: 

::content::
**Elasticidad:** Capacidad de aumentar o disminuir recursos según demanda.

**Escalabilidad:** Capacidad de crecer en usuarios, datos, procesamiento o almacenamiento.

**Contenedor:** Unidad que empaqueta una aplicación con sus dependencias para ejecutarse de manera consistente en diferentes entornos.

**Firma digital o firma criptográfica:** Mecanismo que permite verificar autenticidad e integridad de datos.

**Cifrado:** Proceso que protege datos convirtiéndolos en información no legible sin una clave.

**Responsabilidad compartida:** Distribución de obligaciones de seguridad entre proveedor cloud y cliente.

<!--
Notas del presentador:
Relacionar cada término con las preguntas de la evaluación. Por ejemplo, elasticidad aparece cuando se habla de escalar recursos bajo demanda; contenedores Docker aparecen cuando se busca desplegar aplicaciones de manera consistente; firma digital se relaciona con verificar que los datos no hayan sido alterados; cifrado protege datos en tránsito y en reposo; responsabilidad compartida evita creer que el proveedor se encarga de todo.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Elasticidad y escalabilidad

::left::
**Elasticidad**

Responde a cambios de demanda en el corto plazo.

Ejemplo:

Una plataforma aumenta capacidad durante una evaluación masiva y la reduce al finalizar.

**Idea central**

Ajuste dinámico.

::right::
**Escalabilidad**

Permite crecer de manera sostenida.

Ejemplo:

Una empresa pasa de miles a millones de registros históricos.

**Idea central**

Crecimiento planificado.

<!--
Notas del presentador:
Aclarar que elasticidad y escalabilidad se relacionan, pero no son lo mismo. La elasticidad responde a variaciones temporales; la escalabilidad sostiene crecimiento de largo plazo. En Big Data se necesitan ambas: elasticidad para cargas variables y escalabilidad para almacenar y procesar datos que aumentan continuamente.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Contenedores Docker y despliegue

::image:: 
<img src="/imagenes/responsabilidad_compartida_cloud.png" alt="Imagen de apoyo sobre contenedores Docker" />

::content::
Los contenedores permiten empaquetar código, dependencias, runtime, librerías y configuración para que una aplicación se ejecute de forma confiable en distintos entornos.

Esta idea responde directamente a una necesidad de las empresas:

**“Que funcione igual en desarrollo, pruebas, producción o nube”.**

Docker describe el contenedor como una unidad estándar de software que incluye lo necesario para ejecutar una aplicación de manera rápida y confiable entre ambientes de cómputo. 

<!--
Notas del presentador:
Conectar este concepto con la primera pregunta de evaluación. Las máquinas virtuales también ayudan a aislar entornos, pero los contenedores se han vuelto una tecnología clave para desplegar aplicaciones de manera consistente y eficiente. Explicar que, en Big Data, los contenedores facilitan reproducir pipelines, APIs, servicios de ingesta y componentes analíticos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Contenedores frente a máquinas virtuales

::left::
**Máquinas virtuales**

* Incluyen sistema operativo invitado.
* Son más pesadas.
* Aíslan a nivel de hardware virtual.
* Son útiles cuando se requiere control completo del sistema.

::right::
**Contenedores**

* Comparten el kernel del sistema anfitrión.
* Son más ligeros.
* Inician rápidamente.
* Facilitan portabilidad, automatización y despliegue continuo.

**En evaluación:** la tecnología esperada es **Contenedores Docker**.

<!--
Notas del presentador:
Evitar presentar una tecnología como “mejor” en todos los casos. Las máquinas virtuales siguen siendo útiles, pero para despliegue consistente, rápido y eficiente de aplicaciones modernas, los contenedores son una respuesta muy común. Enfatizar que Docker no es solo una herramienta, sino una forma de empaquetar aplicaciones para reducir problemas de compatibilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Seguridad en la nube: responsabilidad compartida

::content::
En cloud computing, la seguridad no es responsabilidad exclusiva del proveedor ni exclusiva del usuario.

El proveedor suele proteger la infraestructura física, redes base, centros de datos y servicios administrados.

El usuario debe proteger datos, identidades, accesos, configuraciones, aplicaciones y uso adecuado de los servicios.

AWS, Azure y Google Cloud explican este enfoque como un modelo de responsabilidad compartida entre proveedor y cliente.

**En evaluación:** la opción correcta es que la seguridad debe ser preocupación de usuarios y proveedores.

<!--
Notas del presentador:
Usar una analogía: arrendar una oficina en un edificio seguro. El edificio puede tener vigilancia y control de acceso, pero la empresa sigue siendo responsable de sus documentos, llaves internas, permisos del personal y manejo de información. En la nube ocurre algo similar: el proveedor protege la infraestructura, pero el cliente debe configurar correctamente usuarios, permisos, cifrado, redes y aplicaciones.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Confidencialidad, integridad y disponibilidad

::left::
**Confidencialidad**

Solo acceden quienes tienen autorización.

Medidas:

* Cifrado.
* Gestión de identidades.
* Políticas de acceso.
* MFA.

**Integridad**

Los datos no deben alterarse sin autorización.

Medidas:

* Firma digital.
* Hash.
* Control de cambios.
* Auditoría.

::right::
**Disponibilidad**

Los servicios y datos deben estar accesibles cuando se necesitan.

Medidas:

* Redundancia.
* Backups.
* Balanceo de carga.
* Monitoreo.
* Recuperación ante desastres.

Azure documenta el uso de cifrado en reposo, cifrado en tránsito y gestión de claves como áreas centrales de seguridad cloud.

<!--
Notas del presentador:
Relacionar la triada CIA con las preguntas de evaluación. Si el problema es que un atacante intercepta y modifica datos, la preocupación principal es la integridad. Si se busca proteger datos durante transmisión y almacenamiento, el cifrado se vuelve fundamental. Si el problema es que el sistema debe seguir funcionando, se habla de disponibilidad y continuidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Cifrado, firma digital y MFA

::content::
**Cifrado de datos**

Protege información durante transmisión y almacenamiento. En tránsito suele asociarse con HTTPS/TLS; en reposo, con cifrado de discos, bases de datos o almacenamiento.

**Firma digital o firma criptográfica**

Permite verificar que un mensaje no fue alterado y que proviene de una fuente esperada.

**Autenticación multifactorial**

Reduce el riesgo de accesos no autorizados al exigir más de una prueba de identidad.

**Idea clave:** no basta con guardar datos en la nube; se deben proteger durante todo su ciclo de vida.

<!--
Notas del presentador:
Explicar que cifrar y firmar no son exactamente lo mismo. Cifrar busca proteger confidencialidad; firmar o usar hashes/HMAC busca verificar integridad y autenticidad. En la práctica guiada se usará una firma HMAC sencilla para validar que los eventos enviados a la API no hayan sido modificados. Aclarar que, en producción, esto debería complementarse con HTTPS, gestión de claves y controles de acceso robustos.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Procesamiento distribuido y Apache Spark

::image:: 
<img src="/imagenes/contenedores_vs_maquinas_virtuales.png" alt="Imagen de apoyo sobre Apache Spark y procesamiento distribuido" />

::content::
Big Data requiere procesar datos mediante enfoques que permitan distribuir cargas de trabajo.

Apache Spark es un motor multilenguaje para ingeniería de datos, ciencia de datos y aprendizaje automático en máquinas individuales o clústeres. También permite procesamiento por lotes y streaming.

En entornos cloud, Spark puede ejecutarse como servicio administrado o como parte de plataformas de datos.

**En evaluación:** los frameworks como Apache Spark facilitan procesamiento distribuido y paralelo.

<!--
Notas del presentador:
Recordar lo visto en semanas anteriores sobre procesamiento por lotes y streaming. Spark permite trabajar con grandes conjuntos de datos usando APIs de alto nivel y distribuir operaciones. En la nube, se puede ejecutar sobre infraestructura escalable o servicios administrados, reduciendo la necesidad de configurar manualmente todos los nodos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Servicios cloud para Big Data

::left::
**Almacenamiento**

* Data lake.
* Almacenamiento de objetos.
* Bases NoSQL.
* Bases analíticas.

**Procesamiento**

* Spark administrado.
* Hadoop como servicio.
* Serverless.
* Pipelines de datos.

::right::
**Analítica**

* Dashboards.
* Machine Learning.
* Consultas SQL distribuidas.
* Visualización.

**Gobierno y seguridad**

* Catálogo de datos.
* Control de acceso.
* Auditoría.
* Cifrado y gestión de claves.

<!--
Notas del presentador:
Explicar que Hadoop como servicio aparece en la evaluación como una alternativa típica para manejar grandes volúmenes de datos. Sin embargo, señalar que en el ecosistema actual también conviven Spark, servicios serverless, bases NoSQL y plataformas de lakehouse. La respuesta de evaluación se interpreta desde la formulación de la pregunta: manejar datos masivos de forma eficiente suele asociarse con Hadoop como servicio.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Beneficios principales

::rightTitle::
Desafíos principales

::left::

* Acceso a procesamiento escalable.
* Menor inversión inicial en infraestructura.
* Elasticidad para cargas variables.
* Servicios administrados.
* Integración con analítica avanzada.
* Despliegue rápido de ambientes.
* Disponibilidad global.

::right::

* Dependencia de conectividad.
* Costos variables difíciles de estimar.
* Configuraciones inseguras.
* Riesgo de dependencia de proveedor.
* Complejidad multinube.
* Latencia.
* Cumplimiento normativo.

<!--
Notas del presentador:
Presentar una mirada equilibrada. La nube ofrece grandes ventajas, pero no elimina los problemas de arquitectura, seguridad, costos ni gobierno de datos. Señalar que una decisión cloud responsable debe considerar el tipo de dato, la criticidad del proceso, los costos de transferencia, los niveles de servicio y las capacidades del equipo técnico.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Ejemplo aplicado: analítica de eventos académicos

::left::
Una universidad desea analizar eventos de su plataforma virtual:

* Inicio de sesión.
* Entrega de actividades.
* Visualización de recursos.
* Intentos de cuestionarios.
* Accesos por programa académico.
* Errores de conexión.

::right::
Con cloud computing podría:

* Recibir eventos mediante una API.
* Almacenarlos en un data lake.
* Procesarlos con Spark.
* Visualizarlos en dashboards.
* Escalar durante cierres de actividades.
* Proteger accesos con MFA.
* Validar integridad con firmas.

<!--
Notas del presentador:
Usar este ejemplo para conectar la práctica con un contexto académico cercano. Explicar que los eventos de plataformas virtuales pueden generar grandes volúmenes de información. Analizarlos permite identificar dificultades, predecir riesgo académico, mejorar tiempos de atención y optimizar recursos, siempre considerando privacidad y ética del dato.
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada: MiniCloud Data Lab

::content::
**Despliegue de un microservicio analítico contenedorizado para eventos de Big Data.**

**Propósito**

Comprender cómo una aplicación de ingesta y análisis de datos puede desplegarse de manera consistente usando Docker y Python.

**Idea de la práctica**

Se construirá una API con FastAPI que recibe eventos simulados, verifica una firma de integridad, almacena datos en SQLite y entrega métricas analíticas.

<!--
Notas del presentador:
Presentar la práctica como una simulación local de una arquitectura cloud. Aunque se ejecuta en Windows 11 Pro, el enfoque reproduce ideas usadas en producción: API de ingesta, contenedor, variables de entorno, volumen persistente, control por API Key, firma HMAC, almacenamiento y métricas. Resaltar que no se requiere cuenta en AWS, Azure o Google Cloud para comprender el patrón.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Componentes necesarios

::rightTitle::
Conexiones sugeridas

::left::

* Windows 11 Pro.
* Windows Terminal o PowerShell.
* Python 3.12 o superior.
* Docker Desktop con WSL 2.
* Visual Studio Code.
* Navegador web.
* Conexión a internet para instalar dependencias.
* Carpeta local del proyecto.

::right::
**Flujo lógico**

Navegador o cliente Python
→ API FastAPI
→ Contenedor Docker
→ Volumen local
→ Base SQLite
→ Endpoint de métricas

**Puertos**

* API local: `localhost:8000`.
* Documentación: `localhost:8000/docs`.

<!--
Notas del presentador:
Explicar que las conexiones no son físicas, sino lógicas. El navegador consume la API, el cliente Python envía eventos, el contenedor ejecuta la aplicación y el volumen conserva la base de datos aunque el contenedor se reinicie. Relacionar este flujo con una arquitectura cloud real, en la cual podrían usarse balanceadores, bases administradas, data lakes y servicios de monitoreo.
-->

---
layout: slide-08-titulo-texto
---

::title::
Instalación sugerida en Windows 11 Pro

::content::
**1. Instalar Python**

En PowerShell:

```powershell
winget install Python.Python.3.12
py --version
```

**2. Instalar Docker Desktop**

* Activar WSL 2 durante la instalación.
* Abrir Docker Desktop.
* Verificar que esté usando motor WSL 2.
* Probar:

```powershell
docker --version
docker compose version
```

Docker documenta el uso del backend WSL 2 en Windows y recomienda tener WSL 2 instalado y actualizado. 

Python documenta `venv` como mecanismo para crear entornos virtuales aislados. 


<!--
Notas del presentador:
Acompañar a los estudiantes que ya tengan Python o Docker instalado. Indicar que no deben reinstalar si ya cuentan con versiones funcionales. Si Docker no responde, revisar que Docker Desktop esté abierto. Si el comando py no funciona, verificar instalación de Python y la opción de agregar al PATH. No profundizar demasiado en errores individuales durante la clase; reservar dudas técnicas puntuales para el cierre.
-->

---
layout: slide-08-titulo-texto
---

::title::
Estructura del proyecto

::content::
Crear una carpeta de trabajo:

```powershell
mkdir C:\bigdata-cloud-lab
cd C:\bigdata-cloud-lab
mkdir app
mkdir data
```

Estructura esperada:

```text
C:\bigdata-cloud-lab
  app
    main.py
  data
  client.py
  requirements.txt
  Dockerfile
  docker-compose.yml
```

Crear entorno virtual local para ejecutar el cliente:

```powershell
py -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
```

<!--
Notas del presentador:
Explicar que esta estructura separa el código de la API, los datos persistentes, el cliente de prueba y los archivos de despliegue. Señalar que la carpeta data será montada como volumen dentro del contenedor, lo cual permite conservar la base SQLite fuera del ciclo de vida del contenedor.
-->

---
layout: slide-08-titulo-texto
---

::title::
Archivo requirements.txt

::content::
Crear el archivo `requirements.txt` con este contenido:

```txt
fastapi==0.115.6
uvicorn[standard]==0.34.0
requests==2.32.3
```

Instalar dependencias locales para ejecutar el cliente:

```powershell
pip install -r requirements.txt
```

Estas dependencias permiten:

* Crear la API con FastAPI.
* Ejecutar el servidor con Uvicorn.
* Enviar eventos de prueba con Requests.

<!--
Notas del presentador:
Indicar que FastAPI se usará dentro del contenedor y Requests se usará principalmente para el cliente de prueba. Explicar que fijar versiones ayuda a la reproducibilidad, una idea importante en ciencia de datos, ingeniería de datos y despliegue de aplicaciones.
-->

---
layout: slide-codigo
---

::title::
Archivo app/main.py

::content::
Crear el archivo `app/main.py` con el siguiente código completo:

```python {lines:true}
import hashlib
import hmac
import math
import os
import sqlite3
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel, Field


DB_PATH = Path(os.getenv("DB_PATH", "/data/events.db"))
API_KEY = os.getenv("API_KEY", "clase-bigdata-2026")
SIGNING_SECRET = os.getenv("SIGNING_SECRET", "secreto-demo")

app = FastAPI(
    title="MiniCloud Data Lab",
    description="API educativa para ingesta y analítica básica de eventos.",
    version="1.0.0",
)


class Event(BaseModel):
    event_id: str = Field(..., min_length=3)
    timestamp: str
    region: str
    source: str
    bytes_transferred: int = Field(..., ge=0)
    latency_ms: float = Field(..., ge=0)
    status_code: int = Field(..., ge=100, le=599)
    signature: str


def get_connection() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def init_db() -> None:
    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS events (
                event_id TEXT PRIMARY KEY,
                timestamp TEXT NOT NULL,
                region TEXT NOT NULL,
                source TEXT NOT NULL,
                bytes_transferred INTEGER NOT NULL,
                latency_ms REAL NOT NULL,
                status_code INTEGER NOT NULL
            )
            """
        )
        connection.commit()


def event_message(event: Event) -> str:
    values = [
        event.event_id,
        event.timestamp,
        event.region,
        event.source,
        str(event.bytes_transferred),
        str(event.latency_ms),
        str(event.status_code),
    ]
    return "~".join(values)


def calculate_signature(event: Event) -> str:
    message = event_message(event).encode("utf-8")
    secret = SIGNING_SECRET.encode("utf-8")
    return hmac.new(secret, message, hashlib.sha256).hexdigest()


def validate_api_key(x_api_key: Optional[str]) -> None:
    if x_api_key != API_KEY:
        raise HTTPException(
            status_code=401,
            detail="API Key inválida o ausente.",
        )


def percentile(values: list[float], p: float) -> float:
    if not values:
        return 0.0

    ordered = sorted(values)
    index = (len(ordered) - 1) * p
    lower = math.floor(index)
    upper = math.ceil(index)

    if lower == upper:
        return round(ordered[int(index)], 2)

    weight = index - lower
    result = ordered[lower] * (1 - weight) + ordered[upper] * weight
    return round(result, 2)


@app.on_event("startup")
def startup() -> None:
    init_db()


@app.get("/health")
def health() -> dict:
    return {
        "status": "ok",
        "service": "MiniCloud Data Lab",
        "database": str(DB_PATH),
    }


@app.post("/ingest")
def ingest_event(
    event: Event,
    x_api_key: Optional[str] = Header(default=None),
) -> dict:
    validate_api_key(x_api_key)

    expected_signature = calculate_signature(event)
    if not hmac.compare_digest(event.signature, expected_signature):
        raise HTTPException(
            status_code=400,
            detail="La firma del evento no coincide. Posible alteración de datos.",
        )

    try:
        with get_connection() as connection:
            connection.execute(
                """
                INSERT INTO events (
                    event_id,
                    timestamp,
                    region,
                    source,
                    bytes_transferred,
                    latency_ms,
                    status_code
                )
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    event.event_id,
                    event.timestamp,
                    event.region,
                    event.source,
                    event.bytes_transferred,
                    event.latency_ms,
                    event.status_code,
                ),
            )
            connection.commit()
    except sqlite3.IntegrityError:
        raise HTTPException(
            status_code=409,
            detail="El evento ya existe.",
        )

    return {
        "message": "Evento recibido y validado.",
        "event_id": event.event_id,
    }


@app.get("/events")
def list_events(limit: int = 10) -> dict:
    safe_limit = max(1, min(limit, 100))

    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT *
            FROM events
            ORDER BY timestamp DESC
            LIMIT ?
            """,
            (safe_limit,),
        ).fetchall()

    return {
        "count": len(rows),
        "events": [dict(row) for row in rows],
    }


@app.get("/metrics")
def metrics() -> dict:
    with get_connection() as connection:
        rows = connection.execute("SELECT * FROM events").fetchall()

    if not rows:
        return {
            "total_events": 0,
            "message": "No hay eventos registrados.",
        }

    latencies = [float(row["latency_ms"]) for row in rows]
    total_bytes = sum(int(row["bytes_transferred"]) for row in rows)
    error_events = [
        row for row in rows
        if int(row["status_code"]) >= 500
    ]

    by_region: dict[str, int] = {}
    by_source: dict[str, int] = {}

    for row in rows:
        region = row["region"]
        source = row["source"]
        by_region[region] = by_region.get(region, 0) + 1
        by_source[source] = by_source.get(source, 0) + 1

    return {
        "total_events": len(rows),
        "total_megabytes": round(total_bytes / 1_000_000, 3),
        "average_latency_ms": round(sum(latencies) / len(latencies), 2),
        "p95_latency_ms": percentile(latencies, 0.95),
        "error_rate": round(len(error_events) / len(rows), 4),
        "events_by_region": by_region,
        "events_by_source": by_source,
    }
```

<!--
Notas del presentador:
Explicar los elementos principales del código. La API recibe eventos, valida una API Key, calcula una firma HMAC y compara contra la firma enviada por el cliente. Si la firma no coincide, se rechaza el evento. Luego se almacena en SQLite. El endpoint de métricas calcula volumen total, latencia promedio, percentil 95, tasa de error y distribución por región y fuente. Conectar esto con integridad, seguridad, observabilidad y analítica.
-->

---
layout: slide-codigo
---

::title::
Archivo client.py

::content::
Crear el archivo `client.py` con el siguiente código completo:

```python {lines:true}
import hashlib
import hmac
import json
import os
import random
import sys
import time
from datetime import datetime, timezone
from uuid import uuid4

import requests


API_URL = os.getenv("API_URL", "http://localhost:8000")
API_KEY = os.getenv("API_KEY", "clase-bigdata-2026")
SIGNING_SECRET = os.getenv("SIGNING_SECRET", "secreto-demo")

REGIONS = ["Santander", "Bogota", "Antioquia", "Valle", "Costa"]
SOURCES = ["aula_virtual", "app_movil", "portal_web", "sensor_iot"]


def event_message(event: dict) -> str:
    values = [
        event["event_id"],
        event["timestamp"],
        event["region"],
        event["source"],
        str(event["bytes_transferred"]),
        str(event["latency_ms"]),
        str(event["status_code"]),
    ]
    return "~".join(values)


def sign_event(event: dict) -> str:
    message = event_message(event).encode("utf-8")
    secret = SIGNING_SECRET.encode("utf-8")
    return hmac.new(secret, message, hashlib.sha256).hexdigest()


def build_event() -> dict:
    status_code = random.choices(
        population=[200, 201, 400, 404, 500, 503],
        weights=[55, 20, 8, 7, 6, 4],
        k=1,
    )[0]

    event = {
        "event_id": str(uuid4()),
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "region": random.choice(REGIONS),
        "source": random.choice(SOURCES),
        "bytes_transferred": random.randint(5_000, 2_500_000),
        "latency_ms": round(random.uniform(25, 900), 2),
        "status_code": status_code,
    }

    event["signature"] = sign_event(event)
    return event


def send_event(event: dict) -> None:
    response = requests.post(
        f"{API_URL}/ingest",
        headers={"X-API-Key": API_KEY},
        json=event,
        timeout=10,
    )

    if response.status_code not in (200, 201):
        print("Error al enviar evento:")
        print(response.status_code, response.text)
    else:
        print("Evento enviado:", event["event_id"])


def main() -> None:
    total_events = 30

    if len(sys.argv) > 1:
        total_events = int(sys.argv[1])

    print(f"Enviando {total_events} eventos a {API_URL}")

    for _ in range(total_events):
        event = build_event()
        send_event(event)
        time.sleep(0.05)

    metrics_response = requests.get(
        f"{API_URL}/metrics",
        timeout=10,
    )

    print("\nMétricas generadas por la API:")
    print(json.dumps(metrics_response.json(), indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
```

<!--
Notas del presentador:
Explicar que este cliente simula eventos como si vinieran de aplicaciones, sensores o plataformas académicas. Cada evento contiene región, fuente, volumen transferido, latencia y código de estado. Antes de enviarlo, el cliente calcula una firma HMAC. Esto permite demostrar el concepto de integridad de datos y conectar con la pregunta de evaluación sobre firma digital o verificación de alteración.
-->

---
layout: slide-08-titulo-texto
---

::title::
Archivos Dockerfile y docker-compose.yml

::content::
Crear el archivo `Dockerfile`:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Crear el archivo `docker-compose.yml`:

```yaml
services:
  bigdata-api:
    build: .
    container_name: bigdata-cloud-lab
    environment:
      API_KEY: clase-bigdata-2026
      SIGNING_SECRET: secreto-demo
      DB_PATH: /data/events.db
    ports:
      - "8000:8000"
    volumes:
      - ./data:/data
    restart: unless-stopped
```

<!--
Notas del presentador:
Explicar que el Dockerfile define cómo construir la imagen de la aplicación y docker-compose.yml define cómo ejecutarla. Las variables de entorno representan configuración externa, una práctica común en despliegues cloud. El volumen permite persistencia de datos. El puerto 8000 expone la API para probarla desde el navegador o desde el cliente Python.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar la práctica

::content::
**1. Construir y ejecutar el contenedor**

```powershell
docker compose up --build
```

**2. Abrir documentación automática**

En el navegador:

```text
http://localhost:8000/docs
```

**3. Probar salud del servicio**

```text
http://localhost:8000/health
```

**4. En otra terminal, ejecutar el cliente**

```powershell
.\.venv\Scripts\activate
python client.py 50
```

**5. Consultar métricas**

```text
http://localhost:8000/metrics
```

<!--
Notas del presentador:
Guiar paso a paso. Indicar que la primera terminal queda ocupada ejecutando el contenedor y mostrando logs. Por eso se abre una segunda terminal para ejecutar el cliente. Si el endpoint /metrics muestra eventos, la práctica fue exitosa. Si no hay respuesta, revisar que Docker esté abierto y que el puerto 8000 no esté ocupado por otro proceso.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y evidencias

::left::
**Producto esperado**

Una API contenedorizada que:

* Recibe eventos simulados.
* Verifica API Key.
* Valida firma HMAC.
* Almacena datos.
* Calcula métricas.
* Expone documentación automática.

::right::
**Evidencias sugeridas**

* Captura de `docker compose up --build`.
* Captura de `localhost:8000/docs`.
* Resultado de `python client.py 50`.
* Captura del endpoint `/metrics`.
* Breve reflexión sobre seguridad, elasticidad y contenedores.

<!--
Notas del presentador:
Señalar que la práctica no busca construir una plataforma Big Data completa, sino comprender componentes fundamentales de una arquitectura cloud: contenedor, API, ingesta, persistencia, seguridad básica y métricas. Indicar que esta evidencia puede servir como insumo para discusiones posteriores sobre despliegue en nube pública, integración con bases NoSQL o procesamiento con Spark.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis para la práctica

::content::
Después de ejecutar el laboratorio, responda:

1. ¿Qué problema resuelve Docker en esta práctica?
2. ¿Qué pasaría si se cambia `SIGNING_SECRET` en el servidor y no en el cliente?
3. ¿Por qué el archivo SQLite se guarda en la carpeta `data`?
4. ¿Qué elemento de la práctica representa la integridad de datos?
5. ¿Qué cambiaría si esta API se desplegara en una nube pública?
6. ¿Qué riesgos aparecen si no se usa HTTPS en producción?
7. ¿Cómo podría escalar esta solución para recibir millones de eventos?
8. ¿Qué parte podría reemplazarse por Spark, Hadoop como servicio o una base NoSQL?

<!--
Notas del presentador:
Estas preguntas permiten pasar de la ejecución técnica a la comprensión conceptual. Invitar a los estudiantes a justificar sus respuestas. Por ejemplo, Docker resuelve portabilidad; la firma HMAC protege integridad; el volumen conserva datos; HTTPS protege transmisión; Spark o Hadoop permitirían procesar grandes volúmenes; y una nube pública agregaría balanceo, monitoreo, identidad, cifrado y servicios administrados.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
**Dinámica**

Cada estudiante o grupo comparte en máximo un minuto:

* Qué resultado obtuvo.
* Qué métrica le llamó la atención.
* Qué error o dificultad apareció.
* Qué concepto de la evaluación logró comprender mejor.

::right::
**Criterios para orientar la discusión**

* Claridad conceptual.
* Relación con Big Data.
* Relación con cloud computing.
* Identificación de riesgos de seguridad.
* Reconocimiento del papel de Docker.
* Posibles mejoras del laboratorio.

<!--
Notas del presentador:
Mantener la socialización breve para no exceder el tiempo. Seleccionar intervenciones variadas: una sobre instalación, una sobre seguridad, una sobre métricas y una sobre escalabilidad. Reforzar que el error técnico también es una oportunidad de aprendizaje, especialmente en temas de despliegue e infraestructura.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas frecuentes

::content::
**¿La nube elimina la necesidad de infraestructura propia?**

No siempre. Muchas organizaciones combinan nube pública, privada e infraestructura local.

**¿Docker es lo mismo que una máquina virtual?**

No. Docker usa contenedores; las máquinas virtuales incluyen un sistema operativo invitado completo.

**¿Cifrado y firma digital son equivalentes?**

No. El cifrado protege confidencialidad; la firma permite verificar integridad y autenticidad.

**¿Spark reemplaza la nube?**

No. Spark es un motor de procesamiento; la nube puede ofrecer la infraestructura o el servicio administrado para ejecutarlo.

<!--
Notas del presentador:
Usar esta diapositiva para aclarar malentendidos comunes antes del cierre. Evitar respuestas excesivamente largas. Si una duda requiere soporte técnico individual, proponer revisarla después de la clase o en el canal académico correspondiente. Mantener el foco en la evaluación y en la comprensión de conceptos clave.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordemos...

::content::
El cloud computing transforma la manera en que las organizaciones gestionan datos porque permite aprovisionar recursos de forma flexible, desplegar aplicaciones de manera consistente, proteger información crítica y procesar grandes volúmenes de datos.

Para Big Data, la nube no es solo infraestructura.

Es un ecosistema que integra:

* Almacenamiento.
* Procesamiento.
* Seguridad.
* Analítica.
* Automatización.
* Gobierno de datos.
* Escalabilidad organizacional.

<!--
Notas del presentador:
Cerrar retomando la idea central de la semana: la nube redefine la gestión de datos porque permite pasar de capacidades fijas a capacidades dinámicas. Reforzar que la adopción de cloud computing debe ser estratégica, segura y alineada con necesidades del negocio o institución. Conectar con la evaluación y recomendar repasar los términos clave antes de responder.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, se recuerda a los estudiantes diligenciar la **Encuesta de Percepción Estudiantil**.

Su participación permite:

* Valorar la experiencia académica del curso.
* Identificar fortalezas del proceso formativo.
* Reconocer oportunidades de mejora.
* Fortalecer la calidad de las Open Class.
* Aportar a la mejora continua institucional.

<!--
Notas del presentador:
Hacer el recordatorio de manera amable y concreta. Explicar que la encuesta no es un trámite aislado, sino un mecanismo de mejora continua. Invitar a responder con criterio, respeto y responsabilidad académica. No extender demasiado esta sección para conservar el cierre dentro del tiempo previsto.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Introducción a cloud computing

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/MCKdahh2lSo?si=pYA5IffG0jgKUWt6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Usar este video como apoyo introductorio, no como reemplazo de la explicación. Antes de reproducirlo, pedir a los estudiantes identificar tres palabras clave. Después del video, conectar esas palabras con autoservicio, red, recursos compartidos, elasticidad y servicio medido.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
FastAPI y Docker en práctica

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/MZNHkpjvRcU?si=J3IWf9HDKpvjVhIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Indicar que el video es complementario y que la práctica de la clase tendrá un objetivo específico de Big Data: recibir eventos, validar integridad y generar métricas. El video puede ayudar a estudiantes que aún no reconocen la relación entre una API, un endpoint y un contenedor Docker.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Big Data en la nube

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/bAyrObl7TYE?si=tf-GQ39gEN3-cmXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Como no se incluye un enlace verificado en esta diapositiva, el docente puede reemplazar el marcador por un video institucional, académico o técnico revisado previamente. Verificar que sea breve, claro, pertinente para pregrado y que no exceda cinco minutos.
-->

---
layout: slide-12-cierre
---

::title::
Gracias

::content::
**Big Data — Semana 6**

Cloud Computing aplicado a datos masivos

**Ideas finales**

* La nube habilita elasticidad, escalabilidad y servicio medido.
* Docker favorece despliegues consistentes.
* La seguridad en cloud es responsabilidad compartida.
* El cifrado y la firma protegen datos en tránsito, reposo e integridad.
* Spark y Hadoop como servicio facilitan procesamiento distribuido.
* La analítica cloud debe gestionarse con criterios técnicos, éticos y organizacionales.

<!--
Notas del presentador:
Agradecer la participación del grupo. Recordar revisar la evaluación de la semana con base en los conceptos trabajados. Invitar a conservar la práctica como evidencia y punto de partida para futuras implementaciones con servicios cloud reales, bases NoSQL o procesamiento distribuido. Cerrar con el recordatorio de la encuesta institucional si aún no se ha diligenciado.


[1]: https://csrc.nist.gov/pubs/sp/800/145/final?utm_source=chatgpt.com "SP 800-145, The NIST Definition of Cloud Computing | CSRC"
[2]: https://www.docker.com/resources/what-container/?utm_source=chatgpt.com "What is a Container?"
[3]: https://aws.amazon.com/compliance/shared-responsibility-model/?utm_source=chatgpt.com "Shared Responsibility Model - Amazon Web Services (AWS)"
[4]: https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-overview?utm_source=chatgpt.com "Azure encryption overview"
[5]: https://spark.apache.org/?utm_source=chatgpt.com "Apache Spark™ - Unified Engine for large-scale data analytics"
[6]: https://docs.docker.com/desktop/features/wsl/?utm_source=chatgpt.com "Docker Desktop WSL 2 backend on Windows"
[7]: https://docs.python.org/3/library/venv.html?utm_source=chatgpt.com "venv — Creation of virtual environments"
[8]: https://www.youtube.com/watch?v=MCKdahh2lSo&utm_source=chatgpt.com "What is cloud computing? | Explained in 4 minutes"
[9]: https://www.youtube.com/watch?v=MZNHkpjvRcU&utm_source=chatgpt.com "FastAPI: Primer ENDPOINT con Docker (en 5 Min)"
-->
