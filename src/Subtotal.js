import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
/* import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"; */

function Subtotal() {
  /* const [{ basket }, dispatch] = useStateValue(); */

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({/* {basket.length} */} 0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        /* {getBasketTotal(basket)} */ 
        // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;