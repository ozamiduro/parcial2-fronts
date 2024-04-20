import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { getAllPurchases } from "../../service/profile";
import { Purchases } from "../../entities/Purchase";
import { TableC } from "../Table";

const Profile = (props: any) => {
  const profilePhotos = [
    "https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?w=860&h=900&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
  ];

  const [purchases, setPurchases] = useState<Purchases[]>([]);

  useEffect(() => {
    const unSub = async () => {
      const { data } = await getAllPurchases(props.token);
      setPurchases(data);
    };

    props.role === "admin" && unSub();
  }, []);

  return (
    <div
      className={
        "flex flex-col items-center text-center max-w-4xl min-w-xs rounded bg-white"
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
        <h1 className="font-mono font-bold">{props.name ?? "Jhon Doe"}</h1>
        <p className="font-mono font-bold border-b border-gray-900">Email</p>
        <p className="font-mono mb-2">{props.email ?? "jhondoe@example.com"}</p>
        <p className="font-mono font-bold border-b border-gray-900">Rol</p>
        <p className="font-mono mb-4">{props.role ?? "Client"}</p>
      </div>
      {props.role === "admin" && (
        <div>
          <h1 className="font-mono font-bold border-b border-gray-900 mb-4">
            Purchases
          </h1>
          <TableC
            headers={[
              "Nombre",
              "Producto",
              "Cantidad",
              "Fecha de compra",
              "Total",
            ]}
            body={purchases}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
