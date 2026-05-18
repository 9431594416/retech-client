import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";

import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin");

    } catch (error) {

      console.log(error);

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-lg w-[400px] space-y-6"
      >

        <h1 className="text-4xl font-bold text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded-xl outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 rounded-xl outline-none"
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold"
        >
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;