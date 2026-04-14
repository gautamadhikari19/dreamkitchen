import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex justify-center px-6 pt-24 pb-40">
        <div className="text-center p-8 bg-white rounded-2xl shadow-md max-w-md w-full">
          
          <h1 className="text-2xl font-semibold mb-4">
            Thank You! 🎉
          </h1>

          <p className="text-gray-600 mb-6">
            Your request has been submitted successfully.  
            Our team will contact you shortly.
          </p>

          <a
            href="/"
            className="inline-block bg-black text-white px-5 py-2 rounded-lg"
          >
            Go Back Home
          </a>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}