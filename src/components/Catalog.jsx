import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const Catalog = () => {
  let products = useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  return (
    <div>
      <h1>This is where all the items reside</h1>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Catalog;
