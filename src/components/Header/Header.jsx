import { useContext } from 'react'
import "./Header.css";
import Search from "../Search/Search";
import ShopCart from "../ShopCart/ShopCart";

// contextHeader
import { Context } from "../../context/Context";

function Header() {
  const { alterarTema } = useContext(Context)
  // const [count, setCount] = useState(0)

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
