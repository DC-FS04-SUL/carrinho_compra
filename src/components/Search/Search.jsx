import { useState, useContext } from 'react'
import "./Search.css";

// contextHome
import { Context } from "../../context/Context";

function Search() {
  const [search, setSearch] = useState("")
  const { buscarProdutos } = useContext(Context)

  const buscar = async (e) => {
    // reload na pagina
    e.preventDefault();
    await buscarProdutos(search);
  }

  return (
    <form className="d-flex" role="search" onSubmit={buscar}>
      <input
        className="form-control me-2"
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
