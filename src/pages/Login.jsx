import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    if (!email.includes("@")) {
    alert("Enter valid email");
    return;
    }

    if (password.length < 4) {
    alert("Password must be at least 4 characters");
    return;
    }

    // Fake login (for now)
    localStorage.setItem("token", "user_token");

    navigate("/dashboard");
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px"
        }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
        style={{ margin: "10px", padding: "8px", width: "200px" }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
            <input
            style={{ margin: "10px", padding: "8px", width: "200px" }}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
       <button style={{
            padding: "8px 16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
            }}>
            Login
            </button>
      </form>
    </div>
  );
}

export default Login;