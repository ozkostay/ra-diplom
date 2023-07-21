import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartSuccess,
  addCartSuccess,
  cartTotal,
} from "../store/actions/actionCreators";

export default function CartItem({ item }) {
  const { cart, totalCost, order } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleteItem(id) {
    // console.log('delete id ', id);
    const tempCart = [...cart].filter((item) => item.id !== id);
    const sum = tempCart.reduce((sum, item, index) => {
      item.id = index;
      return sum + item.quantity * item.price;
    }, 0);
    console.log("CArtITEM SUM", sum);
    dispatch(cartTotal(sum));
    dispatch(addCartSuccess(tempCart));
    localStorage.setItem(
      "cart",
      JSON.stringify({ cart: tempCart, totalCost: sum })
    );
  }

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
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deleteItem(item.id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
}
