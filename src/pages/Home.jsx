import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col md:flex-row justify-center items-stretch">
      
     
      <div className="relative w-full md:w-1/3 h-[90vh] overflow-hidden group">
        <img
          src="/images/wedding.jpg"
          alt="Weddings"
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-3xl font-semibold tracking-wide">WEDDINGS</h2>
        </div>
      </div>

     
      <div className="relative w-full md:w-1/3 h-[90vh] overflow-hidden group">
        <img
          src="/images/portraits.jpg"
          alt="Portraits"
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-3xl font-semibold tracking-wide">PORTRAITS</h2>
        </div>
      </div>

     
      <div className="relative w-full md:w-1/3 h-[90vh] overflow-hidden group">
        <img
          src="/images/lifestyle.jpg"
          alt="Lifestyle"
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-3xl font-semibold tracking-wide">LIFESTYLE</h2>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
