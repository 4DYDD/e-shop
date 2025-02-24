import React from "react";
import Card from "../../../elements/Card";

function Library({ dataProducts }) {
  return (
    <>
      <div className="grid w-full max-w-[60rem] grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
        {dataProducts.map((value, index) => (
          <Card value={value} />
        ))}
      </div>
    </>
  );
}

export default Library;
