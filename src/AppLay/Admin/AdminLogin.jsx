import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgTheme from "../../assets/bgthim.png";

const AdminLogin = () => {
  const navigate = useNavigate();

  // ✅ useRef instead of useState
  const fullNameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const adminCodeRef = useRef();

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (data) => {
    let newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Valid email required";
    }

    if (!/^[0-9]{10}$/.test(data.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ collect values from refs
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      password: passwordRef.current.value,
      adminCode: adminCodeRef.current.value,
    };

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(
        "https://backend-ngo-gss9.onrender.com/api/v1/user/adminregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);

        setTimeout(() => {
          navigate("/adminBooks");
        }, 1500);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTheme})` }}
    >
      {serverError && (
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                  bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl
                  font-semibold animate-bounce"
        >
          {serverError}
        </div>
      )}

      <div className="bg-[#f5f1ea] w-[420px] p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#7a2d0b] mb-6">
          Admin Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              ref={fullNameRef}
              className="w-full p-3 border rounded-lg"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

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

          {/* Mobile */}
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              ref={mobileRef}
              className="w-full p-3 border rounded-lg"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
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
            <p className="text-xs text-gray-500 mt-1">
              Enter only if you have admin access code
            </p>
          </div>

          {success && (
            <p className="text-green-600 text-center font-semibold">
              ✅ Successfully Registered! Redirecting...
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#b8860b] text-white py-3 rounded-lg hover:bg-[#996c08] transition"
          >
            Register
          </button>
          <NavLink to="/adminlog ">
            <p className="text-s text-gray-500">
              are you already register{" "}
              <span className="text-red-400"> Adminlog</span>
            </p>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;