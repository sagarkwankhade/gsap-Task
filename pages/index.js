import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featureRefs = useRef([]);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Hero fade-in
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Features fade-in
    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    // About section slide-in
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );

    // Contact section fade-up
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section with Gradient */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-6"
      >
        <div className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to My Product 🚀
          </h1>
          <p className="text-lg mb-6">
            Experience smooth animations with GSAP and the power of Next.js.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transform transition duration-300 text-white font-semibold rounded-lg shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section with Images + Hover */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-black">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 text-black">
          {[
            {
              title: "Fast",
              desc: "Our product is optimized for performance with blazing speed.",
              img: "https://cdn-icons-png.flaticon.com/512/3079/3079165.png", // Rocket
            },
            {
              title: "Smooth",
              desc: "Enjoy buttery-smooth animations powered by GSAP.",
              img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", // Animation
            },
            {
              title: "Responsive",
              desc: "Looks great on mobile, tablet, and desktop devices.",
              img: "https://cdn-icons-png.flaticon.com/512/1829/1829582.png", // Responsive devices
            },
            {
              title: "Secure",
              desc: "Your data is safe with modern security best practices.",
              img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // Lock
            },
          ].map((feature, i) => (
            <div
              key={i}
              ref={(el) => (featureRefs.current[i] = el)}
              className="p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mx-auto mb-6 transform transition duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 bg-gradient-to-r from-blue-400 to-teal-500 flex flex-col md:flex-row items-center justify-center gap-12 px-6 text-white"
      >
        <img
          src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
          alt="GSAP"
          className="w-64 bg-white p-6 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-110"
        />
        <div className="max-w-md text-center md:text-left bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">About Our Product</h2>
          <p>
            Built with modern tools like Next.js and GSAP, this landing page
            demonstrates the power of animations and clean UI design.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 bg-gradient-to-br from-teal-500 via-green-500 to-lime-500 text-white text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          We would love to hear from you! Drop us a message below.
        </p>
        <form className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl shadow-2xl text-gray-900">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-500 hover:scale-105 transform transition duration-300 text-white font-semibold rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
