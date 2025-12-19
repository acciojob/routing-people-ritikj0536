import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  // Extract dynamic id from URL (/users/:id)
  const { id } = useParams();

  // State to store single user details
  const [user, setUser] = useState(null);

  // State to manage loading indicator
  const [loading, setLoading] = useState(true);

  // Fetch user details when id changes
  useEffect(() => {
    async function fetchUsers(params) {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      // ✅ Step 2: force loading state to be visible
      setTimeout(() => {
        setUser(data);
        setLoading(false);
      }, 300);
    }
    fetchUsers();
  }, [id]);

  // Temporary loading UI (important to avoid crash)
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>

      {/* Back link */}
      <Link to="/">Back</Link>
    </div>
  );
}

export default UserDetails;
