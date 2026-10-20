import { USER_ID } from "./env.js";
import { formatearUsuario } from "./formateador.js";

// Llamamos al formateador con el usuario 8 e imprimimos el resultado completo
formatearUsuario(USER_ID)
  .then((datos) => {
    // Recorremos los posts y los imprimimos uno por uno, así se ven también sus comentarios
    datos.post.forEach((post) => {
      console.log(post);
    });
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error.message);
  });