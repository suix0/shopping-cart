import InputField from "../../layouts/modal/InputField";
import PropTypes from "prop-types";

const ProductCheckout = ({ cartProducts }) => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>
          <p>{cartProducts.product.title}</p>
          <p>${cartProducts.product.price}</p>
          <div>
            <InputField></InputField>
            <img src="" alt="" />
          </div>
        </div>
        <p>${`${cartProducts.product.price * cartProducts.quantity}`}</p>
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
};

export default ProductCheckout;
