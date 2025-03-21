import React, { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaFacebook,
  FaLinkedin,
  FaRobot,
  FaSearch,
  FaTwitter,
  FaVideo,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [gradient, setGradient] = useState("bg-gradient-to-r from-black to-gray-800");
  const [typedText, setTypedText] = useState("");

  const fullText =
    "A cutting-edge e-learning platform where teachers create hackathons & assignments, and students submit in multiple formats like text, audio, or video. AI & ML-powered automation evaluates and grades submissions based on customizable parameters.";

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    const gradientInterval = setInterval(() => {
      setGradient((prev) =>
        prev === "bg-gradient-to-r from-black to-gray-800"
          ? "bg-gradient-to-r from-gray-800 to-black"
          : "bg-gradient-to-r from-black to-gray-800"
      );
    }, 3000);

    return () => clearInterval(gradientInterval);
  }, []);

  // Typing effect for hero text
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 20); // typing speed
    return () => clearInterval(typingInterval);
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-purple-500 rounded-full animate-spin"></div>
          <FaBookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 text-2xl" />
        </div>
        <p className="text-gray-600 font-medium animate-pulse">Loading EduHack...</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-cover bg-center transition-all duration-1000 ${gradient}`}
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?education,study,students')",
      }}
    >
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 text-white">
        <div className="flex items-center space-x-2">
          <FaBookOpen className="text-3xl cursor-pointer hover:text-gray-300 transition duration-300 transform hover:scale-110" />
          <h1 className="text-2xl font-bold">EduHack</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white placeholder-gray-200"
          />
          <FaSearch className="cursor-pointer hover:text-gray-300 transition duration-300 transform hover:scale-110" />
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-24 px-6 bg-gradient-to-r from-black via-gray-700 to-gray-800 bg-opacity-50 text-white animate-fadeIn transition-all duration-[4000ms]">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Empowering Teachers & Students
        </h2>
        <p className="text-lg max-w-3xl mx-auto min-h-[120px]">
          {typedText}
          <span className="text-yellow-400 animate-pulse">|</span>
        </p>
        <div className="mt-6">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h3 className="text-4xl font-semibold text-gray-800 mb-6">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow-lg bg-blue-50 hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-blue-100">
            <FaChalkboardTeacher className="text-5xl text-blue-500 mx-auto mb-4 cursor-pointer hover:text-blue-700 transition duration-300 transform hover:rotate-12" />
            <h4 className="text-xl font-bold text-gray-700">
              Hackathons & Assignments
            </h4>
            <p className="text-gray-600 mt-2">Create engaging challenges for students.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-green-50 hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-green-100">
            <FaVideo className="text-5xl text-green-500 mx-auto mb-4 cursor-pointer hover:text-green-700 transition duration-300 transform hover:rotate-12" />
            <h4 className="text-xl font-bold text-gray-700">Multi-Mode Submission</h4>
            <p className="text-gray-600 mt-2">Students can submit via text, audio, video, and more.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg bg-red-50 hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-red-100">
            <FaRobot className="text-5xl text-red-500 mx-auto mb-4 cursor-pointer hover:text-red-700 transition duration-300 transform hover:rotate-12" />
            <h4 className="text-xl font-bold text-gray-700">AI-Powered Grading</h4>
            <p className="text-gray-600 mt-2">Automated evaluation with AI & ML models.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© 2025 EduHack. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
