import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <Table />
    </div>
  );
};

const Table = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3001/user`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <TableRows 
            key={i} 
            user={user} 
          />
        ))}
      </tbody>
    </table>);
}

const TableRows = props => (
    <tr>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.email}</td>
  </tr>);

export default App;