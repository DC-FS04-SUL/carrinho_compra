import { useContext } from "react";
import "./ProductsCart.css";
import Header from "../../components/Header/Header";
import VisualisarItens from "../../components/VisualisarItens";

// contextHome
import { Context } from "../../context/Context";

function ProductsCart() {
  const { theme, itensCarrinho } = useContext(Context);

  return (
    <main data-bs-theme={theme}>
      <Header />
      <section className="container text-center">
        <div className="row">
          {itensCarrinho.map((element) => (
            // <p key={element.id}>{element.title}</p>
            <VisualisarItens key={element.id} item={element} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductsCart;
