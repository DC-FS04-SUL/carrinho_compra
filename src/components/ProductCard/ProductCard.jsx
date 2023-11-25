import React, { useEffect, useContext, useState } from "react";

import "./ProductCard.css";
import apiMercadoLivre from "../../service/apiMercadoLivre";
// import ProductCard from '../ProductCard/ProductCard';
// import Loading from '../Loading/Loading';
// import AppContext from '../../context/AppContext';

function ProductCard(item) {
  // const { products, setProducts, loading, setLoading } = useContext(AppContext);

  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState([]);

  // Primeiro uma função call back
  // Array de Dependências
  useEffect(() => {
    apiMercadoLivre("iphone").then((response) => {
      console.log(item, produto);

      setProdutos(response);
    });
  }, []);
  console.log(produtos);
  return (
    <section className="products container">
      <div className="card" >
        <img src="https://http2.mlstatic.com/D_812116-MLA71783168214_092023-W.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            test
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
