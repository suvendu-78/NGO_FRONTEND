import { useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ADMIN_USER_ID = "user_39OGyBvhrLjcSeLbAWOkwcZzJ2C";

const AdminBooks = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  // ======================
  // STATES
  // ======================
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  if (!isLoaded) return null;
  if (!isSignedIn) return <Navigate to="/" replace />;
  if (user.id !== ADMIN_USER_ID) return <Navigate to="/" replace />;

  const handlePdf = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) setPdfFile(file);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) setImageFile(file);
  };

  // ======================
  // SUBMIT
  // ======================
  const Handller = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!title || !description || !price || !pdfFile) {
      setIsError(true);
      setMessage("All fields including PDF are required");
      return;
    }

    try {
      setLoading(true);

      const token = await getToken();

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("pdf", pdfFile); // MUST MATCH ROUTER
      if (imageFile) formData.append("image", imageFile);

      console.log([...formData.entries()]);

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
      console.log("Response:", data);

      if (!res.ok) throw new Error(data.message);

      setIsError(false);
      setMessage("Book uploaded successfully ✅");

      // reset form
      setTitle("");
      setDescription("");
      setPrice("");
      setPdfFile(null);
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setIsError(true);
      setMessage("Upload failed ❌");
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

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7a2e1f] text-white py-3 rounded-full"
        >
          {loading ? "Uploading..." : "Save Book"}
        </button>
      </form>
    </div>
  );
};

export default AdminBooks;