import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Landmark, Wallet, ShieldCheck, User } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BooksPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];
  const productType = location.state?.productType || "book";

  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    address: "",
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  const gst = total * 0.05;

  const isFormValid = () => {
    const { name, email, phone, address } = details;
    if (!name || !email || !phone || !address) return false;
    if (!/^\d{10}$/.test(phone)) return false;
    if (!method) return false;
    if (method === "upi" && !upiId) return false;
    return true;
  };

  const handlePayNow = () => {
    if (!isFormValid()) {
      toast.error("Please complete all required fields ❗");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("bookOrders")) || [];

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    const newOrders = cart.map((book) => ({
      id: Date.now() + Math.random(),
      orderId: "ORD-" + Date.now(),
      bookId: book.id,
      title: book.title,
      author: book.author,
      price: Number(book.price),
      img: book.img || book.coverImage,
      orderDate: new Date().toISOString(),
      estimatedDelivery: deliveryDate.toISOString(),
      status: "Processing",
      customerName: details.name,
      customerEmail: details.email,
      phone: details.phone,
      address: details.address,
      pincode: details.pincode,
      paymentMethod: method,
    }));

    localStorage.setItem(
      "bookOrders",
      JSON.stringify([...existingOrders, ...newOrders]),
    );

    navigate("/success", { state: { productType } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {/* ADDRESS */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <User className="text-amber-400" />
              Delivery Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none"
                placeholder="Full Name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />

              <input
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none"
                placeholder="Email"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />

              <input
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none"
                placeholder="Phone"
                value={details.phone}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "");
                  if (v.length <= 10) setDetails({ ...details, phone: v });
                }}
              />

              <input
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none"
                placeholder="Pincode"
                value={details.pincode}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    pincode: e.target.value.replace(/\D/g, "").slice(0, 6),
                  })
                }
              />

              <textarea
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none md:col-span-2"
                placeholder="Full Address"
                value={details.address}
                onChange={(e) =>
                  setDetails({ ...details, address: e.target.value })
                }
              />
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">
              💳 Choose Payment Method
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Tab
                icon={<Wallet />}
                label="UPI"
                active={method === "upi"}
                onClick={() => setMethod("upi")}
              />
              <Tab
                icon={<CreditCard />}
                label="Card"
                active={method === "card"}
                onClick={() => setMethod("card")}
              />
              <Tab
                icon={<Landmark />}
                label="NetBanking"
                active={method === "netbank"}
                onClick={() => setMethod("netbank")}
              />
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

                <input
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 focus:border-amber-500 outline-none"
                  placeholder="example@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
            )}

            {/* CARD */}
            {method === "card" && (
              <div className="space-y-4">
                {/* CARD LOGOS */}
                <div className="flex gap-4">
                  <img src="https://img.icons8.com/color/48/visa.png" />
                  <img src="https://img.icons8.com/color/48/mastercard.png" />
                  <img src="https://img.icons8.com/color/48/rupay.png" />
                  <img src="https://img.icons8.com/color/48/amex.png" />
                </div>

                {/* CARD NUMBER */}
                <input
                  className="input border border-white/40 focus:border-amber-500"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    value = value.substring(0, 16);
                    value = value.replace(/(.{4})/g, "$1 ").trim();
                    e.target.value = value;
                  }}
                />

                {/* EXPIRY + CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="input border border-white/40 focus:border-amber-500"
                    placeholder="MM/YY"
                    maxLength={5}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length >= 3) {
                        value = value.slice(0, 2) + "/" + value.slice(2, 4);
                      }
                      e.target.value = value;
                    }}
                  />

                  <input
                    className="input border border-white/40 focus:border-amber-500"
                    placeholder="CVV"
                    maxLength={3}
                    onChange={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);
                    }}
                  />
                </div>

                {/* CARD HOLDER NAME */}
                <input
                  className="input border border-white/40 focus:border-amber-500"
                  placeholder="Card Holder Name"
                />
              </div>
            )}

            {/* NET BANKING */}
            {method === "netbank" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["sbi", "hdfc", "icici", "axis", "kotak"].map((bank) => (
                  <div
                    key={bank}
                    className="bg-white/10 border border-white/30 rounded-xl p-4 flex flex-col items-center hover:bg-white/20 cursor-pointer"
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

        {/* SUMMARY */}
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
