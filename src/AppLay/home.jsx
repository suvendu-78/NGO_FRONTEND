// import { NavLink } from "react-router-dom";
// import odisha from "../assets/odisha.jpeg";
// import writer from "../assets/writer.png";
// import bgthim from "../assets/bgthim.png";
// import { motion } from "framer-motion";

// const Home = () => {
//   const data = [
//     {
//       title: "Our Upcoming Events",
//       desc: "Stay updated on our latest literary events and workshops.",
//       img: { writer },
//       link: "/event",
//     },
//     {
//       title: "Are you a writer?",
//       desc: "Publish your book with us and reach dedicated readers.",
//       img: { writer },
//       link: "/contact",
//     },
//     {
//       title: "Discover Digital Books",
//       desc: "Explore a curated collection of digital books by emerging and established authors.",
//       img: { writer },
//       link: "/e_book",
//     },
//     {
//       title: "Explore Our Magazine",
//       desc: "Where words find their voice. Discover our literary magazine.",
//       img: { writer },
//       link: "/magazin",
//     },
//   ];
//   const sponsors = [
//     { name: "Sponsor One", logo: "/sponsors/s1.png" },
//     { name: "Sponsor Two", logo: "/sponsors/s2.png" },
//     { name: "Sponsor Three", logo: "/sponsors/s3.png" },
//     { name: "Sponsor Four", logo: "/sponsors/s4.png" },
//   ];
//   return (
//     <div
//       className="text-[#3b2a1a] bg-repeat overflow-x-hidden"
//       style={{ backgroundImage: `url(${bgthim})` }}
//     >
//       <section className="relative">
//         {/* SAME subtle overlay as Authors */}
//         <div className="absolute inset-0 bg-[#7a2e1f]/30"></div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl font-bold text-[#fdf7ef] mb-4 leading-snug">
//               ସ୍ଵର ଓଡିଆ ସାହିତ୍ୟର
//               <br />
//               Empowering Literature, <br />
//               <span className="text-[#f7dca1]">One Voice at a Time</span>
//             </h1>

//             <p className="text-[#f1e6d2] mb-8 max-w-lg">
//               Discover events, original books, and voices from our literary
//               community.
//             </p>

//             <div className="flex gap-4">
//               <NavLink
//                 to="/event"
//                 className="bg-[#c9a24d] text-[#5a1f14] px-6 py-3 rounded font-semibold hover:bg-[#e2c26b]"
//               >
//                 Explore Events
//               </NavLink>

//               <NavLink
//                 to="/books"
//                 className="border border-[#f7dca1] text-[#fdf7ef] px-6 py-3 rounded hover:bg-[#f7dca1] hover:text-[#5a1f14]"
//               >
//                 View Books
//               </NavLink>
//             </div>
//           </div>

//           <img
//             src={odisha}
//             alt="Odia Heritage"
//             className="rounded-xl border-4 border-[#c9a24d] shadow-xl hover:scale-110"
//           />
//         </div>
//       </section>

//       <section className="w-full py-20 px-4 text-white">
//         <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
//           How We Empower Literature
//         </h2>

//         <div className="max-w-6xl mx-auto space-y-20">
//           {data.map((item, i) => {
//             const reverse = i % 2 !== 0;

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 className={`flex flex-col md:flex-row ${
//                   reverse ? "md:flex-row-reverse" : ""
//                 } items-center gap-10`}
//               >
//                 <div className="relative w-full md:w-[40%]">
//                   <div className="rounded-2xl overflow-hidden shadow-2xl">
//                     <img
//                       src={writer}
//                       alt=""
//                       className="w-full h-[260px] object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="w-full md:w-[60%]">
//                   <div className="bg-[#f6e3c8]/90 text-[#5a1f12] p-8 rounded-2xl shadow-xl">
//                     <h3 className="text-2xl font-semibold mb-3">
//                       {item.title}
//                     </h3>

