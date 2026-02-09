import { CheckCircle, BookOpen, Home } from "lucide-react";
import { useLocation, useNavigate , NavLink } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const productType = state?.productType;
  const cart = state?.cart || [];

  // 🔴 SAVE EBOOKS AFTER SUCCESS
  useEffect(() => {
    if (productType === "ebook" && cart.length > 0) {
      // existing data
      const existingPurchases =
        JSON.parse(localStorage.getItem("bookPurchases")) || [];
      const existingIds =
        JSON.parse(localStorage.getItem("purchasedBookIds")) || [];

      const newPurchases = [...existingPurchases];
      const newIds = [...existingIds];

      cart.forEach((book) => {
        if (!newIds.includes(book.id)) {
          newIds.push(book.id);

          newPurchases.push({
            bookId: book.id,
            bookTitle: book.title,
            author: book.author,
            price: book.price,
            purchaseDate: new Date().toISOString(),
            paymentMethod: "upi", // or selected method
            customerEmail:
              localStorage.getItem("currentUserEmail") || "guest",
          });
        }
      });

      localStorage.setItem(
        "bookPurchases",
        JSON.stringify(newPurchases)
      );
      localStorage.setItem(
        "purchasedBookIds",
        JSON.stringify(newIds)
      );
    }
  }, [productType, cart]);

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
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 max-w-md w-full text-center text-white shadow-2xl">

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
          {productType === "ebook"
            ? "Redirecting to your dashboard 📘"
            : "Redirecting to book store 📦"}
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
