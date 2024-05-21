import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          return <FoodCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default OrderTab;
