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
    console.log(cart);
  }, [cart]);

  // useEffect(() => {
  //   if (dataProducts.length > 0) {
  //     setProducts(dataProducts);
  //   }
  // }, []);

  const findCartProduct = (id) => {
    const product = cart.find((value, index) => value.id == id);
    return product;
  };

  const findProduct = (id) => {
    const product = dataProducts.find((value) => value.id == id);
    return product;
  };

  const handleAddItem = (id) => {
    const product = findProduct(id);

    const updatedCart = [
      ...cart,
      { id: id, quantity: 1, totalPrice: product.price },
    ];

    updatedCart.sort((a, b) => a.id - b.id);

    setCart(updatedCart);
  };

  const addItem = (id) => {
    const cartProduct = findCartProduct(id);

    if (!cartProduct) {
      handleAddItem(id);
    } else {
      const newQty = cartProduct.quantity + 1;
      const newTotalPrice = findProduct(id).price * newQty;

      const newCartProduct = {
        ...cartProduct,
        quantity: newQty,
        totalPrice: newTotalPrice,
      };

      const newCart = cart.filter((value) => value.id != id);
      const updatedCart = [...newCart, newCartProduct];

      updatedCart.sort((a, b) => a.id - b.id);

      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    const cartProduct = findCartProduct(id);
    const newQty = cartProduct.quantity - 1;
    let updatedCart;

    if (newQty < 1) {
      const newCart = cart.filter((value) => value.id != id);
      updatedCart = [...newCart];

      updatedCart.sort((a, b) => a.id - b.id);
    } else {
      const newTotalPrice = findProduct(id).price * newQty;

      const newCartProduct = {
        ...cartProduct,
        quantity: newQty,
        totalPrice: newTotalPrice,
      };

      const newCart = cart.filter((value) => value.id != id);
      updatedCart = [...newCart, newCartProduct];

      updatedCart.sort((a, b) => a.id - b.id);
    }

    setCart(updatedCart);
  };

  return (
    <main className="font-capriola">
      <Navbar
        cart={cart}
        setCart={setCart}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Content cart={cart} addItem={addItem} removeItem={removeItem} />
      <Footer />
    </main>
  );
}

export default App;
