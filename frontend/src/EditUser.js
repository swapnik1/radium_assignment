import React, { useState } from "react";
import config from "./config";

function EditUser({ user, setEditingUser, setUsers }) {
  const [name, setName] = useState(user.name);
  const [dateOfBirth, setDateOfBirth] = useState(user.date_of_birth);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${config.API_URL}/users/${user.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, date_of_birth: dateOfBirth }),
    })
    .then((response) => {
    if (!response.ok) {
      // If response is not ok, throw an error
      return response.json().then((errorData) => {
        var error = "";
        for(var k in errorData) {
          error += k+": "+errorData[k]+". ";
        }
        throw new Error(error);
      });
    }
    return response.json();
    })
    .then(() => {
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? { ...u, name, date_of_birth: dateOfBirth } : u))
      );
      setEditingUser(null);
    })
    .catch((error) => {
      // Handle the error here
      alert(error.message); // Display the error message
      console.error("Error adding user:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Date of Birth:</label>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
      />
      <button type="submit">Update User</button>
      <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
    </form>
  );
}

export default EditUser;
