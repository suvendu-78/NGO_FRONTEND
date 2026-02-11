// import { useState } from "react";
// import { ShoppingCart, BookOpen, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const E_Book = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showReadMsg, setShowReadMsg] = useState(false);

//   const demoBooks = [
//     {
//       id: 1,
//       title: "Mamudi",
//       author: "Fakir Mohan Senapati",
//       category: "classic-literature",
//       price: 4.99,
//       description:
//         "A timeless Odia classic depicting the life of an ordinary woman and her struggle against societal norms.",
//       coverImage:
//         "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=300&h=400&fit=crop",
//     },
//     {
//       id: 2,
//       title: "Chandi Mangal",
//       author: "Mukundaram Chakrabarti",
//       category: "folklore",
//       price: 3.99,
//       description:
//         "A magnificent Odia folk narrative celebrating the goddess Chandi and tales of devotion.",
//       coverImage:
//         "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
//     },
//     {
//       id: 3,
//       title: "Gita Govinda",
//       author: "Jayadeva",
//       category: "poetry",
//       price: 5.99,
//       description:
//         "The eternal love saga of Lord Krishna and Radha expressed in exquisite Odia poetry.",
//       coverImage:
//         "https://images.unsplash.com/photo-1532012197267-da84d127e9e1?w=300&h=400&fit=crop",
//     },
//   ];

//   const categories = [
//     { id: "all", label: "All Books" },
//     { id: "classic-literature", label: "Classic Literature" },
//     { id: "poetry", label: "Poetry" },
//     { id: "folklore", label: "Folklore" },
//   ];

//   const filteredBooks = demoBooks.filter((book) => {
//     const matchCategory =
//       selectedCategory === "all" || book.category === selectedCategory;
//     const matchSearch =
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   const addToCart = (book) => {
//     setCart((prev) =>
//       prev.find((b) => b.id === book.id) ? prev : [...prev, book]
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((b) => b.id !== id));
//   };

//   const handleReadOnline = () => {
//     setShowReadMsg(true);
//   };

//   const BookCard = ({ book }) => (
//     <div className="rounded-xl shadow-md bg-white p-4 flex flex-col">
//       <img
//         src={book.coverImage}
//         alt={book.title}
//         className="h-48 w-full object-cover rounded-lg mb-3"
//       />
//       <h3 className="font-bold">{book.title}</h3>
//       <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
//       <p className="font-semibold text-amber-700 mb-3">₹{book.price}</p>

//       <div className="flex gap-2 mt-auto">
//         <button
//           onClick={handleReadOnline}
//           className="flex-1 bg-amber-700 text-white py-2 rounded-lg"
//         >
//           Read
//         </button>
//         <button
//           onClick={() => addToCart(book)}
//           className="border-2 border-amber-700 text-amber-700 p-2 rounded-lg"
//         >
//           <ShoppingCart />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#fdf6ef]">
//       {/* HEADER */}
//       <div className="bg-amber-900 text-white py-8 text-center">
//         <div className="flex justify-center items-center gap-3">
//           <BookOpen size={40} />
//           <h1 className="text-2xl font-bold">
//             SAMYOGEE SAHITYA SANSAD DIGITAL LIBRARY
//           </h1>
//         </div>
//         <p className="text-amber-200 text-sm mt-1">
//           Preserving Odia literature • Inspiring generations
//         </p>
//       </div>

//       {/* 🔴 FLOATING CART ICON */}
//       <button
//         onClick={() => setShowCart(true)}
//         className="fixed top-24 right-6 z-40 
//                    bg-amber-700 hover:bg-amber-800 
//                    text-white p-4 rounded-full 
//                    shadow-xl hover:scale-110 
//                    transition-all duration-300"
//       >
//         <ShoppingCart size={22} />
//         {cart.length > 0 && (
//           <span
//             className="absolute -top-2 -right-2 
//                        bg-red-600 text-white 
//                        text-xs font-bold 
//                        w-6 h-6 flex items-center justify-center 
//                        rounded-full animate-pulse"
//           >
//             {cart.length}
//           </span>
//         )}
//       </button>

