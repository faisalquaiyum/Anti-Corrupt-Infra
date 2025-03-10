import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gov() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "gram_panchayat") navigate("/"); 
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Gram Panchayat Dashboard</h1>
      <p className="text-gray-600">Monitor corruption reports and take action.</p>
      

    </div>
  );
}
