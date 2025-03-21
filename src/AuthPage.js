import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginImg from "./Assets/LoginImg.png";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(`${isLogin ? "Logging in" : "Signing up"} with:`, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen bg-gray-100 items-center justify-center">
      <div className="flex w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image Section */}
        <div className="w-1/2 bg-gray-200 flex items-center justify-center relative">
          <img
            src={LoginImg}
            alt="Auth Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome to EduHack.!</h2>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center">
            <div
             className={`${isLogin ? "mb-6" : ""} px-2 py-1 rounded-full`}

              style={{ backgroundColor: "rgba(73, 187, 189, 0.6)" }}
            >
              <button
                className={`px-6 py-2 rounded-full ${
                  isLogin ? "bg-gray-700 text-white" : ""
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`px-6 py-2 rounded-full ${
                  !isLogin ? "bg-gray-700 text-white" : ""
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
          </div>

 
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label className="block text-sm ml-2 mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-full outline-none mb-3 focus:ring-2 focus:ring-teal-500"
              required
            />

            {/* Password */}
            <label className="block text-sm font-medium ml-2 mb-2 text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-full outline-none mb-3 focus:ring-2 focus:ring-teal-500"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password (only for Register) */}
            {!isLogin && (
              <>
                <label className="block text-sm font-medium ml-2 mb-2 text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-full outline-none mb-3 focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </>
            )}

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <label>
                <input type="checkbox" className="mr-1" /> Remember me
              </label>
              <span className="cursor-pointer">Forgot Password?</span>
            </div>

            <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
