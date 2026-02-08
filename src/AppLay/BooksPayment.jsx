// import { useLocation, useNavigate } from "react-router-dom";
// import { CreditCard, Wallet, Landmark, ShieldCheck, User } from "lucide-react";
// import { useState } from "react";

// const BooksPayment = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const cart = state?.cart || [];
//   const [method, setMethod] = useState("upi");

//   // 🔴 ORDERER DETAILS
//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const total = cart.reduce(
//     (sum, b) => sum + parseInt(b.price.replace("₹", "")),
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white">
//         No items selected
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#7a2e1f] to-black p-6 text-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         {/* LEFT SECTION */}
//         <div className="md:col-span-2 space-y-6">

//           {/* 🔴 ORDERER DETAILS */}
//           <div className="bg-white/10 p-6 rounded-xl">
//             <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//               <User /> Orderer Details
//             </h2>

//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 className="p-3 rounded bg-white/10 outline-none"
//                 placeholder="Full Name"
//                 value={details.name}
//                 onChange={(e) =>
//                   setDetails({ ...details, name: e.target.value })
//                 }
//               />
//               <input
//                 className="p-3 rounded bg-white/10 outline-none"
//                 placeholder="Email Address"
//                 value={details.email}
//                 onChange={(e) =>
//                   setDetails({ ...details, email: e.target.value })
//                 }
//               />
//               <input
//                 className="p-3 rounded bg-white/10 outline-none"
//                 placeholder="Phone Number"
//                 value={details.phone}
//                 onChange={(e) =>
//                   setDetails({ ...details, phone: e.target.value })
//                 }
//               />
//               <input
//                 className="p-3 rounded bg-white/10 outline-none md:col-span-2"
//                 placeholder="Delivery Address"
//                 value={details.address}
//                 onChange={(e) =>
//                   setDetails({ ...details, address: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           {/* 🔴 PAYMENT METHODS */}
//           <div className="bg-white/10 p-6 rounded-xl">
//             <h2 className="text-2xl font-bold mb-6">Choose Payment Method</h2>

//             <div className="grid grid-cols-3 gap-4 mb-6">
//               <Tab
//                 icon={<Wallet />}
//                 label="UPI"
//                 active={method === "upi"}
//                 onClick={() => setMethod("upi")}
//               />
//               <Tab
//                 icon={<CreditCard />}
//                 label="Card"
//                 active={method === "card"}
//                 onClick={() => setMethod("card")}
//               />
//               <Tab
//                 icon={<Landmark />}
//                 label="NetBanking"
//                 active={method === "net"}
//                 onClick={() => setMethod("net")}
//               />
//             </div>

//             {/* 🔴 UPI */}
//             {method === "upi" && (
//               <div className="space-y-4">
//                 <div className="flex gap-4">
//                   <img src="https://img.icons8.com/color/48/google-pay.png" />
//                   <img src="https://img.icons8.com/color/48/phone-pe.png" />
//                   <img src="https://img.icons8.com/color/48/paytm.png" />
//                   <img src="https://img.icons8.com/color/48/bhim.png" />
//                 </div>
//                 <input
//                   className="w-full p-3 rounded bg-white/10 outline-none"
//                   placeholder="example@upi"
//                 />
//               </div>
//             )}

//             {/* 🔴 CARD */}
//             {method === "card" && (
//               <div className="space-y-3">
//                 <input
//                   className="w-full p-3 rounded bg-white/10 outline-none"
//                   placeholder="Card Number"
//                 />
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     className="p-3 rounded bg-white/10 outline-none"
//                     placeholder="MM / YY"
//                   />
//                   <input
//                     className="p-3 rounded bg-white/10 outline-none"
//                     placeholder="CVV"
//                   />
//                 </div>
//                 <input
//                   className="w-full p-3 rounded bg-white/10 outline-none"
//                   placeholder="Card Holder Name"
//                 />
//               </div>
//             )}

