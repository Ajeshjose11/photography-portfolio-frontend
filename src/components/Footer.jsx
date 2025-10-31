import React from "react";
import { FaInstagram, FaTwitter, FaPinterest, FaWhatsapp, FaBehance } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] border-t border-gray-700 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
       
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="" className="hover:text-blue-400 transition">License</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-3">Follow Me</h3>
          <div className="flex items-center gap-5 text-2xl">
            <a href="#" target="_blank" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-red-600 transition">
              <FaPinterest />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
              <FaBehance />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-500 mb-3">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105797.33669132093!2d-118.37601080273441!3d34.03959289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6197feba973%3A0x1ad6c58fea5586bc!2sHubble%20Studio!5e0!3m2!1sen!2sin!4v1761667292850!5m2!1sen!2sin"
            width="400px"
            height="200"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio Location"
            className="shadow-lg"
          ></iframe>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-2 text-center text-sm text-blue-300">
        © 2025 Robert Lean Photography. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
