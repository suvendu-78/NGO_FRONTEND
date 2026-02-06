// import { NavLink } from "react-router-dom";

// const Foot = () => {
//   const linkClass = "text-sm text-amber-100 hover:text-white transition";
//   return (
//     <>
//       <footer className="bg-gradient-to-r from-red-900 via-amber-900 to-red-900 text-amber-100">
//         {/* Top Section */}
//         <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <NavLink to="/" className={linkClass}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/event" className={linkClass}>
//                   Events
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/books" className={linkClass}>
//                   Books
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Events */}
//           <div>
//             <h3 className="font-semibold mb-4">Events</h3>
//             <ul className="space-y-2">
//               <li>
//                 <NavLink to="/event" className={linkClass}>
//                   All Events
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/event" className={linkClass}>
//                   Upcoming
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Books */}
//           <div>
//             <h3 className="font-semibold mb-4">Books</h3>
//             <ul className="space-y-2">
//               <li>
//                 <NavLink to="/books" className={linkClass}>
//                   Browse Books
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/authors" className={linkClass}>
//                   Authors
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Authors */}
//           <div>
//             <h3 className="font-semibold mb-4">Authors</h3>
//             <ul className="space-y-2">
//               <li>
//                 <NavLink to="/authors" className={linkClass}>
//                   All Authors
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/feedback" className={linkClass}>
//                   Feedback
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Follow Us */}
//           <div>
//             <h3 className="font-semibold mb-4">Follow Us</h3>
//             <div className="flex gap-4 mb-4">
//               <a href="#" className="hover:text-white">
//                 🌐
//               </a>
//               <a href="#" className="hover:text-white">
//                 📘
//               </a>
//               <a href="#" className="hover:text-white">
//                 🐦
//               </a>
//               <a href="#" className="hover:text-white">
//                 📸
//               </a>
//             </div>
//             <p className="text-sm">
//               Email: <span className="text-white">info@literaturengo.org</span>
//             </p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-amber-300/30 text-center py-4 text-sm">
//           © {new Date().getFullYear()} Literature NGO. All rights reserved.
//         </div>
//       </footer>
//     </>
//   );
// };
// export default Foot;

import { NavLink } from "react-router-dom";

const Foot = () => {
  const linkClass = "text-sm text-[#f7dca1] hover:text-white";

  return (
    <footer className="bg-[#7a2e1f] text-[#f7dca1] border-t-4 border-[#c9a24d]">
      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <br />
          <NavLink to="/event" className={linkClass}>
            Events
          </NavLink>
          <br />
          <NavLink to="/books" className={linkClass}>
            Books
          </NavLink>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Authors</h3>
          <NavLink to="/authors" className={linkClass}>
            All Authors
          </NavLink>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Books</h3>
          <NavLink to="/books" className={linkClass}>
            Browse Books
          </NavLink>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p>Email: info@literaturengo.org</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">🌐 📘 🐦 📸</div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-[#c9a24d]/40 text-sm">
        © {new Date().getFullYear()} Odia Sahitya. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Foot;
