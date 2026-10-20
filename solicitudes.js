import { API_URL } from "./env.js";

// Función base: hace la petición a la API y convierte la respuesta de JSON a objetos JS
const solicitud = async (endpoint) => {
  const respuesta = await fetch(`${API_URL}/${endpoint}`);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar ${endpoint}`);
  }
  return await respuesta.json();
};

// Consultas puntuales a cada recurso de la API
export const usuario = async (userId) => await solicitud(`users/${userId}`);
export const postsUsuario = async (userId) => await solicitud(`posts?userId=${userId}`);
export const comentariosPost = async (postId) => await solicitud(`comments?postId=${postId}`);