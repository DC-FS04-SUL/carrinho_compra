// import { useState } from 'react'
import "./Search.css";

function Search() {
  // const [count, setCount] = useState(0)

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
