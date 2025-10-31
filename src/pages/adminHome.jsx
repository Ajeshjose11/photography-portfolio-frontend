import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiMail } from "react-icons/fi";

function AdminHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">

      <div className="absolute top-6 right-6">
        <Link
          to="/"
          className="flex bg-red-500 hover:bg-red-600 px-5 py-2 text-white transition-transform duration-300 hover:scale-105"
        >
          <span>Logout</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-400 mb-20 ">
        Admin Dashboard 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        
        <Link
          to="/users"
          className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl text-center shadow-lg border border-gray-700 hover:border-blue-400 transition"
        >
          <FiUsers className="text-5xl mx-auto text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-gray-400 mt-2">
            View and manage registered users.
          </p>
        </Link>

        <Link
          to="/messages"
          className="bg-gray-800 hover:bg-gray-700 p-8 rounded-2xl text-center shadow-lg border border-gray-700 hover:border-blue-400 transition"
        >
          <FiMail className="text-5xl mx-auto text-green-400 mb-4" />
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-400 mt-2">
            View all client messages and inquiries.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
