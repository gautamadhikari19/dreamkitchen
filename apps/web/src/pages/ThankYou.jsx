export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Thank You! 🎉
        </h1>
        <p className="text-gray-600 mb-4">
          Your request has been submitted successfully.
        </p>
        <a
          href="/"
          className="inline-block bg-black text-white px-4 py-2 rounded-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}