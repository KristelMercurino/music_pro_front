// Get the user token from session storage
export const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  
  // Save the user token to session storage
  export const setUserSession = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  };
  
  // Remove the user token from session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
  };


  export const setToken = (token) => {
    localStorage.setItem('token', token);
  };

  export function getSession() {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');
  
    if (token && user) {
      return { token: JSON.parse(token), user: JSON.parse(user) };
    } else {
      return null;
    }
  }
  
  