import React from "react";
import Image from "./Image";

function index({ key, value }) {
  const toIndonesiaCurrency = (number) => {
    return number
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .replace(/,00$/, "");
  };

  return (
    <>
      <div
        key={key}
        className="h-[32rem] flexc flex-col overflow-hidden rounded-lg shadow"
      >
        <div className="flex-[3] w-full bg-emerald-300">
          <Image className={``} value={value} />
        </div>
        <div className="flex-[1] bg-white w-full flexc flex-col px-5">
          <p className="relative w-full flexc !justify-start text-xl flex-[1] text-sky-400">
            {value.name}
            <span className="transcenter !left-[1.4rem] !top-[85%] w-1/6 h-[2px] bg-sky-400"></span>
          </p>
          <div className="!justify-between w-full flexc flex-[1] py-2 text-sm">
            <div className="px-3 py-2 font-bold bg-white rounded-lg shadow text-sky-500">
              {toIndonesiaCurrency(value.price)}
            </div>
            <button className="px-4 py-2 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center">
              <i className="mr-2 fa-solid fa-cart-plus" />
              Beli
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
