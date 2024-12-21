// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Business Size</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Entrepreneurs</a></li>
            <li><a href="#" className="hover:underline">SMBs</a></li>
            <li><a href="#" className="hover:underline">Growth Businesses</a></li>
            <li><a href="#" className="hover:underline">Household Services</a></li>
            <li><a href="#" className="hover:underline">Enterprise</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Business Type</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Health & Wellness</a></li>
            <li><a href="#" className="hover:underline">Sports</a></li>
            <li><a href="#" className="hover:underline">Learning Activities</a></li>
            <li><a href="#" className="hover:underline">Household Services</a></li>
            <li><a href="#" className="hover:underline">Miscellaneous</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Download</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Business App</a></li>
            <li><a href="#" className="hover:underline">User App</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
          </ul>
          <h3 className="font-bold text-lg mt-8 mb-4">Contact us</h3>
          <ul className="space-y-2">
            <li><a href="mailto:support@rmax.com" className="hover:underline">support@rmax.com</a></li>
            <li><a href="tel:+918456917235" className="hover:underline">+91-84569-17235</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-xs border-t border-gray-700 pt-6">
        <p>&copy; 2024 Copyright, All Rights Reserved by RMax</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;