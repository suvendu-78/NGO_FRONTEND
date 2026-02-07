import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";

import bgthim from "../../assets/bgthim.png";

const Register = () => {
  const [form, setForm] = useState({});

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const FullNameR = useRef();
  const EmailR = useRef();
  const MobileR = useRef();
  const PasswordR = useRef();

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Info = {
      fullName: FullNameR.current.value.trim(),
      Email: EmailR.current.value.trim(),
      Mobile: MobileR.current.value.trim(),
      Password: PasswordR.current.value,
    };

    console.log(Info.Mobile);

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8000/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Info),
        },
      );

      const data = await response.json();

      console.log("Server Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registered successfully 🎉");

      setForm({
        fullName: "",
        Email: "",
        Mobile: "",
        Password: "",
      });

      setShowPassword(false);
    } catch (error) {
      console.log("something went wrong!", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 "
      style={{ backgroundImage: `url(${bgthim})` }}
    >
      <div className="absolute inset-0 border-t-4 border-b-4 border-[#c9a24d]" />

      {loading && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-14 h-14 border-4 border-[#c9a24d] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-[420px] bg-[#fdf7ef] text-[#3b2a1a]
        rounded-xl shadow-2xl border border-[#d6b97b]
        p-6 sm:p-8 md:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#7a2e1f]">
          Create Your Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        {success && (
          <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">
            {success}
          </p>
        )}

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          ref={FullNameR}
          required
          className="w-full mb-4 px-4 py-2 rounded
          bg-white border border-[#d6b97b]
          outline-none focus:ring-2 focus:ring-[#c9a24d]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          ref={EmailR}
          required
          className="w-full mb-4 px-4 py-2 rounded
          bg-white border border-[#d6b97b]
          outline-none focus:ring-2 focus:ring-[#c9a24d]"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          ref={MobileR}
          required
          className="w-full mb-4 px-4 py-2 rounded
          bg-white border border-[#d6b97b]
          outline-none focus:ring-2 focus:ring-[#c9a24d]"
        />

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            ref={PasswordR}
            required
            className="w-full px-4 py-2 pr-11 rounded
            bg-white border border-[#d6b97b]
            outline-none focus:ring-2 focus:ring-[#c9a24d]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a2e1f]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#c9a24d] hover:bg-[#e2c26b]
          text-[#5a1f14] font-semibold py-2.5 rounded transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4 text-[#5a1f14]">
          Join the Odia literary community 📚
        </p>
      </form>
    </div>
  );
};

export default Register;
