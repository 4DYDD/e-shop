import React from "react";
import dataProducts from "../../../data/dataProducts";
import Logo from "../../elements/Logo";

function CartList({ toIndonesiaCurrency, value }) {
  const product = dataProducts.find((prod) => prod.id == value.id);
  return (
    <>
      <div className="w-full flexc h-16 sm:h-24 !justify-between">
        <div className="flex-[1] h-full flexc">
          <div className="rounded-full shadow shadow-biru-300 size-14 sm:size-20 flexc">
            <Logo src={product.image} />
          </div>
        </div>
        <div className="flex-[2.5] sm:flex-[8] h-full flexc flex-col !items-start ps-2.5 text-left text-biru-500 text-sm sm:text-lg">
          <div>{product.name}</div>
        </div>
        <div className="flex-[3] sm:flex-[1.7] text-sm sm:text-base flexc flex-col text-left h-full py-4 sm:py-6 text-biru-500">
          <div className="w-full text-[0.95em] sm:text-[1em] mb-1 sm:mb-2 text-biru-600">
            {toIndonesiaCurrency
              ? toIndonesiaCurrency(value.totalPrice)
              : value.totalPrice}
          </div>
          <div className="w-full h-full gap-2 flexc">
            <div className="flex-[1] rounded shadow h-full bg-white flexc py-1 cursor-pointer">
              <i className="fa-solid text-[0.6em] sm:text-[0.8em] fa-plus"></i>{" "}
              {/* Ikon plus */}
            </div>
            <span className="flex-[1.5] rounded shadow text-[0.85em] sm:text-[0.9em] h-full bg-white flexc py-1 px-1">
              {value.quantity}
            </span>
            <div className="flex-[1] rounded shadow h-full bg-white flexc py-1 cursor-pointer">
              <i className="fa-solid text-[0.6em] sm:text-[0.8em] fa-minus"></i>{" "}
              {/* Ikon minus */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
