import { useState } from "react";
import axios from "axios";
const LoginForm = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login",{email,password})
    .then(result => {console.log(result)})
    .catch(err => console.log(err))
    alert("Logged In!");
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg w-96 transform transition-all duration-500 scale-100 hover:scale-105">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-all duration-300"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={toggle}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
