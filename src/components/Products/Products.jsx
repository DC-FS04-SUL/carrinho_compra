import { useState, useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

// contextHome
import { Context } from "../../context/Context";

function Products() {
  const { buscarProdutos, produtos } = useContext(Context);

  // User Effect iniciar assim que o componente for chamado
  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <main>
      <section className="produtos">
        {produtos.map((element) => (
          // <p key={index}>{element.title}</p>
          <ProductCard key={element.id} item={element} />
        ))}
      </section>
    </main>
  );
}

export default Products;
