import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Eye,
  User,
  Calendar,
  DollarSign,
  LogOut,
  Search,
  RefreshCw,
} from "lucide-react";

const API_URL = "https://backend-ngo-green.vercel.app/api/v1/user";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [activeTab, setActiveTab] = useState("library");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [readingBookId, setReadingBookId] = useState(null);

  // ============================================
  // FETCH PURCHASED EBOOKS FROM MONGODB
  // ============================================
  const fetchEbooks = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/my-ebooks`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch purchased ebooks");
      }

      const ebooks = Array.isArray(data.ebooks) ? data.ebooks : [];

      const formattedBooks = ebooks.map((purchase) => {
        const book =
          purchase.bookId && typeof purchase.bookId === "object"
            ? purchase.bookId
            : {};

        const bookId = book._id || purchase.bookId || purchase._id;

        return {
          _id: String(bookId),
          title: book.title || purchase.title || "E-Book",
          price: Number(purchase.price ?? book.price ?? 0),

          coverImage:
            book.image ||
            book.coverImage ||
            book.img ||
            purchase.coverImage ||
            "",

          // Support common PDF field names
          pdfUrl:
            book.pdfUrl ||
            book.pdfURL ||
            book.pdf ||
            book.fileUrl ||
            book.fileURL ||
            book.file ||
            purchase.pdfUrl ||
            "",

          orderDate: purchase.createdAt || null,
          purchaseId: purchase._id,
        };
      });

      // Remove duplicate books from Library
      const uniqueBooks = Array.from(
        new Map(formattedBooks.map((book) => [book._id, book])).values(),
      );

      setPurchasedBooks(uniqueBooks);

      // Purchase history from MongoDB
      setPurchases(
        ebooks.map((purchase) => {
          const book =
            purchase.bookId && typeof purchase.bookId === "object"
              ? purchase.bookId
              : {};

          return {
            id: purchase._id,
            title: book.title || purchase.title || "E-Book",
            price: Number(purchase.price ?? book.price ?? 0),
            orderDate: purchase.createdAt || null,
          };
        }),
      );
    } catch (err) {
      console.error("Ebook fetch error:", err);
      setError(err.message || "Failed to load ebooks");
      setPurchasedBooks([]);
      setPurchases([]);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("currentUserEmail");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    setUserEmail(storedEmail || "");
    fetchEbooks();
  }, [navigate, fetchEbooks]);

  // ============================================
  // LOGOUT
  // ============================================
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("registered");

    setPurchasedBooks([]);
    setPurchases([]);
    setUserEmail("");

    navigate("/login", { replace: true });
  };

  // ============================================
  // OPEN PURCHASED EBOOK
  // ============================================
  const handleRead = async (book) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      setReadingBookId(book._id);

      let completeBook = book;
      let pdfUrl =
        book.pdfUrl ||
        book.pdfURL ||
        book.pdf ||
        book.fileUrl ||
        book.fileURL ||
        book.file ||
        "";

      // Fetch full ebook details if PDF URL is missing
      if (!pdfUrl) {
        const response = await fetch(`${API_URL}/ebook/${book._id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok || !data.book) {
          throw new Error(data.message || "Unable to fetch ebook details");
        }

        completeBook = {
          ...book,
          ...data.book,
        };

        pdfUrl =
          completeBook.pdfUrl ||
          completeBook.pdfURL ||
          completeBook.pdf ||
          completeBook.fileUrl ||
          completeBook.fileURL ||
          completeBook.file ||
          "";
      }

      if (!pdfUrl) {
        console.error(
          "PDF URL missing. Book returned by backend:",
          completeBook,
        );

        alert(
          "PDF URL is missing in the Book data. Check the actual PDF field name in Book.model.js and ensure bookcontroller.js saves the uploaded PDF URL.",
        );

        return;
      }

      navigate("/book-reader", {
        state: {
          book: {
            ...completeBook,
            pdfUrl,
          },
        },
      });
    } catch (err) {
      console.error("Read ebook error:", err);
      alert(err.message || "Unable to open ebook");
    } finally {
      setReadingBookId(null);
    }
  };

  // ============================================
  // STATISTICS
  // ============================================
  const totalBooks = purchasedBooks.length;

  const totalSpent = purchases.reduce(
    (sum, purchase) => sum + Number(purchase.price || 0),
    0,
  );

  // ============================================
  // SEARCH
  // ============================================
  const filteredBooks = purchasedBooks.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase()),
  );

  // ============================================
  // UI
  // ============================================
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-600 to-indigo-600 text-white p-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>

          <p className="flex items-center gap-2 mt-2 break-all">
            <User size={18} />
            Welcome {userEmail}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-200">
          <BookOpen size={30} className="text-blue-600" />
          <p className="mt-2 text-gray-600">Total E-Books</p>
          <h2 className="text-2xl font-bold mt-1">{totalBooks}</h2>
        </div>

        <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-200">
          <DollarSign size={30} className="text-green-600" />
          <p className="mt-2 text-gray-600">Total Spent</p>
          <h2 className="text-2xl font-bold mt-1">₹{totalSpent.toFixed(2)}</h2>
        </div>

        <div className="bg-white p-6 shadow-sm rounded-xl border border-gray-200">
          <Calendar size={30} className="text-purple-600" />
          <p className="mt-2 text-gray-600">Access</p>
          <h2 className="text-2xl font-bold mt-1">Lifetime</h2>
        </div>
      </div>

      {/* TABS */}
      <div className="px-6 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTab("library")}
          className={`px-5 py-3 rounded-lg font-medium transition ${
            activeTab === "library"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-900 hover:bg-gray-400"
          }`}
        >
          Library
        </button>

        <button
          onClick={() => setActiveTab("history")}
          className={`px-5 py-3 rounded-lg font-medium transition ${
            activeTab === "history"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-900 hover:bg-gray-400"
          }`}
        >
          Purchase History
        </button>

        <button
          onClick={fetchEbooks}
          disabled={loading}
          className="px-4 py-3 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="p-8 text-center text-gray-600">
          Loading your purchased ebooks...
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>

          <button
            onClick={fetchEbooks}
            className="mt-3 text-red-700 font-semibold underline"
          >
            Try Again
          </button>
        </div>
      )}

      {/* LIBRARY */}
      {!loading && !error && activeTab === "library" && (
        <div className="p-6">
          <div className="relative mb-6">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search your purchased ebooks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {filteredBooks.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <BookOpen size={44} className="mx-auto text-gray-400 mb-3" />

              <h3 className="font-semibold text-lg">
                {purchasedBooks.length === 0
                  ? "No ebooks purchased yet"
                  : "No matching ebooks found"}
              </h3>

              <p className="text-gray-500 mt-2">
                {purchasedBooks.length === 0
                  ? "Your purchased ebooks will appear here."
                  : "Try searching with a different title."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book._id}
                  className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  {book.coverImage ? (
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="h-52 w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="h-52 bg-gray-200 flex items-center justify-center">
                      <BookOpen size={54} className="text-gray-500" />
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="font-bold text-lg line-clamp-2">
                      {book.title}
                    </h3>

                    <p className="text-green-700 font-semibold mt-2">
                      Purchased · ₹{book.price.toFixed(2)}
                    </p>

                    <button
                      onClick={() => handleRead(book)}
                      disabled={readingBookId === book._id}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 mt-4 rounded-lg flex items-center justify-center gap-2 w-full transition"
                    >
                      {readingBookId === book._id ? (
                        <>
                          <RefreshCw size={17} className="animate-spin" />
                          Loading PDF...
                        </>
                      ) : (
                        <>
                          <Eye size={17} />
                          Read E-Book
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PURCHASE HISTORY */}
      {!loading && !error && activeTab === "history" && (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">E-Book Purchase History</h2>

          {purchases.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              No ebook purchases found.
            </div>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase, index) => (
                <div
                  key={purchase.id || index}
                  className="bg-white p-5 shadow-sm border border-gray-200 rounded-xl flex flex-col sm:flex-row sm:justify-between gap-3"
                >
                  <div>
                    <h3 className="font-bold text-lg">{purchase.title}</h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Purchase date:{" "}
                      {purchase.orderDate
                        ? new Date(purchase.orderDate).toLocaleDateString(
                            "en-IN",
                          )
                        : "Not available"}
                    </p>
                  </div>

                  <div className="font-bold text-green-700">
                    ₹{purchase.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
