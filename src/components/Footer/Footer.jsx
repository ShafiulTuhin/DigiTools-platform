import InstaImg from "../../assets/insta.png";
import FacebookImg from "../../assets/facebook.png";
import TwitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101727] lg:py-[60px] py-10 px-4 lg:px-0">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-5 gap-5 grid-cols-2">
        <div className="text-white">
          <h2 className="font-bold text-3xl">DigiTools</h2>
          <p className="mt-5 leading-6 text-[#627382]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="text-white ">
          <h2 className="text-3xl font-bold">Product</h2>
          <ul className="mt-5 leading-6 text-[#627382]">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="text-white ">
          <h2 className="text-3xl font-bold">Company</h2>
          <ul className="mt-5 leading-6 text-[#627382]">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="text-white ">
          <h2 className="text-3xl font-bold">Resources</h2>
          <ul className="mt-5 leading-6 text-[#627382]">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="text-3xl font-bold">Social Links</h2>
          <div className="mt-5 flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center">
              <img src={InstaImg} alt="" className="w-6 h-6 mx-auto" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center">
              <img src={FacebookImg} alt="" className="w-6 h-6 mx-auto" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center">
              <img src={TwitterImg} alt="" className="w-6 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-5 mt-10 flex justify-between items-center text-[#627382] border-t-1">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
Footer;
