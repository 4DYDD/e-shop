import React from "react";

import Etalase from "./Etalase";
import Dashboard from "./Dashboard";

function index({ cart, addItem, removeItem, showCart, setShowCart }) {
  return (
    <>
      <div className="">
        <Dashboard />
        <Etalase
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </div>
    </>
  );
}

export default index;
