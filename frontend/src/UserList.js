import React, { useEffect, useState } from "react";
import EditUser from "./EditUser";
import config from "./config";

function UserList({users, setUsers}) {
  const [editingUser, setEditingUser] = useState(null);
  
  useEffect(() => {
    fetch(`${config.API_URL}/users/`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [setUsers]);

  const handleDelete = (id) => {
    fetch(`${config.API_URL}/users/${id}/`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h1>Users</h1>
      {editingUser ? (
        <EditUser user={editingUser} setEditingUser={setEditingUser} setUsers={setUsers} />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              ID: {user.id} | Name:{user.name} | DOB:{user.date_of_birth} | Created On: {user.created_on}
              <button onClick={() => setEditingUser(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
