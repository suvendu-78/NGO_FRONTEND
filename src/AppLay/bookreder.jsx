import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

const BookReader = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state?.book;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No Book Found ❌
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1ea] flex flex-col">
      {/* 🔥 TOP BAR */}
      <div className="sticky top-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 font-medium"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <BookOpen size={20} />
          {book.title}
        </div>

        <div></div>
      </div>

      {/* 📖 READER AREA */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-16 py-6">
        <div
          className="
            max-w-3xl mx-auto 
            bg-white 
            rounded-xl 
            shadow-lg 
            p-6 sm:p-10
            leading-8
            text-[16px] sm:text-[17px] lg:text-[18px]
            text-gray-800
          "
        >
          {/* BOOK TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{book.title}</h1>

          <p className="text-gray-500 mb-6">by {book.author}</p>

          {/* 🔴 DEMO BOOK CONTENT */}
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>

          <p className="mb-4">
            This is a demo reading layout. You can replace this section with
            your real ebook text or PDF viewer later.
          </p>

          <p>
            Reading experience is optimized for both mobile and desktop with
            comfortable spacing and typography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookReader;