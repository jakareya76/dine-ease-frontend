import { useForm } from "react-hook-form";
import SectionHeading from "../../components/Shared/SectionHeading";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMGBB_KEY;

const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_url, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const img_url = res.data.data.display_url;

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: img_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);

      if (menuRes.data.insertedId) {
        toast.success("Recipe Added Successfully");
        reset();
      }
    }
  };

  return (
    <div>
      <SectionHeading title={"ADD AN ITEM"} text={"What's new"} />

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
            />
          </div>
          <div className="flex flex-col gap-6 md:flex-row">
            {/* category */}
            <div className="w-full my-6 form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
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
            ></textarea>
          </div>

          <div className="w-full my-6 form-control">
            <input
              {...register("image", { required: true })}
              type="file"
              className="w-full max-w-xs file-input"
            />
          </div>

          <button className="btn px-8 btn-lg text-white bg-[#d19638] hover:bg-[#c59547]">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
