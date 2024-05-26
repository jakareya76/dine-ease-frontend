import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/others/authentication2.png";
import authBg from "../assets/others/authentication.png";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/Shared/SocialLogin";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const { signUp, user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    if (data.password.length < 8) {
      return toast.error("Password Must Be 8 Character");
    }

    try {
      await signUp(data.email, data.password);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });

      toast.success("Sign Up Successfull");

      const userInfo = {
        name: data.name,
        email: data.email,
      };

      const res = await axiosPublic.post("/users", userInfo);
      console.log(res.data);

      if (res.data.insertedId) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (user) {
    return navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Dine Ease | Sign Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${authBg})` }}
        className="flex items-center justify-center min-h-screen px-5 py-10"
      >
        <div className="flex flex-col items-center justify-center gap-5 p-10 rounded-lg shadow-xl md:flex-row">
          <div>
            <img src={authImg} alt="auth-img" className="max-w-[400px] mt-10" />
          </div>
          <div>
            <h2 className="my-4 text-2xl font-semibold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="grid my-4">
                <label htmlFor="email" className="text-[#444444] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 border rounded outline-none"
                  required
                  {...register("name")}
                />
              </div>
              <div className="grid my-4">
                <label htmlFor="email" className="text-[#444444] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border rounded outline-none"
                  required
                  {...register("email")}
                />
              </div>
              <div className="grid my-4">
                <label htmlFor="email" className="text-[#444444] font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border rounded outline-none"
                  required
                  {...register("password")}
                />
              </div>
              <button className="w-full py-3 font-semibold text-white bg-[#d19f54dc] rounded">
                Sign Up
              </button>
            </form>
            <p className="text-center text-[#d19f54dc] my-3">
              <span>Already Have An Account? </span>
              <Link to="/login" className="font-semibold">
                Please Login
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
