import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
    <Header/>
    <div className="bg-[#121212] text-white py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
        Our Photography Services
      </h1>

      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/wedding3.jpg"
            alt="Wedding"
            className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">WEDDING PHOTOGRAPHY</h2>
          <p className="text-gray-300">
            Capture your love story with elegant and timeless photographs.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Full-day coverage</li>
            <li>Professional editing</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/event.jpg"
            alt="Event Photography"
            className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">EVENT PHOTOGRAPHY</h2>
          <p className="text-gray-300">
            From birthdays to corporate functions, we capture every memorable
            moment with precision and creativity.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Corporate & private events</li>
            <li>Birthdays, parties, and ceremonies</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/lifestyle1.jpg"
            alt="Fashion Photography"
            className="w-full h-[500px] object-cover object-[center_20%] transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">FASHION PHOTOGRAPHY</h2>
          <p className="text-gray-300">
            Professional portfolio and branding photoshoots for models and
            clothing lines.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Portfolio & editorial shoots</li>
            <li>Model and brand collaborations</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/travel.jpg"
            alt="Travel and Lifestyle"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">TRAVEL & LIFESTYLE SHOOTS</h2>
          <p className="text-gray-300">
            Capture stunning visuals for blogs, social media, or personal
            branding journeys.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Outdoor and destination shoots</li>
            <li>Content for lifestyle brands</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/headshot.jpg"
            alt="Corporate Headshots"
            className="w-full h-[500px] object-cover object-[center_1%] transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">CORPORATE HEADSHOTS</h2>
          <p className="text-gray-300">
            Create a lasting impression with high-quality professional portraits
            for your career.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Business & LinkedIn portraits</li>
            <li>Studio and on-site options</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="relative group w-full md:w-1/2 overflow-hidden rounded-xl border border-gray-600 shadow-lg">
          <img
            src="/images/production.jpg"
            alt="Cinematography"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-serif">CINEMATOGRAPHY & PRODUCTION</h2>
          <p className="text-gray-300">
            Bring your story to life with cinematic video production and
            creative storytelling.
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Event and brand films</li>
            <li>Short films & promotional videos</li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaCalendarCheck /> Book Appointment
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Services;
