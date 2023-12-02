import { useState, useEffect } from "react";

import "./ProductCard";

function ProductCard({ item }) {
  const buscarImagem = (url) => {
    const url_img = url.split("-I.jpg")[0];

    const new_url_img = `${url_img}-W.jpg`;

    return new_url_img;
  };

  const atributosItems = ({ thumbnail_id, id, price, title }) => {
    console.log("Produto: ", thumbnail_id, id, price, title);
  };

  return (
    <>
      <div className="card tamanho_card">
        {/* <img
          src={buscarImagem(item.thumbnail)}
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          {/* <h5 className="card-title">{item.title}</h5> */}
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            href="#"
            className="btn btn-primary"
            // onClick={atualizarCarrinho}
          >
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
