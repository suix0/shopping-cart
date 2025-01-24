import PropTypes from "prop-types";
import ProductCheckout from "../../components/product/ProductCheckout";

const CheckoutCart = ({
  checkout,
  setCheckout,
  cartProducts,
  setProductQuantity,
}) => {
  // Disable scroll when checkout cart opens
  if (checkout) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`flex flex-col items-center fixed right-0 p-4 bg-gray-400 w-[400px] transition-all ease-out ${
        checkout ? "translate-x-0" : "translate-x-[1000px]"
      }`}
    >
      <div>
        {cartProducts.map((product) => (
          <ProductCheckout
            key={product.id}
            cartProducts={product}
            setProductQuantity={setProductQuantity}
          />
        ))}
      </div>
      <button onClick={() => setCheckout(false)}>Continute Shopping</button>
    </div>
  );
};

CheckoutCart.propTypes = {
  checkout: PropTypes.bool,
  setCheckout: PropTypes.func,
  cartProducts: PropTypes.array,
  setProductQuantity: PropTypes.func,
};
export default CheckoutCart;
