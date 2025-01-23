import PropTypes from "prop-types";
import ProductCheckout from "../../components/product/ProductCheckout";

const CheckoutCart = ({ checkout, setCheckout, cartProducts }) => {
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
          <ProductCheckout key={crypto.randomUUID()} cartProducts={product} />
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
};
export default CheckoutCart;
