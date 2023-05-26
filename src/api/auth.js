// api/auth.js

const API_URL = "https://mi-servidor-de-autenticacion.com";

async function login(username, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (response.ok) {
    // En este punto, el servidor ha devuelto un token JWT válido que podemos almacenar en el estado de la aplicación
    return data.token;
  } else {
    // En caso contrario, se devuelve un error que se puede manejar en la aplicación
    throw new Error(data.message);
  }
}

export { login };
