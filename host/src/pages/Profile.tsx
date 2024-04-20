import React, { useContext } from "react";
import Profile from "user/Profile";
import { AuthContext } from "../providers";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Profile
      email={auth?.email}
      name={auth?.name}
      role={auth?.role}
      token={auth?.token}
    />
  );
};

export default ProfilePage;
