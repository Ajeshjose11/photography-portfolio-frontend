import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  FiUpload,
  FiTrash2,
  FiEdit,
  FiArrowLeft,
  FiCalendar,
  FiMapPin,
  FiTag,
  FiSave,
  FiX,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [editData, setEditData] = useState({ event: "", date: "", location: "" });

  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => toast.error("Failed to fetch user details"));
  }, [id]);

  
  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/photos");
      const userPhotos = res.data.filter((p) => String(p.userId) === (id));
      setPhotos(userPhotos);
    } catch {
      toast.error("Failed to fetch photos");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [id]);

  
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || !event || !date || !location) {
      toast.warning("Please fill all fields!");
      return;
    }

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    

    const base64Image = await toBase64(file);

    const newPhoto = {
      userId: id,
      image: base64Image,
      event,
      date,
      location,
    };

    try {
      await axios.post("http://localhost:3000/photos", newPhoto);
      toast.success("Photo uploaded successfully!");
      setEvent("");
      setDate("");
      setLocation("");
      setFile(null);
      fetchPhotos();
    } catch {
      toast.error("Error uploading photo!");
    }
  };

  const handleDelete = async (photoId) => {
    if (window.confirm("Delete this photo?")) {
      try {
        await axios.delete(`http://localhost:3000/photos/${photoId}`);
        toast.info("Photo deleted successfully!");
        fetchPhotos();
      } catch {
        toast.error("Error deleting photo!");
      }
    }
  };

  
  const startEdit = (photo) => {
    setEditingPhoto(photo.id);
    setEditData({
      event: photo.event,
      date: photo.date,
      location: photo.location,
    });
  };

  
  const saveEdit = async (photoId) => {
    try {
      await axios.patch(`http://localhost:3000/photos/${photoId}`, editData);
      toast.success("Photo details updated!");
      setEditingPhoto(null);
      fetchPhotos();
    } catch {
      toast.error("Failed to update photo details.");
    }
  };

  if (!user)
    return <p className="text-gray-400 text-center mt-20">Loading user...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-16 py-10 relative">
      <ToastContainer position="top-center" autoClose={2000} />

      
      <div className="absolute top-6 left-6">
        <Link
          to="/users"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-blue-400 border border-gray-700 hover:border-blue-400 transition"
        >
          <FiArrowLeft />
          <span>Back to Users</span>
        </Link>
      </div>

      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">{user.name}</h1>
        <p className="text-gray-400 text-lg">{user.email}</p>
      </div>

      
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg mb-10">
        <h2 className="text-2xl mb-4 font-semibold flex items-center gap-2">
          <FiUpload /> Upload New Photo
        </h2>

        <form onSubmit={handleUpload} className="grid md:grid-cols-4 gap-4 items-end">
          <input
            type="text"
            placeholder="Event"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 rounded bg-gray-800 text-white w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all duration-300"
          >
            Upload
          </button>
        </form>
      </div>

      
      <h2 className="text-2xl font-semibold mb-4">Uploaded Photos</h2>
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
                alt={photo.event}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
              />

              <div className="p-4">
                {editingPhoto === photo.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editData.event}
                      onChange={(e) =>
                        setEditData({ ...editData, event: e.target.value })
                      }
                      className="w-full bg-gray-700 p-2 rounded"
                    />
                    <input
                      type="date"
                      value={editData.date}
                      onChange={(e) =>
                        setEditData({ ...editData, date: e.target.value })
                      }
                      className="w-full bg-gray-700 p-2 rounded"
                    />
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) =>
                        setEditData({ ...editData, location: e.target.value })
                      }
                      className="w-full bg-gray-700 p-2 rounded"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => saveEdit(photo.id)}
                        className="bg-green-600 hover:bg-green-700 p-2 rounded-full"
                      >
                        <FiSave />
                      </button>
                      <button
                        onClick={() => setEditingPhoto(null)}
                        className="bg-gray-600 hover:bg-gray-700 p-2 rounded-full"
                      >
                        <FiX />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="flex items-center gap-2 text-gray-300">
                      <FiTag /> {photo.event}
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-sm">
                      <FiCalendar /> {photo.date}
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-sm">
                      <FiMapPin /> {photo.location}
                    </p>
                  </>
                )}
              </div>

              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => startEdit(photo)}
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

export default UserProfile;
