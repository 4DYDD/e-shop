import { useState, useEffect, useRef } from "react";

import myDataProducts from "./data/myDataProducts";

import "./App.css";

import Navbar from "./components/fragments/Navbar";
import Content from "./components/fragments/Content";
import Footer from "./components/fragments/Footer";

function App() {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    if (dataProducts.length < 1) {
      setDataProducts(myDataProducts);
    }
  }, []);

  const dummyCart = [
    {
      id: 1,
      quantity: 3,
      totalPrice: 18000,
    },
    {
      id: 2,
      quantity: 3,
      totalPrice: 21000,
    },
    {
      id: 3,
      quantity: 3,
      totalPrice: 24000,
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // buat fungsi untuk mengambil data di localStorage
    console.log(cart);
  }, [cart]);

  const toIndonesiaCurrency = (number) => {
    return number
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })
      .replace(/,00$/, "");
  };

  const totalPesanan = () => {
    if (cart.length > 0) {
      const total = cart
        .map((value) => value.totalPrice)
        .reduce((prev, value) => {
          return prev + value;
        }, 0);

      return total;
    }
  };

  const findCartProduct = (id) => {
    const product = cart.find((value, index) => value.id == id);
    return product;
  };

  const findProduct = (id) => {
    const product = dataProducts.find((value) => value.id == id);
    return product;
  };

  const handleAddItem = (id) => {
    const product = findProduct(id);

    const updatedCart = [
      ...cart,
      { id: id, quantity: 1, totalPrice: product.price },
    ];

    updatedCart.sort((a, b) => a.id - b.id);

    setCart(updatedCart);
  };

  const addItem = (id) => {
    const cartProduct = findCartProduct(id);

    if (!cartProduct) {
      handleAddItem(id);
    } else {
      const newQty = cartProduct.quantity + 1;
      const newTotalPrice = findProduct(id).price * newQty;

      const newCartProduct = {
        ...cartProduct,
        quantity: newQty,
        totalPrice: newTotalPrice,
      };

      const newCart = cart.filter((value) => value.id != id);
      const updatedCart = [...newCart, newCartProduct];

      updatedCart.sort((a, b) => a.id - b.id);

      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    const cartProduct = findCartProduct(id);
    const newQty = cartProduct.quantity - 1;
    let updatedCart;

    if (newQty < 1) {
      if (!confirm("hapus pesanan?")) {
        return;
      }
      const newCart = cart.filter((value) => value.id != id);
      updatedCart = [...newCart];

      updatedCart.sort((a, b) => a.id - b.id);
    } else {
      const newTotalPrice = findProduct(id).price * newQty;

      const newCartProduct = {
        ...cartProduct,
        quantity: newQty,
        totalPrice: newTotalPrice,
      };

      const newCart = cart.filter((value) => value.id != id);
      updatedCart = [...newCart, newCartProduct];

      updatedCart.sort((a, b) => a.id - b.id);
    }

    setCart(updatedCart);
  };

  const createOrderString = (orders) => {
    let message = "```";

    // USER BISA INPUT ALAMAT (OPSIONAL)
    const Alamat = "";

    const garisPembungkus = "◯ ------------------------------ ◯";
    const garisPembungkusTotal = "◯ ============================== ◯";

    orders.forEach((order, index) => {
      message += `
${garisPembungkus}
Pesanan ${index + 1} :
 • ID Produk        : ${order.id}
 • Nama Produk      : ${order.name}
 • Harga Produk     : ${toIndonesiaCurrency(order.price).replace(/\s/g, "")}
 • Jumlah Pembelian : ${order.quantity}
 • Total Harga      : ${toIndonesiaCurrency(order.totalPrice).replace(
   /\s/g,
   ""
 )}
${garisPembungkus}
`;
    });

    message += `
       
${garisPembungkusTotal}
`;

    if (Alamat) {
      message += `
Alamat:
${Alamat}
`;
    }

    message += `
Total Pesanan: ${toIndonesiaCurrency(totalPesanan()).replace(/\s/g, "")}

${garisPembungkusTotal}`;

    message += "```";

    return message;
  };

  const createOrder = (orders) => {
    const orderMessage = createOrderString(orders);
    const phoneNumber = "6282251033970";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      orderMessage
    )}`;

    // Untuk membuka link di browser:
    window.open(whatsappLink, "_blank"); // Ganti 'nomor_telepon' dengan nomor admin
  };

  return (
    <main className="font-capriola">
      <Navbar
        cart={cart}
        setCart={setCart}
        addItem={addItem}
        removeItem={removeItem}
        showCart={showCart}
        setShowCart={setShowCart}
        createOrder={createOrder}
        dataProducts={dataProducts}
      />
      <Content
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <Footer />
    </main>
  );
}

export default App;
