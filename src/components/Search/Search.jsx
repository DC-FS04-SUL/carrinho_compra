import { useState } from 'react'
import "./Search.css";
import buscarProdutos from "../../service/buscarProdutos";

function Search() {
  const [search, setSearch] = useState("")

  const buscar = (e) => {
    // reload na pagina
    e.preventDefault();
    buscarProdutos(search)
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
