import React, { useState } from "react";
import axios from "axios";
import "./RegisterLogin.css";


///https://www.youtube.com/watch?v=Y-XW9m8qOis

//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
export const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        localStorage.setItem("userId", response.data.id);///https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        localStorage.setItem("name", response.data.name);
        console.log(response.data.name);
        localStorage.setItem("user_type", response.data.user_type);
        localStorage.setItem("cuisine", response.data.cuisine); 
        
    
        props.setLoggedIn(true);
        console.log(response.data.user_type);
      }
    }).catch((error) => {
      console.error(error);
    });
    
  }

  return (
    <div className="auth-form-container">
      <h1 className="Title">UniSCRAN</h1>
      <h2 className="login-register">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          type="email"
          placeholder="j.smith-2020@hull.ac.uk"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Login</button>
        {loginStatus && <p className="error-message">{loginStatus}</p>}
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
        
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
