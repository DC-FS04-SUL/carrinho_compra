import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ThemeProvider = ({ children }) => {
  // States variaveis
  const [theme, setTheme] = useState("light");
  const [itensCarrinho, setItensCarrinho] = useState([]);

  // Funções
  const alterarTema = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addCarrinho = (item) => {
    setItensCarrinho([...itensCarrinho, item]);
  };

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
    addCarrinho
  };

  return <Context.Provider value={dataAll}>{children}</Context.Provider>;
};
