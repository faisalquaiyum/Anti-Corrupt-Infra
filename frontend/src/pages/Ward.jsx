import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Ward() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "ward_member") navigate("/"); // Redirect if unauthorized
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Ward Member Dashboard</h1>
      <p className="text-gray-600">Manage complaints and oversee your assigned ward.</p>
      
      <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="font-semibold text-lg text-gray-700">Review Complaints</h2>
        <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          View Reports
        </button>
      </div>
    </div>
  );
}
