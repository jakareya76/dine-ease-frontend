import { Link } from "react-router-dom";
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
      <div className="flex items-center justify-center">
        <Link
          to={`/order/${title}`}
          className="self-end px-5 py-2 uppercase duration-300 border-b-2 border-yellow-600 rounded hover:bg-yellow-600 hover:text-white bg-slate-200"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
