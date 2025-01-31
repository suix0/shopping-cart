import PropTypes from "prop-types";
import ProductCheckout from "../../components/product/ProductCheckout";

const CheckoutCart = ({
  checkout,
  setCheckout,
  cartProducts,
  setProductQuantity,
  deleteProduct,
}) => {
  // Disable scroll when checkout cart opens
  if (checkout) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={`flex flex-col items-center fixed right-0 p-4 bg-secondary-clr md:w-[400px] xs:w-[90vw] h-full transition-all ease-out text-last-clr overflow-auto ${
        checkout ? "translate-x-0" : "translate-x-[1000px]"
      }`}
    >
      <div className="flex justify-between w-full mb-4">
        <p className="font-light">Product</p>
        <p className="font-light">Total</p>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col gap-4 w-full mt-4 mb-4">
        {cartProducts.map((product) => (
          <ProductCheckout
            key={product.id}
            cartProducts={product}
            setProductQuantity={setProductQuantity}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between w-full mt-auto gap-4">
        <hr className="w-full" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Subtotal</p>
          <p className="font-thin">
            $
            {cartProducts
              .reduce(
                (total, currentProduct) =>
                  total +
                  currentProduct.product.price * currentProduct.quantity,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
      <button
        onClick={() => setCheckout(false)}
        className="border w-full rounded-xl p-1 bg-primary-clr text-last-clr mt-4"
      >
        Continute Shopping
      </button>
    </div>
  );
};

CheckoutCart.propTypes = {
  checkout: PropTypes.bool,
  setCheckout: PropTypes.func,
  cartProducts: PropTypes.array,
  setProductQuantity: PropTypes.func,
  deleteProduct: PropTypes.func,
};
export default CheckoutCart;
