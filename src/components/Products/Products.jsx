import { useState, useEffect } from "react";
import buscarProdutos from "../../service/buscarProdutos";

function Products() {
  const [produtos, setProdutos] = useState([
    { title: "teste 1" },
    { title: "teste 2" },
  ]);

  useEffect(() => {
    buscarProdutos()
    .then((resultado) => {
      setProdutos(resultado);
    });
  }, [produtos]);

  return (
    <main>
      <section>
        {produtos.map((element, index) => (
          <p key={index}>{element.title}</p>
        ))}
      </section>
    </main>
  );
}

export default Products;
