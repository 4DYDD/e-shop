import React from "react";
import Menu from "./Menu";

function MobileMenu({
  offset,
  showSideBar,
  showCart,
  setShowCart,
  cart,
  setCart,
}) {
  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`font-bold flexc flex-col flex-[1] text-center gap-5 w-[9rem] md:w-[12rem] ${
          !showSideBar && "!hidden"
        } transcenter-r !top-[520%] md:!top-[540%] bg-white p-4 rounded-lg shadow !right-0 !translate-x-0`}
      >
        <Menu
          className={`py-5 rounded-2xl shadow shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
          to={"myDashboard"}
        >
          Beranda
        </Menu>
        <Menu
          className={`py-5 rounded-2xl shadow shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
          to={"myEtalase"}
          offset={offset}
        >
          Produk
        </Menu>
        <Menu
          className={`py-5 rounded-2xl shadow shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent w-full`}
          to={"myAbout"}
        >
          Kontak
        </Menu>
        <Menu
          onClick={(event) => {
            event.stopPropagation(); // Mencegah event bubbling
            handleClick();
          }}
          className={`relative py-5 rounded-2xl shadow shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent mb-2 w-full flex-[1] ${
            cart && cart.length > 0 && "animate-bounceku"
          }`}
        >
          {cart && cart.length > 0 && (
            <span className="size-3 rounded-full transcenter !top-3 !left-3 !translate-y-0 flexc overflow-hidden">
              <span className="animate-pingku bg-yellow-500 rounded-full p-1"></span>
              <span className="transcenter animate-pulseku bg-yellow-500 rounded-full p-2"></span>
            </span>
          )}
          Keranjang
        </Menu>
      </div>
    </>
  );
}

export default MobileMenu;
