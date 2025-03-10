import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.data.role) throw new Error("Role not found");

        setRole(res.data.role);
        setLoading(false);

        // Redirect based on role
        if (res.data.role === "citizen") navigate("/citizen");
        else if (res.data.role === "ward_member") navigate("/ward");
        else if (res.data.role === "gram_panchayat") navigate("/gov");
      } catch (error) {
        console.error("Error fetching user role", error);
        navigate("/login");
      }
    };

    fetchUserRole();
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-8 rounded-lg shadow-md bg-white max-w-md text-center">
        {loading ? (
          <>
            <Spinner size="xl" className="mx-auto mb-4 text-blue-600" />
            <p className="text-gray-700">Checking your role...</p>
          </>
        ) : (
          <p className="text-gray-700">Redirecting...</p>
        )}
      </div>
    </div>
  );
}
