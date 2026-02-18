import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const [hover, setHover] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.rating === 0) {
      toast.error("Please select a rating ⭐");
      return;
    }

    // Get existing reviews
    const existingReviews =
      JSON.parse(localStorage.getItem("reviews")) || [];

    // Add new review
    const updatedReviews = [
      ...existingReviews,
      { ...formData, id: Date.now() },
    ];

    // Save to localStorage
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    toast.success("Thank you for your feedback 🙏");

    setFormData({ name: "", email: "", message: "", rating: 0 });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f9f4ef] flex items-center justify-center px-4">
      <ToastContainer />

      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#7b2d1a]">
        <h2 className="text-3xl font-bold text-center text-[#7b2d1a] mb-4">
          Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your feedback..."
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>

          {/* ⭐ Star Rating */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                className={`cursor-pointer ${
                  (hover || formData.rating) >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() =>
                  setFormData({ ...formData, rating: star })
                }
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#7b2d1a] text-white py-2 rounded-lg"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
