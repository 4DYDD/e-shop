import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1657759558425-a0f43e577432?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        }}
        className="w-full h-[120vh] flexc mb-20"
      >
        <div className="flex-col w-full h-full text-white bg-[rgba(0,25,51,0.95)] flexc px-8 sm:px-0 text-center">
          <div className="text-[2rem] sm:text-[3rem] mb-5 font-bold">
            Rombong <br /> Mamah Hasan
          </div>
          <div className="text-lg text-biru-100">
            Pengen es segar? <br /> <b>Rombong Mamah Hasan</b> solusinya! <br />{" "}
            WA aja, es langsung meluncur!
          </div>
          <div className="gap-5 mt-8 sm:gap-10 flexc">
            <button className="px-10 py-3 bg-transparent border hover:bg-sky-500 hover:text-white border-sky-500 transall !duration-300 text-sky-500 rounded-xl flex items-center">
              <i className="mr-4 text-lg fa-solid fa-location-dot" />
              Lokasi
            </button>
            <button className="px-10 py-3 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center">
              <i className="mr-4 text-lg fa-solid fa-cart-arrow-down" />
              Beli
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
