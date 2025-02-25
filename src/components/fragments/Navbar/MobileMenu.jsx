import React from "react";
import Menu from "./Menu";

function MobileMenu({ offset, showSideBar, showCart, setShowCart }) {
  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div
        className={`font-bold flexc flex-col flex-[1] text-center gap-2 w-[8rem] ${
          !showSideBar && "!hidden"
        } transcenter !top-[480%] bg-white p-3 rounded-lg shadow !left-[30%]`}
      >
        <Menu
          className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
          to={"myDashboard"}
        >
          Home
        </Menu>
        <Menu
          className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
          to={"myEtalase"}
          offset={offset}
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
          onClick={(event) => {
            event.stopPropagation(); // Mencegah event bubbling
            handleClick();
          }}
          className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent w-full flex-[1]`}
        >
          Cart
        </Menu>
      </div>
    </>
  );
}

export default MobileMenu;
