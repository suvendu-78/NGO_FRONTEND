import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Head = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "text-white border-b-2 border-[#c9a24d]"
        : "text-[#f7dca1] hover:text-white"
    }`;

  const menuItemClass = ({ isActive }) =>
    `block px-4 py-2 text-sm ${
      isActive
        ? "bg-[#f3e6d3] text-[#7a2e1f] font-semibold"
        : "text-[#5a1f14] hover:bg-[#f7efe3]"
    }`;

  return (
    <nav className="bg-[#7a2e1f] border-b-4 border-[#c9a24d] relative z-[9999]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-4">
        {/* LEFT SIDE LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#c9a24d]"
          />

          <div className="border-l-2 border-white pl-3 leading-tight">
            <h1 className="text-[#fdf7ef] text-lg md:text-xl font-bold">
              ସଂଯୋଗୀ ସାହିତ୍ୟ ସଂସଦ
            </h1>
            <p className="text-[#fdf7ef] text-xs md:text-sm">
              SAMYOGEE SAHITYA SANSAD
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 relative">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer text-[#f7dca1] font-medium px-2 py-1">
              About ▾
            </span>

            {/* DROPDOWN */}
            <div
              className="absolute left-0 top-full mt-3 w-44
              bg-[#fdf7ef] rounded shadow-xl
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              z-[9999]"
            >
              <NavLink to="/event" className={menuItemClass}>
                Events
              </NavLink>
              <NavLink to="/books" className={menuItemClass}>
                Books
              </NavLink>
              <NavLink to="/authors" className={menuItemClass}>
                Authors
              </NavLink>
              <NavLink to="/feedback" className={menuItemClass}>
                Feedback
              </NavLink>
              <NavLink to="/about" className={menuItemClass}>
                About Us
              </NavLink>
              <NavLink to="/contact" className={menuItemClass}>
                Contact
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/register"
            className="border border-[#f7dca1] text-[#f7dca1] px-4 py-2 rounded hover:bg-[#f7dca1] hover:text-[#7a2e1f]"
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className="bg-[#c9a24d] px-5 py-2 rounded text-[#5a1f14] font-semibold hover:bg-[#e2c26b]"
          >
            Login | Admin
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#fdf7ef]"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#fdf7ef] shadow-lg mx-4 mb-4 rounded-lg">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/event"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Events
          </NavLink>
          <NavLink
            to="/books"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Books
          </NavLink>
          <NavLink
            to="/authors"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Authors
          </NavLink>
          <NavLink
            to="/feedback"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Feedback
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Contact
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className={menuItemClass}
          >
            Login | Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Head;
