import React from "react";
import { buttonBg } from "../buttonStyles";

const Tabs = ({ tab, setTab, carts }) => {
  return (
    <div
      role="tablist"
      className=" py-10 tabs tabs-lift flex justify-center gap-10"
    >
      <button
        onClick={() => setTab("products")}
        className={`btn rounded-full px-4 ${tab === "products" ? buttonBg : ""}`}
      >
        Products
      </button>

      <button
        onClick={() => setTab("Cart")}
        className={`btn rounded-full px-4 ${tab === "Cart" ? buttonBg : ""}`}
      >
        Cart({carts.length})
      </button>
    </div>
  );
};

export default Tabs;
