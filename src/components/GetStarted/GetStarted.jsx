import UserImg from "../../assets/user.png";
import GetStartedCard from "./GetStartedCard";
const GetStarted = () => {
  return (
    <div className=" md:py-10 py-5 bg-slate-100">
      <div className="text-center mb-10">
        <h2 className="text-[#101727] md:text-5xl text-2xl font-extrabold mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#627382] text-[16px]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <GetStartedCard></GetStartedCard>
    </div>
  );
};

export default GetStarted;
