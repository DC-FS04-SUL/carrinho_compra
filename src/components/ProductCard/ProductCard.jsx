import React, { useEffect, useContext, useState } from 'react';

import './Products.css';
import apiMercadoLivre from '../../service/apiMercadoLivre';
// import ProductCard from '../ProductCard/ProductCard';
// import Loading from '../Loading/Loading';
// import AppContext from '../../context/AppContext';

function Products() {
  // const { products, setProducts, loading, setLoading } = useContext(AppContext);

  const [produtos, setProdutos] = useState([]);
  
  // Primeiro uma função call back
  // Array de Dependências
  useEffect(() => {
    apiMercadoLivre('iphone').then((response) => {
      console.log(produtos)
      setProdutos(response);
    });
  }, []);
  console.log(produtos)
  return (
      <section className="products container">
        { console.log(produtos)}
        asdasd
        {/* {produtos.map((produto, index) => (<p key={index}>{produto.title}</p>))} */}
      </section>
  )
    
}

export default Products;