import { useContext } from 'react'
import "./Header.css";
import Search from "../Search/Search";
import ShopCart from "../ShopCart/ShopCart";

// contextHeader
import { Context } from "../../context/Context";

function Header() {
  const { alterarTema } = useContext(Context)

  /*
    TODO::
    Redirecionar para pagina principal 'Navbar'.
    Criar logica de menu para login, logout e mudar tema.
    Cria logica de Menu lateral para mostrar o menu de login e Mudar tema
  */

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <Search />
        <ShopCart />
        <button onClick={alterarTema}>Mudar o tema</button>
      </div>
    </nav>
  );
}

export default Header;
