import { useContext, useState } from "react";
import "./ShopCart.css";
import { BsFillCartFill } from "react-icons/bs";

import { Navigate } from "react-router-dom";

// Context
import { Context } from "../../context/Context";

function ShopCart() {
  const { itensCarrinho } = useContext(Context);
  const [validRotaCarrinho, setValidRotaCarrinho] = useState(false);

  const goToCard = () => {
    setValidRotaCarrinho(!validRotaCarrinho)
  };

  return (
    <>
      {validRotaCarrinho ? <Navigate to="/carrinho" /> : <></>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("itensCarrinho ", itensCarrinho);
          goToCard();
        }}
      >
        <div className="badge" value={itensCarrinho.length}>
          <BsFillCartFill fontSize="1.5em" />
        </div>
      </button>
    </>
  );
}

export default ShopCart;
