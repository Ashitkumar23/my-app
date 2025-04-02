import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Card from "./Components/Card";
import "../src/App.css";

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState(false)

const increment = () => {
  setCount((prevCount) => prevCount + 1); 
};



useEffect( () => {
   fetch(`https://dummyjson.com/users/${count}`)
    .then((res) => res.json())
    .then((data) => setUser(data))
    .catch((error) => console.error("Error fetching data:", error));
}, [count]);

const showdetails = ()=>{
  setDetails(true)
}

const close = ()=>{
  setDetails(false)
}
  return (

    <>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={increment}>
          click me
        </button>

      </div>

      <div className="container p-5">
        <div className="row">
          {user  && count > 0 &&
          <div className="row">
              <div className="card p-4 col-md-4  col-sm-12">
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
                <button onClick={showdetails} >View details</button>
              </div>
           </div>
         }
        </div>
      </div>
      
      { details && 
        <div className="container mt-5">
       <div className="card p-4">
         <img src={user.image} className="card-img-top card-img" alt="User" />
         <h2>{user.firstName} {user.lastName}</h2>         
          <p>Email: {user.email}</p>
          <p>Age: {user.age} years old</p>
           <p>Phone: {user.phone}</p>
           <p>Gender: {user.gender}</p>
           <p>Contact: {user.phone}</p>
           <p>Address: {user.address.city}, {user.address.state}</p>
          <button onClick={close}>Close</button>
         </div>
       </div>
}
      </>
   
  );
}

export default App;
