import { useState, useEffect, useRef } from "react";
import "./App.css";

import Navbar from "./components/fragments/Navbar";
import Content from "./components/fragments/Content";
import Footer from "./components/fragments/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-capriola">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
