import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Citizen() {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "citizen") navigate("/"); // Redirect if unauthorized
    else fetchComplaints();
  }, [navigate]);

  // Fetch existing complaints
  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/citizen/complaints", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(res.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  // Handle complaint submission
  const handleSubmit = async () => {
    if (!image) return alert("Please upload an image!");
    
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", image);
      
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/citizen/report", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });

      alert("Complaint submitted successfully!");
      fetchComplaints();
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Failed to submit complaint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Citizen Dashboard</h1>
      <p className="text-gray-600">Welcome, Citizen! File complaints and track their status.</p>

      {/* File a Complaint Section */}
      <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="font-semibold text-lg text-gray-700">File a Complaint</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-2 border p-2 w-full"
        />
        <button
          onClick={handleSubmit}
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>
      </div>

      {/* Complaints List */}
      <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="font-semibold text-lg text-gray-700">Complaint Status</h2>
        {complaints.length === 0 ? (
          <p className="text-gray-500">No complaints filed yet.</p>
        ) : (
          <ul className="mt-2">
            {complaints.map((complaint) => (
              <li key={complaint.id} className="border-b py-2">
                <p className="font-medium text-gray-800">{complaint.description || "Infrastructure Issue"}</p>
                <p className={`text-sm ${complaint.status === "Resolved" ? "text-green-600" : "text-yellow-600"}`}>
                  Status: {complaint.status}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
