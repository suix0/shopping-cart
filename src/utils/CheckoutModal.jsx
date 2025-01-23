import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const CheckoutModal = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductForCheckout = async () => {
      try {
        console.log(props.productID);
        const product = await fetch(
          `https://fakestoreapi.com/products/${Number(props.productID)}`
        );
        const productResponse = await product.json();
        setProduct(productResponse);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchProductForCheckout();
  }, [props.productID]);

  return (
    <div
      className={`transition-all h-max fixed inset-96 bg-white ${
        props.isOpen
          ? "opacity-1 -translate-y-0"
          : "invisible h-[0] opacity-0 -translate-y-96"
      } flex justify-center`}
    >
      <img
        src={product && product.image}
        alt="Product image"
        className="w-20"
      />
      <div>
        <p>{product && product.title}</p>
        <p>{product && product.description}</p>
        <div className="flex items-center">
          <img
            src="../src/assets/rating.svg"
            alt="Star symbol representing rating"
            className="w-8"
          />
          <p>{product && product.rating.rate}</p>
        </div>
        <p>{product && product.rating.count} reviews</p>
        <p>${product && product.price}</p>
        <div className="flex flex-col gap-4">
          <button onClick={props.closeModal}>Close</button>
          <div className="flex flex-col items-start gap-4">
            <InputField></InputField>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CheckoutModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  productID: PropTypes.string,
};

export default CheckoutModal;
