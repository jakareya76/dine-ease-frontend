import { Helmet } from "react-helmet-async";
import CoverSection from "../components/Shared/CoverSection";

import bannerImg from "../assets/menu/banner3.jpg";
import MenuCategory from "../components/Menu/MenuCategory";
import useMenu from "../hooks/useMenu";
import SectionHeading from "../components/Shared/SectionHeading";
import MenuCard from "../components/Shared/MenuCard";

import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => {
    return item.category === "dessert";
  });

  const soup = menu.filter((item) => {
    return item.category === "soup";
  });

  const salad = menu.filter((item) => {
    return item.category === "salad";
  });

  const pizza = menu.filter((item) => {
    return item.category === "pizza";
  });

  const offered = menu.filter((item) => {
    return item.category === "offered";
  });

  return (
    <>
      <Helmet>
        <title>Dine Ease | Menu</title>
      </Helmet>
      <CoverSection
        img={bannerImg}
        title={"OUR MENU"}
        text={"Would you like to try a dish?"}
      />

      <section className="px-5 py-20">
        <SectionHeading title={"TODAY'S OFFER"} text={"Don't miss"} />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {offered.map((item) => {
            return <MenuCard key={item._id} item={item} />;
          })}
        </div>
      </section>

      <MenuCategory
        items={dessert}
        title={"dessert"}
        text={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        }
        coverImg={dessertImg}
      />
      <MenuCategory
        items={pizza}
        title={"pizza"}
        text={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        }
        coverImg={pizzaImg}
      />
      <MenuCategory
        items={salad}
        title={"salad"}
        text={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        }
        coverImg={saladImg}
      />
      <MenuCategory
        items={soup}
        title={"soups"}
        text={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        }
        coverImg={soupImg}
      />
    </>
  );
};

export default Menu;
