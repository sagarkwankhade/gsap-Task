import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>
        <form className="flex flex-col space-y-4 w-80">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="bg-blue-500 text-white py-2 rounded">Sign In</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
