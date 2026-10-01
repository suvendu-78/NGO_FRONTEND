import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Eye,
  User,
  Calendar,
  DollarSign,
  LogOut,
} from "lucide-react";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [activeTab, setActiveTab] = useState("library");
  const [search, setSearch] = useState("");

  // ============================================
  // LOAD USER DATA (LOCAL + BACKEND)
  // ============================================
  useEffect(() => {
    const storedEmail = localStorage.getItem("currentUserEmail");
    const token = localStorage.getItem("token");

    if (!storedEmail || !token) {
      navigate("/login");
      return;
    }

    setUserEmail(storedEmail);

    // ================= LOCAL STORAGE =================
    const localBooks =
      JSON.parse(localStorage.getItem(`myEbooks_${storedEmail}`)) || [];

    const localOrders =
      JSON.parse(localStorage.getItem(`ebookOrders_${storedEmail}`)) || [];

    setPurchasedBooks(localBooks);
    setPurchases(localOrders);

    // ================= BACKEND FETCH =================
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          "https://backend-ngo-green.vercel.app/api/v1/user/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        // ===== Convert backend books =====
        const backendBooks = data.orders.flatMap((order) =>
          order.books.map((b) => ({
            _id: b.book,
            title: b.name,
            price: b.price,
            coverImage: b.image,
            pdfUrl: b.pdfUrl,
          }))
        );

        // ===== Merge (avoid duplicates) =====
        setPurchasedBooks((prev) => {
          const all = [...prev, ...backendBooks];
          const unique = Array.from(
            new Map(all.map((item) => [item._id, item])).values()
          );
          return unique;
        });

        // ===== Convert backend orders =====
        const backendOrders = data.orders.flatMap((order) =>
          order.books.map((b) => ({
            title: b.name,
            price: b.price,
            orderDate: order.createdAt,
          }))
        );

        setPurchases((prev) => [...prev, ...backendOrders]);

      } catch (err) {
        console.log("Backend fetch error:", err.message);
      }
    };

    fetchOrders();
  }, [navigate]);

  // ============================================
  // LOGOUT FUNCTION
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
  // OPEN BOOK READER
  // ============================================
  const handleRead = (book) => {
    navigate("/book-reader", {
      state: { book },
    });
  };

  // ============================================
  // STATS CALCULATION
  // ============================================
  const totalBooks = purchasedBooks.length;

  const totalSpent = purchases.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  // ============================================
  // SEARCH FILTER
  // ============================================
  const filteredBooks = purchasedBooks.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase())
  );

  // ============================================
  // UI
  // ============================================
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-600 to-indigo-600 text-white p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>

          <p className="flex items-center gap-2">
            <User size={18} />
            Welcome {userEmail}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 shadow rounded">
          <BookOpen size={30} />
          <p>Total Books</p>
          <h2 className="text-2xl font-bold">{totalBooks}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <DollarSign size={30} />
          <p>Total Spent</p>
          <h2 className="text-2xl font-bold">₹{totalSpent}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <Calendar size={30} />
          <p>Access</p>
          <h2 className="text-2xl font-bold">Lifetime</h2>
        </div>
      </div>

      {/* TABS */}
      <div className="p-6 flex gap-6">
        <button
          onClick={() => setActiveTab("library")}
          className={`px-4 py-2 rounded ${
            activeTab === "library"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Library
        </button>

        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 rounded ${
            activeTab === "history"
              ? "bg-blue-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Purchase History
        </button>
      </div>

      {/* LIBRARY TAB */}
      {activeTab === "library" && (
        <div className="p-6">
          <input
            placeholder="Search book"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 mb-6 w-full"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {filteredBooks.length === 0 ? (
              <p>No books purchased yet</p>
            ) : (
              filteredBooks.map((book) => (
                <div key={book._id} className="bg-white shadow p-4 rounded">
                  <img
                    src={
                      book.coverImage ||
                      book.image ||
                      book.img ||
                      "/default-book.png"
                    }
                    alt="book"
                    className="h-40 w-full object-cover"
                  />

                  <h3 className="mt-2 font-bold">{book.title}</h3>

                  <button
                    onClick={() => handleRead(book)}
                    className="bg-blue-600 text-white px-4 py-2 mt-2 rounded flex items-center gap-2"
                  >
                    <Eye size={16} />
                    Read
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* PURCHASE HISTORY TAB */}
      {activeTab === "history" && (
        <div className="p-6">
          {purchases.length === 0 ? (
            <p>No purchases yet</p>
          ) : (
            purchases.map((order, index) => (
              <div key={index} className="bg-white p-4 shadow mb-4 rounded">
                <h3 className="font-bold">{order.title}</h3>

                <p>₹{order.price}</p>

                <p>
                  {order.orderDate
                    ? new Date(order.orderDate).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;