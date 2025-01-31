import { useOutletContext } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import CheckoutModal from "../../layouts/modal/CheckoutModal";
import { useState } from "react";

const Catalog = () => {
  const [selectedProductID, setSelectedProductID] = useState(null);

  let { products, modal, setModal, cartProducts, setCartProducts, checkout } =
    useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  const checkoutModal = (e) => {
    setModal(true);
    setSelectedProductID(e.target.id);
  };

  return (
    <div
      className={`${modal && "overflow-y-hidden"} ${
        checkout && "pointer-events-none blur-[1px] select-none"
      } bg-last-clr mt-24`}
    >
      <CheckoutModal
        isOpen={modal}
        closeModal={() => setModal(false)}
        productID={selectedProductID}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></CheckoutModal>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 xl:mx-72 xs:mx-10 gap-10 mb-24">
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
  );
};

export default Catalog;
