import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BooksPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];

  // ✅ FORCE RERENDER STATE
  const [formTrigger, setFormTrigger] = useState(false);

  // ✅ LOADER STATES
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // ✅ REFS
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const pincodeRef = useRef();
  const addressRef = useRef();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const gst = total * 0.05;
  const token = localStorage.getItem("token");

  // ✅ PAYMENT PROGRESS EFFECT
  useEffect(() => {
    if (loading) {
      let value = 0;
      const interval = setInterval(() => {
        value += Math.floor(Math.random() * 10) + 5;
        if (value >= 95) {
          value = 95;
          clearInterval(interval);
        }
        setProgress(value);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [loading]);

  // ✅ VALIDATION
  const isFormValid = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const address = addressRef.current?.value;

    if (!name || !email || !phone || !address) return false;
    if (!/^\d{10}$/.test(phone)) return false;

    return true;
  };

  const handlePayNow = async () => {
    if (!isFormValid()) {
      toast.error("Please complete all required fields ❗");
      return;
    }

    const amount = total + gst;

    try {
      const orderRes = await fetch(
        "http://localhost:8000/api/v1/user/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount }),
        }
      );

      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error("Failed to create payment order");

      const options = {
        key: import.meta.env.VITE_Test_API_Key,
        amount: orderData.amount,
        currency: "INR",
        name: "Samyogee Sahitya Samsad Book Store",
        description: "Book Purchase",
        order_id: orderData.id,

        handler: async function (response) {
          // 🔥 SHOW BLUR LOADER INSTANTLY
          setLoading(true);

          try {
            const verifyRes = await fetch(
              "http://localhost:8000/api/v1/user/order/create",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  books: cart.map((item) => ({
                    bookId: item._id,
                    quantity: item.quantity || 1,
                  })),
                  address: {
                    fullName: nameRef.current.value,
                    email: emailRef.current.value,
                    phone: phoneRef.current.value,
                    pincode: pincodeRef.current.value,
                    fullAddress: addressRef.current.value,
                  },
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) throw new Error(verifyData.message);

            toast.success("Payment Successful 🎉");

            // COMPLETE PROGRESS
            setProgress(100);

            setTimeout(() => {
              navigate("/paymentSuccessbook");
            }, 800);

          } catch (error) {
            setLoading(false);
            setProgress(0);
            toast.error(error.message || "Payment verification failed ❌");
          }
        },

        prefill: {
          name: nameRef.current.value,
          email: emailRef.current.value,
          contact: phoneRef.current.value,
        },

        theme: {
          color: "#f59e0b",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error(error.message || "Payment failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* 🔥 BLUR OVERLAY LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-8 rounded-2xl text-center text-white w-80 shadow-2xl">

            <div className="w-14 h-14 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

            <h2 className="text-lg font-semibold mb-2 animate-pulse">
              Secured by Razorpay 🔐
            </h2>

            <p className="text-sm text-gray-300 mb-4">
              Processing your payment...
            </p>

            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-amber-500 h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-amber-400 font-semibold">
              {progress}%
            </p>
          </div>
        </div>
      )}

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="text-amber-400" />
              Delivery Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                ref={nameRef}
                onChange={() => setFormTrigger(!formTrigger)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/40 focus:border-amber-500 outline-none"
                placeholder="Full Name"
              />

              <input
                ref={emailRef}
                onChange={() => setFormTrigger(!formTrigger)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/40 focus:border-amber-500 outline-none"
                placeholder="Email"
              />

              <input
                ref={phoneRef}
                onChange={() => setFormTrigger(!formTrigger)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/40 focus:border-amber-500 outline-none"
                placeholder="Phone"
              />

              <input
                ref={pincodeRef}
                onChange={() => setFormTrigger(!formTrigger)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/40 focus:border-amber-500 outline-none"
                placeholder="Pincode"
              />

              <textarea
                ref={addressRef}
                onChange={() => setFormTrigger(!formTrigger)}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/40 focus:border-amber-500 outline-none md:col-span-2"
                placeholder="Full Address"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white h-fit shadow-xl">
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
                  ? "bg-gradient-to-r from-amber-600 to-amber-800 hover:scale-105 text-white shadow-lg"
                  : "bg-gray-600 cursor-not-allowed text-gray-300"
              }`}
          >
            Pay Now <ShieldCheck size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksPayment;

