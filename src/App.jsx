import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Stats from "./components/Stats/Stats";

const fetchProducts = async () => {
  const url = "/products.json";
  const res = await fetch(url);
  return res.json();
};
const productPromise = fetchProducts();
function App() {
  return (
    <div className="px-4 md:px-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Products productPromise={productPromise}></Products>
    </div>
  );
}

export default App;
