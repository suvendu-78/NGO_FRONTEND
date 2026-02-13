import { BookOpen, Users, HeartHandshake } from "lucide-react";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6d1f12] via-[#7b2316] to-[#5b1a10] text-white">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ସଂଯୋଗୀ ସାହିତ୍ୟ ସଂସଦ
        </h1>
        <p className="text-amber-200 text-lg">କୁଣ୍ଡାପିଠା, ଘଟଗାଁ, କେନ୍ଦୁଝର</p>
      </div>

      {/* IMAGE SLIDER */}
      <div className="overflow-hidden py-6 border-y border-amber-500/30">
        <div className="flex gap-6 animate-scroll">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="ngo"
              className="h-52 w-80 object-cover rounded-xl shadow-xl"
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-gray-200 leading-8 text-justify">
          <h2 className="text-2xl font-semibold text-amber-300 mb-6 text-center">
            :- ସମ୍ୟକ୍ ସୂଚନା :-
          </h2>
          <p>
            ୧୯୮୭ ମସିହା ଜାନୁଆରୀ ମାସ ୧ ତାରିଖ ଦିନ ଆମର ଐତିହ୍ୟ, ସଂସ୍କୃତି ଓ ପରମ୍ପରାକୁ
            ସାହିତ୍ୟ ମାଧ୍ୟମରେ ଉଜ୍ଜୀବୀତ କରାଇବା ସହ ତା'ର ପ୍ରଚାର ଓ ପ୍ରସାର କରିବା
            ନିମନ୍ତେ କେତେକ ଯୁବ ସାହିତ୍ୟ ପ୍ରେମୀ ବନ୍ଧୁମାନଙ୍କୁ ଏକତ୍ରିତ କରି କୁଣ୍ଡାପିଠା
            ଗ୍ରାମର ଉଦୀୟମାନ ଯୁବକ ଉପେନ୍ଦ୍ର ଦାଶ ପ୍ରତିଷ୍ଠା କରିଥିଲେ “ସଂଯୋଗୀ ସାହିତ୍ୟ
            ସଂସଦ କୁଣ୍ଡାପିଠା, ଘଟଗାଁ, କେନ୍ଦୁଝର”।
          </p>
          <p className="mt-4">
            ୧୯୯୦ ମସିହାରେ ବାବୁଲାଲ ପଲେଇ ସଂସଦରେ ଯୋଗଦାନ କରି ଏହାକୁ କ୍ରିୟାଶୀଳ କରିଥିଲେ।
            ପରବର୍ତ୍ତୀ କାଳରେ ସନ୍ତୋଷ କୁମାର ପତି, ହୃଷୀକେଶ ଦାଶ ଓ ଡ଼ାଃ ଲିସନ ମହାନ୍ତି
            ଯୋଗଦେଇ ସଂସଦକୁ ରାଜ୍ୟସ୍ତରରେ ବିକଶିତ କରିଛନ୍ତି।
          </p>
          <p className="mt-4">
            ଏହି ସଂସଦ ଅଣରାଜନୈତିକ ଓ ଅଣସାମ୍ପ୍ରଦାୟିକ। ସୋସାଇଟି ପଞ୍ଜିକରଣ ଆଇନ XXI–1960
            ଅନୁଯାୟୀ ପଞ୍ଜିକୃତ। ପଞ୍ଜିକରଣ ନଂ. K.J.R. 5631-50/2019-20
          </p>

          <p className="mt-4">
            ସଂସଦର କାର୍ଯ୍ଯ ପ୍ରଥମେ ଜିଲ୍ଲା ସ୍ତରରେ କାର୍ଯ୍ୟକ୍ରମ କରୁଥିଲେ ମଧ ବର୍ତ୍ତମାନ
            ତା'ର ପରିସର : ସମଗ୍ର ଓଡ଼ିଶା ଓ ତା'ର ପରିସରରେ ଥିବା ଯୁବ ସାହିତ୍ୟିକଙ୍କୁ
            ସାହିତ୍ୟ ପ୍ରଚାର ଓ ପ୍ରସାର କରିବା
          </p>
          <h3 className="text-xl font-semibold text-amber-300 mt-8 mb-4">
            ସଂସଦର ଲୋଗୋର ଅର୍ଥ
          </h3>
          <p>
            ଦିନରାତି ଓ ଆଲୋକ ଅନ୍ଧାର ପରି ଜନ୍ମମୃତ୍ୟୁ ସହିତ ଜୀବନ ଅଙ୍ଗାଙ୍ଗୀ ଭାବେ ଜଡ଼ିତ
            , ସୂର୍ଯ୍ୟ ସହିତ ପଦ୍ମ ଓ ଚନ୍ଦ୍ର ସହିତ କଇଁର ସଂପର୍କ ପରି ମାନବ ଜୀବନ ସହିତ
            ସାହିତ୍ୟର ସଂପର୍କ ଅତି ନିବିଡ଼, ରାତିରେ ଆକାଶର ତାରା ଦିଗହରା ପଥିକର ଆଶା ଓ
            ଆଶ୍ଵାସନାର ପ୍ରତୀକ, ଦିନରେ ଆକାଶର ଉଡ୍ଡୀୟମାନ କପୋତ ବାର୍ତ୍ତାବହର ପ୍ରତୀକ,
            ଆଲୋକ ଅନ୍ଧକାରର ସନ୍ଧିକ୍ଷଣ ମୁହୂର୍ତ୍ତରେ ପ୍ରଜ୍ଜ୍ଵଳିତ ପ୍ରଦୀପ ଶିଖା ମାନବ
            ସମାଜକୁ ମା ତାରିଣୀଙ୍କ ତୃତୀୟ ନୟନ ପରି ଜ୍ୟୋତିର ପ୍ରତୀକ, ଛୋଟ ଅଲିଭ ଡାଳ
            ଜିଲ୍ଲା, ରାଜ୍ୟ ସ୍ତରରେ ଓ ବଡ଼ଅଲିଭ୍ ଡାଳ ଜାତୀୟ ଓ ଅର୍ନ୍ତଜାତୀକ ସ୍ତରରେ ସତ୍ୟ
            ଶାନ୍ତି ଓ ଧର୍ମନିରପେକ୍ଷ ଉପରେ ବିଶ୍ୱାସ ଓ ସହଯୋଗର ପ୍ରତୀକ, ସର୍ବୋପରି ଚକ୍ର
            ଅବିରାମ ସମୟର ଚକ୍ର ପରି ଗତି ଓ ପ୍ରଗତିର ପ୍ରତୀକ ।
          </p>
          <h3 className="text-xl font-semibold text-amber-300 mt-8 mb-4">
            ଉଦ୍ଦେଶ୍ୟ ଓ ଲକ୍ଷ୍ୟ
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>ସାହିତ୍ୟ ପ୍ରଚାର ଓ ପ୍ରସାର</li>
            <li>ଯୁବ ସାହିତ୍ୟିକଙ୍କୁ ପ୍ରୋତ୍ସାହନ</li>
            <li>ପୁସ୍ତକ ଓ ପତ୍ରିକା ପ୍ରକାଶ</li>
            <li>କବିତା ପାଠୋତ୍ସବ ଓ ଶିଶୁ ମେଳା</li>
            <li>ପୁସ୍ତକ ମେଳା ଆୟୋଜନ</li>
            <li>ସମାଜସେବା ଓ ସ୍ୱାସ୍ଥ୍ୟ ସେବା</li>
            <li>ଭିନ୍ନକ୍ଷମଙ୍କ ପୁନର୍ବାସ</li>
            <li>ନାରୀ ସଶକ୍ତିକରଣ</li>
            <li>ପରିବେଶ ସୁରକ୍ଷା</li>
          </ul>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Feature
            icon={<BookOpen size={30} />}
            title="ସାହିତ୍ୟ ପ୍ରଚାର"
            desc="ଓଡ଼ିଆ ଭାଷା ଓ ସାହିତ୍ୟର ସୁରକ୍ଷା।"
          />
          <Feature
            icon={<Users size={30} />}
            title="ସମାଜ ସେବା"
            desc="ଶିକ୍ଷାମୂଳକ ଓ ସାମାଜିକ କାର୍ଯ୍ୟକ୍ରମ।"
          />
          <Feature
            icon={<HeartHandshake size={30} />}
            title="ସଂସ୍କୃତି ସୁରକ୍ଷା"
            desc="ମାତୃଭାଷା ଓ ମାତୃଭୂମି ପ୍ରତି ମମତା।"
          />
        </div>
      </div>

      {/* SLIDER ANIMATION */}
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
