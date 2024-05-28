import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = async () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      try {
        const res = await axiosSecure.post("/carts", cartItem);

        if (res.data.insertedId) {
          toast.success("Food Added To Cart Successfully");
          refetch();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please Login To Add To The Cart");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="bg-[#F3F3F3] max-w-xs pb-4">
      <div className="relative">
        <img src={image} alt="img" />
        <p className="absolute px-5 py-2 text-white rounded top-5 right-5 bg-slate-800">
          ${price}
        </p>
      </div>
      <h2 className="my-2 text-xl font-semibold text-center font-inter">
        {name}
      </h2>
      <p className="px-2 mb-4 text-sm text-zinc-600">
        {recipe.slice(0, 80)}...
      </p>

      <div className="flex items-center justify-center">
        <button
          onClick={handleAddToCart}
          className="self-end px-5 py-2 duration-300 border-b-2 border-yellow-600 rounded hover:bg-yellow-600 hover:text-white bg-slate-200"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
