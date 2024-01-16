import React, { useContext } from "react";
import UserContext from "../Context/Usercontext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return null;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