//                     <p className="mb-6 leading-relaxed">{item.desc}</p>
//                     <NavLink to={item.link}>
//                       <button className="bg-[#8c2f1d] text-white px-6 py-2 rounded-full hover:scale-105 transition">
//                         View Details →
//                       </button>
//                     </NavLink>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-16">
//           <NavLink to="/event">
//             <button className="hover:underline text-lg">
//               View All Events →
//             </button>
//           </NavLink>
//         </div>
//       </section>

//       <section className="w-full py-20 px-4 text-white">
//         {/* TITLE */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-semibold">About Our NGO</h2>
//           <p className="mt-3 text-lg opacity-90">
//             Promoting literature and supporting aspiring writers.
//           </p>
//         </div>

//         {/* MAIN LAYOUT */}
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* LEFT IMAGE CARD */}
//           <div className="relative">
//             <div className="rounded-2xl overflow-hidden border border-[#e8c9a0]/40 shadow-2xl">
//               <img
//                 src={writer}
//                 alt="ngo"
//                 className="w-full h-[320px] md:h-[380px] object-cover"
//               />
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="space-y-6">
//             {/* TOP STATS */}
//             <div className="grid grid-cols-2 gap-5">
//               <div className="bg-[#f6e3c8] text-[#5a1f12] p-6 rounded-xl shadow-lg text-center">
//                 <h3 className="text-2xl font-bold">150+</h3>
//                 <p className="mt-1">Books Published</p>
//               </div>

//               <div className="bg-[#f6e3c8] text-[#5a1f12] p-6 rounded-xl shadow-lg text-center">
//                 <h3 className="text-2xl font-bold">200+</h3>
//                 <p className="mt-1">Authors Supported</p>
//               </div>
//             </div>

//             {/* BIG BOTTOM CARD */}
//             <div className="bg-[#f6e3c8] text-[#5a1f12] p-8 rounded-xl shadow-xl text-center">
//               <h3 className="text-3xl font-bold">300+</h3>
//               <p className="mt-2 mb-5">Events Conducted</p>
//               <NavLink to="/books">
//                 <button className="bg-[#8c2f1d] text-white px-6 py-2 rounded-full hover:scale-105 transition">
//                   Browse All Books →
//                 </button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 overflow-hidden">
//         <h2 className="text-3xl font-bold mb-12 text-white text-center">
//           ଆମ ପରିବାର
//           <br />
//           Our family
//         </h2>

//         <div className="flex gap-8 animate-author-scroll px-6">
//           {[...Array(2)].flatMap(() =>
//             ["Amit Sharma", "Priya Desai", "Rahul Kapoor", "Amir Dali"].map(
//               (name, i) => (
//                 <div
//                   key={`${name}-${i}`}
//                   className="min-w-[260px] bg-[#fdf7ef] border border-[#d6b97b] rounded-lg text-center p-6 shadow"
//                 >
//                   <img
//                     src="https://randomuser.me/api/portraits/men/32.jpg"
//                     className="w-24 h-24 mx-auto rounded-full border-4 border-[#c9a24d] mb-4"
//                     alt=""
//                   />
//                   <h3 className="font-semibold">{name}</h3>
//                   <NavLink
//                     to="/books"
//                     className="text-[#7a2e1f] hover:underline text-sm"
//                   >
//                     View Books
//                   </NavLink>
//                 </div>
//               ),
//             ),
//           )}
//         </div>
//       </section>

//       <section className="bg-[#7a2e1f]/30 py-20 overflow-hidden">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#fdf7ef]">
//           ପାଠକ ସମୀକ୍ଷା
//           <br />
//           Reader Reviews
//         </h2>

