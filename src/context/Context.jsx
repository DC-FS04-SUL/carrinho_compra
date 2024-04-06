import { createContext, useState, useEffect } from "react";
import Produto from "../service/Produto";
import Usuario from "../service/Usuario";
import Auth from "../service/Auth";

export const Context = createContext();

export const ThemeProvider = ({ children }) => {
  // States variaveis
  const [validAuth, setValidAuth] = useState(false);
  const [theme, setTheme] = useState("light");
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [cliente, setCliente] = useState({});

  // Funções
  const alterarTema = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addCarrinho = (item) => {
    setItensCarrinho([...itensCarrinho, item]);
  };

  const buscarImagem = (url) => {
    if (url === undefined) {
      return "";
    }

    const url_img = url.split("-I.jpg")[0];

    const new_url_img = `${url_img}-W.jpg`;

    return new_url_img;
  };

  const converte_real = (numero) => {
    if (numero === undefined) {
      return "????????";
    }

    const novo_valor = numero.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return novo_valor;
  };

  const login = async (login, senha) => {
    const email = "chico2wallison@gmail.com";
    // add logica de login da api

    const resposta = Auth.login(login, senha);

    console.log("====================================");
    console.log("login: ", resposta);
    console.log("====================================");
    
    const cliente = await Usuario.validUsuario(email);
    setCliente(cliente);
    setValidAuth(!validAuth);
  };

  const deleteCarrinho = (item) => {
    setItensCarrinho(item);
  };

  const removerItemCarrinho = (id) => {
    // procurar pelo id do produto
    const novaLista = itensCarrinho.filter((item) => item.id != id);
    deleteCarrinho(novaLista);
  };

  const buscarProdutos = async (search) => {
    setProdutos(await Produto.getAllProdutos(search));
  };

  //Importações
  const dataAll = {
    // Tema de dark mode
    theme,
    alterarTema,
    // add item ou produto no carrinho
    itensCarrinho,
    addCarrinho,
    removerItemCarrinho,
    // Produtos
    produtos,
    // logica de login
    validAuth,
    login,
    cliente,
    // Helps
    buscarImagem,
    converte_real,
    //api produtos
    buscarProdutos,
  };

  return <Context.Provider value={dataAll}>{children}</Context.Provider>;
};
