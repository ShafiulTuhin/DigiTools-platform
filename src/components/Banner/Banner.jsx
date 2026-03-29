import BannerImage from "../../assets/banner.png";
import Rectangle from "../../assets/Rectangle.png";
import Play from "../../assets/Play.png";

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:flex  justify-between items-center lg:py-[85px] py-[30px] gap-5">
      <div className="space-y-6 lg:w-[640px] w-full md:mb-0 mb-4">
        <div className="flex gap-3 items-center bg-purple-200 px-4 rounded-full py-1">
          <img src={Rectangle} alt="" />
          <p className="w-[294px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h2 className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-[#101727]">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-5">
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full ">
            Explore Products
          </button>
          <button className="btn bg-transparent  rounded-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent border-2 border-purple-300 ">
            <img src={Play} alt="" />
            GetStarted
          </button>
        </div>
      </div>
      <div className="">
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
