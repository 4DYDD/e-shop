import React from "react";
import Image from "./Image";

function index({
  key,
  value,
  cart,
  addItem,
  removeItem,
  showCart,
  setShowCart,
}) {
  const toIndonesiaCurrency = (number) => {
    return number
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .replace(/,00$/, "");
  };

  const findCartProduct = (id) => {
    const product = cart.find((value, index) => value.id == id);
    return product;
  };

  const thisCartProduct = findCartProduct(value.id) || { quantity: 0 };

  return (
    <>
      <div
        key={key}
        className="h-[32rem] flexc flex-col overflow-hidden rounded-lg shadow xl:shadow-gray-400"
      >
        <div className="flex-[3] w-full bg-emerald-300">
          <Image className={``} value={value} />
        </div>
        <div className="flex-[1] bg-white w-full flexc flex-col px-5">
          <p className="relative py-3 w-full flexc !justify-start text-xl flex-[1] text-sky-400">
            {value.name}
            <span className="transcenter !left-0 !translate-x-0 !top-[90%] md:!top-[90%] w-1/6 h-[2px] bg-sky-400"></span>
          </p>
          <div className="flex-col flex-[1] w-full py-2 text-sm flexc">
            {/* === TAMBAHKAN KONDISI UNTUK TOGGLE JUSTIFY KOMPONEN KE JUSTIFY BETWEEN INI === */}
            <div
              className={`w-full flexc ${
                cart && cart.length > 0 ? "!justify-between" : "!justify-end"
              }`}
            >
              {/* === TAMBAHKAN KONDISI UNTUK TOGGLE TOMBOL INI === */}
              {cart && cart.length > 0 && (
                <button
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                  className="px-3 text-xs py-2 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center"
                >
                  <i className="mr-1.5 fa-solid fa-cart-shopping"></i>
                  <span>Lihat Keranjang?</span>
                </button>
              )}

              {/* === TAMBAHKAN KONDISI UNTUK TOGGLE TOMBOL INI === */}

              <div className="px-3 py-2 text-sm font-bold bg-white rounded-lg shadow md:text-base text-sky-500">
                {toIndonesiaCurrency(value.price)}
              </div>
            </div>

            {/* === QUANTITY BUTTON === */}
            <div className="w-full h-full py-2 flexc !justify-end">
              {cart && thisCartProduct.quantity < 1 ? (
                <>
                  <button
                    onClick={() => {
                      addItem(value.id);
                    }}
                    className="px-4 py-2 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center"
                  >
                    <i className="mr-2 fa-solid fa-cart-plus" />
                    Beli
                  </button>
                </>
              ) : (
                <>
                  <div className="text-sm md:text-base w-[60%] md:w-[45%] lg:w-[60%] h-full gap-2 py-[0.32rem] md:py-[0.22rem] lg:py-[0.13rem] flexc text-sky-500">
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        removeItem(value.id);
                      }}
                      className="flex-[1] rounded shadow h-full bg-white flexc py-1 md:py-[0.32rem] cursor-pointer"
                    >
                      <i className="fa-solid text-[0.6em] sm:text-[0.8em] fa-minus"></i>{" "}
                      {/* Ikon minus */}
                    </div>

                    <span className="flex-[1.5] rounded shadow text-[0.85em] sm:text-[0.9em] h-full bg-white flexc py-1 md:py-[0.32rem] px-1">
                      {thisCartProduct && thisCartProduct.quantity}
                    </span>

                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        addItem(value.id);
                      }}
                      className="flex-[1] rounded shadow h-full bg-white flexc py-1 md:py-[0.32rem] cursor-pointer"
                    >
                      <i className="fa-solid text-[0.6em] sm:text-[0.8em] fa-plus"></i>{" "}
                      {/* Ikon plus */}
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* === QUANTITY BUTTON === */}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
