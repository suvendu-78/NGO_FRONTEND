import { HeartHandshake, Users, BookOpen } from "lucide-react";

const About = () => {
  const ngoImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6d1f12] via-[#7b2316] to-[#5b1a10] text-white">
      {/* 🔥 HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Organization
        </h1>
        <p className="text-amber-200 max-w-2xl mx-auto">
          Samyogee Sahitya Sansad is dedicated to preserving Odia literature,
          empowering communities, and inspiring future generations through
          education, culture, and social development.
        </p>
      </div>

      {/* 🔥 MOVING NGO IMAGE STRIP */}
      <div className="overflow-hidden w-full py-6 border-y border-amber-500/30">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {[...ngoImages, ...ngoImages].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-44 w-72 object-cover rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* 🔥 ABOUT CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-semibold mb-6 text-amber-300">
            Who We Are
          </h2>

          <p className="text-gray-200 leading-8 mb-4">
            Samyogee Sahitya Sansad is a non-profit organization committed to
            promoting Odia literature, supporting social change, and building a
            brighter future through education and cultural awareness. Our
            mission is to connect communities through knowledge and inspire
            individuals to contribute positively to society.
          </p>

          <p className="text-gray-200 leading-8">
            Through digital initiatives, book publishing, and social programs,
            we aim to preserve heritage while empowering youth and fostering
            inclusive growth. Our NGO works tirelessly to create opportunities
            for learning, creativity, and collaboration.
          </p>
        </div>
      </div>

      {/* 🔥 FEATURES SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
        <Feature
          icon={<BookOpen size={32} />}
          title="Promote Literature"
          desc="Preserving Odia literary heritage through digital platforms."
        />
        <Feature
          icon={<Users size={32} />}
          title="Community Impact"
          desc="Empowering communities with education and social initiatives."
        />
        <Feature
          icon={<HeartHandshake size={32} />}
          title="Social Service"
          desc="Supporting meaningful causes and creating positive change."
        />
      </div>

      {/* 🔥 ANIMATION STYLE */}
      <style>{`
        .animate-scroll {
          animation: scrollLeft 25s linear infinite;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition">
    <div className="text-amber-400 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

export default About;