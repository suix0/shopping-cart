import PropTypes from "prop-types";

const InputField = ({
  productQuantity,
  setProductQuantity,
  isCheckout = false,
  id = null,
  itemId = null,
  deleteProduct,
}) => {
  return (
    // Modify the InputField component so that it behaves differently
    // for add-to-cart products
    <div id={`${id !== null && id}`} className="flex items-center gap-4">
      <div className="inline-flex justify-center border w-20 rounded-xl p-2 border-2">
        <button
          onClick={(e) =>
            productQuantity > 1 && !isCheckout
              ? setProductQuantity((quantity) => quantity - 1)
              : productQuantity > 1 && setProductQuantity(e)
          }
          className={`${
            productQuantity === 1 && "text-gray-600 cursor-not-allowed"
          } select-none`}
          id={`${id !== null && id}`}
        >
          -
        </button>
        <input
          type="text"
          value={productQuantity}
          onBlur={(e) => {
            // ensure product quantity is always one when product quantity is empty
            const numValue = Number(e.target.value);
            numValue === 0 && !isCheckout
              ? setProductQuantity(1)
              : numValue === 0 && setProductQuantity(e, true);
          }}
          onChange={(e) => {
            const numValue = Number(e.target.value);
            if (typeof numValue === "number" && numValue > 0) {
              if (!isCheckout) {
                setProductQuantity(numValue);
              } else {
                setProductQuantity(e, false, true, false);
              }
            } else if (typeof numValue === "number" && numValue <= 0)
              if (!isCheckout) {
                setProductQuantity(" ");
              } else {
                setProductQuantity(e, false, false, true);
              }
          }}
          className="w-full text-center outline-none bg-secondary-clr"
          id={id}
        />

        <button
          onClick={(e) =>
            !isCheckout
              ? setProductQuantity((quantity) => quantity + 1)
              : setProductQuantity(e)
          }
          id={`${id !== null && id}`}
          className="select-none"
        >
          +
        </button>
      </div>
      {isCheckout && (
        <img
          src="/assets/delete.svg"
          alt="delete icon"
          className="w-8 h-8 cursor-pointer hover:scale-110 transition-all"
          role="delete button"
          onClick={deleteProduct}
          id={itemId}
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  productQuantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setProductQuantity: PropTypes.func,
  isCheckout: PropTypes.bool,
  id: PropTypes.number,
  itemId: PropTypes.string,
  deleteProduct: PropTypes.func,
};

export default InputField;
