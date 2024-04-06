import instance from "./interceptors";


const getAllProdutos = async (search) => {
  // Logica de buscar produto
  console.log(search);

  if (search != "" && search != undefined) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = `http://localhost:3000/produtos/search/?search=${search}`;

    const resposta = await instance.get(url);

    const produtos =  resposta.data;

    return produtos;
  } else {
    //  primeiro teste da API
    const url = "http://localhost:3000/produtos/";

    const resposta = await instance.get(url);

    console.log('====================================');
    console.log("resposta: ", resposta);
    console.log('====================================');

    const produto = resposta.data;

    return produto;
  }
};

export default { getAllProdutos };
