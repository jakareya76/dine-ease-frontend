import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center w-full mt-8 md:flex-row">
        <div className="w-full text-center md:w-1/2 bg-[#1F2937] p-10 text-white">
          <h2 className="pt-5 mb-2 text-2xl font-semibold">CONTACT US</h2>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="w-full text-center h-full md:w-1/2 bg-[#111827] p-10 text-white">
          <h2 className="pt-5 mb-2 text-2xl font-semibold">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex items-center justify-center gap-5 py-5">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={twitterIcon} alt="twitter icon" />
          </div>
        </div>
      </div>
      <div className="p-5 text-center text-white bg-[#151515]">
        <span>Copyright © CulinaryCloud. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
