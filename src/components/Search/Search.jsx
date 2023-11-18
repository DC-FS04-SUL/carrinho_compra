import React, { useEffect, useContext, useState } from 'react';
import "./Search.css";

function Search() {
  const [search, setSearch] = useState('')

  const handleSearch = async (event) => {
    event.preventDefault();
    // setLoading(true);

    // const products = await fetchProducts(searchValue);

    // setProducts(products);
    // setLoading(false);
    // setSearchValue('');
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={ ({target}) => setSearch(target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        {/* icone */}
        Search
      </button>
    </form>
  );
}

export default Search;
