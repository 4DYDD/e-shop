import React from "react";
import logoRMH from "../../assets/img/logoRMH.png";

function Logo({ src, className }) {
  return (
    <>
      <div
        className={`shadow xl:shadow-gray-400 size-full rounded-full overflow-hidden my-10 ${className}`}
      >
        <div
          style={{
            backgroundImage: `url(${src || logoRMH})`,
          }}
          className="w-full h-full bg-center bg-no-repeat bg-cover"
        />
      </div>
    </>
  );
}

export default Logo;
