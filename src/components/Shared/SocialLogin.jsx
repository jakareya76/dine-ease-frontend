import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();

  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = async () => {
    const res = await loginWithGoogle();

    const userInfo = {
      name: res.user.displayName,
      email: res.user.email,
    };

    const result = await axiosPublic.post("users", userInfo);

    console.log(result);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full gap-3 py-2 font-semibold bg-white border border-gray-400 rounded"
      >
        <FaGoogle />
        <span>Connect With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
