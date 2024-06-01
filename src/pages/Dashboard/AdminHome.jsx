import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  console.log(stats);

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Hi, Welcome <span>{user?.displayName ? user.displayName : "Back"}</span>
      </h2>
    </div>
  );
};

export default AdminHome;
