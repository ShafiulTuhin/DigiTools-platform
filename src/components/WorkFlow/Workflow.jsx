import React from "react";

const Workflow = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 lg:py-[100px] py-10 text-center text-white">
      <h2 className="font-extrabold  text-[40px] mb-4">
        Ready To Transform Your Workflow?
      </h2>
      <p className="mb-8">
        Join thousands of professionals who are already using Digitools to work
        smarter.
        <br /> Start your free trial today.
      </p>
      <div className="space-x-5 mb-4">
        <button className="btn text-blue-600 rounded-full hover:bg-transparent hover:text-white">
          Explore products
        </button>
        <button className="btn bg-transparent hover:bg-white hover:text-blue-600 border border-white text-white rounded-full">
          View Pricing
        </button>
      </div>
      <p>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Workflow;
