// components/Footer.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  console.log("Footer rendered"); // Debug message

  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Calgary Real Estate</h2>
          <p className="text-gray-600">
            Helping you find your dream home with ease and confidence.
          </p>
        </div>
        
      
        <div className="text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Calgary Real Estate. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
