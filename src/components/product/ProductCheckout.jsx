import InputField from "../../layouts/modal/InputField";
import PropTypes from "prop-types";

const ProductCheckout = ({ cartProducts, setProductQuantity }) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>
          <p>{cartProducts.product.title}</p>
          <p>${cartProducts.product.price}</p>
          <div>
            <InputField
              productQuantity={cartProducts.quantity}
              setProductQuantity={setProductQuantity}
              isCheckout={true}
              id={cartProducts.product.id}
            ></InputField>
            <img src="" alt="" />
          </div>
        </div>
        <p>
          $
          {`${(cartProducts.product.price * cartProducts.quantity).toFixed(2)}`}
        </p>
      </div>
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
};

export default ProductCheckout;
