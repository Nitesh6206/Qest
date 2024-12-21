// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
// (Optionally) import an icon for the hamburger menu
// e.g. from Heroicons or Lucide
// import { Menu } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <div className="text-lg font-bold text-red-600">RMax</div>

        {/* Desktop Navigation (hidden on small) */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Home Link */}
          <Link
            to="/"
            className="text-gray-700 hover:text-red-600 transition duration-200"
          >
            Home
          </Link>

          {/* Features Dropdown (desktop) */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="#"
              className="text-gray-700 hover:text-red-600 transition duration-200"
            >
              Features
            </Link>
            {/* Dropdown for features */}
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[772px] bg-white border rounded-lg shadow-lg p-6 grid grid-cols-3 gap-4 z-10">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Discover</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">Custom Branded Website</li>
                    <li className="text-gray-600">User Mobile App</li>
                    <li className="text-gray-600">Business Webpage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Manage</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">Courses</li>
                    <li className="text-gray-600">Classes</li>
                    <li className="text-gray-600">Appointments</li>
                    <li className="text-gray-600">Services</li>
                    <li className="text-gray-600">Retreats</li>
                    <li className="text-gray-600">Payments</li>
                    <li className="text-gray-600">Design Tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Grow</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">AI Marketing Tools</li>
                    <li className="text-gray-600">Social Media Integration</li>
                    <li className="text-gray-600">CRM</li>
                  </ul>
                </div>
                <div className="col-span-3 mt-4 text-center">
                  <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                    See all features
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-red-600 transition duration-200"
          >
            Pricing
          </Link>

          {/* Solutions / Services Link */}
          <Link
            to="/support"
            className="text-gray-700 hover:text-red-600 transition duration-200"
          >
            Support
          </Link>
        </nav>

        {/* Desktop Buttons (hidden on small) */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:text-red-600 hover:border-red-600 transition duration-200">
            Login
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200">
            Try For Free
          </button>
        </div>

        {/* Hamburger Menu (mobile only) */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Use any icon you like here. Example: a simple svg or <Menu /> from lucide-react */}
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown (shows when hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="p-4">
            {/* Mobile Links */}
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-red-600 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Features (we can do a simpler approach on mobile, or replicate the big dropdown) */}
            <div>
              <button
                className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Features
              </button>
              {/* Simple nested dropdown for mobile */}
              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <h4 className="font-semibold text-gray-800">Discover</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">Custom Branded Website</li>
                    <li className="text-gray-600">User Mobile App</li>
                    <li className="text-gray-600">Business Webpage</li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 mt-2">Manage</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">Courses</li>
                    <li className="text-gray-600">Classes</li>
                    <li className="text-gray-600">Appointments</li>
                    <li className="text-gray-600">Services</li>
                    <li className="text-gray-600">Retreats</li>
                    <li className="text-gray-600">Payments</li>
                    <li className="text-gray-600">Design Tools</li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 mt-2">Grow</h4>
                  <ul className="space-y-1">
                    <li className="text-gray-600">AI Marketing Tools</li>
                    <li className="text-gray-600">Social Media Integration</li>
                    <li className="text-gray-600">CRM</li>
                  </ul>

                  <div className="mt-4">
                    <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                      See all features
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="block py-2 text-gray-700 hover:text-red-600 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="block py-2 text-gray-700 hover:text-red-600 transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>

            {/* Mobile Buttons */}
            <div className="mt-4 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:text-red-600 hover:border-red-600 transition duration-200">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200">
                Try For Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
