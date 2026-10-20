import { usuario, postsUsuario, comentariosPost } from "./solicitudes.js";

// Recorre los posts y le agrega a cada uno sus comentarios
const postsConComentarios = async (posts) =>
  await Promise.all(
    posts.map(async (post) => {
      const comentarios = await comentariosPost(post.id);
      return { ...post, comentarios };
    })
  );

// Función principal: arma un solo objeto con el usuario, sus posts y los comentarios
export const formatearUsuario = async (userId) => {
  // Usuario y posts se piden en paralelo porque no dependen entre sí
  const [user, posts] = await Promise.all([usuario(userId), postsUsuario(userId)]);

  // A cada post le asociamos sus comentarios
  const post = await postsConComentarios(posts);

  // Retornamos una sola variable con todo
  return { ...user, post };
};