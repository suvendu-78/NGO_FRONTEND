// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Forget = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const [step, setStep] = useState(1); // 1 = email, 2 = otp + new pass
//   const [message, setMessage] = useState("");

//   // STEP 1 → SEND OTP
//   const handleSendOtp = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/auth/forgot-password",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email }),
//         },
//       );

//       const data = await res.json();
//       setMessage(data.message);

//       if (res.ok) {
//         setStep(2);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // STEP 2 → RESET PASSWORD
//   const handleResetPassword = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, otp, newPassword }),
//       });

//       const data = await res.json();
//       setMessage(data.message);

//       if (res.ok) {
//         navigate("/newPass", { state: { email } });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#fdf6ef]">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-amber-800">
//           Forgot Password
//         </h2>

//         {message && (
//           <p className="text-center text-sm mb-4 text-green-600">{message}</p>
//         )}

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border p-3 rounded mb-4"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <button
//               onClick={handleSendOtp}
//               className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800"
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full border p-3 rounded mb-3"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-3 rounded mb-4"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//             <button
//               onClick={handleResetPassword}
//               className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
//             >
//               Reset Password
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Forget;

// ForgotPassword.jsx
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
        "https://backend-ngo-green.vercel.app/api/v1/user/send-otp",
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
        navigate("/reset-password", { state: { email } });
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
