import axios from "axios";

const instance = axios.create({
  // URL DE PROD OU HML
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5001/api/v1"
      : "https://api.mysite.com/api/v1",
});

// instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

//validate response
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      // retornar para login
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      window.location.href = "/login";
      return;
    }
    return Promise.reject(error);
  }
);

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
