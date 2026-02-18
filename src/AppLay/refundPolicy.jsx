import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 text-gray-800 leading-relaxed">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase">
          Refund & Cancellation Policy
        </h1>

        <p className="italic text-gray-500 text-sm mb-6">
          Please read our refund and cancellation policy carefully before making
          any purchase.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. E-Books (Digital Products)
        </h2>
        <p className="mb-4">
          All e-book purchases are final and non-refundable. Once the payment is
          completed and access is granted, cancellation or refund is not
          permitted.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Physical Books – Order Processing & Shipping
        </h2>
        <p className="mb-4">
          Physical books are shipped by the admin through postal service after
          order confirmation. You will receive a confirmation email once your
          order is verified.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Order Cancellation
        </h2>
        <p className="mb-2">
          To cancel an order, you must contact the admin before dispatch. Once
          shipped, cancellation may not be possible.
        </p>

        <p className="mb-4">
          Contact admin at:
          <span className="text-blue-600 font-medium ml-2">
            dr.lishanpt@gmail.com
          </span>
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Returns and Replacement
        </h2>
        <p className="mb-4">
          Returns are accepted only for eligible products such as damaged,
          defective, or incorrect items. You must contact the admin within 3
          days of delivery.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Refund Processing
        </h2>
        <p className="mb-4">
          Approved refunds will be processed within 5–7 business days to the
          original payment method after product verification.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Failed Transactions
        </h2>
        <p className="mb-6">
          If payment is deducted but order is not confirmed, the amount will be
          automatically refunded within 5–7 business days.
        </p>

        {/* Extra Razorpay Compliance Section */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Contact Information
        </h2>
        <p className="mb-2"> Email: dr.lishanpt@gmail.com</p>
        <p className="mb-2"> Organization: Samyogee Sahitya Sansad</p>
        <p className="mb-8"> Location:Ghatagaon, Odisha, India</p>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg
            bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;