import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import bgthim from "../../assets/bgthim.png";
import axios from "axios";
const Login = () => {
  const EmailR = useRef();
  const PasswordR = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const Handller = async (e) => {
    e.preventDefault();

    const Info = {
      Email: EmailR.current.value.trim(),
      Password: PasswordR.current.value.trim(),
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        Info,
        { withCredentials: true },
      );

      console.log("Login Success:", data);

      localStorage.setItem("token", data.data.accessToken);
    } catch (error) {
      console.log(error.response?.data?.message);

      alert(error.response?.data?.message);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-repeat px-4"
        style={{ backgroundImage: `url(${bgthim})` }}
      >
        {/* light overlay (same feel as register) */}
        <div className="absolute inset-0 bg-[#7a2e1f]/10"></div>

        {/* CARD */}
        <div className="relative w-full max-w-md bg-[#fdf7ef] rounded-2xl shadow-2xl border border-[#d6b97b] p-8">
          <h2 className="text-2xl font-bold text-center text-[#5a1f14] mb-6">
            Login to Your Account
          </h2>

          <form className="space-y-5" onSubmit={Handller}>
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              ref={EmailR}
              className="w-full px-4 py-3 rounded-md border border-[#d6b97b] focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                ref={PasswordR}
                className="w-full px-4 py-3 rounded-md border border-[#d6b97b] focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a2e1f]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#c9a24d] text-[#5a1f14] py-3 rounded-md font-semibold hover:bg-[#e2c26b] transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-[#5a1f14] mt-6">
            Don’t have an account?{" "}
            <NavLink to="/register" className="font-semibold hover:underline">
              Register
            </NavLink>
          </p>
          <p className="text-center text-sm text-[#5a1f14] mt-6">
            Are you Addmin?{" "}
            <NavLink to="/adminlogin" className="font-semibold hover:underline">
              login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
