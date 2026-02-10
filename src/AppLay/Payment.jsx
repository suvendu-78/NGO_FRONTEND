import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Landmark, Wallet, ShieldCheck } from "lucide-react";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔴 UPDATED: accept cart instead of single book
  const cart = location.state?.cart || [];

  const [method, setMethod] = useState("upi");

  // 🔴 UPDATED: cart validation
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  // 🔴 UPDATED: total & gst from cart
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const gst = total * 0.05;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">

        {/* PAYMENT METHODS */}
        <div className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
          <h2 className="text-2xl font-bold text-white mb-6">
            💳 Choose Payment Method
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Tab icon={<Wallet />} label="UPI" active={method === "upi"} onClick={() => setMethod("upi")} />
            <Tab icon={<CreditCard />} label="Card" active={method === "card"} onClick={() => setMethod("card")} />
            <Tab icon={<Landmark />} label="NetBanking" active={method === "netbank"} onClick={() => setMethod("netbank")} />
          </div>

          {method === "upi" && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <img src="https://img.icons8.com/color/48/google-pay.png" />
                <img src="https://img.icons8.com/color/48/phone-pe.png" />
                <img src="https://img.icons8.com/color/48/paytm.png" />
                <img src="https://img.icons8.com/color/48/bhim.png" />
              </div>
              <input className="input " placeholder="example@upi" />
            </div>
          )}

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

          {method === "netbank" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["sbi", "hdfc", "icici", "axis", "kotak"].map((bank) => (
                <div key={bank} className="bank-tile">
                  <img src={`https://img.icons8.com/color/96/${bank}.png`} className="h-10" />
                  <p className="text-white uppercase text-sm mt-2">{bank}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
          <h3 className="text-xl font-bold mb-4">🧾 Order Summary</h3>

          {/* 🔴 UPDATED: loop through cart */}
          {cart.map((book) => (
            <div key={book.id} className="flex gap-4 mb-4">
              <img src={book.coverImage} className="w-20 h-28 rounded-lg object-cover" />
              <div>
                <h4 className="font-semibold">{book.title}</h4>
                <p className="text-sm text-amber-400">{book.author}</p>
                <p className="text-sm">{book.pages} pages</p>
              </div>
            </div>
          ))}

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
            onClick={() => navigate("/success", {
state: { productType: "ebook", cart: cart }
})
}
            className="mt-6 w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:scale-105 transition text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
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
      ${active ? "bg-amber-700/30 border-amber-500 text-white"
               : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"}`}
  >
    {icon}
    <span className="text-sm mt-2">{label}</span>
  </button>
);

export default Payment;
