import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen, Download, Eye, Trash2, User, Calendar, DollarSign, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.userEmail || localStorage.getItem("currentUserEmail") || "";

  const [purchases, setPurchases] = useState([]);
  const [purchasedBooks, setPurchasedBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("library");
  const [filters, setFilters] = useState({
    searchTerm: "",
    sortBy: "recent"
  });

  // Demo books data
  const allBooks = [
    {
      id: 1,
      title: "Building a Better Tomorrow",
      author: "Sarah Johnson",
      category: "social-change",
      price: 4.99,
      coverImage: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=300&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Educational Empowerment",
      author: "Dr. Michael Chen",
      category: "education",
      price: 3.99,
      coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Health for All: A Noble Mission",
      author: "Dr. Priya Sharma",
      category: "health",
      price: 5.99,
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e9e1?w=300&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Environmental Sustainability",
      author: "Emma Rodriguez",
      category: "environment",
      price: 4.49,
      coverImage: "https://images.unsplash.com/photo-1537266860519-c21bb82b9b00?w=300&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Women Empowerment Stories",
      author: "Amira Patel",
      category: "social-change",
      price: 3.99,
      coverImage: "https://images.unsplash.com/photo-1497206365907-3d71b0006d78?w=300&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Youth Leadership Development",
      author: "James Mitchell",
      category: "education",
      price: 4.99,
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    // Load purchases from localStorage
    const bookPurchases = JSON.parse(localStorage.getItem("bookPurchases") || "[]");
    setPurchases(bookPurchases);

    // Load purchased book IDs
    const purchasedIds = JSON.parse(localStorage.getItem("purchasedBookIds") || "[]");
    const purchased = allBooks.filter((book) => purchasedIds.includes(book.id));
    setPurchasedBooks(purchased);

    // Save user email
    if (userEmail) {
      localStorage.setItem("currentUserEmail", userEmail);
    }
  }, [userEmail]);

  const handleReadBook = (book) => {
    navigate("/book-reader", { state: { book } });
  };

  const handleRemovePurchase = (bookId) => {
    const updatedPurchases = purchases.filter((p) => p.bookId !== bookId);
    const updatedIds = purchasedBooks.filter((b) => b.id !== bookId).map((b) => b.id);

    setPurchases(updatedPurchases);
    setPurchasedBooks(purchasedBooks.filter((b) => b.id !== bookId));
    localStorage.setItem("bookPurchases", JSON.stringify(updatedPurchases));
    localStorage.setItem("purchasedBookIds", JSON.stringify(updatedIds));
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUserEmail");
    navigate("/");
  };

  const filteredBooks = purchasedBooks.filter((book) =>
    book.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
  );

  const sortedPurchases = [...purchases].sort((a, b) => {
    if (filters.sortBy === "recent") {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    } else if (filters.sortBy === "price") {
      return b.price - a.price;
    } else if (filters.sortBy === "title") {
      return a.bookTitle.localeCompare(b.bookTitle);
    }
    return 0;
  });

  const totalSpent = purchases.reduce((sum, p) => sum + p.price, 0);
  const totalBooks = purchasedBooks.length;

  return (
    <div className="min-h-screen site-bg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-blue-100 flex items-center gap-2">
              <User size={18} />
              Welcome back, {userEmail || "Reader"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Total Books Purchased</p>
                <p className="text-3xl font-bold text-gray-800">{totalBooks}</p>
              </div>
              <BookOpen size={40} className="text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Total Amount Spent</p>
                <p className="text-3xl font-bold text-gray-800">₹{totalSpent.toFixed(2)}</p>
              </div>
              <DollarSign size={40} className="text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-2">Library Access</p>
                <p className="text-3xl font-bold text-gray-800">Lifetime</p>
              </div>
              <Calendar size={40} className="text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab("library")}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === "library"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
          >
            📚 My Library ({totalBooks})
          </button>
          <button
            onClick={() => setActiveTab("purchases")}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === "purchases"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
          >
            🛒 Purchase History ({purchases.length})
          </button>
        </div>

        {/* Library Tab */}
        {activeTab === "library" && (
          <div>
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search your books..."
                value={filters.searchTerm}
                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
                  >
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ✓ Owned
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">by {book.author}</p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReadBook(book)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition flex items-center justify-center gap-2"
                        >
                          <Eye size={16} />
                          Read Now
                        </button>
                        <button
                          onClick={() => handleRemovePurchase(book.id)}
                          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg font-medium transition"
                          title="Remove from library"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-xl text-gray-600 mb-6">No books in your library yet</p>
                <button
                  onClick={() => navigate("/e_book")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Browse Library
                </button>
              </div>
            )}
          </div>
        )}

        {/* Purchase History Tab */}
        {activeTab === "purchases" && (
          <div>
            {/* Sort Options */}
            <div className="mb-6 flex gap-4">
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="recent">Most Recent</option>
                <option value="price">Price (High to Low)</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>

            {/* Purchases List */}
            {sortedPurchases.length > 0 ? (
              <div className="space-y-4">
                {sortedPurchases.map((purchase, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-gray-800">{purchase.bookTitle}</h3>
                        <p className="text-sm text-gray-600">by {purchase.author}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Amount Paid</p>
                        <p className="text-2xl font-bold text-green-600">₹{(purchase.price * 1.18).toFixed(2)}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Purchase Date</p>
                        <p className="text-sm font-medium text-gray-800">
                          {new Date(purchase.purchaseDate).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                        <p className="text-sm font-medium text-gray-800 capitalize">
                          {purchase.paymentMethod === "netbanking" ? "Net Banking" : purchase.paymentMethod.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Order ID: {`ORD-${purchase.purchaseDate.slice(0, 10)}-${purchase.bookId}`}</p>
                          <p className="text-xs text-gray-500">Email: {purchase.customerEmail}</p>
                        </div>
                        
                        <NavLink to="/bookReader">
                        <button
                          onClick={() => handleReadBook(
                            allBooks.find(b => b.id === purchase.bookId) || {}
                          )}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
                        >
                          <Eye size={14} />
                          Read Book
                        </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <DollarSign size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-xl text-gray-600 mb-6">No purchase history yet</p>
                <button
                  onClick={() => navigate("/e_book")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Browse and Buy Books
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
