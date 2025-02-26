import React from "react";

import Etalase from "./Etalase";
import Dashboard from "./Dashboard";

function index({ cart, addItem, removeItem }) {
  return (
    <>
      <div className="">
        <Dashboard />
        <Etalase cart={cart} addItem={addItem} removeItem={removeItem} />
      </div>
    </>
  );
}

export default index;
