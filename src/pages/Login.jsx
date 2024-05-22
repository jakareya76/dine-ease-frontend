import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import authImg from "../assets/others/authentication2.png";
import authBg from "../assets/others/authentication.png";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const captchaRef = useRef(null);

  const { loginUser } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        alert("invalid credential");
      }
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
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
          <h2 className="my-4 text-2xl font-semibold text-center">Login</h2>
          <form onSubmit={handleLogin}>
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
            <div className="grid my-4">
              <label htmlFor="email" className="text-[#444444] font-semibold">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                className="w-full px-4 py-3 border rounded outline-none"
              />
              <button
                type="button"
                onClick={handleValidateCaptcha}
                className="w-full py-1 text-white bg-green-600"
              >
                Verify
              </button>
            </div>
            <button
              disabled={disabled}
              className="w-full py-3 disabled:bg-gray-400 invalid:bg-[#d19f54dc] font-semibold text-white bg-[#d19f54dc] cursor-pointer rounded"
            >
              Login
            </button>
          </form>
          <p className="text-center text-[#d19f54dc] my-3">
            <span>New here? </span>
            <Link to="/sign-up" className="font-semibold">
              Create a New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;