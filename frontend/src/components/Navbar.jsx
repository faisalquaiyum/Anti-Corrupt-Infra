import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">Anti-Corruption System</h1>
      
      {isAuthenticated && (
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition">
            Dashboard
          </Link>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 px-4 py-2 rounded flex items-center hover:bg-red-600 transition"
          >
            <span>Logout</span>
            <ArrowLeftOnRectangleIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      )}
    </nav>
  );
}
