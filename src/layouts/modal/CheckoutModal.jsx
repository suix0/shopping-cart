import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const CheckoutModal = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For input field
  const [productQuantity, setProductQuantity] = useState(1);

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
    setProduct(null);
    fetchProductForCheckout();
  }, [props.productID]);

  return (
    <div
      className={`transition-all lg:h-max xs:h-[60vh] fixed xs:inset-40 lg:inset-60 bg-secondary-clr rounded-2xl text-last-clr ${
        props.isOpen
          ? "opacity-1 -translate-y-0"
          : "invisible h-[0] opacity-0 -translate-y-96"
      } ${
        loading && "blur-sm"
      } flex xl:flex-row xs:flex-col items-center p-4 gap-4 xs:left-4 xs:right-4 xs:top-30 overflow-auto xs:w-[80vw] lg:w-auto m-auto`}
    >
      <img
        src={product && product.image}
        alt="Product image"
        className={`object-contain w-full lg:h-96 xs:h-72 ${
          loading && "invisible"
        }`}
      />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl">{product && product.title}</p>
        <p>{product && product.description}</p>
        <p className={`text-2xl ${loading && "invisible"}`}>
          ${product && product.price}
        </p>
        <div className="flex items-center">
          <img
            src="/assets/rating.svg"
            alt="Star symbol representing rating"
            className={`w-8 ${loading && "invisible"}`}
          />
          <p className={`${loading && "invisible"}`}>
            {product && product.rating.count} reviews
          </p>
        </div>
        <p className={`font-thin text-md ${loading && "invisible"}`}>
          Quantity
        </p>
        <div className={`flex flex-col gap-4 ${loading && "invisible"}`}>
          <InputField
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
            isCheckout={false}
            id={null}
          ></InputField>
          <div
            className={`flex flex-col items-start gap-4 ${
              loading && "invisible"
            }`}
          >
            <button
              onClick={() => {
                props.closeModal();
                setProductQuantity(1);
              }}
              className="w-full bg-red-500 p-2 rounded-lg"
            >
              Close
            </button>
            <button
              onClick={() => {
                // Check if the product in modal exists in cart before
                // Adding it to the cart
                const objExists = props.cartProducts.find(
                  (prod) => prod.product.id === product.id
                );
                if (objExists === undefined) {
                  // It doesn't exist, so add product in cart
                  const newCartProduct = {
                    product: product,
                    quantity: productQuantity,
                    id: crypto.randomUUID(),
                  };
                  props.setCartProducts([
                    ...props.cartProducts,
                    newCartProduct,
                  ]);
                  const localStorageCartProducts = JSON.parse(
                    localStorage.getItem("cartProducts")
                  );
                  if (localStorageCartProducts !== null) {
                    localStorage.setItem(
                      "cartProducts",
                      JSON.stringify([
                        ...localStorageCartProducts,
                        newCartProduct,
                      ])
                    );
                  } else {
                    localStorage.setItem(
                      "cartProducts",
                      JSON.stringify([newCartProduct])
                    );
                  }
                } else {
                  // if it exists, update quantity and not add it
                  const newCartProducts = props.cartProducts.map((prod) => {
                    if (prod.product.id === product.id) {
                      return {
                        ...prod,
                        quantity: (prod.quantity += productQuantity),
                      };
                    } else {
                      return prod;
                    }
                  });
                  localStorage.removeItem("cartProducts");
                  localStorage.setItem(
                    "cartProducts",
                    JSON.stringify(newCartProducts)
                  );
                  props.setCartProducts(newCartProducts);
                }
                props.closeModal();
              }}
              className="w-full bg-blue-400 p-2 rounded-lg"
            >
              Add to Cart
            </button>
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
  setCartProducts: PropTypes.func,
  cartProducts: PropTypes.array,
};

export default CheckoutModal;
