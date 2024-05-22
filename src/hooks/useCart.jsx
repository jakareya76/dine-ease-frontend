import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxios();

  const { user } = useAuth();

  const userEmail = user?.email;

  // tanstack query
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", userEmail],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${userEmail}`);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
