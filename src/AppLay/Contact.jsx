import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-[#7a2e1f] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#fdf6ef] mb-4">
              Contact Us
            </h1>
            <p className="text-[#f7dca1] max-w-2xl mx-auto">
              Reach out to Sangogi Odia Sahitya Sansad. We would love to hear
              from writers, readers, and collaborators.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT INFO PANEL */}
            <div className="bg-[#5a1f14]/70 rounded-2xl p-10 text-[#fdf6ef] border border-[#c9a24d]/40">
              <h2 className="text-2xl font-bold mb-6">
                ସମ୍ଯୋଗୀ ସାହିତ୍ୟ ସଂସଦ
                <br />
                SAMYOGEE SAHITYA SANSAD
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#c9a24d]" />
                  <p>
                    Plot No:50/2867,Ghatagaon,Keonjhar,Odisha,758027
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-[#c9a24d]" />
                  <p>+917439058125</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#c9a24d]" />
                  <p>dr.lishanpt@gmail.com</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-3 text-[#f7dca1]">Follow Us</h3>
                <div className="flex gap-4 text-sm">
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
            </div>

            {/* RIGHT FORM */}
            <div className="bg-[#fdf6ef] rounded-2xl p-10 shadow-lg">
              <h2 className="text-2xl font-bold text-[#7a2e1f] mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#c9a24d]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#c9a24d]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#c9a24d]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#c9a24d]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#7a2e1f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a1f14] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
