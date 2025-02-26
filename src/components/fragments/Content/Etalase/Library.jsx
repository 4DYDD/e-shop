import React from "react";
import Card from "../../../elements/Card";

function Library({ dataProducts, cart, addItem, removeItem }) {
  return (
    <>
      <div className="grid w-full max-w-[60rem] grid-cols-1 gap-8 lg:gap-4 text-center sm:grid-cols-2 lg:grid-cols-3">
        {dataProducts.map((value, index) => (
          <React.Fragment key={index}>
            <Card
              value={value}
              cart={cart}
              addItem={addItem}
              removeItem={removeItem}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Library;
