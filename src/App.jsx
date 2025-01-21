import "./App.css";
import { useState, useEffect } from "react";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fakeProducts = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        const fakeProductsJSON = await fakeProducts.json();
        setProducts(fakeProductsJSON);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
