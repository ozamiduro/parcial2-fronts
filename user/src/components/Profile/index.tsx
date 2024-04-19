import { Avatar } from "flowbite-react";
import React from "react";

const Profile = () => {
  const profilePhotos = [
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=860&h=900&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
  ];

  return (
    <div
      className={
        "flex flex-col items-center text-center max-w-xl min-w-xs rounded bg-white"
      }
      style={{
        gap: 20,
        padding: 20,
        margin: "auto",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
      }}
    >
      <div>
        <Avatar
          img={profilePhotos[Math.floor(Math.random() * profilePhotos.length)]}
          rounded
          bordered
          color="success"
          size={"xl"}
        />
      </div>
      <div>
        <h1>{"Ozami Duque Rodriguez"}</h1>
        <p>{"ozami@example.com"}</p>
        <p>{"Usuario"}</p>
      </div>

      <div>
        <h1>Mis compras</h1>
        <p>{"12"}</p>
        <p>{"12"}</p>
        <p>{"12"}</p>
        <p>{"12"}</p>
        <p>{"12"}</p>
        <p>{"12"}</p>
      </div>
    </div>
  );
};

export default Profile;
