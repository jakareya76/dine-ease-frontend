import { Helmet } from "react-helmet-async";
import CoverSection from "../components/Shared/CoverSection";

import bannerImg from "../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Dine Ease | Menu</title>
      </Helmet>
      <CoverSection
        img={bannerImg}
        title={"OUR MENU"}
        text={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default Menu;
