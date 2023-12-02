import { useState, useEffect } from "react";
import buscarProdutos from "../../service/buscarProdutos";

import ProductCard from "../ProductCard/ProductCard";
import "./Products";

function Products() {
  const [produtos, setProdutos] = useState([
    { title: "teste 1" },
    { title: "teste 2" },
  ]);

  // User Effect iniciar assim que o componente for chamado
  useEffect(() => {
    buscarProdutos().then((resultado) => {
      setProdutos(resultado);
    });
  }, [produtos]);

  return (
    <main>
      <section>
        {produtos.map((element) => (
          // <p key={index}>{element.title}</p>
          <ProductCard />
        ))}
      </section>
    </main>
  );
}

export default Products;
