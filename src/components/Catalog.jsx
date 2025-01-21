import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const Catalog = () => {
  let products = useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  return (
    <div>
      <h1 className="text-center">Everything we can offer</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
