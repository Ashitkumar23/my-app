import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Card from "./Components/Card";
import "../src/App.css";

function App() {
  const [users, setUsers] = useState([]);
  let [url , setUrl] = useState(window.location.href)

  function reloadOnUrlChange() {
    if (window.location.href !== url) {
      setUrl = window.location.href;
      window.location.reload();
    }
  }
  
  setInterval(reloadOnUrlChange, 500); 
  
  const datafetch = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <Router>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={datafetch}>
          Get Users
        </button>

      </div>

      <div className="container p-5">
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 col-sm-12">
              <div className="card p-4">
                <img
                  src={user.image}
                  className="card-img-top card-img"
                  alt="User"
                />
                <h3 className="card-title">
                 Name: {user.firstName} {user.lastName}
                </h3>
                <p>Email: {user.email}</p>
                <p>Age: {user.age} years old</p>
                <p>Contact: {user.phone}</p>
                <Link to={`/user/${user.id}`} className="btn btn-secondary">
                  Show Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/"/>
        <Route path="/user/:id" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
