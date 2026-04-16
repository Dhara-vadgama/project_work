import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => alert("Error fetching user"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Profile</h2>
      <img src={user.image} alt="user" width="100" style={{ borderRadius: "50%" }}  />
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;