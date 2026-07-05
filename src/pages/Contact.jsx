import React, { useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaPinterest, FaBehance } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SERVER_URL } from "../services/serverURL";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${SERVER_URL}/messages`, formData);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Error sending message. Please check server.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden">
        <ToastContainer theme="dark" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 tracking-tight">
                Let's capture your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">moments</span>.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind, want to schedule a photoshoot, or just want to say hello? Drop a message and let's make it happen.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <FiPhone size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Me</p>
                  <p className="text-gray-200 font-medium mt-0.5">+1 (555) 234-5678</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <FiMail size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Me</p>
                  <p className="text-gray-200 font-medium mt-0.5">ajeshjose11@gmail.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Studio Location</p>
                  <p className="text-gray-200 font-medium mt-0.5">Hubble Studio, Kochi </p>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <FiClock size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Working Hours</p>
                  <p className="text-gray-200 font-medium mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Connect on Socials</p>
              <div className="flex items-center gap-4 text-xl">
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700/50 hover:border-pink-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-sky-400/20 border border-slate-700/50 hover:border-sky-400/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-red-600/20 border border-slate-700/50 hover:border-red-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:-translate-y-1">
                  <FaPinterest size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 hover:bg-blue-500/20 border border-slate-700/50 hover:border-blue-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1">
                  <FaBehance size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1e293b]/30 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your event or project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/60 border border-slate-700/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3.5 rounded-xl transition duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
