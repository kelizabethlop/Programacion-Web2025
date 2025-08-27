# Gestor de Tareas - Programación Web 2025

Este proyecto corresponde a la tarea **hw-04** del curso de Programación Web 2025. creado por Karla Lopez -1510421-
La aplicación es un gestor de tareas desarrollado con **React + Vite**, desplegado automáticamente en **Amazon S3** y distribuido mediante **CloudFront** utilizando GitHub Actions y Doppler para la gestión de secretos.


###  Hooks utilizados

En este proyecto se utilizaron los siguientes **React Hooks**:

- **useState**  
  Se utilizó para manejar el estado de las tareas (agregar, filtrar, eliminar).  
  Permite gestionar el estado interno de los componentes de forma sencilla y reactiva.

- **useEffect**  
  Se utilizó para **persistir el estado en localStorage**, de manera que las tareas no se pierdan al recargar la página.  
  Permite ejecutar efectos secundarios (sincronización con almacenamiento) en el ciclo de vida del componente.

###  URL del CDN (CloudFront)
https://d77yiv1xj7gjx.cloudfront.net/

###  Evidencia (capturas de pantalla)
Las imágenes se encuentran en la carpeta docs/images 