import { useState, useEffect, useRef } from "react";

import dataProducts from "./data/dataProducts";

import "./App.css";

import Navbar from "./components/fragments/Navbar";
import Content from "./components/fragments/Content";
import Footer from "./components/fragments/Footer";

function App() {
  // const [products, setProducts] = useState([{}]);
  // const [cart, setCart] = useState([{}]);

  const dummyCart = [
    {
      id: 1,
      quantity: 3,
      totalPrice: 18000,
    },
    {
      id: 2,
      quantity: 3,
      totalPrice: 21000,
    },
    {
      id: 3,
      quantity: 3,
      totalPrice: 24000,
    },
  ];
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // buat fungsi untuk mengambil data di localStorage
    // if (cart.length < 1) {
    //   setCart(dummyCart);
    // }
  }, [cart]);

  // useEffect(() => {
  //   if (dataProducts.length > 0) {
  //     setProducts(dataProducts);
  //   }
  // }, []);

  const addItem = (samting) => {
    console.log("add samting");
  };

  const removeItem = (samting) => {
    console.log("remove samting");
  };

  return (
    <main className="font-capriola">
      <Navbar
        cart={cart}
        setCart={setCart}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
