import { Link, useNavigate } from "react-router-dom";
import authImg from "../assets/others/authentication2.png";
import authBg from "../assets/others/authentication.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signUp(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
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
          <form onSubmit={handleSignUp}>
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
