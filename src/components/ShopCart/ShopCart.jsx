import { useContext } from "react";
import "./ShopCart.css";
import { BsFillCartFill } from "react-icons/bs";

// Context
import { Context } from "../../context/Context";

function ShopCart() {
  const { itensCarrinho } = useContext(Context);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        console.log("itensCarrinho ", itensCarrinho);
      }}
    >
      <div className="badge" value={itensCarrinho.length}>
        <BsFillCartFill fontSize="1.5em" />
      </div>
    </button>
  );
}

export default ShopCart;
