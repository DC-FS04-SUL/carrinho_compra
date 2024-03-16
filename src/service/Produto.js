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

    const produtos = await fetch(url, options)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));

    return produtos;
  } else {
    //  primeiro teste da API
    const options = {
      method: "GET",
      headers: { "User-Agent": "insomnia/8.5.1", Authorization: "Basic Og==" },
    };

    const produtos = await fetch("http://localhost:3000/produtos/", options)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));

    return produtos;
  }
};

export default { getAllProdutos };
