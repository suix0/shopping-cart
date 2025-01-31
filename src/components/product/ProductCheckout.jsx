import InputField from "../../layouts/modal/InputField";
import PropTypes from "prop-types";
// import del from ".../assets/delete.svg"

const ProductCheckout = ({
  cartProducts,
  setProductQuantity,
  deleteProduct,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <img
          src={cartProducts.product.image}
          alt={cartProducts.product.title}
          className="w-24"
        />
        <div>
          <p>{cartProducts.product.title}</p>
          <p>${cartProducts.product.price}</p>
          <p className="font-thin text-md">Quantity</p>
          <div className="flex items-center">
            <InputField
              productQuantity={cartProducts.quantity}
              setProductQuantity={setProductQuantity}
              isCheckout={true}
              id={cartProducts.product.id}
              itemId={cartProducts.id}
              deleteProduct={deleteProduct}
            ></InputField>
          </div>
        </div>
      </div>
      <p>
        ${`${(cartProducts.product.price * cartProducts.quantity).toFixed(2)}`}
      </p>
    </div>
  );
};

ProductCheckout.propTypes = {
  cartProducts: PropTypes.object,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
  setProductQuantity: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ProductCheckout;
