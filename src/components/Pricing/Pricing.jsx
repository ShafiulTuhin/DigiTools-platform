import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    mostPopular: false,
    strategy: "Best for individuals getting started",
    pricePerMonth: 9,
    buttonText: "Get Started Free",
    features: [
      "Basic access to all tools",
      "Limited project creation",
      "Community support",
      "Standard performance",
      "Email notifications",
    ],
  },
  {
    name: "Pro",
    mostPopular: true,
    strategy: "Advanced features for growing teams",
    pricePerMonth: 29,
    buttonText: "Start Pro Trial",
    features: [
      "Everything in Starter",
      "Unlimited projects",
      "Priority support",
      "Advanced analytics dashboard",
      "Team collaboration tools",
      "Faster performance",
    ],
  },
  {
    name: "Enterprise",
    mostPopular: false,
    strategy: "Complete solution for large organizations",
    pricePerMonth: 99,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Enterprise-grade security",
      "Scalable infrastructure",
      "24/7 premium support",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="font-extrabold  md:text-[40px] text-3xl mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="mb-8 text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="max-w-[1200px] px-4 md:px-0 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {plans.map((plan, index) => {
          const isActive = index === 1;

          return (
            <div
              key={index}
              className={`p-10 rounded-lg flex flex-col relative group transition-transform duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-105"
            : "bg-slate-200 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
        }`}
            >
              {plan.mostPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h2
                className={`font-bold ${
                  isActive ? "text-white" : "group-hover:text-white"
                }`}
              >
                {plan.name}
              </h2>

              <p
                className={`${
                  isActive
                    ? "text-white"
                    : "text-[#627382] group-hover:text-white"
                }`}
              >
                {plan.strategy}
              </p>

              <p
                className={`font-bold my-5 text-2xl ${
                  isActive ? "text-white" : "group-hover:text-white"
                }`}
              >
                ${plan.pricePerMonth}
                <span
                  className={`text-[12px] ${
                    isActive
                      ? "text-white"
                      : "text-[#627382] group-hover:text-white"
                  }`}
                >
                  /Mo
                </span>
              </p>

              <div className="mb-7">
                {plan.features.map((feature, ind) => (
                  <p
                    key={ind}
                    className={`leading-8 flex gap-2 items-center ${
                      isActive
                        ? "text-white"
                        : "text-[#627382] group-hover:text-white"
                    }`}
                  >
                    <Check color={isActive ? "#ffffff" : "#0ced32"} />
                    <span>{feature}</span>
                  </p>
                ))}
              </div>

              <button
                className={`mt-auto p-2 w-full rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-black hover:font-bold hover:text-blue-600 cursor-pointer"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-white hover:to-white hover:text-black cursor-pointer"
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
