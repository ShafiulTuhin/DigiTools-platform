import React from "react";

const Product = ({ product }) => {
  const { tag, icon, name, description, price, features } = product;
  //   const tagColor = {tag==='best seller'?'bg-amber-200 text-amber-500':tag === 'new'? 'bg-green-200 text-green-500': 'bg-purple-200 text-purple-500'}
  return (
    <div className="p-4 shadow-md space-y-4">
      <div className="flex justify-end">
        <p
          className={`text-end px-3 py-1 rounded-full font-bold ${tag === "best seller" ? "bg-amber-200 text-amber-500" : tag === "new" ? "bg-green-200 text-green-500" : "bg-purple-200 text-purple-500"}`}
        >
          {tag}
        </p>
      </div>

      <img src={`/${icon}`} alt="icon" className="w-6 h-6" />
      <p className="text-[#101727] text-[24px] font-bold">{name}</p>
      <p className="text-[#627382] line-clamp-2">{description}</p>
      <p className="font-bold">
        ${price}/<span className="text-[#627382] text-[12px]">Mo</span>
      </p>
      <div>
        {features.map((feature) => (
          <p className="leading-8 text-[#627382]">{feature}</p>
        ))}
      </div>
      <button className="btn w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default Product;
