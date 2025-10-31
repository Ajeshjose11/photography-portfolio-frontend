import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import UploadPhoto from "./pages/UploadPhoto";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminHome from "./pages/adminHome";
import Portfolio from "./pages/Portfolio";
import Messages from "./pages/Messages";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/upload" element={<UploadPhoto />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>

  );
}

export default App;
