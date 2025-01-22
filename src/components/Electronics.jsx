import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const Electronics = () => {
  let products = useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  return (
    <div>
      <h1 className="text-center">Electronics</h1>
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((product) => product.category === "electronics")
          .map((product) => (
            <ProductCard product={product} key={product.id} id={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Electronics;