//         <div className="relative w-full overflow-hidden">
//           <div className="flex w-max gap-8 animate-review-scroll px-6">
//             {[...Array(3)].flatMap(() =>
//               [
//                 {
//                   name: "Sonia G.",
//                   img: "https://randomuser.me/api/portraits/women/44.jpg",
//                   rating: 5,
//                   text: "A beautiful and inspiring book. Highly recommend.",
//                 },
//                 {
//                   name: "Chris D.",
//                   img: "https://randomuser.me/api/portraits/men/32.jpg",
//                   rating: 4,
//                   text: "Wonderful storytelling and deep cultural touch.",
//                 },
//                 {
//                   name: "Neha K.",
//                   img: "https://randomuser.me/api/portraits/women/65.jpg",
//                   rating: 5,
//                   text: "An amazing read that truly reflects Odia heritage.",
//                 },
//               ].map((review, i) => (
//                 <div
//                   key={`${review.name}-${i}`}
//                   className="min-w-[320px] bg-[#fdf7ef] text-[#3b2a1a] p-6 rounded-xl shadow-lg border border-[#d6b97b]"
//                 >
//                   {/* USER */}
//                   <div className="flex items-center gap-4 mb-3">
//                     <img
//                       src={review.img}
//                       alt={review.name}
//                       className="w-12 h-12 rounded-full border-2 border-[#c9a24d]"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{review.name}</h3>
//                       {/* STARS */}
//                       <div className="text-[#c9a24d] text-sm">
//                         {"★".repeat(review.rating)}
//                         {"☆".repeat(5 - review.rating)}
//                       </div>
//                     </div>
//                   </div>

//                   {/* REVIEW TEXT */}
//                   <p className="text-sm leading-relaxed">{review.text}</p>
//                 </div>
//               )),
//             )}
//           </div>
//         </div>
//       </section>
//       <section
//         className="relative py-20 text-white"
//         style={{
//           backgroundImage: `url(${bgthim})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           {/* Heading */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
//               ଆମ ସହଯୋଗୀ
//             </h2>
//             <p className="mt-2 text-lg opacity-90">Our Sponsors</p>
//             <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded"></div>
//           </div>

//           {/* Sponsor Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
//             {sponsors.map((sponsor, index) => (
//               <div
//                 key={index}
//                 className="bg-white/90 rounded-xl p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg"
//               >
//                 <img
//                   src={sponsor.logo}
//                   alt={sponsor.name}
//                   className="max-h-16 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import odisha from "../assets/odisha.jpeg";
// import writer from "../assets/writer.png";
// import bgthim from "../assets/bgthim.png";
// import { motion } from "framer-motion";
// import Register from "./user/Register.jsx";

// const Home = () => {
//   const [showRegister, setShowRegister] = useState(true);
//   const navigate = useNavigate(); // ✅ added navigation

//   // keep user unlocked after register
//   useEffect(() => {
//     const registered = localStorage.getItem("registered");
//     if (registered) setShowRegister(false);
//   }, []);

//   // ❌ Removed scroll lock effect (background not dimmed now)

//   const data = [
//     {
//       title: "Our Upcoming Events",
//       desc: "Stay updated on our latest literary events and workshops.",
//       img: { writer },
//       link: "/event",
//     },
//     {
//       title: "Are you a writer?",
//       desc: "Publish your book with us and reach dedicated readers.",
//       img: { writer },
//       link: "/contact",
//     },
//     {
//       title: "Discover Digital Books",
//       desc: "Explore a curated collection of digital books by emerging and established authors.",
//       img: { writer },
//       link: "/e_book",
//     },
//     {
//       title: "Explore Our Magazine",
//       desc: "Where words find their voice. Discover our literary magazine.",
//       img: { writer },
//       link: "/magazin",
//     },
//   ];

//   const sponsors = [
//     { name: "Sponsor One", logo: "/sponsors/s1.png" },
//     { name: "Sponsor Two", logo: "/sponsors/s2.png" },
//     { name: "Sponsor Three", logo: "/sponsors/s3.png" },
//     { name: "Sponsor Four", logo: "/sponsors/s4.png" },
//   ];

//   return (
//     <>
//       {/* 🔒 LANDING PAGE (NO DIM EFFECT NOW) */}
//       <div
//         className="text-[#3b2a1a] bg-repeat overflow-x-hidden"
//         style={{ backgroundImage: `url(${bgthim})` }}
//       >
//         {/* ================= HERO ================= */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-[#7a2e1f]/30"></div>

//           <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <h1 className="text-4xl font-bold text-[#fdf7ef] mb-4 leading-snug">
//                 ସ୍ଵର ଓଡିଆ ସାହିତ୍ୟର
//                 <br />
//                 Empowering Literature, <br />
//                 <span className="text-[#f7dca1]">One Voice at a Time</span>
//               </h1>

