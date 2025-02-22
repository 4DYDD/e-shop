import React from "react";
import Contact from "./Contact";
import Logo from "../../elements/Logo";

function index() {
  return (
    <>
      <footer className="w-full bg-biru-100">
        <div className="flex-col py-10 flexc">
          <div className="mb-20 size-72 sm:size-80">
            <Logo />
          </div>
          <p className="w-full max-w-lg p-3 text-sm text-center text-white bg-pink-600 sm:text-base">
            Pengen es segar? <br className="block sm:hidden" />{" "}
            <b> Rombong Mamah Hasan</b> solusinya! <br /> WA aja, es langsung
            meluncur!
          </p>
        </div>
        <Contact />
      </footer>
    </>
  );
}

export default index;
