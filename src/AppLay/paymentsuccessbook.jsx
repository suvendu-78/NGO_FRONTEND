// import { CheckCircle } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const PaymentSuccessbook = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   const productType = state?.productType;
//   const cart = state?.cart || [];

//   useEffect(() => {
//     if (productType === "ebook" && cart.length > 0) {
//       // 🔹 Load existing library
//       const existingLibrary =
//         JSON.parse(localStorage.getItem("myEbooks")) || [];

//       // 🔹 Load existing ebook orders
//       const existingOrders =
//         JSON.parse(localStorage.getItem("ebookOrders")) || [];

//       const updatedLibrary = [...existingLibrary];
//       const updatedOrders = [...existingOrders];

//       cart.forEach((book) => {
//         // ✅ Add to Library (avoid duplicate)
//         if (!updatedLibrary.find((b) => b._id === book._id)) {
//           updatedLibrary.push(book);
//         }

//         // ✅ Add to Purchase History
//         updatedOrders.push({
//           orderId: "ORD-" + Date.now() + "-" + book._id,
//           title: book.title,
//           author: book.author,
//           price: book.price,
//           orderDate: new Date().toISOString(),
//           paymentMethod: "upi", // you can make dynamic later
//         });
//       });

//       localStorage.setItem("myEbooks", JSON.stringify(updatedLibrary));

//       localStorage.setItem("ebookOrders", JSON.stringify(updatedOrders));
//     }
//   }, [productType, cart]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/books");
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-900 text-white">
//       <div className="text-center">
//         <CheckCircle size={60} className="mx-auto text-green-400 mb-4" />
//         <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
//         <p>Redirecting to dashboard...</p>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccessbook;

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreditCard, CheckCircle } from "lucide-react";

const API_URL = "https://backend-ngo-green.vercel.app/api/v1/user";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Cart received from E_Book page
  const cart = location.state?.cart || [];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Calculate total amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0,
  );

  // Save ebooks through backend
  const handlePaymentSuccess = async (paymentResponse) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      // Save each ebook using the current backend controller
      for (const item of cart) {
        const bookId = item.bookId || item._id || item.id;

        if (!bookId) {
          throw new Error(
            `Book ID missing for ${item.title || item.name || "ebook"}`,
          );
        }

        const response = await fetch(`${API_URL}/ebook/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            bookId,
            title: item.title || item.name,
            price: Number(item.price || 0),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              `Failed to save ${item.title || item.name || "ebook"}`,
          );
        }
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/user-dashboard", { replace: true });
      }, 1500);
    } catch (error) {
      console.error("Ebook purchase error:", error);
      alert(error.message || "Unable to save ebook purchase");
    } finally {
      setLoading(false);
    }
  };

  // Create Razorpay order
  const handlePayment = async () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    // Validate book IDs before starting payment
    const invalidBook = cart.find(
      (item) => !(item.bookId || item._id || item.id),
    );

    if (invalidBook) {
      console.error("Invalid cart item:", invalidBook);
      alert("Book ID is missing. Please refresh the ebook list and try again.");
      return;
    }

    try {
      setLoading(true);

      // 1. Create Razorpay order on backend
      const response = await fetch(`${API_URL}/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: totalAmount,
        }),
      });

      const order = await response.json();

      if (!response.ok) {
        throw new Error(order.message || "Failed to create payment order");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK is not loaded");
      }

      // 2. Configure Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Samyogee Sahitya Samsad Book Store",
        description: "E-Book Purchase",
        order_id: order.id,

        handler: async (paymentResponse) => {
          await handlePaymentSuccess(paymentResponse);
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        prefill: {
          email: localStorage.getItem("currentUserEmail") || "",
        },

        theme: {
          color: "#16a34a",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", (failureResponse) => {
        setLoading(false);

        alert(
          failureResponse.error?.description ||
            "Payment failed. Please try again.",
        );
      });

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
      alert(error.message || "Payment failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        {success ? (
          <div className="text-center">
            <CheckCircle size={60} className="text-green-600 mx-auto mb-4" />

            <h2 className="text-2xl font-bold text-green-600">
              Payment Successful
            </h2>

            <p className="mt-2 text-gray-600">
              Your ebooks have been saved. Redirecting to Dashboard...
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CreditCard />
              E-Book Payment
            </h2>

            {/* Cart items */}
            <div className="mb-4 max-h-60 overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={item.bookId || item._id || item.id || index}
                  className="flex justify-between gap-3 border-b py-3"
                >
                  <span className="text-gray-700">
                    {item.title || item.name || "E-Book"}
                    {Number(item.quantity || 1) > 1 && ` × ${item.quantity}`}
                  </span>

                  <span className="font-medium whitespace-nowrap">
                    ₹
                    {(
                      Number(item.price || 0) * Number(item.quantity || 1)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            {/* Pay button */}
            <button
              onClick={handlePayment}
              disabled={loading || cart.length === 0}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg transition"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

            {/* Cancel button */}
            <button
              onClick={() => navigate(-1)}
              disabled={loading}
              className="w-full mt-3 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
