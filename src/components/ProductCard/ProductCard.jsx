import { useState, useEffect, useContext } from "react";

import "./ProductCard.css";

// Context
import { Context } from "../../context/Context";

function ProductCard({ item }) {
  const { addCarrinho, buscarImagem, converte_real } = useContext(Context);

  const atualizarCarrinho = () => {
    console.log("Produto: ", item);
    addCarrinho(item);
  };

  return (
    <>
      <div className="card tamanho_card">
        <img
          src={buscarImagem(item.thumbnail)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{converte_real(item.price)}</p>

          {/* dar um margin ou gap */}
          <div className="conatianer row gap-2">
            <button
              href="#"
              className="btn btn-primary"
              onClick={atualizarCarrinho}
            >
              Add Carrinho
            </button>

            <button
              href="#"
              className="btn btn-primary"
              onClick={atualizarCarrinho}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
