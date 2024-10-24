import React, { useState } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>User Management App</h1>
      <AddUser setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
