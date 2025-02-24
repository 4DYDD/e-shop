import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "../../elements/Logo";
import Menu from "./Menu";
import MobileView from "./MobileView";
import CartList from "./CartList";

function Navbar({ cart, setCart, addItem, removeItem }) {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Misalnya, 768px untuk mobile
  const offset = isMobile ? -100 : -50; // Sesuaikan offset berdasarkan ukuran layar

  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <nav className="py-3 fixed w-full top-0 z-[99] bg-white shadow">
        <div className="flexc !justify-between sm:!justify-center w-full max-w-[70rem] mx-auto px-6">
          <div className="flexc flex-[3] sm:flex-[1] !justify-start sm:ps-10">
            <div className="size-14 sm:size-20 flexc">
              <Logo />
            </div>
            <div className="text-sm ps-4 text-biru-400">
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
              to={"myEtalase"}
              offset={offset}
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
              onClick={() => {
                setShowCart(!showCart);
              }}
              className={`py-5 rounded-2xl shadow transall text-biru-400 hover:text-biru-700 !bg-transparent flex-[1] ${
                showCart && "!bg-red-500"
              }`}
            >
              Cart
            </Menu>
          </div>

          {/* === DEKSTOP VERSION === */}
          <div className="hidden sm:flex">
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
              className={`flexc flex-col flex-[1] h-[35rem] text-center w-[70rem] ${
                !showCart && "!hidden"
              } transcenter !fixed rounded-lg shadow !top-[52%] bg-red-500 overflow-hidden`}
            >
              <div className="w-full shadow flexc !justify-evenly py-3">
                <div className="text-biru-500">Keranjangmu</div>
              </div>

              <div className="relative w-full h-full p-3 overflow-y-auto">
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
              </div>

              <div className="w-full shadow shadow-gray-400 flexc !justify-evenly py-3">
                <button
                  onClick={() => {
                    alert("Fitur Batalkan Pesanan Sedang Dibuat!");
                    setShowCart(!showCart);
                  }}
                  className="py-2 bg-red-500 rounded-lg shadow px-7"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    alert("Fitur Pesan Sedang Dibuat!");
                    setShowCart(!showCart);
                  }}
                  className="py-2 bg-green-500 rounded-lg shadow px-7"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
          {/* === DEKSTOP VERSION === */}

          {/* === MOBILE VERSION === */}
          <button
            onClick={() => {
              if (!showCart) {
                setShowSideBar(!showSideBar);
              } else {
                setShowCart(!showCart);
              }
            }}
            className="relative flexc flex-[1] !justify-end group sm:!hidden"
          >
            <span className="text-3xl text-biru-400 size-12 flexc">
              <i
                class={`fa-solid fa-bars flex ${showSideBar && "!hidden"}`}
              ></i>
              <i
                class={`fa-solid fa-xmark hidden ${showSideBar && "!flex"}`}
              ></i>
            </span>

            {showSideBar && (
              <div
                className={`flexc text-center w-full h-full transcenter !fixed p-3 shadow`}
              ></div>
            )}

            <MobileView
              offset={offset}
              showSideBar={showSideBar}
              showCart={showCart}
              setShowCart={setShowCart}
            />

            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
              className={`flexc flex-col flex-[1] h-[35rem] text-center w-[21rem] ${
                !showCart && "!hidden"
              } transcenter !fixed rounded-lg shadow !top-[52%] bg-red-500 overflow-hidden`}
            >
              <div className="w-full shadow flexc !justify-evenly py-3">
                <div className="text-biru-500">Keranjangmu</div>
              </div>

              <div className="relative w-full h-full p-3 overflow-y-auto">
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
                <div className="flex-col gap-3 px-2 flexc">
                  {cart &&
                    cart.map((value, index) => (
                      <>
                        <CartList key={index} value={value} />
                      </>
                    ))}
                </div>
              </div>

              <div className="w-full shadow shadow-gray-400 flexc !justify-evenly py-3">
                <button
                  onClick={() => {
                    alert("Fitur Batalkan Pesanan Sedang Dibuat!");
                    setShowCart(!showCart);
                  }}
                  className="py-2 bg-red-500 rounded-lg shadow px-7"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    alert("Fitur Pesan Sedang Dibuat!");
                    setShowCart(!showCart);
                  }}
                  className="py-2 bg-green-500 rounded-lg shadow px-7"
                >
                  Pesan
                </button>
              </div>
            </div>
          </button>
          {/* === MOBILE VERSION === */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
