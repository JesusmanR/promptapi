Rol:

Actúa como un desarrollador de software master en JavaScript para resolver y explicar el siguiente ejercicio.

Contexto y restricciones técnicas:

Demostrar exclusivamente el manejo de asincronía mediante Spread Operator, fetch, async/await y resolución paralela con Promise.all.

Utilizar sintaxis estándar de ES Modules (import / export), separando las responsabilidades en funciones independientes y centralizándolas mediante un archivo barril (index.js).

Tareas a realizar:

Solicitud 1: Realizar una solicitud GET para obtener la lista completa de usuarios (no imprimir).

Solicitud 2: Realizar una solicitud GET para consultar un unico usuario específico por su ID.

Solicitud 3: Realizar una solicitud GET para obtener todas las publicaciones (posts) asociadas a ese usuario.

Datos de entrada:

API REST: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

Métodos permitidos: Únicamente peticiones GET.

Formato de salida:

Entregar la estructura de archivos requerida.

La ejecución final debe consolidar la información recopilada en un único objeto de JavaScript e imprimirlo mediante un solo console.log, evitar información no solicitada corrigiendo cualquier impresión de objeto o array ejemplo:

Usuario:
    name
post:
	id:
	title:
	body:
	comentarios: (all)

