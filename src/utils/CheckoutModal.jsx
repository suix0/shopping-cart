import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
      className={`transition-all absolute inset-72 ${
        props.isOpen
          ? "opacity-1 -translate-y-0"
          : "invisible h-[0] opacity-0 -translate-y-96"
      } flex justify-center`}
    >
      <img src="" alt="Product image" />
      <div>
        <p></p>
        <p></p>
        <input type="number"></input>
        <div className="flex gap-4">
          <button onClick={props.closeModal}>Close</button>
          <button>Add to Checkout</button>
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
