import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // 🔴 CART STATES
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const books = [
    {
      title: "Lagi Probation",
      author: "Samuel Roy",
      price: "₹452",
      type: "Story",
      img: "https://picsum.photos/200/280?1",
    },
    {
      title: "Sunset & Rosie",
      author: "Terry Lyon",
      price: "₹158",
      type: "Poetry",
      img: "https://picsum.photos/200/280?2",
    },
    {
      title: "Last Berceria",
      author: "Sophia Murata",
      price: "₹325",
      type: "Story",
      img: "https://picsum.photos/200/280?3",
    },
    {
      title: "Segi Tiga",
      author: "Sapna Arora",
      price: "₹199",
      type: "Novel",
      img: "https://picsum.photos/200/280?4",
    },
    {
      title: "Segi Tiga",
      author: "Sapna Arora",
      price: "₹199",
      type: "Novel",
      img: "https://picsum.photos/200/280?5",
    },
    {
      title: "Segi Tiga",
      author: "Sapna Arora",
      price: "₹199",
      type: "Novel",
      img: "https://picsum.photos/200/280?6",
    },
  ];

  const authors = [
    "Stephen King",
    "J.K. Rowling",
    "Ray Bradbury",
    "Shivaram Mishra",
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || book.type.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  // 🔴 ADD TO CART
  const addToCart = (book) => {
    setCart((prev) =>
      prev.find((b) => b.title === book.title) ? prev : [...prev, book]
    );
  };

  // 🔴 REMOVE FROM CART
  const removeFromCart = (title) => {
    setCart(cart.filter((b) => b.title !== title));
  };

  return (
    <div className="min-h-screen bg-[#7a2e1f] text-[#3b2a1a] flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#f6e4d5] p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8 text-[#7a2e1f]">
          Sahitya Store
        </h1>
        <nav className="space-y-4 text-sm font-medium">
          {["Account", "Dashboard", "Library", "Favourite", "Orders"].map(
            (item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-lg hover:bg-[#e9c6a8] cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-[#fdf6ef] rounded-l-3xl p-6">
        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#f6e4d5] outline-none"
              placeholder="Search by book or author..."
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl bg-[#f6e4d5] outline-none"
          >
            <option value="All">All</option>
            <option value="Novel">Novel</option>
            <option value="Poetry">Poetry</option>
            <option value="Story">Story</option>
          </select>
        </div>

        {/* BOOK LIST */}
        <h3 className="font-bold text-lg mb-4">Best Popular</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={`${book.title}-${index}`}
              className="bg-white rounded-xl p-4 shadow hover:scale-105 transition"
            >
              <img
                src={book.img}
                alt={book.title}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <h4 className="font-semibold">{book.title}</h4>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-xs text-gray-400">{book.type}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-[#7a2e1f]">{book.price}</span>
                <button
                  onClick={() => addToCart(book)}
                  className="bg-[#7a2e1f] text-white px-3 py-1 rounded-md text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 🔴 FLOATING CART ICON (AMAZON STYLE) */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed top-24 right-6 z-40 
                   bg-[#7a2e1f] text-white 
                   p-4 rounded-full shadow-xl 
                   hover:scale-110 transition-all"
      >
        <ShoppingCart size={22} />
        {cart.length > 0 && (
          <span
            className="absolute -top-2 -right-2 
                       bg-red-600 text-white 
                       text-xs font-bold 
                       w-6 h-6 flex items-center justify-center 
                       rounded-full animate-pulse"
          >
            {cart.length}
          </span>
        )}
      </button>

      {/* 🔴 CART DRAWER */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div
            className="w-full max-w-md bg-white p-6 
                       max-h-[80vh] h-fit 
                       overflow-y-auto 
                       rounded-l-2xl shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>

            {cart.length === 0 && (
              <p className="text-gray-500 text-center mt-6">
                Cart is empty
              </p>
            )}

            {cart.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 border rounded-lg p-3 mb-3"
              >
                <img
                  src={item.img}
                  className="w-14 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}

            {cart.length > 0 && (
              <button
                onClick={() =>
                  navigate("/books-payment", { state: { cart, productType:"book"} })
                }
                className="w-full bg-[#7a2e1f] text-white py-3 rounded-lg mt-4"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      )}

      {/* RIGHT SIDEBAR */}
      <aside className="w-64 bg-[#fdf6ef] p-6 hidden lg:block">
        <h3 className="font-bold mb-4">Authors</h3>
        <ul className="space-y-3 text-sm">
          {authors.map((author) => (
            <li key={author} className="flex justify-between">
              <span>{author}</span>
              <span className="text-[#7a2e1f] cursor-pointer">View</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Books;
