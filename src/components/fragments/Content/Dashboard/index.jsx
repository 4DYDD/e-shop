import React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Misalnya, 768px untuk mobile
  const offset = isMobile ? -100 : -50; // Sesuaikan offset berdasarkan ukuran layar

  return (
    <>
      <Element
        name="myDashboard"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1657759558425-a0f43e577432?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        }}
        className="w-full h-[120vh] flexc mb-20"
      >
        <div className="flex-col w-full h-full text-white bg-[rgba(0,25,51,0.95)] flexc text-center">
          <div className="text-[2rem] sm:text-[3rem] mb-5 font-bold">
            Rombong <br /> Mamah Hasan
          </div>
          <div className="text-lg text-biru-100">
            Pengen es segar? <br /> <b>Rombong Mamah Hasan</b> solusinya! <br />{" "}
            WA aja, es langsung meluncur!
          </div>
          <div className="gap-5 px-6 mt-8 sm:gap-10 sm:px-0 flexc">
            <button className="px-7 sm:px-10 py-3 text-sm sm:text-base sm:py-3 bg-transparent border hover:bg-sky-500 hover:text-white border-sky-500 transall !duration-300 text-sky-500 rounded-xl flex items-center">
              <i className="mr-4 text-lg fa-solid fa-location-dot" />
              Lokasi
            </button>
            <Link to="myEtalase" smooth={true} duration={300} offset={offset}>
              <button className="px-7 sm:px-10 py-3 text-sm sm:text-base sm:py-3 text-white border hover:bg-sky-600 transall !duration-200 bg-sky-500 border-sky-500 rounded-xl flex items-center">
                <i className="mr-4 text-lg fa-solid fa-cart-arrow-down" />
                Beli
              </button>
            </Link>
          </div>
        </div>
      </Element>
    </>
  );
}

export default index;
