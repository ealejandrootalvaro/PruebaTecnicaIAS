Prueba tecnica ISA

Frontend React y Backend Expressjs

Entrar al repositorio y ejecutar el comando -- npm install
Para inicial el servidor ejecutar el comando -- npm run server
Abrir el navegador e ingresar a localhost:8080

En caso de errores con la compilacion de React ejecutar el comando npm run build y volver a abrir el navegador

<hr>

Para reiniciar la base de datos eliminar el archivo server/data/database, crear un archivo vacio con el comando touch server/data/database  y luego ejecutar el comando node server/models/poblar.js para crear el esquema de base de datos.

Finalmente hay que reiniciar el proceso del servidor para que se use la nueva base de datos.