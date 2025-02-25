import React from "react";
import Card from "../../../elements/Card";

function Library({ dataProducts }) {
  return (
    <>
      <div className="grid w-full max-w-[60rem] grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
        {dataProducts.map((value, index) => (
          <React.Fragment key={index}>
            <Card value={value} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Library;
