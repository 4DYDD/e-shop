import { useState, useEffect, useRef } from "react";
import "./App.css";

import dataProducts from "./data/dataProducts";

import Navbar from "./components/fragments/Navbar";
import Content from "./components/fragments/Content";
import Footer from "./components/fragments/Footer";

function App() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    if (dataProducts.length > 0) {
      setProducts(dataProducts);
    }
  }, []);

  return (
    <main className="font-capriola">
      <Navbar />
      <Content products={products} setProducts={setProducts} />
      <Footer />
    </main>
  );
}

export default App;
