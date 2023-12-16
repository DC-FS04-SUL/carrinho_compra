import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ThemeProvider = ({ children }) => {
  // States variaveis
  const [validAuth, setValidAuth] = useState(true);
  const [theme, setTheme] = useState("light");
  const [itensCarrinho, setItensCarrinho] = useState([]);

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

  const login = (login, senha) => {
    console.log(login, senha);
    setValidAuth(!validAuth);
  };

  const deleteCarrinho = (item) => {
    setItensCarrinho(item);
  };

  const removerItemCarrinho = (id) => {
    // procurar pelo id do produto
    const novaLista = itensCarrinho.filter((item) => item.id != id)
    deleteCarrinho(novaLista)
  }

  //Importações
  const dataAll = {
    // Tema de dark mode
    theme,
    alterarTema,
    // add item ou produto no carrinho
    itensCarrinho,
    addCarrinho,
    removerItemCarrinho,
    // logica de login
    validAuth,
    login,

    // Helps
    buscarImagem,
    converte_real
  };

  return <Context.Provider value={dataAll}>{children}</Context.Provider>;
};
