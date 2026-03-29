import React from "react";

const Tabs = ({ tab, setTab, carts }) => {
  return (
    <div
      role="tablist"
      className=" py-10 tabs tabs-lift flex justify-center gap-10"
    >
      <button
        onClick={() => setTab("products")}
        className={`btn rounded-full px-4 ${tab === "products" ? " bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}`}
      >
        Products
      </button>

      <button
        onClick={() => setTab("Cart")}
        className={`btn rounded-full px-4 ${tab === "Cart" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : ""}`}
      >
        Cart({carts.length})
      </button>
    </div>
  );
};

export default Tabs;
