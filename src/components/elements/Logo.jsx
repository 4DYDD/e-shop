import React from "react";
import logoRMH from "../../assets/img/logoRMH.png";

function Logo({ className }) {
  return (
    <>
      <div
        className={`bg-pink-300 shadow size-full rounded-full my-10 ${className}`}
      >
        <div
          style={{
            backgroundImage: `url(${logoRMH})`,
          }}
          className="w-full h-full bg-red-500 bg-center bg-no-repeat bg-cover rounded-full"
        />
      </div>
    </>
  );
}

export default Logo;
