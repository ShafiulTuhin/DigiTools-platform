import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";
import Tabs from "./components/Tabs/Tabs";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import GetStarted from "./components/GetStarted/GetStarted";

const fetchProducts = async () => {
  const url = "/products.json";
  const res = await fetch(url);
  return res.json();
};
const productPromise = fetchProducts();
function App() {
  const [tab, setTab] = useState("products");
  const [carts, setCart] = useState([]);
  console.log(carts);

  const handleCart = (product) => {
    const exists = carts.find((cart) => cart.name === product.name);
    if (!exists) {
      setCart([...carts, product]);
      toast.success(`${product.name} added successfully!`);
    } else {
      toast.error(`${product.name} already added to the cart!`);
    }
  };

  return (
    <div className="px-4 md:px-4">
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Tabs tab={tab} setTab={setTab} carts={carts}></Tabs>
      {tab === "products" ? (
        <Products
          productPromise={productPromise}
          handleCart={handleCart}
        ></Products>
      ) : (
        <Cart carts={carts} setCart={setCart}></Cart>
      )}
      <GetStarted></GetStarted>
      <ToastContainer />
    </div>
  );
}

export default App;
