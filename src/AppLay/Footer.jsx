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
import { FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";

const Foot = () => {
  const linkClass = "text-sm text-[#f7dca1] hover:text-white";

  return (
    <>
      <footer className="bg-[#7a2e1f] text-[#f7dca1] border-t-4 border-[#c9a24d]">
        
        {/* GRID CONTAINER */}
        <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-5 gap-8">
          
          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <NavLink to="/" className={linkClass}>Home</NavLink><br />
            <NavLink to="/event" className={linkClass}>Events</NavLink><br />
            <NavLink to="/books" className={linkClass}>Books</NavLink><br />
            <NavLink to="/e_book" className={linkClass}>E-Books</NavLink><br />
            <NavLink to="/authors" className={linkClass}>All Authors</NavLink><br />
            <NavLink to="/feedback" className={linkClass}>Feedback</NavLink><br />
            <NavLink to="/privacypolicy" className={linkClass}>Privacy Policy</NavLink>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p>Email:ssahityasamsad@gmail.com</p>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-5">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaWhatsapp size={26} />
              </a>
              <a href="https://www.facebook.com/share/1CXPLBiYkP/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaFacebook size={26} />
              </a>
              <a href="https://youtube.com/@sanjogi_sajafula?si=IT-dR6YyKZbic5qA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaYoutube size={28} />
              </a>
            </div>
          </div>

          {/* LOCATION MAP */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Our Location</h3>

            <div className="w-full h-40 rounded-lg overflow-hidden border border-[#c9a24d]/50">
              <iframe
                title="Sanjogi Sahitya Sansad Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.512324!2d85.881083!3d21.391594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ec10375f4b855%3A0x39c88a246dc61ba0!2sSanjogi%20Sajafula%20Sahitya%20Sansad!5e0!3m2!1sen!2sin!4v1710000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sanjogi+Sajafula+Sahitya+Sansad+Ghatgaon+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline text-[#f7dca1] mt-2 inline-block"
            >
              Open in Google Maps
            </a>
          </div>

        </div> {/* ✅ THIS WAS MISSING */}

        {/* FOOTER BOTTOM */}
        <div className="text-center py-4 border-t border-[#c9a24d]/40 text-sm">
          Copyright © {new Date().getFullYear()} Samyogee Sahitya Sansad. All Rights Reserved.
        </div>

      </footer>
    </>
  );
};

export default Foot;
