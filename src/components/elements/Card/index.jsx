import React from "react";
import Image from "./Image";

function index({ value }) {
  return (
    <>
      <div className="h-[32rem] flexc flex-col overflow-hidden rounded-lg shadow">
        <div className="flex-[3] w-full bg-emerald-300">
          <Image className={``} value={value} />
        </div>
        <div className="flex-[1] bg-white w-full flexc flex-col px-5">
          <p className="relative w-full flexc !justify-start text-2xl flex-[1]">
            {value.name}
            <span className="transcenter !left-[1.7rem] !top-[85%] w-1/6 h-[2px] bg-red-500"></span>
          </p>
          <div className="!justify-end w-full flexc flex-[1] py-2">
            <button className="px-5 py-2 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center">
              <i className="mr-4 text-lg fa-solid fa-cart-plus" />
              Beli
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
