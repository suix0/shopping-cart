import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const MenClothings = () => {
  let products = useOutletContext();

  if (products === null) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  return (
    <div>
      <h1 className="text-center">Men&lsquo;s Clothing</h1>
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((product) => product.category === "men's clothing")
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default MenClothings;
