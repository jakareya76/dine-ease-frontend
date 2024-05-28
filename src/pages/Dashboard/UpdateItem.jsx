import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { toast } from "react-toastify";

import SectionHeading from "../../components/Shared/SectionHeading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const item = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const updatedMenu = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };

    const menuRes = await axiosSecure.patch(`/menu/${item._id}`, updatedMenu);

    if (menuRes.data.modifiedCount > 0) {
      toast.success("Recipe Update Successfully");
      navigate("/dashboard/manage-items");
    }
  };

  return (
    <div>
      <SectionHeading title={"UPDATE AN ITEM"} text={"Refresh info"} />

      <div className="p-5 rounded bg-zinc-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-6 form-control">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="w-full input input-bordered"
              defaultValue={item.name}
            />
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            {/* category */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="w-full select select-bordered"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="w-full input input-bordered"
                defaultValue={item.price}
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="h-24 textarea textarea-bordered"
              placeholder="Recipe Details"
              defaultValue={item.recipe}
            ></textarea>
          </div>

          <button className="btn px-8 mt-8 btn-lg text-white bg-[#d19638] hover:bg-[#c59547]">
            Update Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
