import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Card() {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  

  
  
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]);
  
  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <img src={user.image} className="card-img-top card-img" alt="User" />
        <h2>{user.firstName} {user.lastName}</h2>
        <p>Email: {user.email}</p>
        <p>Age: {user.age} years old</p>
        <p>Phone: {user.phone}</p>
        <p>Gender: {user.gender}</p>
        <p>Address: {user.address.city}, {user.address.state}</p>
        <Link to="/" className="btn btn-danger">Go Back</Link>
      </div>
    </div>
  );
}

export default Card;
