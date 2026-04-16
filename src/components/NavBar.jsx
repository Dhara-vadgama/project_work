import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white"
    }}>
      <h3>My App</h3>

      <div>
        <Link to="/dashboard" style={{ color: "white", margin: "10px" }}>
          Dashboard
        </Link>
        <Link to="/products" style={{ color: "white", margin: "10px" }}>
          Products
        </Link>
        <Link to="/profile" style={{ color: "white", margin: "10px" }}>
          Profile
        </Link>

        <button 
          onClick={handleLogout}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;      