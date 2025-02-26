import React from "react";
import Library from "./Library";
import { Link, Element } from "react-scroll";
import dataProducts from "../../../../data/dataProducts";

function index({ cart, addItem, removeItem }) {
  return (
    <>
      <Element
        name="myEtalase"
        className="flexc flex-col w-full min-h-screen max-w-[80rem] mx-auto mb-20 px-5 sm:px-0"
      >
        <div className="relative mb-16">
          <span className="text-[2rem] sm:text-[3rem] text-sky-500">
            Aneka Minuman
          </span>
          <span className="w-1/2 h-[2px] bg-sky-500 transcenter !top-14 sm:!top-20"></span>
        </div>
        <Library
          dataProducts={dataProducts}
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
        />
      </Element>
    </>
  );
}

export default index;
