import React from "react";
import Etalase from "./Etalase";
import About from "./About";
import Dashboard from "./Dashboard";

function index({ products, setProducts }) {
  return (
    <>
      <div className=" mt-[5rem]">
        <Dashboard />
        <Etalase products={products} setProducts={setProducts} />
      </div>
    </>
  );
}

export default index;
