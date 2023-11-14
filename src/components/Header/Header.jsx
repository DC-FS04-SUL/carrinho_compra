// import { useState } from 'react'
import "./Header.css";
import Search from "../Search/Search";
import ShopCart from "../ShopCart/ShopCart";

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <Search />
        <ShopCart />
      </div>
    </nav>
  );
}

export default Header;
