import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiMail,
  FiUser,
  FiMessageCircle,
  FiArrowLeft,
  FiTrash2,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SERVER_URL } from "../services/serverURL";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/messages`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${SERVER_URL}/messages/${id}`);
      setMessages(messages.filter((msg) => msg.id !== id));
      toast.success("🗑️ Message deleted successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (err) {
      console.error("Error deleting message:", err);
      toast.error("❌ Failed to delete message", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6 relative">
      
      <ToastContainer theme="dark" />

     
      <Link
        to="/adminhome"
        className="absolute left-6 top-8 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-blue-400 border border-gray-700 hover:border-blue-400 transition"
      >
        <FiArrowLeft />
        <span>Back</span>
      </Link>

      
      <h1 className="text-3xl font-bold mb-8 text-blue-400 mt-10">
        Client Messages
      </h1>

     
      <div className="grid gap-6 w-full max-w-3xl">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400 transition relative"
            >
              
              <button
                onClick={() => handleDelete(msg.id)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-500 transition"
                title="Delete Message"
              >
                <FiTrash2 size={20} />
              </button>

              <div className="flex items-center gap-3 mb-2 text-blue-400">
                <FiUser />
                <p className="font-semibold">{msg.name}</p>
              </div>
              <div className="flex items-center gap-3 mb-2 text-green-400">
                <FiMail />
                <p>{msg.email}</p>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <FiMessageCircle className="mt-1" />
                <p>{msg.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No messages yet.</p>
        )}
      </div>
    </div>
  );
}

export default Messages;
