import React from "react";

export default function CartItem({ item }) {
  return (
    <>
      <tr>
        <td scope="row">{item.id + 1}</td>
        <td>
          <a href="/products/1.html">{item.product.title}</a>
        </td>
        <td>{item.size}</td>
        <td>{item.quantity}</td>
        <td>{item.price} руб.</td>
        <td>{item.price * item.quantity} руб.</td>
        <td>
          <button className="btn btn-outline-danger btn-sm">Удалить</button>
        </td>
      </tr>
    </>
  );
}
