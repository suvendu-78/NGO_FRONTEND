import odisha from "../assets/odisha.jpeg";
import bgthim from "../assets/bgthim.png";
const Event = () => {
  return (
    <>
      <section
        className="w-full overflow-hidden bg-[#9c3d1e] py-16"
        style={{ backgroundImage: `url(${bgthim})` }}
      >
        <div className="overflow-hidden">
          <div className="flex w-max gap-10 animate-posterScroll">
            <img
              src={odisha}
              alt="Odisha Art"
              className="w-[520px]  rounded-xl border-4 border-[#e8c28b] shadow-2xl"
            />
            <img
              src={odisha}
              alt="Odisha Art"
              className="w-[520px] rounded-xl border-4 border-[#e8c28b] shadow-2xl"
            />
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-[#5c1f0c]">
        <div className="flex gap-12 animate-review-scroll whitespace-nowrap text-white px-6">
          <span>📢 New Odia Book Released</span>
          <span>📢 Author Meet on 15 Feb</span>
          <span>📢 Call for Manuscripts</span>
          <span>📢 New Odia Book Released</span>
          <span>📢 Author Meet on 15 Feb</span>
          <span>📢 Call for Manuscripts</span>
        </div>
      </div>
      <section className="bg-white py-12 px-6 md:px-12">
        {/* HEADING */}
        <h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-4">
          Celebrating Odia Literature & Cultural Expression
        </h2>

        {/* TOP DESCRIPTION */}
        <p className="text-black text-center max-w-4xl mx-auto mb-6 text-sm md:text-base">
          A dedicated platform to honour stories, voices, and creative
          expressions that define the soul of Odisha and its literary legacy.
        </p>

        {/* MAIN PARAGRAPH */}
        <p className="text-black text-sm md:text-base leading-relaxed max-w-6xl mx-auto text-justify">
          Our literature event is a celebration of the rich and timeless
          heritage of Odia language and storytelling, bringing together writers,
          poets, readers, and thinkers from across the state and beyond. This
          platform encourages both emerging and established voices to share
          original poetry, short stories, novels, and essays rooted in culture,
          tradition, and contemporary life. Through live readings, thoughtful
          discussions, book launches, and interactive sessions, the event
          creates a space where ideas flow freely and creativity thrives. It
          honors legendary contributors to Odia literature while nurturing new
          talent and fresh perspectives. By connecting generations through
          words, art, and expression, the event aims to preserve our literary
          heritage, inspire future storytellers, and keep the spirit of Odia
          literature alive—one voice, one story, and one page at a time.
        </p>

        {/* BOTTOM DESCRIPTION */}
        <p className="text-black text-center max-w-4xl mx-auto mt-6 text-sm md:text-base italic">
          Join us in preserving our language, celebrating our culture, and
          shaping the future of Odia literature together.
        </p>
      </section>
    </>
  );
};

export default Event;
