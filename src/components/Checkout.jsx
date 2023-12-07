import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import {  addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/FireBase";

export const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotalPrice, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();


  const buy = (data) => {
    const order = {
      client: data,
      prods: cart,
      total: cartTotalPrice(),
    };

    const orderRef = collection(db, "orders");
    addDoc(orderRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <div className="message">
        <h2>Gracias por tu compra </h2>
        <p>pedido: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 style={{ display: "none" }}>Checkout</h1>
      <form onSubmit={handleSubmit(buy)}>
        <h3>Order</h3>
        <div className="input-div">
          <label htmlFor="input-name">Nombre</label>
          <input
            id="input-name"
            required
            type="text"
            placeholder="Ingresa tu nombre "
            {...register("name")}
          />
        </div>
        <div className="input-div">
          <label htmlFor="input-lastname">Apellido</label>
          <input
            id="input-lastname"
            required
            type="text"
            placeholder="Ingresa tu apellido "
            {...register("lastname")}
          />
        </div>
        <div className="input-div">
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            required
            type="email"
            placeholder="Ingresa tu correo "
            {...register("email")}
          />
        </div>

        <button id="btn-enviar" className="btn-enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};
