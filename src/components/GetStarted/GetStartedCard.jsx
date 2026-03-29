import UserImg from "../../assets/user.png";
import PlanImg from "../../assets/package.png";
import BuildImg from "../../assets/rocket.png";

const GetStartedCard = () => {
  const steps = [
    {
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      img: UserImg,
    },
    {
      title: "Choose Plan",
      desc: "Select the best plan that fits your needs with flexible pricing options.",
      img: PlanImg,
    },
    {
      title: "Start Building",
      desc: "Use our tools to create and manage your projects easily and efficiently.",
      img: BuildImg,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {steps.map((item, index) => (
        <div
          key={index}
          className="px-10 bg-white shadow-sm text-center rounded-lg relative"
        >
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="py-[60px] space-y-4">
            <img src={item.img} alt="" className="mx-auto" />
            <h2 className="text-[#101727] text-2xl font-bold">{item.title}</h2>
            <p className="text-[#627382]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetStartedCard;
