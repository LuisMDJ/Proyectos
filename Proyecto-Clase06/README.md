Introducción:
En el desarrollo web, la manipulación del DOM (Document Object Model) es esencial para crear experiencias interactivas y dinámicas en una página sin necesidad de recargarla.

En este proyecto, aplicamos la manipulación del DOM para construir una caja de comentarios, donde los usuarios pueden escribir su opinión, verla reflejada inmediatamente en la interfaz y, si lo desean, eliminarla. Esto nos permite explorar el uso de JavaScript para acceder a elementos del HTML, modificar su contenido y manejar eventos que afectan el comportamiento de la página.


Cuerpo:
Captura y validación de datos
Se obtiene el texto ingresado por el usuario desde el área de comentarios y se valida que no esté vacío ni exceda un límite de caracteres. Si es demasiado largo, se corta y se muestra una alerta.

Creación dinámica de elementos
El comentario validado se inserta en la página creando un nuevo elemento HTML con JavaScript. Se le agrega una clase CSS para mantener el diseño y se muestra la fecha y hora de publicación.

Manejo de eventos y eliminación
Cada comentario incluye un botón de eliminación que, al ser presionado, localiza y remueve el comentario del DOM, permitiendo gestionar dinámicamente la lista de mensajes.


Conclusión:
Este proyecto demuestra cómo modificar, agregar y eliminar elementos en el DOM con JavaScript, logrando interactividad sin recargar la página. Estas técnicas son esenciales para mejorar la experiencia del usuario en aplicaciones web modernas.