import React from "react";
import { FaInstagram, FaTwitter, FaPinterest, FaWhatsapp } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <Header/>
    <section className="bg-[#1e1e1e] text-gray-200 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16">
      <div className="max-w-4xl text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          Hello, I’m <span className="text-blue-400">Robert Lean</span> — a portrait and lifestyle photographer 
          capturing raw emotions and beautiful moments from India.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl">
        <div className="w-full md:w-1/2">
          <img
            src="/images/about2.jpg"
            alt="Photographer at work"
            className="rounded-2xl h-[600px] w-[470px] shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-300 text-xl space-y-4 leading-relaxed">
          <p>
            My work ranges from creative editorial portraits and couple shoots 
            to soulful travel stories and brand campaigns. I love blending natural light 
            and candid emotions to bring out authenticity in every frame.
          </p>
          <p>
            With years behind the lens, I’ve learned that storytelling through photography 
            isn’t just about visuals — it’s about connection, trust, and timeless memories.
          </p>

          <div className="flex items-center gap-5 mt-6">
            <a href="#" target="_blank" className="text-pink-400 hover:scale-120 transition-transform duration-400 text-3xl transition">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="text-blue-400 hover:scale-120 transition-transform duration-400 text-3xl transition">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" className="text-red-500 hover:scale-120 transition-transform duration-400 text-3xl transition">
              <FaPinterest />
            </a>
            <a href="#" target="_blank" className="text-green-600 hover:scale-120 transition-transform duration-400 text-3xl transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default About;
