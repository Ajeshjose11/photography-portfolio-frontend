import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch, FiUser,FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

 
  const normalUsers = users.filter((user) => user.role === "user");

 
  const filteredUsers =
    search.trim() === ""
      ? normalUsers
      : normalUsers.filter((user) => {
        const query = search.toLowerCase();
        return (
          user.name?.toLowerCase() === query ||
          user.email?.toLowerCase() === query ||
          String(user.id) === query
        );
      });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      <div className="absolute top-6 left-6">
        <Link
          to="/adminhome"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-blue-400 border border-gray-700 hover:border-blue-400 transition"
        >
          <FiArrowLeft />
          <span>Back to Users</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        Registered Users 
      </h1>

      
      <div className="flex items-center w-full max-w-md bg-gray-800 rounded-lg px-4 py-2 mb-8 border border-gray-700 focus-within:border-blue-400 transition">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by ID, name, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-500"
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <FiUser className="text-2xl" />
                <h2 className="font-semibold text-lg">{user.name}</h2>
              </div>
              <p className="text-gray-300 mb-1">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-400 mb-3">
                <strong>Role:</strong> {user.role}
              </p>
              <Link
                to={`/user/${user.id}`}
                className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white transition"
              >
                View Profile →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
