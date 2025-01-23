import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import CheckoutCart from "../checkout/CheckoutCart";
import { useState } from "react";

const Main = ({ products, modal, setModal, checkout, setCheckout }) => {
  const [cartProducts, setCartProducts] = useState([]);

  /* disable scrolling when opening modal
  it was nice to discover that it was ok to manipulate the body
  as we only do stuffs to the #root with React
  and the body is outside of that */
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="flex relative">
      <div
        className={`mx-72 my-20 flex gap-10 flex ${
          modal && "overflow-y-hidden"
        } ${checkout && "pointer-events-none blur-[1px] select-none"}`}
      >
        <Outlet
          context={{
            products: products,
            modal: modal,
            setModal: setModal,
            cartProducts: cartProducts,
            setCartProducts: setCartProducts,
          }}
        ></Outlet>
      </div>
      <CheckoutCart
        checkout={checkout}
        setCheckout={setCheckout}
        cartProducts={cartProducts}
      ></CheckoutCart>
    </div>
  );
};

Main.propTypes = {
  products: PropTypes.array,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  checkout: PropTypes.bool,
  setCheckout: PropTypes.func,
};

export default Main;
