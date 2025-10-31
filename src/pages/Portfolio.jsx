import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>
    <Header/>
    <section className="bg-[#1e1e1e] text-gray-200 py-16 px-6 md:px-20">
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-white mb-2">Portfolio</h2>
        <p className="text-gray-400">
          Capturing stories from every frame — events, portraits, and beyond.
        </p>
      </div>

     
      <h2 className="relative flex items-center justify-center text-center text-4xl font-serif text-blue-500 py-12">
        <span className="relative z-10 px-6 bg-[#1e1e1e]">Events</span>
        <span className="absolute left-0 right-0 h-[2px] bg-gray-700"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/wedding1.jpg" alt="Wedding Ceremony"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Wedding Ceremony</h3>
            <p className="text-sm text-gray-300">Kochi, India | March 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/birthday3.jpg" alt="Corporate Launch"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Birthday Party</h3>
            <p className="text-sm text-gray-300">Bangalore, India | April 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/graduation.jpg" alt="Birthday Celebration"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Graduation Ceremony</h3>
            <p className="text-sm text-gray-300">New Delhi, India | June 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/birthday2.jpg" alt="Engagement Party"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Birthday Celebration</h3>
            <p className="text-sm text-gray-300">Chennai, India | Feb 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/party.jpg" alt="Conference Shoot"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Gender Reveal Party</h3>
            <p className="text-sm text-gray-300">Mumbai, India | Jan 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/event.jpg" alt="Award Night"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Live Concert</h3>
            <p className="text-sm text-gray-300">Delhi, India | Dec 2023</p>
          </div>
        </div>
      </div>

      
      <h2 className="relative flex items-center justify-center text-center text-4xl font-serif text-blue-500 py-20">
        <span className="relative z-10 px-6 bg-[#1e1e1e]">Portraits</span>
        <span className="absolute left-0 right-0 h-[2px] bg-gray-700"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model6.jpg" alt="Studio Portrait"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Studio Portrait</h3>
            <p className="text-sm text-gray-300">Bangalore, India | Feb 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model2.jpg" alt="Fashion Editorial"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Fashion Editorial</h3>
            <p className="text-sm text-gray-300">Kochi, India | March 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model3.jpg" alt="Model Portfolio"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Model Portfolio</h3>
            <p className="text-sm text-gray-300">Goa, India | Jan 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model4.jpg" alt="Headshot Session"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Headshot Session</h3>
            <p className="text-sm text-gray-300">Mumbai, India | April 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model5.jpg" alt="Studio Concept"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Studio Concept</h3>
            <p className="text-sm text-gray-300">Delhi, India | May 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/model1.jpg" alt="Candid Portrait"
            className="w-full h-[450px] object-cover object-[center_30%] transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Candid Portrait</h3>
            <p className="text-sm text-gray-300">Pune, India | June 2024</p>
          </div>
        </div>
      </div>

     
      <h2 className="relative flex items-center justify-center text-center text-4xl font-serif text-blue-500 py-20">
        <span className="relative z-10 px-6 bg-[#1e1e1e]">Lifestyle</span>
        <span className="absolute left-0 right-0 h-[2px] bg-gray-700"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle1.jpg" alt="Beach Lifestyle Shoot"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Beach Lifestyle Shoot</h3>
            <p className="text-sm text-gray-300">Goa, India | Dec 2023</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle2.jpg" alt="Travel Photography"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Travel Photography</h3>
            <p className="text-sm text-gray-300">Jaipur, India | Nov 2023</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle6.jpg" alt="City Vibes"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">City Vibes</h3>
            <p className="text-sm text-gray-300">Mumbai, India | Oct 2023</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle4.jpg" alt="Street Style Shoot"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Street Style Shoot</h3>
            <p className="text-sm text-gray-300">Delhi, India | Jan 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle7.jpg" alt="Cafe Aesthetic"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Cafe Aesthetic</h3>
            <p className="text-sm text-gray-300">Bangalore, India | Feb 2024</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img src="/images/lifestyle3.jpg" alt="Nature Walk Shoot"
            className="w-full h-[450px] object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-semibold text-white">Nature Walk Shoot</h3>
            <p className="text-sm text-gray-300">Munnar, India | March 2024</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Portfolio;
