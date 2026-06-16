import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin");

    } catch (err) {

      setError(
        "Invalid email or password"
      );

      console.log(err);

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="text-center">

          <h1 className="text-5xl font-extrabold text-green-600">
            ReTech
          </h1>

          <p className="mt-3 text-gray-500">
            Admin Dashboard Login
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;