import { Check } from "lucide-react";
import React, { useState } from "react";
import { buttonBg } from "../buttonStyles";

const Product = ({ product, handleCart }) => {
  const { tag, icon, name, description, price, features } = product;
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    handleCart(product);
  };

  return (
    <div className="p-4 shadow-md space-y-4 transition-transform duration-300 hover:scale-105">
      <div className="flex justify-end">
        <p
          className={`text-end px-3 py-1 rounded-full font-bold ${tag === "best seller" ? "bg-amber-200 text-amber-500" : tag === "new" ? "bg-green-200 text-green-500" : "bg-purple-200 text-purple-500"}`}
        >
          {tag}
        </p>
      </div>

      <img src={`/${icon}`} alt="icon" className="w-8 h-8" />
      <p className="text-[#101727] text-[24px] font-bold">{name}</p>
      <p className="text-[#627382] line-clamp-2">{description}</p>
      <p className="font-bold">
        ${price}/<span className="text-[#627382] text-[12px]">Mo</span>
      </p>
      <div>
        {features.map((feature, ind) => (
          <p
            key={ind}
            className="leading-8 text-[#627382] flex gap-2 items-center"
          >
            <Check color="#0ced32" />
            <span>{feature}</span>
          </p>
        ))}
      </div>
      <button
        onClick={handleAddToCart}
        className={`btn w-full text-white rounded-full ${isAddedToCart ? "btn-success" : buttonBg}`}
      >
        {isAddedToCart ? (
          <>
            <Check className="w-4 h-4 inline mr-1" />
            Added to Cart!
          </>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default Product;
