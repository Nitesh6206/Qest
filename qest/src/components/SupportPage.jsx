import React from "react";

const SupportPage = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      {/* Header Logo */}
      <div className="max-w-2xl mx-auto flex items-center space-x-4 mb-12">
        <div className="flex items-center">
          <span className="text-red-600 font-bold text-xl">R</span>
          <span className="text-black font-bold text-xl">Max</span>
        </div>
        <input 
          type="text" 
          placeholder="Curious? Let AI Uncover the Answers!"
          className="bg-gray-50 px-4 py-3 rounded-lg w-full text-sm text-gray-500  focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Header Text */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Get in touch with us.</h1>
          <p className="text-xl text-gray-900">We're here to assist you.</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="businessName" className="block text-sm text-gray-600 mb-1">Business Name*</label>
              <input
                type="text"
                id="businessName"
                placeholder="Search for your business listing"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Your Name*</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone Number*</label>
              <div className="flex">
                <select className="p-2 border border-gray-300 rounded-l w-20 focus:outline-none focus:ring-1 focus:ring-gray-400">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  id="phone"
                  placeholder="9851"
                  className="flex-1 p-2 border-y border-r border-gray-300 rounded-r focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="e.g xyz@gmail.com"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">Message*</label>
            <textarea
              id="message"
              placeholder="Write here your message..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 flex items-center">
              Leave us a Message
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Info</h3>
              <p className="text-gray-600">We are always<br />happy to assist you</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Address</h3>
              <p className="text-gray-600">Support@RMax.com</p>
              <p className="text-gray-600 mt-2">
                Assistance Hours:<br />
                Monday–Friday 9 am to 5 pm EST
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Number</h3>
              <p className="text-gray-600">+91-84563-17235</p>
              <p className="text-gray-600 mt-2">
                Assistance Hours:<br />
                Monday–Friday 9 am to 6 pm EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;