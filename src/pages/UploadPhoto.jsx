import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUpload, FiEdit, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../services/serverURL";


function UploadPhoto() {
  const [photos, setPhotos] = useState([]);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [editId, setEditId] = useState(null);

 
  const fetchPhotos = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/photos`);
      setPhotos(res.data);
    } catch (err) {
      console.error("Error fetching photos:", err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !image || !tag) {
      alert("All fields are required!");
      return;
    }

    const newPhoto = { email, image, tag };

    try {
      if (editId) {
        await axios.put(`${SERVER_URL}/photos/${editId}`, newPhoto);
        alert("Photo details updated!");
      } else {
        await axios.post(`${SERVER_URL}/photos`, newPhoto);
        alert("Photo uploaded successfully!");
      }

      setEmail("");
      setImage("");
      setTag("");
      setEditId(null);
      fetchPhotos();
    } catch (err) {
      console.error("Error saving photo:", err);
      alert("Server error!");
    }
  };

  
  const handleEdit = (photo) => {
    setEditId(photo.id);
    setEmail(photo.email);
    setImage(photo.image);
    setTag(photo.tag);
  };

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      try {
        await axios.delete(`${SERVER_URL}/photos/${id}`);
        fetchPhotos();
      } catch (err) {
        console.error("Error deleting:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10">
      
      <div className="absolute top-6 left-6">
        <Link
          to="/adminhome"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-blue-400 border border-gray-700 hover:border-blue-400 transition"
        >
          <FiArrowLeft />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      
      <h1 className="text-4xl font-serif text-blue-400 text-center mb-10">
         Admin Dashboard
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg mb-10"
      >
        <h2 className="text-2xl mb-4 font-semibold flex items-center gap-2">
          <FiUpload /> {editId ? "Edit Photo" : "Upload New Photo"}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="Client Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <input
            type="text"
            placeholder="Tag or Description"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all duration-300"
        >
          {editId ? "Update Photo" : "Upload Photo"}
        </button>
      </form>

      
      <h2 className="text-2xl font-semibold mb-4">Client Photo Gallery</h2>
      {photos.length === 0 ? (
        <p className="text-gray-400">No photos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={photo.image}
                alt={photo.tag}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="p-4">
                <p className="text-sm text-gray-300">
                  <strong>Email:</strong> {photo.email}
                </p>
                <p className="text-sm text-gray-400">{photo.tag}</p>
              </div>

              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => handleEdit(photo)}
                  className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-full"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadPhoto;