//               <p className="text-[#f1e6d2] mb-8 max-w-lg">
//                 Discover events, original books, and voices from our literary
//                 community.
//               </p>

//               <div className="flex gap-4">
//                 <NavLink
//                   to="/event"
//                   className="bg-[#c9a24d] text-[#5a1f14] px-6 py-3 rounded font-semibold hover:bg-[#e2c26b]"
//                 >
//                   Explore Events
//                 </NavLink>

//                 <NavLink
//                   to="/books"
//                   className="border border-[#f7dca1] text-[#fdf7ef] px-6 py-3 rounded hover:bg-[#f7dca1] hover:text-[#5a1f14]"
//                 >
//                   View Books
//                 </NavLink>
//               </div>
//             </div>

//             <img
//               src={odisha}
//               alt="Odia Heritage"
//               className="rounded-xl border-4 border-[#c9a24d] shadow-xl hover:scale-110"
//             />
//           </div>
//         </section>

//         {/* Rest of your sections unchanged */}
//       </div>

//       {/* 🔥 REGISTER OVERLAY (BACKGROUND REMOVED) */}
//       {showRegister && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center">
//           {/* ❌ Dark overlay removed */}

//           <div className="relative pointer-events-auto">
//             <Register
//               onSuccess={() => {
//                 localStorage.setItem("registered", "true");
//                 setShowRegister(false);
//                 navigate("/login"); // ✅ redirect to login page
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import odisha from "../assets/odisha.jpeg";
// import writer from "../assets/writer.png";
// import bgthim from "../assets/bgthim.png";
// import { motion } from "framer-motion";
// import Register from "./user/Register.jsx";

// const Home = () => {
//   const [showRegister, setShowRegister] = useState(true);
//   const navigate = useNavigate();

//   // ✅ Check if already registered
//   useEffect(() => {
//     const registered = localStorage.getItem("registered");
//     if (registered) {
//       setShowRegister(false);
//     }
//   }, []);

//   const data = [
//     {
//       title: "Our Upcoming Events",
//       desc: "Stay updated on our latest literary events and workshops.",
//       link: "/event",
//     },
//     {
//       title: "Are you a writer?",
//       desc: "Publish your book with us and reach dedicated readers.",
//       link: "/contact",
//     },
//     {
//       title: "Discover Digital Books",
//       desc: "Explore a curated collection of digital books by emerging and established authors.",
//       link: "/e_book",
//     },
//     {
//       title: "Explore Our Magazine",
//       desc: "Where words find their voice. Discover our literary magazine.",
//       link: "/magazin",
//     },
//   ];

//   const sponsors = [
//     { name: "Sponsor One", logo: "/sponsors/s1.png" },
//     { name: "Sponsor Two", logo: "/sponsors/s2.png" },
//     { name: "Sponsor Three", logo: "/sponsors/s3.png" },
//     { name: "Sponsor Four", logo: "/sponsors/s4.png" },
//   ];

//   return (
//     <>
//       {/* 🔒 LANDING PAGE (BLOCKED BEFORE REGISTER) */}
//       <div
//         className={`text-[#3b2a1a] bg-repeat overflow-x-hidden ${
//           showRegister ? "pointer-events-none opacity-40" : ""
//         }`}
//         style={{ backgroundImage: `url(${bgthim})` }}
//       >
//         {/* ================= HERO ================= */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-[#7a2e1f]/30"></div>

//           <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <h1 className="text-4xl font-bold text-[#fdf7ef] mb-4 leading-snug">
//                 ସ୍ଵର ଓଡିଆ ସାହିତ୍ୟର
//                 <br />
//                 Empowering Literature, <br />
//                 <span className="text-[#f7dca1]">
//                   One Voice at a Time
//                 </span>
//               </h1>

//               <p className="text-[#f1e6d2] mb-8 max-w-lg">
//                 Discover events, original books, and voices from our literary
//                 community.
//               </p>

