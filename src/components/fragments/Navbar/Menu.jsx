import React from "react";

function Menu({ className, children }) {
  return (
    <>
      <div className={`flexc flex-[1] bg-yellow-500 h-full ${className}`}>
        {children}
      </div>
    </>
  );
}

export default Menu;
