import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map((user)=>(<li key={user.id}>
                {/* Link to dynamic user route */}
                <Link to={`/users/${user.id}`}>
                {user.name}
                </Link>
            </li>))}
        </ul>
    </div>
  );
}

export default UserList;
