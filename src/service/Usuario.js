const validUsuario = async (email) => {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "insomnia/8.6.0",
    },
    body: `{"email":"${email}"}`,
  };

  console.log(options)

  const cliente = await fetch("http://localhost:3000/usuarios/find", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));


  return cliente;


};

export default { validUsuario };
