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

  const setProductQuantity = (
    e,
    changeOnBlur = false,
    changeOnValueChange = false,
    changeOnValueEmpty = false
  ) => {
    // for on blur of input with input <= 0 && ''
    if (changeOnBlur) {
      const id = Number(e.target.id);
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          return {
            ...cartProduct,
            quantity: 1,
          };
        } else {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    } else if (changeOnValueChange) {
      const id = Number(e.target.id);
      const newValue = Number(e.target.value);
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          return {
            ...cartProduct,
            quantity: newValue,
          };
        } else {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    } else if (changeOnValueEmpty) {
      const id = Number(e.target.id);
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          return {
            ...cartProduct,
            quantity: " ",
          };
        } else {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    } else {
      // for changing quantity using buttons
      const id = Number(e.target.id);
      const increaseProduct = e.target.textContent;
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          return {
            ...cartProduct,
            quantity:
              increaseProduct === "+"
                ? cartProduct.quantity + 1
                : cartProduct.quantity - 1,
          };
        } else {
          return cartProduct;
        }
      });
      setCartProducts(newCartProducts);
    }
  };

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
        setProductQuantity={setProductQuantity}
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
