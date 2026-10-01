import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!email) return alert("Enter email");

    try {
      setLoading(true);

      const res = await fetch(
        "https://backend-ngo-green.vercel.app/api/v1/user/admin/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email 📩");

        // ✅ go to reset page with email
        navigate("/addNewPass", { state: { email } });
      } else {
        alert(data.message || "Error sending OTP");
      }
    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dcd6cf]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-orange-700 mb-6">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Enter your registered email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={handleSendOTP}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
