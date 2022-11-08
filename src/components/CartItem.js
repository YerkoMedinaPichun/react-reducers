import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  let total = price * quantity;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity} = ${total}
      </h5>
      <button onClick={() => delFromCart(id)}>Quitar Producto</button>
      <button onClick={() => delFromCart(id, true)}>Quitar Todos</button>
      {/* <input
        type="button"
        value="Quitar Producto"
        delFromCart={() => delFromCart(id)}
      /> */}
    </div>
  );
};

export default CartItem;
