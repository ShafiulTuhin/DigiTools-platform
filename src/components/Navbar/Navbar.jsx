import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({ carts }) => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center py-5">
      <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        DigiTools
      </h2>
      <div className="md:block hidden">
        <ul className="flex lg:gap-8 gap-4 font-semibold">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center font-bold">
        <div className="relative inline-block">
          <ShoppingCart className="w-6 h-6" />

          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {carts.length}
            </span>
          )}
        </div>
        <p>Login</p>
        <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
          GetStarted
        </button>
      </div>
    </div>
  );
};

export default Navbar;
