import { useEffect, useState } from 'react';
import ProductCard from "../ProductCard/ProductCard";
// const { produtos } = require('../services');

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
      setProdutos(response);
      console.log("response", response)
    });
  }, []);

  return (
      <section className="products container">
        {produtos.map((produto, index) => (<ProductCard key={index} item={produto}/>))}
      </section>
  )
    
}

export default Products;