import upendradash from "../assets/upendradash.jpeg";
import bgthim from "../assets/bgthim.png";
import babulalpalei from "../assets/babulalpalei.jpeg";
import lishanmohanty from "../assets/lishanmohanty.jpeg";

const Authors = () => {
  const sections = [
    {
      name: "ଉପେନ୍ଦ୍ର ଦାଶ",
      role: "ଅଧ୍ୟକ୍ଷ ଓ ସାହିତ୍ୟ ନାୟକ",
      dob: "୧୫ ଅଗଷ୍ଟ ୧୯୫୫",
      address: "କଟକ, ଓଡିଶା, ଭାରତ",
      about:
        "ଉପେନ୍ଦ୍ର ଦାଶ ଓଡିଆ ସାହିତ୍ୟ ଜଗତରେ ଏକ ପ୍ରସିଦ୍ଧ ନାମ। ସେ ଆଧୁନିକ ଓଡିଆ କବିତା ଓ ସଂସ୍କୃତିକ ସଂରକ୍ଷଣରେ ବିଶେଷ ଅବଦାନ ରଖିଛନ୍ତି। ତାଙ୍କର ସାହିତ୍ୟ କୃତି ନୂତନ ପିଢ଼ିକୁ ପ୍ରେରଣା ଦେଇଆସୁଛି।",
      books: ["ମୋ ମାଟି ମୋ ଦେଶ", "ଓଡିଆ କବିତା ସଂଗ୍ରହ", "ସଂସ୍କୃତିର ସ୍ୱର"],
      awards: ["ରାଜ୍ୟ ସାହିତ୍ୟ ପୁରସ୍କାର", "ଜାତୀୟ କବି ସମ୍ମାନ"],
      image: upendradash,
    },
    {
      name: "ବବୁଲାଲ ପାଲେଇ",
      role: "କାହାଣୀକାର ଓ ସାହିତ୍ୟ ସମ୍ପାଦିକା",
      dob: "୧୨ ମାର୍ଚ୍ଚ ୧୯୮୦",
      address: "ଭୁବନେଶ୍ୱର, ଓଡିଶା, ଭାରତ",
      about:
        "ସପ୍ନା ଅରୋରା ଜଣେ ଉତ୍ସାହୀ କାହାଣୀକାର ଓ ସାହିତ୍ୟ ପ୍ରେମୀ। ସେ ଓଡିଆ ସାହିତ୍ୟରେ ନାରୀ ସ୍ୱରକୁ ପ୍ରୋତ୍ସାହନ ଦେବାରେ ସକ୍ରିୟ ଅଟନ୍ତି।",
      books: ["ନିରବ ନଦୀ", "ଶବ୍ଦର ନାରୀମାନେ"],
      awards: ["ଶ୍ରେଷ୍ଠ କାହାଣୀ ପୁରସ୍କାର"],
      image: babulalpalei,
    },
    {
      name: "ଲିଶାନ ମହାନ୍ତି",
      role: "ଉପନ୍ୟାସକାର ଓ ସଂସ୍କୃତି ଗବେଷକ",
      dob: "୫ ଜାନୁଆରୀ ୧୯୭୫",
      address: "ପୁରୀ, ଓଡିଶା, ଭାରତ",
      about:
        "ସାମୁଏଲ ରାୟ ସାମାଜିକ ଓ ସଂସ୍କୃତିକ ଉପନ୍ୟାସ ପାଇଁ ପ୍ରସିଦ୍ଧ। ସେ ଓଡିଆ ଲୋକ ସାହିତ୍ୟ ଉପରେ ଗଭୀର ଅନୁସନ୍ଧାନ କରିଛନ୍ତി।",
      books: ["ଲୋକ ମୂଳ", "ଓଡିଶାର ପ୍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ", "ଓଡଡിഷ്യാര്\u200Cപ്രതിധ്വനി"],
      awards: ["ସାହିତ୍ୟ ଶ୍ରେଷ୍ଠତା ପୁରସ୍କାର"],
      image: lishanmohanty,
    },
  ];

  return (
    <div className="bg-[#7a2e1f] py-20">

      {/* ===== HEADER SECTION ===== */}
      <div className="text-center mb-20 px-6">
        <div className="inline-block">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#fdf6ef]">
            ଆମ ମୂଲ୍ୟବାନ ଲେଖକ ଓ ସଦସ୍ୟମାନେ
          </h1>
          <div className="h-1 bg-[#c9a24d] mt-4 rounded-full"></div>
        </div>
      </div>

      {/* ===== AUTHORS SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {sections.map((item, index) => (
          <div
            key={item.name}
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* ଛବି */}
            <div className="flex justify-center lg:w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-56 h-64 object-cover rounded-xl shadow-lg border-4 border-[#c9a24d] hover:scale-105 transition duration-300"
              />
            </div>

            {/* ବିବରଣୀ */}
            <div className="lg:w-2/3 text-[#fdf6ef] space-y-4">
              <h2 className="text-3xl font-bold">{item.name}</h2>
              <p className="text-[#f7dca1] font-semibold text-lg">
                {item.role}
              </p>

              <div className="text-sm space-y-1">
                <p>
                  <span className="font-semibold text-[#f7dca1]">
                    ଜନ୍ମତାରିଖ:
                  </span>{" "}
                  {item.dob}
                </p>
                <p>
                  <span className="font-semibold text-[#f7dca1]">
                    ଠିକଣା:
                  </span>{" "}
                  {item.address}
                </p>
              </div>

              <p className="text-sm leading-relaxed bg-[#5a1f14]/60 p-4 rounded-xl border border-[#c9a24d]/40">
                {item.about}
              </p>

              {/* ପ୍ରମୁଖ ପୁସ୍ତକ */}
              <div>
                <h3 className="text-lg font-semibold text-[#f7dca1] mb-2">
                  ପ୍ରମୁଖ ପୁସ୍ତକ
                </h3>
                <ul className="flex flex-wrap gap-3 text-sm">
                  {item.books.map((book, i) => (
                    <li
                      key={i}
                      className="bg-[#5a1f14] px-4 py-2 rounded-lg border border-[#c9a24d]/40"
                    >
                      {book}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ପୁରସ୍କାର */}
              <div>
                <h3 className="text-lg font-semibold text-[#f7dca1] mt-6 mb-2">
                  ପୁରସ୍କାର
                </h3>
                <ul className="flex flex-wrap gap-3 text-sm">
                  {item.awards.map((award, i) => (
                    <li
                      key={i}
                      className="bg-[#6a2a1c] px-4 py-2 rounded-lg border border-[#c9a24d]/40"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