//               <div className="flex gap-4">
//                 <NavLink
//                   to="/event"
//                   className="bg-[#c9a24d] text-[#5a1f14] px-6 py-3 rounded font-semibold hover:bg-[#e2c26b]"
//                 >
//                   Explore Events
//                 </NavLink>

//                 <NavLink
//                   to="/books"
//                   className="border border-[#f7dca1] text-[#fdf7ef] px-6 py-3 rounded hover:bg-[#f7dca1] hover:text-[#5a1f14]"
//                 >
//                   View Books
//                 </NavLink>
//               </div>
//             </div>

//             <img
//               src={odisha}
//               alt="Odia Heritage"
//               className="rounded-xl border-4 border-[#c9a24d] shadow-xl hover:scale-110"
//             />
//           </div>
//         </section>

//         {/* ================= HOW WE EMPOWER ================= */}
//         <section className="w-full py-20 px-4 text-white">
//           <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
//             How We Empower Literature
//           </h2>

//           <div className="max-w-6xl mx-auto space-y-20">
//             {data.map((item, i) => {
//               const reverse = i % 2 !== 0;

//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: false, amount: 0.3 }}
//                   className={`flex flex-col md:flex-row ${
//                     reverse ? "md:flex-row-reverse" : ""
//                   } items-center gap-10`}
//                 >
//                   <div className="relative w-full md:w-[40%]">
//                     <div className="rounded-2xl overflow-hidden shadow-2xl">
//                       <img
//                         src={writer}
//                         alt=""
//                         className="w-full h-[260px] object-cover"
//                       />
//                     </div>
//                   </div>

//                   <div className="w-full md:w-[60%]">
//                     <div className="bg-[#f6e3c8]/90 text-[#5a1f12] p-8 rounded-2xl shadow-xl">
//                       <h3 className="text-2xl font-semibold mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="mb-6 leading-relaxed">
//                         {item.desc}
//                       </p>

//                       <NavLink to={item.link}>
//                         <button className="bg-[#8c2f1d] text-white px-6 py-2 rounded-full hover:scale-105 transition">
//                           View Details →
//                         </button>
//                       </NavLink>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Sponsors section (unchanged) */}
//         <section className="py-20 text-white">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               ଆମ ସହଯୋଗୀ
//             </h2>
//             <p className="mt-2 text-lg opacity-90">
//               Our Sponsors
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
//             {sponsors.map((sponsor, index) => (
//               <div
//                 key={index}
//                 className="bg-white/90 rounded-xl p-6 flex items-center justify-center shadow-lg"
//               >
//                 <img
//                   src={sponsor.logo}
//                   alt={sponsor.name}
//                   className="max-h-16 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* 🔥 REGISTER FLOATING OVERLAY */}
//       {showRegister && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <Register
//             onSuccess={() => {
//               localStorage.setItem("registered", "true");
//               setShowRegister(false);
//               navigate("/login"); // ✅ Redirect to login
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import odisha from "../assets/odisha.jpeg";
// import writer from "../assets/writer.png";
// import bgthim from "../assets/bgthim.png";
// import { motion } from "framer-motion";
// import Register from "./user/Register.jsx";

// const Home = () => {
//   const [showRegister, setShowRegister] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const registered = localStorage.getItem("registered");
//     if (registered) setShowRegister(false);
//   }, []);

//   const data = [
//     {
//       title: "Our Upcoming Events",
//       desc: "Stay updated on our latest literary events and workshops.",
//       link: "/event",
//     },
//     {
//       title: "Are you a writer?",
//       desc: "Publish your book with us and reach dedicated readers.",
//       link: "/contact",
//     },
//     {
//       title: "Discover Digital Books",
//       desc: "Explore a curated collection of digital books by emerging and established authors.",
//       link: "/e_book",
//     },
//     {
//       title: "Explore Our Magazine",
//       desc: "Where words find their voice. Discover our literary magazine.",
//       link: "/magazin",
//     },
//   ];

//   const sponsors = [
//     { name: "Sponsor One", logo: "/sponsors/s1.png" },
//     { name: "Sponsor Two", logo: "/sponsors/s2.png" },
//     { name: "Sponsor Three", logo: "/sponsors/s3.png" },
//     { name: "Sponsor Four", logo: "/sponsors/s4.png" },
//   ];

