import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const gst = total * 0.05;

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/success", {
        state: { productType: "ebook", cart: cart },
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">

      {/* Blur Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-center text-white w-80 shadow-2xl">
            <div className="w-14 h-14 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-lg font-semibold animate-pulse">
              Secured by Razorpay 🔐
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              Processing your payment...
            </p>
          </div>
        </div>
      )}

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE - PREMIUM CHECKOUT CARD */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-white shadow-2xl">

          <h2 className="text-3xl font-bold mb-4">
            Complete Your Purchase
          </h2>

          <p className="text-gray-300 mb-6">
            Secure checkout powered by Razorpay
          </p>

          <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6 rounded-2xl shadow-lg mb-6">
            <h3 className="text-xl font-semibold">Total Amount</h3>
            <p className="text-3xl font-bold mt-2">
              ₹{(total + gst).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-green-400 mb-6">
            <ShieldCheck size={18} />
            100% Secure & Encrypted Payment
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:scale-105 transition py-4 rounded-xl font-semibold text-white shadow-lg"
          >
            Pay Securely
          </button>

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">🧾 Order Summary</h3>

          {cart.map((book) => (
            <div key={book.id} className="flex gap-4 mb-6">
              <img
                src={book.coverImage}
                className="w-20 h-28 rounded-xl object-cover shadow-lg"
              />
              <div>
                <h4 className="font-semibold text-lg">{book.title}</h4>
                <p className="text-sm text-amber-400">{book.author}</p>
                <p className="text-sm text-gray-300">{book.pages} pages</p>
                <p className="text-sm font-semibold mt-1">
                  ₹{book.price}
                </p>
              </div>
            </div>
          ))}

          <div className="space-y-2 text-sm mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <hr className="border-white/20" />
            <div className="flex justify-between font-bold text-lg text-amber-400">
              <span>Total</span>
              <span>₹{(total + gst).toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;