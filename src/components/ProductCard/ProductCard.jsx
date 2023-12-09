import { useState, useEffect, useContext } from "react";

import "./ProductCard.css";

// Context
import { Context } from "../../context/Context";

function ProductCard({ item }) {
  const { addCarrinho } = useContext(Context)


  const buscarImagem = (url) => {
    if (url === undefined) {
      return "";
    }

    const url_img = url.split("-I.jpg")[0];

    const new_url_img = `${url_img}-W.jpg`;

    return new_url_img;
  }

  const converte_real = (numero) => {
    if (numero === undefined) {
      return "????????";
    }

    const novo_valor = numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return novo_valor;

  }

  const atualizarCarrinho = () => {
    console.log("Produto: ", item);
    addCarrinho(item)
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
    </>
  );
}

export default ProductCard;
