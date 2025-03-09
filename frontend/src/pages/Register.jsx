import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "citizen",
    govCredential: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/auth/register", formData);
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <select name="role" onChange={handleChange}>
          <option value="citizen">Citizen</option>
          <option value="ward_member">Ward Member</option>
          <option value="gram_panchayat">Gram Panchayat</option>
        </select>

        {formData.role !== "citizen" && (
          <input type="text" name="govCredential" placeholder="Gov Credential" onChange={handleChange} required />
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
