import React from "react";
import { Link, Element } from "react-scroll";

import Contact from "./Contact";
import Logo from "../../elements/Logo";

function index() {
  return (
    <>
      <Element name="myAbout">
        <footer className="w-full px-3 bg-biru-100 sm:px-0">
          <div className="flex-col pb-5 pt-14 flexc">
            <div className="mb-12 border-4 rounded-full shadow size-60 border-biru-300 flexc sm:size-80">
              <Logo />
            </div>
            <p className="w-full max-w-lg px-3 py-5 text-sm text-center text-white bg-pink-600 sm:py-8 sm:text-base">
              Pengen es segar? <br className="block" />{" "}
              <b> Rombong Mamah Hasan</b> solusinya! <br /> WA aja, es langsung
              meluncur!
            </p>
          </div>
          <Contact />
        </footer>
      </Element>
    </>
  );
}

export default index;
