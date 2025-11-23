import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FiSearch, FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const galleryRef = useRef();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/photos`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.data || [];
        setPhotos(data);
        setFilteredPhotos(data); 
      })
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);


  const handleSearch = () => {
    const query = search.trim().toLowerCase();
    if (query === "") {
      setFilteredPhotos(photos);
      return;
    }

    const filtered = photos.filter((p) => {
      const event = p.event?.toLowerCase() || "";
      const location = p.location?.toLowerCase() || "";
      const date = p.date?.toLowerCase() || "";
      return (
        event.includes(query) || location.includes(query) || date.includes(query)
      );
    });
    setFilteredPhotos(filtered);
  };

  const handleDownloadPDF = async () => {
    if (!filteredPhotos.length) {
      alert("No photos found to download!");
      return;
    }

    
    const tempDiv = document.createElement("div");
    tempDiv.style.padding = "20px";
    tempDiv.style.backgroundColor = "#111827";

    
    filteredPhotos.forEach((photo) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.style.marginBottom = "20px";
      imgWrapper.style.textAlign = "center";

      const img = document.createElement("img");
      img.src = photo.image;
      img.style.width = "1000px";
      img.style.height = "850px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";
      imgWrapper.appendChild(img);

      const text = document.createElement("p");
      text.textContent = `${photo.event || "Event"} • ${
        photo.location || "Unknown"
      } • ${photo.date || "N/A"}`;
      text.style.color = "#fff";
      text.style.marginTop = "6px";
      imgWrapper.appendChild(text);

      tempDiv.appendChild(imgWrapper);
    });

    document.body.appendChild(tempDiv);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#111827",
        onclone: (clonedDoc) => {
          clonedDoc.querySelectorAll("*").forEach((el) => {
            const style = window.getComputedStyle(el);
            if (
              style.color.includes("oklch") ||
              style.backgroundColor.includes("oklch")
            ) {
              el.style.color = "rgb(255,255,255)";
              el.style.backgroundColor = "rgb(17,24,39)";
            }
          });
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Images.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
        User Gallery 
      </h1>

      <div className="flex w-full max-w-md bg-gray-800 rounded-lg px-4 py-2 mb-6 border border-gray-700 focus-within:border-blue-400 transition">
        <FiSearch className="text-gray-400 mr-2 mt-1" />
        <input
          type="text"
          placeholder="Search by event, location, or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-200 placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-3 bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-white"
        >
          Search
        </button>
      </div>

      
      <button
        onClick={handleDownloadPDF}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full mb-6 transition"
      >
        <FiDownload /> Download as PDF
      </button>

      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div
              key={photo.id || photo._id}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-400 transition"
            >
              <img
                src={photo.image}
                alt={photo.event || "Event"}
                className="w-full h-56 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold text-blue-400">
                {photo.event || "Unnamed Event"}
              </h2>
              <p className="text-gray-300">📍 {photo.location || "Unknown"}</p>
              <p className="text-gray-400">📅 {photo.date || "N/A"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No images found.
          </p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Gallery;
