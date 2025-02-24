import React from "react";
import dataProducts from "../../../data/dataProducts";
import Logo from "../../elements/Logo";

function CartList({ key, value }) {
  const product = dataProducts.find((prod) => prod.id == value.id);
  return (
    <>
      <div className="w-full flexc h-16 !justify-between" key={key}>
        <div className="flex-[1] h-full flexc">
          <div className="size-14 sm:size-20 flexc">
            <Logo src={product.image} />
          </div>
        </div>
        <div className="flex-[3] h-full flexc flex-col !items-start ps-2.5 text-left text-biru-500">
          <div>{product.name}</div>
        </div>
        <div className="flex-[3] flexc flex-col text-left h-full py-4 text-biru-500">
          <div className="w-full mb-1 text-sm">Rp {value.totalPrice}</div>
          <div className="w-full h-full gap-2 flexc">
            <button className="flex-[1] rounded shadow h-full bg-white flexc py-1">
              <i className="fa-solid text-[0.6em] fa-plus"></i>{" "}
              {/* Ikon plus */}
            </button>
            <span className="flex-[1.5] rounded shadow text-[0.8em] h-full bg-white flexc py-1">
              {value.quantity}
            </span>
            <button className="flex-[1] rounded shadow h-full bg-white flexc py-1">
              <i className="fa-solid text-[0.6em] fa-minus"></i>{" "}
              {/* Ikon minus */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
