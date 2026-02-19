import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgTheme from "../../assets/bgthim.png";

const Adminlog = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const adminCodeRef = useRef();

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  // auto hide top message
  useEffect(() => {
    if (serverError) {
      const timer = setTimeout(() => setServerError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [serverError]);

  const validate = (data) => {
    let newErrors = {};

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Valid email required";
    }

    if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!data.adminCode.trim()) {
      newErrors.adminCode = "Admin code is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      adminCode: adminCodeRef.current.value,
    };

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("https://backend-ngo-gss9.onrender.com/api/v1/user/loginAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/adminBooks");
      } else {
        setServerError(data.message);
      }
    } catch (error) {
      setServerError("Server Error. Try again.");
    }
  };

  return (
    <>
      {/* 🔥 Top Error Message */}
      {serverError && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                        bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl"
        >
          {serverError}
        </div>
      )}

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgTheme})` }}
      >
        <div className="bg-[#f5f1ea] w-[420px] p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-[#7a2d0b] mb-6">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Admin Email"
                ref={emailRef}
                className="w-full p-3 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className="w-full p-3 border rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Admin Code */}
            <div>
              <input
                type="password"
                placeholder="Admin Special Code"
                ref={adminCodeRef}
                className="w-full p-3 border rounded-lg border-yellow-600"
              />
              {errors.adminCode && (
                <p className="text-red-500 text-sm">{errors.adminCode}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#b8860b] text-white py-3 rounded-lg hover:bg-[#996c08] transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminlog;