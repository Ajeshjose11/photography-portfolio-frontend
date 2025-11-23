import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUsersAPI, addUserAPI } from "../services/allAPIs";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    toast.info("Contacting server… Please wait.", { position: "top-center" });

    try {
      const users = await getUsersAPI();
      
      const existing = users.find((u) => u.email === email);

      if (existing) {
        toast.warn("⚠️ Email already registered!", { position: "top-center" });
      } 
      else {
        const newUser = { name, email, password, role: "user" };
        await addUserAPI(newUser);
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        toast.success("🎉 Registration successful! Redirecting...", {
          position: "top-center",
        });

        setTimeout(() => {
          window.location.href = "/home";
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error connecting to server. Please start JSON Server.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white px-6">
      <ToastContainer />
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-300">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/40 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
