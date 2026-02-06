import { Search } from "lucide-react";
import { useState } from "react";

const Books = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

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

  // ✅ FIXED FILTER LOGIC
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || book.type.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

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
            ),
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

        {/* HERO BANNER */}
        <div
          className="rounded-2xl p-6 text-white mb-8"
          style={{
            background:
              "linear-gradient(90deg, rgba(122,46,31,0.95), rgba(122,46,31,0.6)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-3xl font-bold mb-2">
            A Book is a gift you can open again and again!
          </h2>
          <p className="text-sm mb-4 opacity-90">
            Discover Odia literature, stories, and timeless voices.
          </p>
          <div className="space-x-3">
            <button className="bg-[#e9c6a8] text-[#7a2e1f] px-4 py-2 rounded-lg font-semibold">
              Explore Events
            </button>
            <button className="border border-white px-4 py-2 rounded-lg">
              View Books
            </button>
          </div>
        </div>

        {/* BOOK LIST */}
        <h3 className="font-bold text-lg mb-4">Best Popular</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={`${book.title}-${index}`} // ✅ FIXED KEY
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
                  <button className="bg-[#7a2e1f] text-white px-3 py-1 rounded-md text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No books found
            </p>
          )}
        </div>
      </main>

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
