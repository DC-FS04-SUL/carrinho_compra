import axios from "axios";

const login = async (email, senha) => {
  const data = { email, senha };

  const headers = {
    "Content-Type": "application/json",
  };

  const resposta = await axios.post(
    "http://localhost:3000/login",
    data,
    headers
  );

  if (resposta.status === 200) {
    localStorage.setItem("token", resposta.data.token);

    const usuario = JSON.stringify(resposta.data.usuario);

    localStorage.setItem("usuario", usuario);

    return true;
  }

  return false;
};

export default { login };
