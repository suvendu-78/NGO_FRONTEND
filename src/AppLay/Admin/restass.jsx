import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddNewPass = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP");

    try {
      setLoading(true);

      const res = await fetch(
        "https://backend-ngo-green.vercel.app/api/v1/user/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("OTP Verified ✅");
        setIsOtpVerified(true);
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset Password
  const handleResetPassword = async () => {
    if (!password || !confirmPassword) return alert("Fill all fields");

    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      setLoading(true);

      const res = await fetch(
        "https://backend-ngo-green.vercel.app/api/v1/user/admin/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, otp }), // 🔥 FIXED
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("Password updated successfully 🎉");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        alert(data.message || "Error resetting password");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dcd6cf]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-orange-700 mb-6">
          Reset Password
        </h2>

        {/* OTP Section */}
        {!isOtpVerified && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-orange-600 text-white py-3 rounded-lg"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {/* Password Section */}
        {isOtpVerified && (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddNewPass;
