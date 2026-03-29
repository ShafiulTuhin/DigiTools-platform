import React, { use, useState } from "react";
import Product from "../Product/Product";

const Products = ({ productPromise, handleCart }) => {
  const products = use(productPromise);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-[#101727] text-5xl font-extrabold mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-[#627382] text-[16px]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="mb-[120px] mt-10 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols gap-5">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
