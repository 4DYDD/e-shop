import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "../../elements/Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import CartList from "./CartList";
import DesktopView from "./DesktopView";

function Navbar({ cart, setCart, addItem, removeItem }) {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Misalnya, 768px untuk mobile
  const offset = isMobile ? -100 : -50; // Sesuaikan offset berdasarkan ukuran layar

  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toIndonesiaCurrency = (number) => {
    return number
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .replace(/,00$/, "");
  };

  const totalPesanan = () => {
    if (cart.length > 0) {
      const total = cart
        .map((value) => value.totalPrice)
        .reduce((prev, value) => {
          return prev + value;
        }, 0);

      return total;
    }
  };

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

          {/* === DEKSTOP VERSION === */}
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
              className={`!bg-transparent flex-[1]`}
            >
              <button className="w-full py-5 shadow rounded-2xl transall text-biru-400 hover:text-biru-700">
                Cart
              </button>
              {showCart && (
                <div
                  className={`flexc text-center w-full h-full transcenter !fixed p-3 shadow cursor-auto`}
                ></div>
              )}
            </Menu>
          </div>

          <DesktopView
            toIndonesiaCurrency={toIndonesiaCurrency}
            showCart={showCart}
            cart={cart}
            setShowCart={setShowCart}
            totalPesanan={totalPesanan}
          />
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
                className={`fa-solid fa-bars flex ${showSideBar && "!hidden"}`}
              ></i>
              <i
                className={`fa-solid fa-xmark hidden ${showSideBar && "!flex"}`}
              ></i>
            </span>

            {showSideBar && (
              <div
                className={`flexc text-center w-full h-full transcenter !fixed p-3 shadow`}
              ></div>
            )}

            <MobileMenu
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
              } transcenter !fixed rounded-lg shadow !top-[52%] bg-white overflow-hidden`}
            >
              <div className="w-full shadow flexc !justify-evenly py-3">
                <div className="text-biru-500">Keranjangmu</div>
              </div>

              {cart.length > 0 ? (
                <>
                  <div className="relative w-full h-full p-3 overflow-y-auto">
                    <div className="flex-col gap-3 px-2 flexc">
                      {cart &&
                        cart.map((value, index) => (
                          <React.Fragment key={index}>
                            <CartList
                              toIndonesiaCurrency={toIndonesiaCurrency}
                              value={value}
                            />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-full h-full p-3 text-lg flexc text-biru-600">
                    Keranjang Kosong . . .
                  </div>
                </>
              )}

              <div className="flex-col w-full font-bold shadow shadow-gray-400 flexc">
                <div className="py-5 flexc !justify-start w-full px-5 text-white text-base bg-biru-400">
                  <div>
                    Total Pesanan :{" "}
                    <span className="ms-3">
                      <span>
                        {cart.length > 1
                          ? toIndonesiaCurrency(totalPesanan())
                          : `Rp 0`}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="py-3 flexc !justify-evenly w-full text-white">
                  <div
                    onClick={() => {
                      alert("Fitur Batalkan Pesanan Sedang Dibuat!");
                      setShowCart(!showCart);
                    }}
                    className="py-2 bg-red-500 rounded-lg shadow px-7"
                  >
                    Batal
                  </div>
                  <div
                    onClick={() => {
                      alert("Fitur Pesan Sedang Dibuat!");
                      setShowCart(!showCart);
                    }}
                    className="py-2 bg-green-500 rounded-lg shadow px-7"
                  >
                    Pesan
                  </div>
                </div>
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