//       {/* SEARCH */}
//       <div className="max-w-6xl mx-auto px-4 py-6">
//         <div className="relative">
//           <Search className="absolute left-4 top-3 text-gray-400" />
//           <input
//             className="w-full pl-12 pr-4 py-3 rounded-lg border"
//             placeholder="Search books..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* FILTER */}
//       <div className="max-w-6xl mx-auto px-4 flex gap-3 mb-6">
//         {categories.map((c) => (
//           <button
//             key={c.id}
//             onClick={() => setSelectedCategory(c.id)}
//             className={`px-4 py-2 rounded-full ${
//               selectedCategory === c.id
//                 ? "bg-amber-700 text-white"
//                 : "bg-white border"
//             }`}
//           >
//             {c.label}
//           </button>
//         ))}
//       </div>

//       {/* BOOK GRID */}
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
//         {filteredBooks.map((book) => (
//           <BookCard key={book.id} book={book} />
//         ))}
//       </div>

//       {/* 🔴 CART DRAWER */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
//           <div className="w-full max-w-md bg-white p-6 max-h-[80vh] h-fit overflow-y-auto rounded-l-2xl shadow-xl">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-xl font-bold">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>✕</button>
//             </div>

//             {cart.length === 0 && (
//               <p className="text-gray-500 text-center">Cart is empty</p>
//             )}

//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-3 border rounded-lg p-3 mb-3"
//               >
//                 <img
//                   src={item.coverImage}
//                   className="w-14 h-20 object-cover rounded"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold">{item.title}</p>
//                   <p className="text-sm text-gray-600">₹{item.price}</p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-600 font-bold"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}

//             {cart.length > 0 && (
//               <button
//                 onClick={() => navigate("/payment", { state: { cart, productType:"ebook"} })}
//                 className="w-full bg-amber-700 text-white py-3 rounded-lg mt-4"
//               >
//                 Proceed to Payment
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* 🔴 READ MODAL */}
//       {showReadMsg && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-white rounded-xl p-6 text-center max-w-md w-full">
//             <BookOpen size={48} className="mx-auto text-amber-700 mb-4" />
//             <h2 className="text-xl font-bold mb-2">Purchase Required</h2>
//             <p className="text-gray-600 mb-6">
//               Please purchase the book to read it.
//               <br />Thank you 😊
//             </p>
//             <button
//               onClick={() => setShowReadMsg(false)}
//               className="bg-amber-700 text-white px-6 py-2 rounded-lg"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default E_Book;

// import { useState, useEffect } from "react";
// import { ShoppingCart, BookOpen, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const E_Book = () => {
//   const navigate = useNavigate();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showReadMsg, setShowReadMsg] = useState(false);

//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ======================
//      FETCH BOOKS
//   ====================== */
//   useEffect(() => {
//     fetch("http://localhost:8000/api/v1/user/books")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("BOOK API 👉", data);
//         setBooks(data.books || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   /* ======================
//      SEARCH FILTER
//   ====================== */
//   const filteredBooks = books.filter((book) =>
//     book.title?.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   /* ======================
//      CART LOGIC
//   ====================== */
//   const addToCart = (book) => {
//     setCart((prev) =>
//       prev.find((b) => b._id === book._id) ? prev : [...prev, book],
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((b) => b._id !== id));
//   };

//   const handleReadOnline = () => {
//     setShowReadMsg(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#fdf6ef]">
//       {/* HEADER */}
//       <div className="bg-amber-900 text-white py-8 text-center">
//         <div className="flex justify-center items-center gap-3">
//           <BookOpen size={40} />
//           <h1 className="text-2xl font-bold">
//             SAMYOGEE SAHITYA SANSAD DIGITAL LIBRARY
//           </h1>
//         </div>
//       </div>

//       {/* CART BUTTON */}
//       <button
//         onClick={() => setShowCart(true)}
//         className="fixed top-24 right-6 z-40 bg-amber-700 text-white p-4 rounded-full shadow-xl"
//       >
//         <ShoppingCart size={22} />
//         {cart.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
//             {cart.length}
//           </span>
//         )}
//       </button>

//       {/* SEARCH */}
//       <div className="max-w-6xl mx-auto px-4 py-6">
//         <div className="relative">
//           <Search className="absolute left-4 top-3 text-gray-400" />
//           <input
//             className="w-full pl-12 pr-4 py-3 rounded-lg border"
//             placeholder="Search books..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* BOOK LIST */}
//       <div className="max-w-5xl mx-auto px-4 flex flex-col gap-8">
//         {loading && <p>Loading books...</p>}

