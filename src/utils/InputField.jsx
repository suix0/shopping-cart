import { useState } from "react";

const InputField = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <>
      <p>Quantity</p>
      <div className="inline-flex border justify-around w-20 p-[4px]">
        <button
          onClick={() =>
            productQuantity > 1 &&
            setProductQuantity((quantity) => quantity - 1)
          }
          className={`${productQuantity === 1 && "text-gray-400"}`}
        >
          -
        </button>
        <div className="w-10 text-center">{productQuantity}</div>
        <button onClick={() => setProductQuantity((quantity) => quantity + 1)}>
          +
        </button>
      </div>
    </>
  );
};

export default InputField;
