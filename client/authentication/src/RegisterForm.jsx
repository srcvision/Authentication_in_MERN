import { useState } from "react";
import axios from "axios";
const RegisterForm = ({ toggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register",{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    alert("Registered Successfully!");
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg w-96 transform transition-all duration-500 scale-100 hover:scale-105">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <form onSubmit={handleRegister} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition-all duration-300"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={toggle}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
