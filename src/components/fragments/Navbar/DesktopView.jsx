import React from "react";
import CartList from "./CartList";

function DesktopView({
  toIndonesiaCurrency,
  showCart,
  cart,
  setShowCart,
  totalPesanan,
}) {
  return (
    <>
      <div className="hidden sm:flex">
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={`flexc flex-col flex-[1] h-[35rem] text-center w-[70rem] ${
            !showCart && "!hidden"
          } transcenter !fixed rounded-lg shadow !top-[52%] bg-white overflow-hidden`}
        >
          <div className="relative w-full shadow flexc !justify-evenly py-3">
            <div className="py-2 text-xl text-biru-500 flex-[1]">
              Keranjangmu
            </div>
            <div
              onClick={() => {
                setShowCart(!showCart);
              }}
              className="flex-[1] transcenter !left-[95%] h-full w-28 flexc text-3xl text-biru-500 cursor-pointer"
            >
              <i className={`fa-solid fa-xmark !flex`}></i>
            </div>
          </div>

          {cart.length > 0 ? (
            <div className="relative w-full h-full p-3 overflow-y-auto">
              <div className="flex-col gap-3 px-2 py-5 flexc">
                {cart.map((value, index) => (
                  <React.Fragment key={index}>
                    <CartList
                      toIndonesiaCurrency={toIndonesiaCurrency}
                      value={value}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="relative w-full h-full p-3 text-2xl flexc text-biru-600">
                Keranjang Kosong . . .
              </div>
            </>
          )}

          <div className="w-full font-bold text-lg shadow shadow-gray-400 flexc !justify-evenly text-white">
            <div className="py-8 flexc flex[1] !justify-start px-8 h-full bg-biru-400">
              Total Pesanan :{" "}
              <span className="ms-3">
                <span>
                  {cart.length > 1
                    ? toIndonesiaCurrency(totalPesanan())
                    : `Rp 0`}
                </span>
              </span>
            </div>
            <div className="flexc !justify-end gap-8 px-10 flex-[2] h-full text-white">
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
      </div>
    </>
  );
}

export default DesktopView;
