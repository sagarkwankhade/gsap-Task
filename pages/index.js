import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", 
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Product</h1>
        <p className="text-lg mb-6">Scroll down to see the magic 🚀</p>
      </section>

      <section className="h-screen flex justify-center items-center bg-white">
        <img
          ref={imageRef}
          src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
          alt="GSAP Logo"
          className="w-80 h-auto"
        />
      </section>

      <Footer />
    </>
  );
}
