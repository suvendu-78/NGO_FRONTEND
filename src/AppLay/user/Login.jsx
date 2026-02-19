import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const EmailR = useRef();
  const PasswordR = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const Handller = async (e) => {
    e.preventDefault();

    const Info = {
      Email: EmailR.current.value.trim(),
      Password: PasswordR.current.value.trim(),
    };

    try {
      const res = await axios.post(
        "https://backend-ngo-gss9.onrender.com/api/v1/user/login",
        Info,
      );

      const token = res.data.data?.accessToken;

      if (!token) {
        setServerError("Token not received");
        return;
      }

      // ✅ Save auth data
      localStorage.setItem("token", token);
      localStorage.setItem("currentUserEmail", Info.Email);

      setSuccessMessage("Login successfully ✅");
      setServerError("");

      setTimeout(() => {
        navigate("/user-dashboard", { replace: true });
      }, 1000);
    } catch (error) {
      setServerError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#7a2e1f]">
      {serverError && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-xl">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl">
          {successMessage}
        </div>
      )}

      <div className="w-full max-w-md bg-[#fdf7ef] rounded-2xl shadow-2xl border border-[#d6b97b] p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={Handller} className="space-y-5">
          <input
            type="email"
            ref={EmailR}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              ref={PasswordR}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border rounded"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="w-full bg-[#c9a24d] py-3 rounded">Login</button>

          <p className="text-center">
            New user?
            <NavLink to="/register" className="text-red-500 ml-1">
              Register
            </NavLink>
          </p>
        </form>

        <p className="text-center">
          are u admin ?{" "}
          <NavLink to="/adminlogin" className="text-red-500 ml-1">
            login{" "}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;