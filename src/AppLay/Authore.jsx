import gangadhar from "../assets/gangadhar.jpeg";

const Authors = () => {
  const sections = [
    {
      name: "Shivaram Mishra",
      title: "Renowned Odia Writer & Poet",
      image: { gangadhar },
      achievements: [
        "Author of 20+ Odia literary works",
        "Recipient of State Sahitya Award",
        "Promoter of modern Odia poetry",
        "Active mentor for young writers",
      ],
    },
    {
      name: "Sapna Arora",
      title: "Storyteller & Literary Curator",
      image: { gangadhar },
      achievements: [
        "Published 10+ short story collections",
        "Editor of Odia Sahitya Magazine",
        "Organized 50+ literary events",
        "Women voice advocate in literature",
      ],
    },
    {
      name: "Samuel Roy",
      title: "Novelist & Cultural Researcher",
      image: { gangadhar },
      achievements: [
        "Famous for socio-cultural novels",
        "Researcher on Odia folk literature",
        "Speaker at national literature forums",
        "Contributor to Odia archives",
      ],
    },
  ];
  return (
    <>
      <div className="bg-[#7a2e1f] py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {sections.map((item, index) => (
            <div
              key={item.name}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl shadow-xl border-4 border-[#c9a24d]"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2 text-[#fdf6ef]">
                <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
                <p className="text-[#f7dca1] mb-6">{item.title}</p>

                <ul className="space-y-3 text-sm">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="bg-[#5a1f14]/60 px-5 py-3 rounded-xl border border-[#c9a24d]/40"
                    >
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Authors;
