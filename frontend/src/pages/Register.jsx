import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserIcon, EnvelopeIcon, LockClosedIcon, IdentificationIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "citizen",
    govCredential: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/auth/register", formData);
      alert("Registered Successfully");
      navigate("/login"); // Redirect to Login after registration
    } catch (err) {
      setError("User already exists or an error occurred.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Register Form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Create an account</h1>

          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <UserIcon className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-10 w-full py-2 px-3 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-4 w-4 text-gray-400" />
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

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-4 w-4 text-gray-400" />
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

            {/* Role Selection */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <IdentificationIcon className="h-4 w-4 text-gray-400" />
              </div>
              <select
                name="role"
                className="pl-10 w-full py-2 px-3 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
                required
              >
                <option value="citizen">Citizen</option>
                <option value="ward_member">Ward Member</option>
                <option value="gram_panchayat">Gram Panchayat</option>
              </select>
            </div>

            {/* Gov Credential (Only for non-citizens) */}
            {formData.role !== "citizen" && (
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <IdentificationIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="govCredential"
                  placeholder="Government Credential"
                  className="pl-10 w-full py-2 px-3 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded flex items-center justify-center"
            >
              <span>Sign Up</span>
              <ArrowRightIcon className="h-3 w-3 ml-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Blue Section */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col justify-center items-center text-white p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Already have an account?</h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-600 py-2 px-6 rounded font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
