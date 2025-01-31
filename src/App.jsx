import "./App.css";
import { useState, useEffect } from "react";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/Main";

function App() {
  const [products, setProducts] = useState(null);

  // For specific product selection for modal
  const [modal, setModal] = useState(false);

  // For checkout cart management
  const [checkout, setCheckout] = useState(false);

  // Cart products, moved up in App.jsx
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fakeProducts = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        const fakeProductsJSON = await fakeProducts.json();
        setProducts(fakeProductsJSON);
        localStorage.setItem("products", JSON.stringify(fakeProductsJSON));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header
        isModalOpen={modal}
        checkout={checkout}
        cartProducts={cartProducts}
        setCheckout={() => setCheckout(true)}
      ></Header>
      <Main
        products={products}
        modal={modal}
        setModal={setModal}
        checkout={checkout}
        setCheckout={setCheckout}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      ></Main>
    </>
  );
}

export default App;
