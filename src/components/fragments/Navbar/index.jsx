import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Logo from "../../elements/Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import CartList from "./CartList";
import DesktopView from "./DesktopView";

function Navbar({
  cart,
  setCart,
  addItem,
  removeItem,
  showCart,
  setShowCart,
  createOrder,
  dataProducts,
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Misalnya, 768px untuk mobile
  const offset = isMobile ? -100 : -50; // Sesuaikan offset berdasarkan ukuran layar

  const [showSideBar, setShowSideBar] = useState(false);

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

  const findProduct = (id) => {
    const product = dataProducts.find((value) => value.id == id);
    return product;
  };

  return (
    <>
      <nav className="py-3 xl:py-5 fixed w-full top-0 z-[99] bg-white shadow xl:shadow-gray-400">
        <div className="flexc !justify-between sm:!justify-center w-full max-w-[70rem] mx-auto px-6">
          <div className="flexc flex-[3] sm:flex-[1] !justify-start sm:ps-10">
            <div className="border-2 rounded-full shadow size-14 sm:size-20 flexc border-biru-300">
              <Logo />
            </div>
            <div className="text-sm font-semibold sm:text-lg ps-4 text-biru-400">
              Rombong <br /> Mamah Hasan
            </div>
          </div>

          {/* === DEKSTOP VERSION === */}
          <div className="flexc flex-[1] text-center gap-5 h-full !hidden lg:!flex">
            <Menu
              className={`py-5 font-semibold rounded-2xl shadow xl:shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myDashboard"}
            >
              Beranda
            </Menu>
            <Menu
              className={`py-5 font-semibold rounded-2xl shadow xl:shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myEtalase"}
              offset={offset}
            >
              Produk
            </Menu>
            <Menu
              className={`py-5 font-semibold rounded-2xl shadow xl:shadow-biru-300 transall text-biru-400 hover:text-biru-700 !bg-transparent`}
              to={"myAbout"}
            >
              Kontak
            </Menu>
            <Menu
              onClick={() => {
                setShowCart(!showCart);
              }}
              className={`font-semibold !bg-transparent flex-[1]`}
            >
              <button className="w-full py-5 shadow rounded-2xl xl:shadow-biru-300 transall text-biru-400 hover:text-biru-700">
                Keranjang
              </button>
              {showCart && (
                <div
                  className={`flexc text-center w-full h-full transcenter !fixed p-3 shadow cursor-auto`}
                />
              )}
            </Menu>
          </div>

          <DesktopView
            toIndonesiaCurrency={toIndonesiaCurrency}
            showCart={showCart}
            cart={cart}
            setCart={setCart}
            setShowCart={setShowCart}
            addItem={addItem}
            removeItem={removeItem}
            totalPesanan={totalPesanan}
            createOrder={createOrder}
            dataProducts={dataProducts}
          />
          {/* === DEKSTOP VERSION === */}

          {/* === MOBILE VERSION === */}
          <button
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            className="relative flexc flex-[1] !justify-end group lg:!hidden"
          >
            <span className="text-3xl text-biru-400 size-12 flexc">
              <span
                className={`relative flex ${showSideBar && "!hidden"}
                 ${cart && cart.length > 0 && "animate-bounceku"}`}
              >
                {cart && cart.length > 0 && (
                  <span className="size-3 rounded-full transcenter !-top-0.5 !-left-0.5 !translate-y-0 flexc overflow-hidden">
                    <span className="animate-pingku bg-yellow-500 rounded-full p-1"></span>
                    <span className="transcenter animate-pulseku bg-yellow-500 rounded-full p-2"></span>
                  </span>
                )}

                <i className={`fa-solid fa-bars`}></i>
              </span>
              <span>
                <i
                  className={`fa-solid fa-xmark hidden ${
                    showSideBar && "!flex"
                  }`}
                ></i>
              </span>
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
              cart={cart}
              setCart={setCart}
            />

            {/* === KERANJANG MOBILE === */}
            {showCart && (
              <div
                onClick={(event) => {
                  event.stopPropagation();
                  setShowCart(!showCart);
                }}
                className={`flexc text-center w-full h-full transcenter !fixed p-3 shadow bg-[rgba(0,0,0,0.5)]`}
              ></div>
            )}
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
              className={`flexc flex-col flex-[1] h-[35rem] text-center w-[21rem] md:w-[40rem] ${
                !showCart && "!hidden"
              } transcenter !fixed rounded-lg shadow !top-[52%] bg-white overflow-hidden`}
            >
              <div className="w-full shadow flexc !justify-evenly text-lg md:text-xl relative">
                <div className="w-full h-full flexc !justify-start ps-5 py-5 text-white bg-biru-600 flexc">
                  <i className="mr-1.5 fa-solid fa-cart-shopping text-[1em]"></i>
                  <span className="font-bold text-[1em]">Keranjangmu</span>
                </div>
                <div
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                  className="flex-[1] transcenter-r !-right-5 !translate-x-0 h-full w-28 flexc text-xl md:text-2xl text-white cursor-pointer"
                >
                  <i className={`fa-solid fa-xmark !flex`}></i>
                </div>
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
                              addItem={addItem}
                              removeItem={removeItem}
                            />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-full h-full p-3 text-sm md:text-lg font-bold flexc text-biru-200">
                    Keranjang Kosong . . .
                  </div>
                </>
              )}

              <div className="flex-col w-full font-bold shadow shadow-gray-400 flexc">
                <div className="py-5 flexc !justify-start w-full px-5 text-white text-base md:text-lg bg-biru-500">
                  <div>
                    Total Pesanan :{" "}
                    <span className="ms-1">
                      <span>
                        {cart.length > 0
                          ? toIndonesiaCurrency(totalPesanan())
                          : `Rp 0`}
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className={`flexc !justify-evenly md:!justify-end text-white text-xs md:text-sm ${
                    cart && cart.length > 0 && "w-full py-3"
                  }`}
                >
                  {cart && cart.length > 0 && (
                    <>
                      <div
                        onClick={() => {
                          const konfirmasi = confirm(
                            "Yakin Mau Mengosongkan Keranjang?"
                          );
                          if (konfirmasi) {
                            setCart([]);
                            setShowCart(!showCart);
                          }
                        }}
                        className="md:me-3 px-2.5 py-2.5 bg-red-500 rounded-lg shadow flexc"
                      >
                        <i className="mr-2 text-[0.9rem] fa-solid fa-trash-arrow-up"></i>
                        <span>Kosongkan Keranjang</span>
                      </div>
                      <div
                        onClick={() => {
                          const fullOrder = cart.map((value) => {
                            const product = findProduct(value.id);
                            const cartList = {
                              ...value,
                              name: product.name,
                              price: product.price,
                            };

                            return cartList;
                          });

                          createOrder(fullOrder);

                          setShowCart(!showCart);
                        }}
                        className="md:me-3 px-2.5 py-2.5 bg-green-500 rounded-lg shadow flexc"
                      >
                        <i className="mr-2 text-[0.9rem] fa-solid fa-cart-arrow-down"></i>
                        <span>Buat Pesanan</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* === KERANJANG MOBILE === */}
          </button>
          {/* === MOBILE VERSION === */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
