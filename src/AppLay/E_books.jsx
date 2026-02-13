import { useState, useEffect } from "react";
import { ShoppingCart, BookOpen, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const E_Book = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showReadMsg, setShowReadMsg] = useState(false);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [purchasedBooks, setPurchasedBooks] = useState([]);

  /* ======================
     FETCH BOOKS
  ====================== */
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  /* ======================
     LOAD PURCHASED BOOKS
  ====================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myEbooks")) || [];
    setPurchasedBooks(saved);
  }, []);

  /* ======================
     SEARCH FILTER
  ====================== */
  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ======================
     CART LOGIC
  ====================== */
  const addToCart = (book) => {
    setCart((prev) =>
      prev.find((b) => b._id === book._id) ? prev : [...prev, book]
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((b) => b._id !== id));
  };

  /* ======================
     READ LOGIC
  ====================== */
  const handleReadOnline = (book) => {
    const isOwned = purchasedBooks.find((b) => b._id === book._id);

    if (isOwned) {
      window.open(book.pdfUrl, "_blank");
    } else {
      setShowReadMsg(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf6ef]">

      {/* HEADER */}
      <div className="bg-amber-900 text-white py-8 text-center">
        <div className="flex justify-center items-center gap-3">
          <BookOpen size={40} />
          <h1 className="text-2xl font-bold">
            SAMYOGEE SAHITYA SANSAD DIGITAL LIBRARY
          </h1>
        </div>
      </div>

      {/* CART BUTTON */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed top-24 right-6 z-40 bg-amber-700 text-white p-4 rounded-full shadow-xl"
      >
        <ShoppingCart size={22} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" />
          <input
            className="w-full pl-12 pr-4 py-3 rounded-lg border"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* BOOK GRID */}
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {loading && <p>Loading books...</p>}

        {!loading &&
          filteredBooks.map((book) => {
            const isOwned = purchasedBooks.find(
              (b) => b._id === book._id
            );

            return (
              <div
                key={book._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={
                      book.coverImage ||
                      "https://via.placeholder.com/300x400?text=E-Book"
                    }
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />

                  {isOwned && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      ✓ Owned
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-md font-bold line-clamp-1">
                    {book.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-1">
                    by {book.author || "Unknown"}
                  </p>

                  <p className="text-amber-700 font-semibold mb-3">
                    ₹ {book.price}
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-auto flex gap-2">
                    {isOwned ? (
                      <button
                        onClick={() => handleReadOnline(book)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm"
                      >
                        Read Now
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleReadOnline(book)}
                          className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-2 rounded-lg text-sm"
                        >
                          Read
                        </button>

                        <button
                          onClick={() => addToCart(book)}
                          className="flex-1 border border-amber-700 text-amber-700 hover:bg-amber-50 py-2 rounded-lg text-sm"
                        >
                          Add
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* CART DRAWER */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-white p-6 max-h-[80vh] overflow-y-auto rounded-l-2xl shadow-xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>

            {cart.length === 0 && (
              <p className="text-gray-500 text-center">Cart is empty</p>
            )}

            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border rounded-lg p-3 mb-3"
              >
                <p className="font-semibold">{item.title}</p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}

            {cart.length > 0 && (
              <button
                onClick={() =>
                  navigate("/payment", {
                    state: { cart, productType: "ebook" },
                  })
                }
                className="w-full bg-amber-700 text-white py-3 rounded-lg mt-4"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      )}

      {/* PURCHASE MODAL */}
      {showReadMsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-6 text-center max-w-md w-full">
            <BookOpen size={48} className="mx-auto text-amber-700 mb-4" />
            <h2 className="text-xl font-bold mb-2">Purchase Required</h2>
            <p>Please purchase the book to read it 😊</p>
            <button
              onClick={() => setShowReadMsg(false)}
              className="bg-amber-700 text-white px-6 py-2 rounded-lg mt-4"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default E_Book;
