import instance from "./interceptors";

const getAllProdutos = async (search) => {
  // Logica de buscar produto
  console.log(search);

  if (search != "" && search != undefined) {
    const url = `http://localhost:3000/produtos/search/?search=${search}`;

    const resposta = await instance.get(url);

    const produtos = resposta.data;

    return produtos;
  } else {
    //  primeiro teste da API
    const url = "/produtos/";

    const resposta = await instance
      .get(url)
      .then((response) => response)
      .catch((err) => console.error(err));
    const produto = resposta.data;

    return produto;
  }
};

export default { getAllProdutos };
