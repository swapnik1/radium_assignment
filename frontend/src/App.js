import React, { useState } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import GetUser from './GetUser';

function App() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  return (
    <div>
      <h1>User Management App</h1>
      <AddUser setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
      <GetUser setUserDetails={setUserDetails} />
      {userDetails && (
        <div>
          <h2>User Details</h2>
          <p>Id: {userDetails.id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Date of Birth: {userDetails.date_of_birth}</p>
          <p>Created On: {userDetails.created_on}</p>
        </div>
      )}
    </div>
  );
}

export default App;
