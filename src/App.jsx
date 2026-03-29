import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="px-4 md:px-4">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
