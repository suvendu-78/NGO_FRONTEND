import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-black to-gray-900 px-4 py-10 text-white">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* 🔴 PAGE HEADER */}
        <div className="flex items-center gap-3 justify-center">
          <FileText className="text-amber-400" size={34} />
          <h1 className="text-3xl font-bold text-center">
            Terms & Conditions
          </h1>
        </div>

        {/* ================= ENGLISH CARD ================= */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            📄 Terms & Conditions (English)
          </h2>

          <p className="text-gray-300 mb-6">
            Please read the following Terms & Conditions carefully before using
            our services.
          </p>

          <div className="space-y-6 text-gray-200 text-sm leading-relaxed">

            <section>
              <h3 className="font-semibold text-lg mb-2">
                1. Use of Service
              </h3>
              <p>
                This website and digital library are intended strictly for
                personal and educational use. Any commercial use is strictly
                prohibited.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                2. E-Book Policy
              </h3>
              <p>
                Users can read e-books only after successful purchase. Purchased
                e-books must not be shared, copied, downloaded, or redistributed
                in any form.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                3. Physical Book Orders
              </h3>
              <p>
                While ordering physical books, users must provide accurate
                delivery details. We are not responsible for failed deliveries
                caused by incorrect address information.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                4. Payment
              </h3>
              <p>
                All payments are processed through secure payment gateways. Once
                a payment is successfully completed, it is non-refundable.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                5. Refund & Cancellation
              </h3>
              <p>
                E-book purchases are strictly non-refundable. Refunds for
                physical books will be considered only in case of verified
                delivery-related issues.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                6. Intellectual Property Rights
              </h3>
              <p>
                All content including books, designs, and logos are protected
                under copyright laws. Unauthorized use may result in legal
                action.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                7. Modification of Terms
              </h3>
              <p>
                We reserve the right to modify these Terms & Conditions at any
                time. Updated terms will become effective immediately after
                being published on the website.
              </p>
            </section>

          </div>
        </div>

        {/* ================= ODIA CARD ================= */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            📄 ନିୟମ ଏବଂ ସର୍ତ୍ତାବଳୀ (Odia)
          </h2>

          <p className="text-gray-300 mb-6">
            ଦୟାକରି ଆମ ସେବା ବ୍ୟବହାର କରିବା ପୂର୍ବରୁ ଏହି ନିୟମ ଏବଂ
            ସର୍ତ୍ତାବଳୀଗୁଡ଼ିକୁ ସାବଧାନରେ ପଢ଼ନ୍ତୁ।
          </p>

          <div className="space-y-6 text-gray-200 text-sm leading-relaxed">

            <section>
              <h3 className="font-semibold text-lg mb-2">
                1. ସେବାର ବ୍ୟବହାର
              </h3>
              <p>
                ଏହି ୱେବସାଇଟ୍ ଏବଂ ଡିଜିଟାଲ୍ ଲାଇବ୍ରେରୀ କେବଳ ବ୍ୟକ୍ତିଗତ ଏବଂ
                ଶିକ୍ଷାମୂଳକ ଉଦ୍ଦେଶ୍ୟ ପାଇଁ ବ୍ୟବହୃତ ହେବ। କୌଣସି ବାଣିଜ୍ୟିକ
                ବ୍ୟବହାର କଠୋରଭାବେ ନିଷେଧ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                2. ଇ-ବୁକ୍ ସମ୍ବନ୍ଧୀୟ ନିୟମ
              </h3>
              <p>
                ଇ-ବୁକ୍ କ୍ରୟ କରିବା ପରେ ମାତ୍ର ଉପଯୋଗକର୍ତ୍ତା ପଢ଼ିପାରିବେ।
                କ୍ରୟ କରାଯାଇଥିବା ଇ-ବୁକ୍ ଅନ୍ୟ କାହାକୁ ଶେୟାର କିମ୍ବା
                ପୁନଃପ୍ରକାଶ କରିବା ଅନୁମତିନୁହେଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                3. ଭୌତିକ ପୁସ୍ତକ ଅର୍ଡର
              </h3>
              <p>
                ଭୌତିକ ପୁସ୍ତକ ଅର୍ଡର ସମୟରେ ଠିକଣା ସଠିକ୍ ହେବା ଆବଶ୍ୟକ।
                ଭୁଲ ଠିକଣା ପାଇଁ ଡିଲିଭରି ବିଫଳ ହେଲେ ଆମେ ଦାୟୀ ରହିବୁ ନାହିଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                4. ଅର୍ଥପ୍ରଦାନ
              </h3>
              <p>
                ସମସ୍ତ ଅର୍ଥପ୍ରଦାନ ସୁରକ୍ଷିତ ପେମେଣ୍ଟ ଗେଟୱେ ମାଧ୍ୟମରେ
                କରାଯାଏ। ଏକଥର ଅର୍ଥପ୍ରଦାନ ସଫଳ ହେଲେ ତାହା ଫେରତ ଯୋଗ୍ୟ ନୁହେଁ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                5. ରିଫଣ୍ଡ ଏବଂ କ୍ୟାନସେଲେସନ୍
              </h3>
              <p>
                ଇ-ବୁକ୍ ପାଇଁ କୌଣସି ରିଫଣ୍ଡ ମିଳିବ ନାହିଁ।
                ଭୌତିକ ପୁସ୍ତକରେ କେବଳ ଡିଲିଭରି ସମସ୍ୟା ଥିଲେ ମାତ୍ର
                ରିଫଣ୍ଡ ବିଚାର କରାଯିବ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                6. ବୈଧିକ ଅଧିକାର
              </h3>
              <p>
                ସମସ୍ତ ବିଷୟବସ୍ତୁ କପିରାଇଟ୍ ଆଇନ୍ ଅନୁସାରେ ସୁରକ୍ଷିତ।
                ଅନଧିକୃତ ବ୍ୟବହାର ଆଇନଗତ ଅପରାଧ।
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                7. ନିୟମର ପରିବର୍ତ୍ତନ
              </h3>
              <p>
                ଆମେ ଯେକୌଣସି ସମୟରେ ଏହି ନିୟମ ଏବଂ ସର୍ତ୍ତାବଳୀ
                ପରିବର୍ତ୍ତନ କରିପାରିବା।
              </p>
            </section>

          </div>
        </div>

        {/* 🔴 BACK BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 transition px-8 py-3 rounded-xl font-semibold"
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
