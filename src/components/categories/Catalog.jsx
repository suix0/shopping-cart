import { useOutletContext } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import CheckoutModal from "../../layouts/modal/CheckoutModal";
import { useState } from "react";

const Catalog = () => {
  const [selectedProductID, setSelectedProductID] = useState(null);

  let { products, modal, setModal } = useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  const checkoutModal = (e) => {
    setModal(true);
    setSelectedProductID(e.target.id);
  };

  return (
    <>
      <CheckoutModal
        isOpen={modal}
        closeModal={() => setModal(false)}
        productID={selectedProductID}
      ></CheckoutModal>
      <div>
        <h1 className="text-center">Everything we can offer</h1>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              id={product.id}
              clickHandler={checkoutModal}
              isModalOpen={modal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
