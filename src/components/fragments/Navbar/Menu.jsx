import React from "react";

import { Link, Element } from "react-scroll";

function Menu({ to, offset, onClick, className, children }) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          smooth={true}
          duration={300}
          offset={offset || 0}
          className={`flexc flex-[1] bg-yellow-500 h-full cursor-pointer ${className}`}
        >
          {children}
        </Link>
      ) : (
        <div
          onClick={onClick}
          className={`flexc flex-[1] bg-yellow-500 h-full cursor-pointer ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Menu;
