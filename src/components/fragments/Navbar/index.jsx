import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <div className="flexc h-[5rem] w-full max-w-[80rem] mx-auto mt-5">
        <Logo />
        <div className="flexc flex-[1] bg-red-500 text-center gap-5 h-full">
          <Menu>Home</Menu>
          <Menu>Product</Menu>
          <Menu>About</Menu>
          <Menu className={`flex-[3]`}>Cart</Menu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
