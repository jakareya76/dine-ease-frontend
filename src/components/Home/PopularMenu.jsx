import SectionHeading from "../Shared/SectionHeading";
import MenuCard from "../Shared/MenuCard";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => {
    return item.category === "popular";
  });

  return (
    <section className="px-5 py-20">
      <SectionHeading title="FROM OUR MENU" text="Check it out" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {popular.map((item) => {
          return <MenuCard key={item._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default PopularMenu;
