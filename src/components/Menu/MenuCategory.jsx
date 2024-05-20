import MenuCard from "../Shared/MenuCard";
import CoverSection from "../Shared/CoverSection";

const MenuCategory = ({ items, title, text, coverImg }) => {
  return (
    <section className="px-5 py-20">
      {title && <CoverSection img={coverImg} title={title} text={text} />}

      <div className="grid grid-cols-1 gap-10 my-16 lg:grid-cols-2">
        {items.map((item) => {
          return <MenuCard key={item._id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default MenuCategory;