//             {/* 🔴 NET BANKING */}
//             {method === "net" && (
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {[
//                   "sbi",
//                   "hdfc",
//                   "icici",
//                   "axis",
//                   "kotak",
//                   "pnb",
//                   "bank-of-baroda",
//                 ].map((bank) => (
//                   <div
//                     key={bank}
//                     className="bg-white/10 rounded-lg p-4 flex flex-col items-center hover:bg-white/20 cursor-pointer transition"
//                   >
//                     <img
//                       src={`https://img.icons8.com/color/96/${bank}.png`}
//                       className="h-10"
//                     />
//                     <p className="text-sm mt-2 uppercase">
//                       {bank.replace("-", " ")}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* 🔴 ORDER SUMMARY */}
//         <div className="bg-white/10 p-6 rounded-xl h-fit">
//           <h3 className="text-xl font-bold mb-4">Order Summary</h3>

//           {cart.map((b) => (
//             <div key={b.title} className="flex gap-3 mb-3">
//               <img src={b.img} className="w-12 h-16 object-cover rounded" />
//               <div>
//                 <p className="font-medium">{b.title}</p>
//                 <p className="text-sm opacity-80">{b.price}</p>
//               </div>
//             </div>
//           ))}

//           <hr className="my-3 opacity-30" />

//           <div className="flex justify-between font-bold text-lg">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>

//           <button
//             onClick={() => navigate("/success")}
//             className="mt-6 w-full bg-[#7a2e1f] py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition"
//           >
//             <ShieldCheck /> Pay Securely
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Tab = ({ icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`p-3 rounded-lg flex flex-col items-center border transition ${
//       active
//         ? "bg-white/20 border-white"
//         : "border-white/20 hover:bg-white/10"
//     }`}
//   >
//     {icon}
//     <span className="text-sm mt-1">{label}</span>
//   </button>
// );

// export default BooksPayment;


import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Landmark, Wallet, ShieldCheck, User } from "lucide-react";
import { useState } from "react";

const BooksPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔴 ACCEPT CART
  const cart = location.state?.cart || [];

  // 🔴 ACCEPT PRODUCT TYPE (book / ebook)
  const productType = location.state?.productType || "book";

  const [method, setMethod] = useState("upi");

  // 🔴 ORDERER DETAILS (ADDED)
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // 🔴 CART VALIDATION
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No items selected ❌
      </div>
    );
  }

  // 🔴 TOTAL & GST (UNCHANGED)
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price?.toString().replace("₹", "")),
    0
  );
  const gst = total * 0.05;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* 🔴 ORDERER DETAILS (NEW SECTION) */}
         <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-white shadow-xl">
  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
    <User className="text-amber-400" />
    Delivery / Orderer Details
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    {/* Full Name */}
    <div>
      <label className="text-sm text-gray-300 mb-1 block">Full Name</label>
      <input
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-amber-500 outline-none transition"
        placeholder="Enter full name"
        value={details.name}
        onChange={(e) =>
          setDetails({ ...details, name: e.target.value })
        }
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-sm text-gray-300 mb-1 block">Email Address</label>
      <input
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-amber-500 outline-none transition"
        placeholder="example@email.com"
        value={details.email}
        onChange={(e) =>
          setDetails({ ...details, email: e.target.value })
        }
      />
    </div>

    {/* Phone */}
    <div>
      <label className="text-sm text-gray-300 mb-1 block">Phone Number</label>
      <input
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-amber-500 outline-none transition"
        placeholder="10-digit mobile number"
        value={details.phone}
        onChange={(e) =>
          setDetails({ ...details, phone: e.target.value })
        }
      />
    </div>

    {/* Pincode */}
    <div>
      <label className="text-sm text-gray-300 mb-1 block">Pincode</label>
      <input
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-amber-500 outline-none transition"
        placeholder="6-digit pincode"
        value={details.pincode || ""}
        onChange={(e) =>
          setDetails({ ...details, pincode: e.target.value })
        }
      />
    </div>

    {/* Address */}
    <div className="md:col-span-2">
      <label className="text-sm text-gray-300 mb-1 block">
        Full Delivery Address
      </label>
      <textarea
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:border-amber-500 outline-none transition resize-none"
        placeholder="House no, street, area, city, state"
        value={details.address}
        onChange={(e) =>
          setDetails({ ...details, address: e.target.value })
        }
      />
    </div>
  </div>
</div>


          {/* 🔴 PAYMENT METHODS (UNCHANGED) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white">
            <h2 className="text-2xl font-bold mb-6">
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
                <input className="input" placeholder="example@upi" />
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
                    <img
                      src={`https://img.icons8.com/color/96/${bank}.png`}
                      className="h-10"
                    />
                    <p className="text-white uppercase text-sm mt-2">
                      {bank}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY (UNCHANGED) */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white h-fit">
          <h3 className="text-xl font-bold mb-4">🧾 Order Summary</h3>

          {cart.map((book) => (
            <div key={book.id} className="flex gap-4 mb-4">
              <img
                src={book.coverImage}
                className="w-20 h-28 rounded-lg object-cover"
              />
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
            onClick={() =>
              navigate("/success", {
                state: { productType },
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


