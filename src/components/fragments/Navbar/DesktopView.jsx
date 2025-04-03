import React from "react";
import CartList from "./CartList";

function DesktopView({
  toIndonesiaCurrency,
  showCart,
  cart,
  setCart,
  setShowCart,
  addItem,
  removeItem,
  totalPesanan,
  createOrder,
  dataProducts,
}) {
  const findProduct = (id) => {
    const product = dataProducts.find((value) => value.id == id);
    return product;
  };
  return (
    <>
      <div className="hidden lg:flex">
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={`flexc flex-col flex-[1] h-[35rem] text-center w-[70rem] transcenter !fixed rounded-lg shadow xl:shadow-gray-400 !top-[52%] bg-white overflow-hidden ${
            !showCart && "!hidden"
          }`}
        >
          <div className="relative w-full shadow flexc !justify-evenly">
            <div className="py-5 h-full text-xl bg-biru-600 text-white flex-[1] flexc font-bold">
              <i className="mr-2 fa-solid fa-cart-shopping"></i>
              <span>Keranjangmu</span>
            </div>

            <div
              onClick={() => {
                setShowCart(!showCart);
              }}
              className="flex-[1] transcenter !left-[95%] h-full w-28 flexc text-3xl text-white cursor-pointer"
            >
              <i className={`fa-solid fa-xmark !flex`}></i>
            </div>
          </div>

          {cart.length > 0 ? (
            <div className="relative w-full h-full p-3 overflow-y-auto">
              <div className="flex-col gap-3 px-2 py-5 flexc">
                {cart.map((value, index) => (
                  <React.Fragment key={index}>
                    <CartList
                      toIndonesiaCurrency={toIndonesiaCurrency}
                      addItem={addItem}
                      removeItem={removeItem}
                      value={value}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="relative w-full h-full p-3 text-2xl font-bold flexc text-biru-200">
                Keranjang Kosong . . .
              </div>
            </>
          )}

          <div className="w-full font-bold text-lg shadow shadow-gray-400 flexc !justify-evenly text-white">
            <div
              className={`py-8 flexc !justify-start px-8 h-full bg-biru-500 ${
                cart && cart.length < 1 && "flex-[1]"
              }`}
            >
              Total Pesanan :{" "}
              <span className="ms-3">
                <span>
                  {cart.length > 0
                    ? toIndonesiaCurrency(totalPesanan())
                    : `Rp 0`}
                </span>
              </span>
            </div>

            <div
              className={`flexc !justify-end gap-8 ${
                cart && cart.length > 0 && "flex-[2] px-10"
              } h-full text-white text-base`}
            >
              {cart && cart.length > 0 && (
                <>
                  <button
                    onClick={() => {
                      const konfirmasi = confirm(
                        "Yakin Mau Mengosongkan Keranjang?"
                      );

                      if (konfirmasi) {
                        setCart([]);
                        setShowCart(!showCart);
                      }
                    }}
                    className="px-4 py-3 bg-red-500 rounded-lg shadow"
                  >
                    <i className="mr-3 text-lg fa-solid fa-trash-arrow-up"></i>
                    <span>Kosongkan Keranjang</span>
                  </button>

                  <button
                    onClick={() => {
                      const fullOrder = cart.map((value) => {
                        const product = findProduct(value.id);
                        const cartList = {
                          ...value,
                          name: product.name,
                          price: product.price,
                        };

                        return cartList;
                      });

                      createOrder(fullOrder);

                      setShowCart(!showCart);
                    }}
                    className="px-4 py-3 bg-green-500 rounded-lg shadow"
                  >
                    <i className="mr-3 text-lg fa-solid fa-cart-arrow-down"></i>
                    <span>Buat Pesanan</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopView;
