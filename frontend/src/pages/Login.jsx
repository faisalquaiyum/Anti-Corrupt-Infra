import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/auth/login", formData);
      const { token, role } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", role);
      
      navigate("/"); // Redirect to Dashboard
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Welcome back</h1>
          
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-3 w-3 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10 w-full py-2 px-3 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-3 w-3 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10 w-full py-2 px-3 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded flex items-center justify-center"
            >
              <span>Sign In</span>
              <ArrowRightIcon className="h-3 w-3 ml-1" />
            </button>
          </form>
          
          
        </div>
      </div>
      
      {/* Right side - Blue section */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col justify-center items-center text-white p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">New here?</h2>
          {/* <p className="mb-6">Register Now!</p> */}
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 py-2 px-6 rounded font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}