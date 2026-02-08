import { CheckCircle, BookOpen, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // 🔴 GET PRODUCT TYPE (STATE OR STORAGE)
  const productType =
    state?.productType || sessionStorage.getItem("productType");

  // 🔴 SAVE FOR REFRESH SAFETY
  useEffect(() => {
    if (state?.productType) {
      sessionStorage.setItem("productType", state.productType);
    }
  }, [state]);

  // 🔴 AUTO REDIRECT
  useEffect(() => {
    const timer = setTimeout(() => {
      if (productType === "ebook") {
        navigate("/user-dashboard");
      } else if (productType === "book") {
        navigate("/books");
      } else {
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, productType]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-800 to-black px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-md w-full text-center text-white shadow-2xl animate-fadeIn">

        <div className="relative w-28 h-28 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
          <div className="relative w-28 h-28 bg-green-600 rounded-full flex items-center justify-center">
            <CheckCircle size={56} />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-200 mb-6 text-sm">
          {productType === "ebook" && "Redirecting to your dashboard 📘"}
          {productType === "book" && "Redirecting to book store 📦"}
        </p>

        <button
          onClick={() =>
            productType === "ebook"
              ? navigate("/user-dashboard")
              : navigate("/books")
          }
          className="w-full bg-green-600 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
        >
          {productType === "ebook" ? (
            <>
              <BookOpen /> Read Now
            </>
          ) : (
            <>
              <Home /> Continue Shopping
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
