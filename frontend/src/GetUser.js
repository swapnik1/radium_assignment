import React, { useState } from "react";
import config from "./config";

function GetUser({ setUserDetails }) {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${config.API_URL}/users/${userId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((user) => {
        setUserDetails(user);
        setUserId("");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setUserDetails(null);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">Get User</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default GetUser;
