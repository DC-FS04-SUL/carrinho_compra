import { useContext } from "react";
import "./Header.css";
import Search from "../Search/Search";
import ShopCart from "../ShopCart/ShopCart";
import { Link } from "react-router-dom";

// contextHeader
import { Context } from "../../context/Context";

function Header() {
  const { alterarTema } = useContext(Context);

  // const [validHome, setValidHome] = useState(false);

  // const goToCard = () => {
  //   setValidRotaCarrinho(!validRotaCarrinho);
  // };

  /*
    TODO::
    Redirecionar para pagina principal 'Navbar'.
    Criar logica de menu para login, logout e mudar tema.
    Cria logica de Menu lateral para mostrar o menu de login e Mudar tema
  */

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"  >Navbar</Link>
        
        <Search />
        <ShopCart />
        <button onClick={alterarTema}>Mudar o tema</button>
      </div>
    </nav>
  );
}

export default Header;
