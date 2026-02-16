import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FileText, Image } from "lucide-react";

const UploadEbook = () => {
  const navigate = useNavigate();

  // ======================
  // STATES
  // ======================

  const [form, setForm] = useState({
    title: "",
    author: "",
    imei: "",
    description: "",
    price: "",
  });

  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // ======================
  // FILE HANDLERS
  // ======================

  const handlePdf = (e) => {
    const file = e.target.files[0];
    if (file) setPdfFile(file);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  // ======================
  // SUBMIT
  // ======================

  const Handller = async (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !form.title ||
      !form.author ||
      !form.imei ||
      !form.description ||
      !form.price ||
      !pdfFile
    ) {
      setIsError(true);
      setMessage("All fields including PDF are required ❌");

      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setIsError(true);
        setMessage("Admin not logged in ❌");

        navigate("/adminlogin");

        return;
      }

      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("author", form.author);
      formData.append("imei", form.imei);
      formData.append("description", form.description);
      formData.append("price", form.price);

      formData.append("type", "ebook"); // IMPORTANT
      formData.append("pdf", pdfFile);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(
        "http://localhost:8000/api/v1/user/admin/upload-book",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: formData,
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setIsError(false);

      setMessage("EBook Uploaded Successfully ✅");

      setForm({
        title: "",
        author: "",
        imei: "",
        description: "",
        price: "",
      });

      setPdfFile(null);
      setImageFile(null);
    } catch (err) {
      setIsError(true);
      setMessage(err.message || "Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // ======================
  // UI SAME AS PHYSICAL BOOK
  // ======================

  return (
    <div className="min-h-screen bg-[#e9e2db] flex justify-center items-center p-6">
      <form
        onSubmit={Handller}
        className="w-full max-w-2xl bg-[#f3eee9] rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-center text-[#7a2d1b] mb-8">
          Add New EBook
        </h1>

        {/* TITLE */}

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Book Title"
          className="w-full mb-4 p-4 rounded-lg border border-gray-400 bg-transparent outline-none focus:border-[#7a2d1b]"
        />

        {/* AUTHOR */}

        <input
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          placeholder="Author Name"
          className="w-full mb-4 p-4 rounded-lg border border-gray-400 bg-transparent outline-none focus:border-[#7a2d1b]"
        />

        {/* IMEI */}

        <input
          value={form.imei}
          onChange={(e) => setForm({ ...form, imei: e.target.value })}
          placeholder="IMEI Number"
          className="w-full mb-4 p-4 rounded-lg border border-gray-400 bg-transparent outline-none focus:border-[#7a2d1b]"
        />

        {/* DESCRIPTION */}

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Book Description"
          rows="3"
          className="w-full mb-4 p-4 rounded-lg border border-gray-400 bg-transparent outline-none focus:border-[#7a2d1b]"
        />

        {/* PRICE */}

        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price"
          className="w-full mb-4 p-4 rounded-lg border border-gray-400 bg-transparent outline-none focus:border-[#7a2d1b]"
        />

        {/* PDF UPLOAD */}

        <label className="block mb-4 cursor-pointer">
          <div className="border-2 border-dashed border-[#7a2d1b] rounded-xl p-6 text-center hover:bg-[#f8f3ef]">
            <FileText className="mx-auto mb-2 text-[#7a2d1b]" size={28} />

            {pdfFile ? pdfFile.name : "Upload PDF"}
          </div>

          <input
            type="file"
            accept="application/pdf"
            hidden
            onChange={handlePdf}
          />
        </label>

        {/* IMAGE UPLOAD */}

        <label className="block mb-6 cursor-pointer">
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 text-center hover:bg-[#f8f3ef]">
            <Image className="mx-auto mb-2 text-gray-600" size={28} />

            {imageFile ? imageFile.name : "Upload Cover Image"}
          </div>

          <input type="file" accept="image/*" hidden onChange={handleImage} />
        </label>

        {/* MESSAGE */}

        {message && (
          <p
            className={`text-center mb-4 font-semibold ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7a2d1b] hover:bg-[#5e2214] text-white py-4 rounded-full font-semibold text-lg"
        >
          {loading ? "Uploading..." : "Save EBook"}
        </button>

        {/* LINKS */}

        <NavLink to="/adminBooks">
          <p className="text-center text-blue-600 mt-4 hover:underline">
            Upload Physical Book Instead
          </p>
        </NavLink>
      </form>
    </div>
  );
};

export default UploadEbook;