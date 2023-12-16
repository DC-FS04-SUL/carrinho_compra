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


  const login = (login, senha) => {
    console.log(login, senha);
    setValidAuth(!validAuth);
  }

  // const deleteCarrinho = (item) => {
  //   setItensCarrinho(item);
  // };


  // const removerItemCarrinho = (id) => {
  //   // procurar pelo id do produto
  //   // 

  //   deleteCarrinho(item)
  // }

  //Importações
  const dataAll = {
    // Tema de dark mode
    theme,
    alterarTema,
    // add item ou produto no carrinho
    itensCarrinho,
    addCarrinho,
    // logica de login
    validAuth,
    login
  };

  return <Context.Provider value={dataAll}>{children}</Context.Provider>;
};
