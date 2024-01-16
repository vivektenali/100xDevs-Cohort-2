import React, { useState, useContext } from "react";
import UserContext from "../Context/Usercontext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      ></input>{" "}
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
