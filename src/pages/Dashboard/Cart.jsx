import { MdDelete } from "react-icons/md";
import SectionHeading from "../../components/Shared/SectionHeading";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-5">
      <SectionHeading title={"MANAGE CART"} text={"Hurry Up!"} />

      <div className="flex items-center justify-center">
        <div className="w-full p-4 mt-5 border rounded">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Total items: {cart.length}
            </h2>
            <h2 className="text-2xl font-semibold">
              Total Price: {totalPrice}$
            </h2>
            <button className="btn btn-primary">Checkout</button>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Number</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => {
                  return (
                    <tr key={item._id}>
                      <th>{idx + 1}</th>
                      <td>
                        <img
                          src={item.image}
                          alt="food img"
                          className="w-[80px] rounded"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}$</td>
                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-white btn btn-error "
                        >
                          <MdDelete /> Delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
