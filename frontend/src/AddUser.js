import React, { useState } from "react";
import config from "./config";

function AddUser({ setUsers }) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${config.API_URL}/users/`, {
      method: "POST",
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
    .then((newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setName("");
      setDateOfBirth("");
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
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUser;
