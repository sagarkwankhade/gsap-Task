import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 px-4">
        <div
          ref={formRef}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-teal-600 font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
