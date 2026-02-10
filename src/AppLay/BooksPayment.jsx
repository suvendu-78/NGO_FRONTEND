import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Landmark, Wallet, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BooksPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // CART & PRODUCT TYPE
  const cart = location.state?.cart || [];
  const productType = location.state?.productType || "book";

  // ❗ NO payment method selected initially
  const [method, setMethod] = useState("");

  // ORDERER DETAILS
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    address: "",
  });

  // EMPTY CART CHECK
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  // TOTAL & GST
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price?.toString().replace("₹", "")),
    0
  );
  const gst = total * 0.05;

  // 🔒 VALIDATION (DETAILS + PAYMENT METHOD)
  const isFormValid = () => {
    const { name, email, phone, address } = details;

    if (!name || !email || !phone || !address) return false;
    if (phone.length !== 10) return false;
    if (!method) return false; // payment method required

    return true;
  };

  // 🔔 PAY HANDLER
  const handlePayNow = () => {
    const { name, email, phone, address } = details;

    if (!name || !email || !phone || !address) {
      toast.error("Please complete delivery/orderer details ❗");
      return;
    }

    if (phone.length !== 10) {
      toast.error("Phone number must be 10 digits 📱");
      return;
    }

    if (!method) {
      toast.error("Please choose a payment method 💳");
      return;
    }

    navigate("/success", {
      state: { productType },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* ORDERER DETAILS */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="text-amber-400" />
              Delivery / Orderer Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="input"
                placeholder="Full Name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Email Address"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Phone Number"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
              />
              <input
                className="input"
                placeholder="Pincode"
                value={details.pincode}
                onChange={(e) =>
                  setDetails({ ...details, pincode: e.target.value })
                }
              />
              <textarea
                rows={3}
                className="input md:col-span-2 resize-none"
                placeholder="Full Delivery Address"
                value={details.address}
                onChange={(e) =>
                  setDetails({ ...details, address: e.target.value })
                }
              />
            </div>
          </div>

          {/* PAYMENT METHODS */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
            <h2 className="text-2xl font-bold mb-6">
              💳 Choose Payment Method
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Tab icon={<Wallet />} label="UPI" active={method === "upi"} onClick={() => setMethod("upi")} />
              <Tab icon={<CreditCard />} label="Card" active={method === "card"} onClick={() => setMethod("card")} />
              <Tab icon={<Landmark />} label="NetBanking" active={method === "netbank"} onClick={() => setMethod("netbank")} />
            </div>

            {/* UPI */}
            {method === "upi" && (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <img src="https://img.icons8.com/color/48/google-pay.png" />
                  <img src="https://img.icons8.com/color/48/phone-pe.png" />
                  <img src="https://img.icons8.com/color/48/paytm.png" />
                  <img src="https://img.icons8.com/color/48/bhim.png" />
                </div>
                <input className="input" placeholder="example@upi" />
              </div>
            )}

            {/* CARD */}
            {method === "card" && (
              <div className="space-y-4">
                <input className="input" placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="input" placeholder="MM / YY" />
                  <input className="input" placeholder="CVV" />
                </div>
                <input className="input" placeholder="Card Holder Name" />
              </div>
            )}

            {/* NET BANKING */}
            {method === "netbank" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["sbi", "hdfc", "icici", "axis", "kotak"].map((bank) => (
                  <div
                    key={bank}
                    className="bg-white/10 rounded-xl p-4 flex flex-col items-center hover:bg-white/20 cursor-pointer transition"
                  >
                    <img
                      src={`https://img.icons8.com/color/96/${bank}.png`}
                      className="h-10"
                    />
                    <p className="text-sm mt-2 uppercase">{bank}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white h-fit">
          <h3 className="text-xl font-bold mb-4">🧾 Order Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between font-bold text-lg text-amber-400">
              <span>Total</span>
              <span>₹{(total + gst).toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            disabled={!isFormValid()}
            className={`mt-6 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition
              ${
                isFormValid()
                  ? "bg-gradient-to-r from-amber-600 to-amber-800 hover:scale-105 text-white"
                  : "bg-gray-600 cursor-not-allowed text-gray-300"
              }`}
          >
            <ShieldCheck />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-xl border flex flex-col items-center transition
      ${
        active
          ? "bg-amber-700/30 border-amber-500 text-white"
          : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
      }`}
  >
    {icon}
    <span className="text-sm mt-2">{label}</span>
  </button>
);

export default BooksPayment;
