import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl text-grey-800 font-bold mb-4">Not Found</h2>
      <p className="text-lg text-grey-600 mb-6">Could not find the requested resource</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;