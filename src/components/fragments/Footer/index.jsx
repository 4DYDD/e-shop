import React from "react";
import Contact from "./Contact";
import Logo from "./Logo";

function index() {
  return (
    <>
      <footer className="w-full">
        <div className="flex-col py-10 flexc">
          <Logo />
          <p className="w-full max-w-lg p-3 text-center text-white bg-pink-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, non?
            Lorem, ipsum dolor.
          </p>
        </div>
        <Contact />
      </footer>
    </>
  );
}

export default index;
