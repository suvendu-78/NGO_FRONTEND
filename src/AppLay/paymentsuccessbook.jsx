import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccessbook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const productType = state?.productType;
  const cart = state?.cart || [];

  useEffect(() => {
    if (productType === "ebook" && cart.length > 0) {
      // 🔹 Load existing library
      const existingLibrary =
        JSON.parse(localStorage.getItem("myEbooks")) || [];

      // 🔹 Load existing ebook orders
      const existingOrders =
        JSON.parse(localStorage.getItem("ebookOrders")) || [];

      const updatedLibrary = [...existingLibrary];
      const updatedOrders = [...existingOrders];

      cart.forEach((book) => {
        // ✅ Add to Library (avoid duplicate)
        if (!updatedLibrary.find((b) => b._id === book._id)) {
          updatedLibrary.push(book);
        }

        // ✅ Add to Purchase History
        updatedOrders.push({
          orderId: "ORD-" + Date.now() + "-" + book._id,
          title: book.title,
          author: book.author,
          price: book.price,
          orderDate: new Date().toISOString(),
          paymentMethod: "upi", // you can make dynamic later
        });
      });

      localStorage.setItem("myEbooks", JSON.stringify(updatedLibrary));

      localStorage.setItem("ebookOrders", JSON.stringify(updatedOrders));
    }
  }, [productType, cart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/books");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-900 text-white">
      <div className="text-center">
        <CheckCircle size={60} className="mx-auto text-green-400 mb-4" />
        <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
        <p>Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default PaymentSuccessbook;