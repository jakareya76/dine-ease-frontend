const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="flex gap-5">
      <img
        src={image}
        alt="img"
        className="w-24 h-20 rounded-b-full rounded-r-full"
      />
      <div>
        <h3 className="font-serif font-thin text-[#151515] uppercase">
          {name} ---------------
        </h3>
        <p className="mt-1 text-sm text-gray-500 font-inter">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl font-inter">{price}$</p>
    </div>
  );
};

export default MenuCard;
