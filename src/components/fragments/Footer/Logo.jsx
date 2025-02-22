import React from "react";

function Logo({ className }) {
  return (
    <>
      <div
        className={`bg-pink-300 shadow p-24 rounded-full my-10 mb-16 ${className}`}
      >
        Logo
      </div>
    </>
  );
}

export default Logo;
