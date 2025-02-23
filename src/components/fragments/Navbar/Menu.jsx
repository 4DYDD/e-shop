import React from "react";
import { Link, Element } from "react-scroll";

function Menu({ to, className, children }) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          smooth={true}
          duration={300}
          className={`flexc flex-[1] bg-yellow-500 h-full ${className} cursor-pointer`}
        >
          {children}
        </Link>
      ) : (
        <button className={`flexc flex-[1] bg-yellow-500 h-full ${className}`}>
          {children}
        </button>
      )}
    </>
  );
}

export default Menu;
