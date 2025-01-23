import PropTypes from "prop-types";

const InputField = ({ productQuantity, setProductQuantity }) => {
  return (
    <>
      <p>Quantity</p>
      <div className="inline-flex border justify-around w-20 p-[4px]">
        <button
          onClick={() =>
            productQuantity > 1 &&
            setProductQuantity((quantity) => quantity - 1)
          }
          className={`${
            productQuantity === 1 && "text-gray-400 cursor-not-allowed"
          } select-none`}
        >
          -
        </button>
        <input
          type="text"
          value={productQuantity}
          onBlur={(e) => {
            // ensure product quantity is always one when product quantity is empty
            const numValue = Number(e.target.value);
            numValue === 0 && setProductQuantity(1);
          }}
          onChange={(e) => {
            const numValue = Number(e.target.value);
            typeof numValue === "number" && numValue > 0
              ? setProductQuantity(numValue)
              : numValue === 0 && setProductQuantity(" ");
          }}
          className="w-full text-center outline-none"
        />
        <button
          onClick={() => setProductQuantity((quantity) => quantity + 1)}
          className="select-none"
        >
          +
        </button>
      </div>
    </>
  );
};

InputField.propTypes = {
  productQuantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setProductQuantity: PropTypes.func,
};

export default InputField;
