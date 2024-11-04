
# THE DRIVER ERA

Sitio web dedicado a la banda compuesta por Ross y Rocky Lynch, creado para el curso de desarrollo web de Coderhouse. Podés encontrar información de la banda, su música y mucho más.


## Autor

**Juan Euler**

- Git Hub: https://github.com/juaneuler

- LinkedIn: https://www.linkedin.com/in/juan-euler/


## Tecnologías usadas

Las librerías externas se integraron al sitio web usando links de CSS y Js

- **Bootstrap - versión 5.2**: Menú para navegar entre páginas (personalizado por mí). Responsive generado por la librería. También se implementaron carruseles en diferentes páginas.
- **Bootstrap Icons**: Íconos para redes sociales en el componente Footer.
- **Animate Style CSS**: Animación para la foto de la portada del home y la sección "MÚSICA".
- **SASS**: Se usó para generar estilos y separar cada hoja para hacer el proyecto más escalable y prolijo. Cabe aclarar que se usó la versión instalada con el comando **npm install -D node-sass nodemon**, que es una versión basada en LibSass. 
- **Google Fonts**: Se usó para cambiar la tipografía default. Se pegó el link en el archivo **_generales.scss**


## Despliegue

Se puede ver el sitio web desde este link

https://thedriverera.netlify.app/

Servidor utilizado: Netlify


## Uso

Los usuarios pueden navegar entre 5 páginas distintas:

- **HOME**: Información de la banda y widget de Spotify para reproducir las canciones más populares.
- **MÚSICA**: Discografía de la banda y reseñas.
- **VIDEOS**: videos oficiales.
- **TOUR**: información de las giras realizadas, con énfasis en la gira de 2024 y el paso de la banda por Buenos Aires.
- **LIVE PERFORMANCES**: fotos y videos en vivo. También se encuentran conciertos completos de festivales de 2023.
- **CONTACTO**: Se hizo para cumplir con la consigna de uso de formulario, pero la información enviada no se almacena en ninguna base de datos. El botón submit mantiene el comportamiento por defecto de refrescar la página.