//         {!loading &&
//           filteredBooks.map((book) => (
//             <div key={book._id} className="bg-white p-5 rounded-xl shadow-md">
//               {/* TITLE */}
//               <h2 className="text-lg font-bold">{book.title}</h2>

//               {/* AUTHOR + PRICE */}
//               <p className="text-sm text-gray-500">
//                 by {book.author || "Unknown"}
//               </p>
//               <p className="text-amber-700 font-semibold mb-3">
//                 ₹ {book.price}
//               </p>

//               {/* ✅ FIXED PDF PREVIEW */}
//               <div className="rounded-lg overflow-hidden border">
//                 <iframe
//                   src={`https://docs.google.com/gview?url=${book.pdfUrl}&embedded=true`}
//                   title={book.title}
//                   className="w-full h-[350px]"
//                 ></iframe>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex gap-3 mt-4">
//                 <button
//                   onClick={handleReadOnline}
//                   className="bg-amber-700 text-white px-4 py-2 rounded-lg"
//                 >
//                   Read
//                 </button>

//                 <button
//                   onClick={() => addToCart(book)}
//                   className="border-2 border-amber-700 text-amber-700 px-4 py-2 rounded-lg"
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* CART DRAWER */}
//       {showCart && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
//           <div className="w-full max-w-md bg-white p-6 max-h-[80vh] overflow-y-auto rounded-l-2xl shadow-xl">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-xl font-bold">Your Cart</h2>
//               <button onClick={() => setShowCart(false)}>✕</button>
//             </div>

//             {cart.length === 0 && (
//               <p className="text-gray-500 text-center">Cart is empty</p>
//             )}

//             {cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between border rounded-lg p-3 mb-3"
//               >
//                 <p className="font-semibold">{item.title}</p>

//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-600 font-bold"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}

//             {cart.length > 0 && (
//               <button
//                 onClick={() =>
//                   navigate("/payment", {
//                     state: { cart, productType: "ebook" },
//                   })
//                 }
//                 className="w-full bg-amber-700 text-white py-3 rounded-lg mt-4"
//               >
//                 Proceed to Payment
//               </button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* PURCHASE MODAL */}
//       {showReadMsg && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-white rounded-xl p-6 text-center max-w-md w-full">
//             <BookOpen size={48} className="mx-auto text-amber-700 mb-4" />
//             <h2 className="text-xl font-bold mb-2">Purchase Required</h2>
//             <p>Please purchase the book to read it 😊</p>
//             <button
//               onClick={() => setShowReadMsg(false)}
//               className="bg-amber-700 text-white px-6 py-2 rounded-lg mt-4"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default E_Book;

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

  // 🔥 NEW: Purchased Books
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
      <div className="max-w-6xl mx-auto px-4 py-6">
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

      {/* BOOK LIST */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-8">
        {loading && <p>Loading books...</p>}

        {!loading &&
          filteredBooks.map((book) => {
            const isOwned = purchasedBooks.find(
              (b) => b._id === book._id
            );

            return (
              <div key={book._id} className="bg-white p-5 rounded-xl shadow-md">

                {/* TITLE */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{book.title}</h2>
                  {isOwned && (
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                      ✓ Owned
                    </span>
                  )}
                </div>

                {/* AUTHOR + PRICE */}
                <p className="text-sm text-gray-500">
                  by {book.author || "Unknown"}
                </p>
                <p className="text-amber-700 font-semibold mb-3">
                  ₹ {book.price}
                </p>

                {/* PDF PREVIEW */}
                <div className="rounded-lg overflow-hidden border">
                  <iframe
                    src={`https://docs.google.com/gview?url=${book.pdfUrl}&embedded=true`}
                    title={book.title}
                    className="w-full h-[350px]"
                  ></iframe>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-4">
                  {isOwned ? (
                    <button
                      onClick={() => handleReadOnline(book)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Read Now
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleReadOnline(book)}
                        className="bg-amber-700 text-white px-4 py-2 rounded-lg"
                      >
                        Read
                      </button>

                      <button
                        onClick={() => addToCart(book)}
                        className="border-2 border-amber-700 text-amber-700 px-4 py-2 rounded-lg"
                      >
                        Add To Cart
                      </button>
                    </>
                  )}
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
