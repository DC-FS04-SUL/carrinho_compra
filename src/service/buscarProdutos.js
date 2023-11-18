import { produto } from "../../produtos"

const buscarProdutos = async (search) => {
    // Logica de buscar produto
    console.log(search);
    console.log(produto);

    return produto;
}

export default buscarProdutos;