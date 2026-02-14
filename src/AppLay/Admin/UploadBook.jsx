import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminBooks = () => {
  // ======================
  // STATES
  // ======================
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imei, setImei] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

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

    if (!title || !author || !imei || !description || !price || !pdfFile) {
      setIsError(true);

      setMessage("All fields including Author & IMEI are required");

      return;
    }

    try {
      setLoading(true);

      // ✅ GET TOKEN FROM LOCALSTORAGE
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        setIsError(true);

        setMessage("Admin not logged in. Please login first ❌");

        navigate("/adminlogin");

        return;
      }

      // ======================
      // FORM DATA
      // ======================
      const formData = new FormData();

      formData.append("title", title);
      formData.append("author", author);
      formData.append("imei", imei);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("pdf", pdfFile);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      // ======================
      // API CALL WITH TOKEN
      // ======================
      const res = await fetch(
        "http://localhost:8000/api/v1/user/admin/upload-book",

        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`, // ✅ TOKEN ADDED
          },

          body: formData,
        },
      );

      const data = await res.json();

      console.log("Response:", data);

      if (!res.ok) throw new Error(data.message);

      // ======================
      // SUCCESS
      // ======================
      setIsError(false);

      setMessage("Book uploaded successfully ✅");

      // reset form
      setTitle("");
      setAuthor("");
      setImei("");
      setDescription("");
      setPrice("");
      setPdfFile(null);
      setImageFile(null);
    } catch (err) {
      console.error(err);

      setIsError(true);

      setMessage(err.message || "Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // ======================
  // UI
  // ======================
  return (
    <div className="min-h-screen bg-[#f4efe9] flex items-center justify-center px-4">
      <form
        onSubmit={Handller}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-[#6b2c1a] mb-8">
          Add New Book
        </h2>

        {/* TITLE */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          className="w-full mb-3 px-4 py-3 border rounded-lg"
        />

        {/* AUTHOR */}
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
          className="w-full mb-3 px-4 py-3 border rounded-lg"
        />

        {/* IMEI */}
        <input
          value={imei}
          onChange={(e) => setImei(e.target.value)}
          placeholder="IMEI Number"
          className="w-full mb-3 px-4 py-3 border rounded-lg"
        />

        {/* DESCRIPTION */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Book Description"
          className="w-full mb-3 px-4 py-3 border rounded-lg"
        />

        {/* PRICE */}
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full mb-4 px-4 py-3 border rounded-lg"
        />

        {/* PDF Upload */}
        <label className="block mb-4 cursor-pointer">
          <input
            type="file"
            accept="application/pdf"
            hidden
            onChange={handlePdf}
          />

          <div className="border-2 border-dashed border-[#7a2e1f] p-6 text-center rounded-xl">
            Upload PDF {pdfFile && `: ${pdfFile.name}`}
          </div>
        </label>

        {/* IMAGE Upload */}
        <label className="block mb-6 cursor-pointer">
          <input type="file" accept="image/*" hidden onChange={handleImage} />

          <div className="border-2 border-dashed border-gray-400 p-6 text-center rounded-xl">
            Upload Cover Image (optional) {imageFile && `: ${imageFile.name}`}
          </div>
        </label>

        {/* MESSAGE */}
        {message && (
          <div
            className={`mb-4 text-center font-semibold ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7a2e1f] text-white py-3 rounded-full hover:bg-[#5c2115]"
        >
          {loading ? "Uploading..." : "Save Book"}
        </button>

        {/* DASHBOARD LINK */}
        <NavLink to="/adminOrders">
          <p className="text-red-500 text-center mt-4 hover:underline">
            Go to Dashboard
          </p>
        </NavLink>
      </form>
    </div>
  );
};

export default AdminBooks;