import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password");
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "10px",
            width: "300px",
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "10px",
            width: "300px",
          }}
        />

        <button type="submit">Login</button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;