import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Citizen from "./pages/Citizen";
import Ward from "./pages/Ward";
import Gov from "./pages/Gov";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/citizen" element={<Citizen />} />
        <Route path="/ward" element={<Ward />} />
        <Route path="/gov" element={<Gov />} />
      </Routes>
    </>
  );
}

export default App;
