import React from "react";
import UserContextProvider from "../src/Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
};

export default App;
