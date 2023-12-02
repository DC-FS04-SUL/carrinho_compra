import { useState } from "react";
import "./ShopCart.css";
import { BsFillCartFill } from "react-icons/bs";

function ShopCart() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="btn btn-primary"
      // onClick={atualizarCarrinho}
    >
      <div className="badge" value={count}>
        <BsFillCartFill fontSize="1.5em" />
      </div>
    </button>
  );
}

export default ShopCart;
