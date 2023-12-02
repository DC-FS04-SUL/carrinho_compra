import { createContext, useState } from "react";

export const Context = createContext();

export const ThemeProvider = ({ children }) => {
  // States variaveis
  const [theme, setTheme] = useState("light");

  // Funções
  const alterarTema = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //Importações
  const dataAll = {
    // Tema de dark mode
    theme,
    alterarTema,
  };

  return <Context.Provider value={dataAll}>{children}</Context.Provider>;
};