//   return (
//     <>
//       <div
//         className={`text-[#3b2a1a] bg-repeat overflow-x-hidden ${
//           showRegister ? "pointer-events-none opacity-40" : ""
//         }`}
//         style={{ backgroundImage: `url(${bgthim})` }}
//       >
//         {/* ================= HERO ================= */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-[#7a2e1f]/30"></div>

//           <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <h1 className="text-4xl font-bold text-[#fdf7ef] mb-4 leading-snug">
//                 ସ୍ଵର ଓଡିଆ ସାହିତ୍ୟର <br />
//                 Empowering Literature <br />
//                 <span className="text-[#f7dca1]">
//                   One Voice at a Time
//                 </span>
//               </h1>

//               <p className="text-[#f1e6d2] mb-8 max-w-lg">
//                 Discover events, original books, and voices from our literary community.
//               </p>

//               <div className="flex gap-4">
//                 <NavLink
//                   to="/event"
//                   className="bg-[#c9a24d] text-[#5a1f14] px-6 py-3 rounded font-semibold"
//                 >
//                   Explore Events
//                 </NavLink>

//                 <NavLink
//                   to="/books"
//                   className="border border-[#f7dca1] text-[#fdf7ef] px-6 py-3 rounded"
//                 >
//                   View Books
//                 </NavLink>
//               </div>
//             </div>

//             <img
//               src={odisha}
//               alt="Odia Heritage"
//               className="rounded-xl border-4 border-[#c9a24d] shadow-xl"
//             />
//           </div>
//         </section>

//         {/* ================= HOW WE EMPOWER ================= */}
//         <section className="w-full py-20 px-4 text-white">
//           <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
//             How We Empower Literature
//           </h2>

//           <div className="max-w-6xl mx-auto space-y-20">
//             {data.map((item, i) => {
//               const reverse = i % 2 !== 0;

//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: reverse ? 80 : -80 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.7 }}
//                   className={`flex flex-col md:flex-row ${
//                     reverse ? "md:flex-row-reverse" : ""
//                   } items-center gap-10`}
//                 >
//                   <div className="relative w-full md:w-[40%]">
//                     <img
//                       src={writer}
//                       alt=""
//                       className="w-full h-[260px] object-cover rounded-2xl"
//                     />
//                   </div>

//                   <div className="w-full md:w-[60%]">
//                     <div className="bg-[#f6e3c8]/90 text-[#5a1f12] p-8 rounded-2xl shadow-xl">
//                       <h3 className="text-2xl font-semibold mb-3">
//                         {item.title}
//                       </h3>
//                       <p className="mb-6">{item.desc}</p>
//                       <NavLink to={item.link}>
//                         <button className="bg-[#8c2f1d] text-white px-6 py-2 rounded-full">
//                           View Details →
//                         </button>
//                       </NavLink>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* ================= OUR FAMILY ================= */}
//         <section className="py-20 overflow-hidden">
//           <h2 className="text-3xl font-bold mb-12 text-white text-center">
//             ଆମ ପରିବାର <br /> Our Family
//           </h2>

//           <div className="flex gap-8 px-6 overflow-x-auto">
//             {["Amit Sharma", "Priya Desai", "Rahul Kapoor", "Amir Dali"].map(
//               (name, i) => (
//                 <div
//                   key={i}
//                   className="min-w-[260px] bg-[#fdf7ef] border border-[#d6b97b] rounded-lg text-center p-6 shadow"
//                 >
//                   <img
//                     src="https://randomuser.me/api/portraits/men/32.jpg"
//                     className="w-24 h-24 mx-auto rounded-full border-4 border-[#c9a24d] mb-4"
//                     alt=""
//                   />
//                   <h3 className="font-semibold">{name}</h3>
//                   <NavLink
//                     to="/books"
//                     className="text-[#7a2e1f] hover:underline text-sm"
//                   >
//                     View Books
//                   </NavLink>
//                 </div>
//               )
//             )}
//           </div>
//         </section>

