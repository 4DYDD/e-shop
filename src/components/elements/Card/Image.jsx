import React from "react";

function Image({ className, value }) {
  return (
    <>
      <div className="relative w-full h-full bg-blue-500">
        <div
          style={{
            backgroundImage: `url(${value.image})`,
          }}
          className="w-full h-full bg-red-500 bg-center bg-no-repeat bg-cover"
        />
      </div>
    </>
  );
}

export default Image;
