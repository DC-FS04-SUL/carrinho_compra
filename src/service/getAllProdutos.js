
const getAllProdutos = async (search) => {
  // Logica de buscar produto
  console.log(search);

  //  primeiro teste da API
  const options = {
    method: "GET",
    headers: { "User-Agent": "insomnia/8.5.1", Authorization: "Basic Og==" },
  };

  const produtos = await fetch("http://localhost:3000/produtos", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));


  return produtos;
};

export default getAllProdutos;
