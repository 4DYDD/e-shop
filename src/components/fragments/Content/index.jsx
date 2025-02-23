import React from "react";

import Etalase from "./Etalase";
import Dashboard from "./Dashboard";

function index({ products, setProducts }) {
  return (
    <>
      <div className="">
        <Dashboard />
        <Etalase products={products} setProducts={setProducts} />
      </div>
    </>
  );
}

export default index;
