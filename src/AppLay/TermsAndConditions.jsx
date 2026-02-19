import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* PAGE HEADER */}
        <div className="flex items-center gap-3 justify-center border-b pb-4">
          <FileText className="text-black" size={34} />
          <h1 className="text-3xl font-bold text-center">
            Terms & Conditions
          </h1>
        </div>

        {/* ================= ENGLISH ================= */}
        <div className="border border-gray-300 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Terms & Conditions (English)
          </h2>

          <p className="mb-6">
            Please read these Terms & Conditions carefully before using our website and services.
          </p>

          <div className="space-y-6 text-sm leading-relaxed">

            <section>
              <h3 className="font-semibold text-lg mb-2">1. Use of Service</h3>
              <p>
                This website and digital library are intended strictly for personal
                and educational use. Any commercial use is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">2. User Account</h3>
              <p>
                Users must provide accurate information while registering. The user
                is responsible for maintaining account confidentiality.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">3. E-Book Policy</h3>
              <p>
                E-books can be accessed only after successful purchase. Purchased
                e-books must not be copied, shared, downloaded, or redistributed.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">4. Physical Book Orders</h3>
              <p>
                Users must provide accurate delivery details. We are not responsible
                for delivery failures caused by incorrect address information.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">5. Payment</h3>
              <p>
                All payments are processed through secure payment gateways. Once a
                payment is successfully completed, it is non-refundable.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">6. Refund & Cancellation</h3>
              <p>
                E-book purchases are strictly non-refundable. Refunds for physical
                books are considered only in verified delivery-related issues.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">7. Intellectual Property</h3>
              <p>
                All content including books, logos, and designs are protected under
                copyright laws. Unauthorized use may lead to legal action.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">8. Limitation of Liability</h3>
              <p>
                We are not liable for any indirect or consequential damages arising
                from the use of our services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">9. Modification of Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. Updated terms
                will become effective immediately upon publication.
              </p>
            </section>

          </div>
        </div>

        {/* ================= ODIA ================= */}
        <div className="border border-gray-300 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            ନିୟମ ଏବଂ ସର୍ତ୍ତାବଳୀ (Odia)
          </h2>

          <p className="mb-6">
            ଦୟାକରି ଆମ ୱେବସାଇଟ୍ ଏବଂ ସେବା ବ୍ୟବହାର ପୂର୍ବରୁ ଏହି ନିୟମଗୁଡ଼ିକୁ ପଢ଼ନ୍ତୁ।
          </p>

          <div className="space-y-6 text-sm leading-relaxed">

            <section>
              <h3 className="font-semibold text-lg mb-2">1. ସେବାର ବ୍ୟବହାର</h3>
              <p>
                ଏହି ୱେବସାଇଟ୍ କେବଳ ବ୍ୟକ୍ତିଗତ ଏବଂ ଶିକ୍ଷାମୂଳକ ଉଦ୍ଦେଶ୍ୟ ପାଇଁ।
                ବାଣିଜ୍ୟିକ ବ୍ୟବହାର ନିଷେଧ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">2. ବ୍ୟବହାରକାରୀ ଖାତା</h3>
              <p>
                ରେଜିଷ୍ଟ୍ରେସନ୍ ସମୟରେ ସଠିକ୍ ସୂଚନା ଦେବା ଆବଶ୍ୟକ।
                ଖାତାର ସୁରକ୍ଷା ଉପଯୋଗକର୍ତ୍ତାଙ୍କ ଦାୟିତ୍ୱ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">3. ଇ-ବୁକ୍ ନୀତି</h3>
              <p>
                କ୍ରୟ ପରେ ମାତ୍ର ଇ-ବୁକ୍ ପଢ଼ିହେବ।
                ଅନୁମତି ବିନା ଶେୟାର କିମ୍ବା ପୁନଃପ୍ରକାଶ ନିଷେଧ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">4. ଭୌତିକ ପୁସ୍ତକ ଅର୍ଡର</h3>
              <p>
                ଠିକଣା ସଠିକ୍ ହେବା ଆବଶ୍ୟକ।
                ଭୁଲ ଠିକଣା ପାଇଁ ଆମେ ଦାୟୀ ନୁହେଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">5. ଅର୍ଥପ୍ରଦାନ</h3>
              <p>
                ସମସ୍ତ ଅର୍ଥପ୍ରଦାନ ସୁରକ୍ଷିତ ଗେଟୱେ ମାଧ୍ୟମରେ।
                ଏକଥର ହେଲେ ଫେରତ ଯୋଗ୍ୟ ନୁହେଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">6. ରିଫଣ୍ଡ ଏବଂ ବାତିଲ</h3>
              <p>
                ଇ-ବୁକ୍ ପାଇଁ ରିଫଣ୍ଡ ନାହିଁ।
                ଭୌତିକ ପୁସ୍ତକ ପାଇଁ କେବଳ ଡିଲିଭରି ସମସ୍ୟାରେ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">7. ବୈଧିକ ଅଧିକାର</h3>
              <p>
                ସମସ୍ତ ବିଷୟବସ୍ତୁ କପିରାଇଟ୍ ଆଇନ୍ ଅନୁସାରେ ସୁରକ୍ଷିତ।
                ଅନଧିକୃତ ବ୍ୟବହାର ଆଇନଗତ କାର୍ଯ୍ୟ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">8. ଦାୟିତ୍ୱ ସୀମା</h3>
              <p>
                ସେବା ବ୍ୟବହାରରୁ ହେଉଥିବା କ୍ଷତି ପାଇଁ ଆମେ ଦାୟୀ ନୁହେଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">9. ନିୟମର ପରିବର୍ତ୍ତନ</h3>
              <p>
                ଆମେ ଯେକୌଣସି ସମୟରେ ନିୟମ ପରିବର୍ତ୍ତନ କରିପାରିବା।
              </p>
            </section>

          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <ArrowLeft />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
