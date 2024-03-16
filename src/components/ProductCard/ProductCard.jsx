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

  const telaFinalizarCompra = () => {
    /*
      TODO::
      Logica de adicionar produto no carrinho e redirecionar para finalizar compra
    */
  }

  return (
    <>
      <div className="card tamanho_card">
        <img
          src={buscarImagem(item.img)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.nome}</h5>
          <p className="card-text">{converte_real(item.preco)}</p>

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
              onClick={telaFinalizarCompra}
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
