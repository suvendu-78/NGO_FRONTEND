import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreditCard, CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // cart received from E_Book page
  const cart = location.state?.cart || [];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ===============================
  // TOTAL CALCULATION
  // ===============================
  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  // ===============================
  // PAYMENT SUCCESS FUNCTION
  // ===============================
  const handlePaymentSuccess = () => {
    const email = localStorage.getItem("currentUserEmail");

    if (!email) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    // ===============================
    // SAVE PURCHASED BOOKS
    // ===============================
    const existingBooks =
      JSON.parse(localStorage.getItem(`myEbooks_${email}`)) || [];

    const newBooks = cart.map((book) => ({
      ...book,
      purchaseDate: new Date().toISOString(),
    }));

    localStorage.setItem(
      `myEbooks_${email}`,
      JSON.stringify([...existingBooks, ...newBooks]),
    );

    // ===============================
    // SAVE PURCHASE HISTORY
    // ===============================
    const existingOrders =
      JSON.parse(localStorage.getItem(`ebookOrders_${email}`)) || [];

    const newOrders = cart.map((book) => ({
      title: book.title,
      price: book.price,
      orderDate: new Date().toISOString(),
    }));

    localStorage.setItem(
      `ebookOrders_${email}`,
      JSON.stringify([...existingOrders, ...newOrders]),
    );

    // ===============================
    // SHOW SUCCESS
    // ===============================
    setSuccess(true);

    // ===============================
    // REDIRECT TO DASHBOARD
    // ===============================
    setTimeout(() => {
      navigate("/user-dashboard", { replace: true });
    }, 1500);
  };

  // ===============================
  // HANDLE PAYMENT CLICK
  // ===============================
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    // simulate payment delay
    setTimeout(() => {
      setLoading(false);
      handlePaymentSuccess();
    }, 1500);
  };

  // ===============================
  // UI
  // ===============================
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        {/* SUCCESS MESSAGE */}
        {success ? (
          <div className="text-center">
            <CheckCircle size={60} className="text-green-600 mx-auto mb-4" />

            <h2 className="text-2xl font-bold text-green-600">
              Payment Successful
            </h2>

            <p>Redirecting to Dashboard...</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CreditCard />
              Payment
            </h2>

            {/* CART ITEMS */}
            <div className="mb-4 max-h-60 overflow-y-auto">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <span>{item.title}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            {/* PAY BUTTON */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate(-1)}
              className="w-full mt-3 border py-3 rounded-lg"
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