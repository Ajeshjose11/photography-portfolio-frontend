import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SERVER_URL } from "../services/serverURL";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${SERVER_URL}/messages`, formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Error sending message. Check JSON Server.");
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-200 flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100 p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg focus:ring focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg focus:ring focus:ring-blue-400"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg focus:ring focus:ring-blue-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
