import React from "react";

import Logo from "../../elements/Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <nav className="py-3 fixed w-full top-0 z-[99] bg-white shadow">
        <div className="flexc !justify-between sm:!justify-center w-full max-w-[70rem] mx-auto px-6">
          <div className="flexc flex-[3] sm:flex-[1] !justify-start sm:ps-10">
            <div className="size-14 sm:size-20 flexc">
              <Logo />
            </div>
            <div className="text-sm ps-4 text-biru-700">
              Rombong <br /> Mamah Hasan
            </div>
          </div>
          <div className="flexc flex-[1] text-center gap-5 h-full sm:!flex !hidden">
            <Menu
              className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myDashboard"}
            >
              Home
            </Menu>
            <Menu
              className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myElatase"}
            >
              Product
            </Menu>
            <Menu
              className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myAbout"}
            >
              About
            </Menu>
            <Menu
              className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent flex-[1]`}
            >
              Cart
            </Menu>
          </div>
          <button className="relative flexc flex-[1] !justify-end group sm:!hidden">
            <span className="text-3xl text-biru-400 size-12 flexc">
              <i class="fa-solid fa-bars flex group-focus:!hidden"></i>
              <i class="fa-solid fa-xmark hidden group-focus:!flex"></i>
            </span>
            <div className="flexc flex-col flex-[1] text-center gap-2 w-[8rem] group-focus:!flex !hidden transcenter !top-[500%] bg-white p-3 rounded-lg shadow !left-[30%]">
              <Menu
                className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
                to={"myDashboard"}
              >
                Home
              </Menu>
              <Menu
                className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
                to={"myElatase"}
              >
                Product
              </Menu>
              <Menu
                className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
                to={"myAbout"}
              >
                About
              </Menu>
              <Menu
                className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full flex-[1]`}
              >
                Cart
              </Menu>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
