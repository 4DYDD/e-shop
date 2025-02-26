import React from "react";

import Etalase from "./Etalase";
import Dashboard from "./Dashboard";

function index({ cart, addItem }) {
  return (
    <>
      <div className="">
        <Dashboard />
        <Etalase cart={cart} addItem={addItem} />
      </div>
    </>
  );
}

export default index;
