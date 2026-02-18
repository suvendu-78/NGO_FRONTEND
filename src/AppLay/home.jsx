import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import odisha from "../assets/odisha.jpeg";
import writer from "../assets/writer.png";
import bgthim from "../assets/bgthim.png";
import { motion } from "framer-motion";
import Register from "./user/Register.jsx";
import upcomigevents from "../assets/upcomingevents.png";
import ebook from "../assets/ebook.png";
import magazine from "../assets/magazine.png";
import samyogee from "../assets/samyogee.jpeg";
import upendradash from "../assets/upendradash.jpeg";
// import bgthim from "../assets/bgthim.png";
import babulalpalei from "../assets/babulalpalei.jpeg";
import lishanmohanty from "../assets/lishanmohanty.jpeg";
import santoshpati from "../assets/santoshpati.jpeg";
import tapandash from "../assets/tapandash.jpeg";
import santunu from "../assets/santunu.jpeg";
import smita from "../assets/smita.jpeg";
import minabehera from "../assets/minabehera.jpeg";
import sujatagupta from "../assets/sujatagupta.jpeg";
import hrusikesha from "../assets/hrusikesha.jpeg";
import arjun from "../assets/arjun.jpeg";
import bidya from "../assets/bidya.jpeg";
import kailash from "../assets/kailash.jpeg";
import saroj from "../assets/saroj.jpeg";

const Home = () => {
  const [showRegister, setShowRegister] = useState(true);
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const registered = localStorage.getItem("registered");
  //   if (registered) setShowRegister(false);
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const registered = localStorage.getItem("registered");

    // show register only if NOT logged in
    if (!token && !registered) {
      setShowRegister(true);
    } else {
      setShowRegister(false);
    }
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
    { name: "ଉପେନ୍ଦ୍ର ଦାଶ", image: upendradash },
    { name: "ବବୁଲାଲ ପଲେଇ", image: babulalpalei },
    { name: "ଡା.ଲିସନ ମହାନ୍ତି", image: lishanmohanty },
    { name: "ସନ୍ତୋଷ କୁମାର ପତି", image: santoshpati },
    { name: "ତପନ କୁମାର ଦାଶ", image: tapandash },
    { name: "ଶାନ୍ତନୁ କୁମାର ମହାପାତ୍ର", image: santunu },
    { name: "ସ୍ମିତାରାଣୀ ରାଉତ", image: smita },
    { name: "ମିନା ବେହେରା", image: minabehera },
    { name: "ସୁଜାତା ଗୁପ୍ତା", image: sujatagupta },
    { name: "ହୃଷୀକେଶ ଦାଶ", image: hrusikesha },
    { name: "ଜ୍ୟୋତ୍ସ୍ନାରାଣୀ ଦାଶ", image: bgthim },
    { name: "ଅର୍ଜୁନ ଚରଣ ବେହେରା", image: arjun },
    { name: "ବିଦ୍ଯାଭାରତି ପଲେଇ", image: bidya },
    { name: "କୈଳାସ ଚନ୍ଦ୍ର ତନ୍ତୀ", image: kailash },
    { name: "ସରୋଜ କୁମାର ସେନାପତି", image: saroj },
  ];

  const defaultReviews = [
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

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews([...defaultReviews, ...storedReviews]);
  }, []);

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
              {[...familyMembers, ...familyMembers].map((member, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-[#fdf7ef] border border-[#d6b97b] rounded-lg text-center p-6 shadow"
                >
                  <img
                    src={member.image}
                    className="w-24 h-24 mx-auto rounded-full border-4 border-[#c9a24d] mb-4"
                    alt={member.name}
                  />
                  <h3 className="font-semibold">{member.name}</h3>
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
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {review.rating >= star ? "★" : "☆"}
                      </span>
                    ))}
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
