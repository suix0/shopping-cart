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

  // Window dimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // If localStorage data exists, store it
  const localStorageCartProducts = JSON.parse(
    localStorage.getItem("cartProducts")
  );

  if (localStorageCartProducts !== null) {
    if (cartProducts.length === 0) {
      setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
    }
  }

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

  useEffect(() => {
    let ignore = false;

    const handleResize = () => {
      if (!ignore) {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ignore = true;
    };
  });

  return (
    <>
      <Header
        isModalOpen={modal}
        checkout={checkout}
        cartProducts={cartProducts}
        windowDimensions={windowDimensions}
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
        windowDimensions={windowDimensions}
      ></Main>
    </>
  );
}

export default App;
