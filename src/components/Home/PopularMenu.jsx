import { useEffect, useState } from "react";
import SectionHeading from "../Shared/SectionHeading";
import MenuCard from "./MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const res = await fetch("menu.json");
      const data = await res.json();

      const popularMenuItem = data.filter((item) => {
        return item.category === "popular";
      });

      setMenu(popularMenuItem);
    };

    getMenu();
  }, []);

  return (
    <section className="px-5 py-20">
      <SectionHeading title="FROM OUR MENU" text="Check it out" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {menu.map((item) => {
          return <MenuCard key={item._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default PopularMenu;
