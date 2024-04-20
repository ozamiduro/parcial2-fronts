import React from "react";
import { Timeline } from "flowbite-react";
import { Product } from "../../entities/Product";
import Button from "host/Button";

import "./styles.scss";
import Icons from "host/Icons";
import { purchaseCart } from "../../service/product";

const Cart = (props: any) => {
  const products: Product[] = props.getCartProducts();

  const onPurchase = async () => {
    const cart = products.map((product) => {
      return {
        productId: product.id,
        quantity: product.quantity,
      };
    });

    for (const product of cart) {
      const { data } = await purchaseCart(product, props.token);
      console.log(data);
    }
  };

  return products.length > 0 ? (
    <>
      <div className="p-8 h-full"></div>
      <div
        className="flex bg-white rounded shadow p-4"
        style={{ marginBottom: 20, flexDirection: "row-reverse", gap: 20 }}
      >
        <button
          className={"p-2 bg-green-600 flex flex-row gap-1 rounded"}
          onClick={() => onPurchase()}
        >
          <Icons icon={"check"} color="white" />
          <span className="font-mono text-white">Comprar</span>
        </button>
        <button
          className={"p-2 bg-red-600 flex flex-row gap-1 rounded"}
          onClick={() => props.clearCart()}
        >
          <Icons icon={"trash"} color="white" />
          <span className="font-mono text-white">Limpiar carrito</span>
        </button>
      </div>
      <Timeline className="bg-white p-4 rounded">
        {products.map((product) => {
          return (
            <Timeline.Item key={product.id}>
              <Timeline.Point />
              <Timeline.Content className="flex flex-row gap-2 max-h-48 rounded bg-gray-400 border border-gray-900 p-3">
                <div
                  style={{ width: "75%" }}
                  className={
                    "flex flex-col justify-center items-center justify-around gap-3"
                  }
                >
                  <Timeline.Title style={{ color: "black" }}>
                    {product.name}
                  </Timeline.Title>
                  <Timeline.Body>
                    <div className="flex flex-row gap-2 justify-center items-center justify-around">
                      <Button
                        text={"-"}
                        onClick={() => props.decrementQuantity(product.id)}
                      />
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        {product.quantity}
                      </span>
                      <Button
                        text={"+"}
                        onClick={() => props.incrementQuantity(product.id)}
                      />
                    </div>
                    <p style={{ color: "black" }}>
                      <strong>Total:</strong>{" "}
                      {new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                      }).format(Number(product.price * product.quantity))}
                    </p>
                  </Timeline.Body>
                </div>
                <div
                  className={`imageContainer rounded`}
                  style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)" }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </>
  ) : (
    <div
      className="p-8 rounded shadow bg-white flex justify-center"
      style={{ width: "fit-content", margin: "auto" }}
    >
      <Icons icon={"cart"} size={20} />
    </div>
  );
};

export default Cart;
