import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
        <div
          ref={formRef}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign In
          </h2>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-semibold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
