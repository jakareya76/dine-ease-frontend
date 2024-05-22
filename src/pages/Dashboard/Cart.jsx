import SectionHeading from "../../components/Shared/SectionHeading";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {cart.map((item) => {
                  return (
                    <tr>
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
                        <button className="text-white btn btn-error ">
                          Delete
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
