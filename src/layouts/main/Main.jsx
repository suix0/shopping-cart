import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import CheckoutCart from "../checkout/CheckoutCart";

const Main = ({
  products,
  modal,
  setModal,
  checkout,
  setCheckout,
  cartProducts,
  setCartProducts,
  windowDimensions,
}) => {
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
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
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
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
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
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
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
      localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
    }
  };

  const deleteProduct = (e) => {
    const productId = e.target.id;
    const newCartProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(newCartProducts);
    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
  };

  return (
    <>
      <Outlet
        context={{
          products: products,
          modal: modal,
          setModal: setModal,
          cartProducts: cartProducts,
          setCartProducts: setCartProducts,
          checkout: checkout,
          windowDimensions: windowDimensions,
        }}
      ></Outlet>
      <CheckoutCart
        checkout={checkout}
        setCheckout={setCheckout}
        cartProducts={cartProducts}
        setProductQuantity={setProductQuantity}
        deleteProduct={deleteProduct}
      ></CheckoutCart>
    </>
  );
};

Main.propTypes = {
  products: PropTypes.array,
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  checkout: PropTypes.bool,
  setCheckout: PropTypes.func,
  cartProducts: PropTypes.array,
  setCartProducts: PropTypes.func,
  windowDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default Main;
