import { useState, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

// 👑 PUT YOUR REAL ADMIN USER ID HERE
const ADMIN_USER_ID = "user_39OGyBvhrLjcSeLbAWOkwcZzJ2C";

const AdminBooks = () => {
  const { user, isLoaded } = useUser();

  // 🔐 ADMIN PROTECTION
  if (!isLoaded) return null;

  if (!user || user.id !== ADMIN_USER_ID) {
    return <Navigate to="/" />;
  }

  // ================= YOUR ORIGINAL LOGIC =================

  const [preview, setPreview] = useState(null);
  const [book, setBook] = useState([]);
  const BookName = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const Handller = (e) => {
    e.preventDefault();
    setBook([...book, BookName.current.value]);
  };

  return (
    <div className="min-h-screen bg-[#f6e9dc] text-[#3b1f14]">
      <header className="bg-[#7a2e1f] text-white px-8 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Odia Sahitya | Admin</h1>
        <span className="text-sm opacity-90">Admin Panel</span>
      </header>

      <form className="space-y-4" onSubmit={Handller}>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#5a1f14]">
            Books Admin
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ================= TABLE ================= */}
            <div className="bg-[#fffaf5] rounded-2xl shadow-lg p-6">
              <button
                type="button"
                className="mb-6 bg-[#7a2e1f] text-white px-5 py-2 rounded-full hover:bg-[#5a1f14] transition"
              >
                + Add New Book
              </button>

              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-[#7a2e1f]">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Book Name</th>
                    <th className="pb-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {book.map((name, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3">{index + 1}</td>
                      <td className="py-3">{name}</td>
                      <td className="py-3 text-center">
                        <button
                          type="button"
                          className="bg-[#d6a85a] text-[#5a1f14] px-4 py-1 rounded-full hover:opacity-90"
                        >
                          Show Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= FORM ================= */}
            <div className="bg-[#fffaf5] rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-[#5a1f14]">
                Add Book Admin
              </h3>

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Book name"
                  ref={BookName}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#d6a85a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Author</label>
                <input
                  type="text"
                  placeholder="Author name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#d6a85a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#d6a85a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Type of Book
                </label>
                <select className="w-full px-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#d6a85a]">
                  <option value="">Select type</option>
                  <option>Novel</option>
                  <option>Poetry</option>
                  <option>Story</option>
                </select>
              </div>

              <div>
                <input type="file" onChange={handleImage} />
              </div>

              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-44 object-cover rounded-lg border shadow"
                  />
                </div>
              )}

              <button
                type="submit"
                className="mt-6 bg-[#7a2e1f] text-white px-6 py-2 rounded-full hover:bg-[#5a1f14] transition"
              >
                Save Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminBooks;