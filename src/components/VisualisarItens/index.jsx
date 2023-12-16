import { useState, useEffect, useContext } from "react";

import "./VisualisarItens.css";

// Context
import { Context } from "../../context/Context";

function VisualisarItens({ item }) {
  const { addCarrinho, buscarImagem, converte_real } = useContext(Context);

  const atualizarCarrinho = () => {    
    addCarrinho(item);
  };

  return (
    <>

      <div className="card mb-3 card-main m-3">
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={buscarImagem(item.thumbnail)}
              className="img-fluid rounded-start img-width"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{converte_real(item.price)}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <button
                    href="#"
                    className="btn btn-danger"
                    onClick={atualizarCarrinho}
                  >
                    Remover
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualisarItens;
