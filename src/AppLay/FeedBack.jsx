import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success(
      <div className="flex flex-col gap-2">
        <span>Thank you for your feedback 🙏</span>
        <button
          onClick={() => navigate("/")}
          className="mt-1 text-sm font-semibold text-[#7b2d1a] underline"
        >
          Go to Home
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
      }
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f9f4ef] flex items-center justify-center px-4">
      
      {/* Toast Container */}
      <ToastContainer />

      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#7b2d1a]">
        <h2 className="text-3xl font-bold text-center text-[#7b2d1a] mb-2">
          Feedback
        </h2>

        <p className="text-center text-gray-600 mb-6">
          We value your thoughts and suggestions
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b2d1a]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b2d1a]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your feedback here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b2d1a]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#7b2d1a] text-white py-2.5 rounded-lg font-semibold hover:bg-[#5e2114] transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