//         {/* ================= READER REVIEWS ================= */}
//         <section className="bg-[#7a2e1f]/30 py-20">
//           <h2 className="text-3xl font-bold text-center mb-12 text-[#fdf7ef]">
//             ପାଠକ ସମୀକ୍ଷା <br /> Reader Reviews
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 px-6">
//             {[
//               {
//                 name: "Sonia G.",
//                 rating: 5,
//                 text: "A beautiful and inspiring book. Highly recommend.",
//               },
//               {
//                 name: "Chris D.",
//                 rating: 4,
//                 text: "Wonderful storytelling and deep cultural touch.",
//               },
//               {
//                 name: "Neha K.",
//                 rating: 5,
//                 text: "An amazing read that truly reflects Odia heritage.",
//               },
//             ].map((review, i) => (
//               <div
//                 key={i}
//                 className="bg-[#fdf7ef] text-[#3b2a1a] p-6 rounded-xl shadow-lg border border-[#d6b97b]"
//               >
//                 <h3 className="font-semibold mb-2">{review.name}</h3>
//                 <div className="text-[#c9a24d] text-sm mb-2">
//                   {"★".repeat(review.rating)}
//                   {"☆".repeat(5 - review.rating)}
//                 </div>
//                 <p className="text-sm">{review.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ================= OUR SPONSORS ================= */}
//         <section className="relative py-20 text-white">
//           <div className="absolute inset-0 bg-black/40"></div>

