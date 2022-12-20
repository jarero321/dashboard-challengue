# dashboard-challengue

Holaaaaaaaaaaaa desconocido,
soy yo el readme.md
Bueno mi destino en este camino es enseñarte mas acerca de este proyecto elaborado por: Luis Carlos Jarero Martinez
Bueno para empezar veamos la linea de pasos que necesitas para poder ejecutar el proyecto en tu local:
1 instala las dependecias con el comando npm install o npm i
2 despues de eso podras correr el script npm run dev que te ejecutara el servidor en el puerto 5173
3 puedes acceder a ello mediante http://localhost:5173/
Bieeen comencemos a hablarte acerca del proyecto
tecnologia principal: React.JS
empaquetador: Vite
por que vite en vez de webpack? pueees ahi un sin fin de maravillas que ofrece vite, pero las mas apreciables son:
1 soporte con swc,
2 mayor velocidad de empaquetamiento
3 mejor hot refresh.
Al final solo cambian unas pequeñas cosas como donde escupe el html (lo escupe en dist), como llamas las variables de entorno y tiene un soporte medianamente nativo con las absolute paths.
Bien ahora si comencemos con lo chido.
Folder Structure:
Esta pensado para que el proyecto sea lo mayormente escalable, tenemos muchos folders (si lo se son muchos) perooo son muy especificos y cada uno alberga logica similar o parecida.
assets: imagenes
components: componentes reutilizables en la aplicacion
hook: custom Hooks reutilizables en la aplicacion
interceptors: interceptores reutilizables en la aplicacion
models: interfaces reutilizables en la aplicacion
redux: store que se utilizo en este proyecto
services: servicios que se ocuparan a lo largo de la aplicacion
utilities: kit de funciones reutilizables en la aplicacion.
Vez la carpeta raiz de src son cosas reutilizables a lo largo de la aplicacion mientras que la logica
mas especifica la preservamos en la carpeta pages, donde pages tendra la misma forma que la raiz de src.
Hablar mas a detalle sobre la estrcutura de carpetas es un lio, perooo con gusto podemos hablarlo :).
bien ahora si empezamos con la logica.
Use los principios de SOLID en react, si bien no es POO podemos hacer una abstraccion de estos principios y aplicarlos a React de esta manera (es mi forma de ver la abstraccion asi que puede diferir un poco de otros puntos de vista).
ufff mucho texto verdad?.
solo para complementar use una estrucutra de error para asi mostrar errores traidos desde backend por medio de los interceptors, use un hook de autenticacion que nutrira a la app de informacion del usuario.
cualquier cosa duda o comentario puedes contactarme al 4761509858 excelente inicio de semanaaaaaaaaaaaaaa.
