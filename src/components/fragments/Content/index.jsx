import React from "react";
import Etalase from "./Etalase";
import About from "./About";

function index() {
  return (
    <>
      <div className="bg-red-500 mt-[5rem]">
        <Etalase />
        <About />
      </div>
    </>
  );
}

export default index;