//           <div className="relative max-w-7xl mx-auto px-6">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold">
//                 ଆମ ସହଯୋଗୀ
//               </h2>
//               <p className="mt-2 text-lg opacity-90">
//                 Our Sponsors
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {sponsors.map((sponsor, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/90 rounded-xl p-6 flex items-center justify-center shadow-lg"
//                 >
//                   <img
//                     src={sponsor.logo}
//                     alt={sponsor.name}
//                     className="max-h-16 object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* REGISTER OVERLAY */}
//       {showRegister && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <Register
//             onSuccess={() => {
//               localStorage.setItem("registered", "true");
//               setShowRegister(false);
//               navigate("/login");
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import odisha from "../assets/odisha.jpeg";
import writer from "../assets/writer.png";
import bgthim from "../assets/bgthim.png";
import { motion } from "framer-motion";
import Register from "./user/Register.jsx";
import upcomigevents from "../assets/upcomingevents.png";
import ebook from "../assets/ebook.png";
import magazine from "../assets/magazine.png";
import samyogee from "../assets/samyogee.jpeg";

const Home = () => {
  const [showRegister, setShowRegister] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    if (registered) setShowRegister(false);
  }, []);

  const data = [
    {
      title: "Our Upcoming Events",
      desc: "Stay updated on our latest literary events and workshops.",
      link: "/event",
      img: upcomigevents,
    },
    {
      title: "Are you a writer?",
      desc: "Publish your book with us and reach dedicated readers.",
      link: "/contact",
      img: writer,
    },
    {
      title: "Discover Digital Books",
      desc: "Explore a curated collection of digital books by emerging and established authors.",
      link: "/e_book",
      img: ebook,
    },
    {
      title: "Explore Our Magazine",
      desc: "Where words find their voice. Discover our literary magazine.",
      link: "/magazin",
      img: magazine,
    },
  ];

  const sponsors = [
    { name: "Sponsor One", logo: "/sponsors/s1.png" },
    { name: "Sponsor Two", logo: "/sponsors/s2.png" },
    { name: "Sponsor Three", logo: "/sponsors/s3.png" },
    { name: "Sponsor Four", logo: "/sponsors/s4.png" },
  ];

  const familyMembers = [
    "Amit Sharma",
    "Priya Desai",
    "Rahul Kapoor",
    "Amir Dali",
  ];

  const reviews = [
    {
      name: "Sonia G.",
      rating: 5,
      text: "A beautiful and inspiring book. Highly recommend.",
    },
    {
      name: "Chris D.",
      rating: 4,
      text: "Wonderful storytelling and deep cultural touch.",
    },
    {
      name: "Neha K.",
      rating: 5,
      text: "An amazing read that truly reflects Odia heritage.",
    },
  ];

  return (
    <>
      <div
        className={`text-[#3b2a1a] bg-repeat overflow-x-hidden ${
          showRegister ? "pointer-events-none opacity-40" : ""
        }`}
        style={{ backgroundImage: `url(${bgthim})` }}
      >
        {/* ================= HERO ================= */}
        <section className="relative">
          <div className="absolute inset-0 bg-[#7a2e1f]/30"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#fdf7ef] mb-4 leading-snug">
                ସ୍ଵର ଓଡିଆ ସାହିତ୍ୟର <br />
                Empowering Literature <br />
                <span className="text-[#f7dca1]">One Voice at a Time</span>
              </h1>

              <p className="text-[#f1e6d2] mb-8 max-w-lg">
                Discover events, original books, and voices from our literary
                community.
              </p>

              <div className="flex gap-4">
                <NavLink
                  to="/event"
                  className="bg-[#c9a24d] text-[#5a1f14] px-6 py-3 rounded font-semibold"
                >
                  Explore Events
                </NavLink>

                <NavLink
                  to="/books"
                  className="border border-[#f7dca1] text-[#fdf7ef] px-6 py-3 rounded"
                >
                  View Books
                </NavLink>
              </div>
            </div>

            <img
              src={samyogee}
              alt="Odia Heritage"
              className="rounded-xl border-4 border-[#c9a24d] shadow-xl"
            />
          </div>
        </section>

        {/* ================= HOW WE EMPOWER ================= */}
        <section className="w-full py-20 px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            How We Empower Literature
          </h2>

          <div className="max-w-6xl mx-auto space-y-20">
            {data.map((item, i) => {
              const reverse = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: reverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col md:flex-row ${
                    reverse ? "md:flex-row-reverse" : ""
                  } items-center gap-10`}
                >
                  <div className="w-full md:w-[40%]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[260px] object-cover rounded-2xl"
                    />
                  </div>

                  <div className="w-full md:w-[60%]">
                    <div className="bg-[#f6e3c8]/90 text-[#5a1f12] p-8 rounded-2xl shadow-xl">
                      <h3 className="text-2xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="mb-6">{item.desc}</p>
                      <NavLink to={item.link}>
                        <button className="bg-[#8c2f1d] text-white px-6 py-2 rounded-full">
                          View Details →
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= OUR FAMILY ================= */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            ଆମ ପରିବାର <br /> Our Family
          </h2>

          <div className="scroll-container">
            <div className="scroll-track gap-8 px-6">
              {[...familyMembers, ...familyMembers].map((name, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-[#fdf7ef] border border-[#d6b97b] rounded-lg text-center p-6 shadow"
                >
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-24 h-24 mx-auto rounded-full border-4 border-[#c9a24d] mb-4"
                    alt=""
                  />
                  <h3 className="font-semibold">{name}</h3>
                  <NavLink
                    to="/books"
                    className="text-[#7a2e1f] hover:underline text-sm"
                  >
                    View Books
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= READER REVIEWS ================= */}
        <section className="bg-[#7a2e1f]/30 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fdf7ef]">
            ପାଠକ ସମୀକ୍ଷା <br /> Reader Reviews
          </h2>

          <div className="scroll-container">
            <div className="scroll-track gap-8 px-6">
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="min-w-[300px] bg-[#fdf7ef] text-[#3b2a1a] p-6 rounded-xl shadow-lg border border-[#d6b97b]"
                >
                  <h3 className="font-semibold mb-2">{review.name}</h3>
                  <div className="text-[#c9a24d] text-sm mb-2">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  <p className="text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OUR SPONSORS ================= */}
        <section className="relative py-20 text-white">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">ଆମ ସହଯୋଗୀ</h2>
              <p className="mt-2 text-lg opacity-90">Our Sponsors</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-xl p-6 flex items-center justify-center shadow-lg"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {showRegister && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Register
            onSuccess={() => {
              localStorage.setItem("registered", "true");
              setShowRegister(false);
              navigate("/login");
            }}
          />
        </div>
      )}
    </>
  );
};

export default Home;
