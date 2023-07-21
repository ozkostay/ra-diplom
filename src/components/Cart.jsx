import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addCartSuccess,
  cartTotal,
  cartOrder,
} from "../store/actions/actionCreators";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, totalCost, order } = useSelector((state) => state.cart);
  const location = useLocation().pathname;
  // let order = useLocation().state.order;
  const dispatch = useDispatch();
  // let totalCost = 0;
  // const [totalCost, setTotalCost] = useState(0);
  console.log("!!===========================================");
  // console.log("CART cart", cart);
  // console.log("CART props", order);
  // console.log("CART location", location);

  useEffect(() => {
    if (!order) {
      console.log("Not ORDER", totalCost);
      return;
    }
    console.log("!!!================", order);
    const tempCart = [...cart];
    // Ищем совпадение товар-размер
    const isFind = tempCart.findIndex((item) => {
      return item.product.id === order.product.id && item.size === order.size;
    });
    if (isFind < 0) {
      tempCart.push(order);
    } else {
      tempCart[isFind].quantity += order.quantity;
    }
    dispatch(cartOrder(null));
    const sum = tempCart.reduce((sum, item, index) => {
      item.id = index;
      return sum + item.quantity * item.price;
    }, 0);
    console.log("CArt SUM", sum);
    dispatch(cartTotal(sum));
    dispatch(addCartSuccess(tempCart));
    // localStorage.setItem('cart', );
    localStorage.setItem(
      "cart",
      JSON.stringify({ cart: tempCart, totalCost: sum })
    );
    // localStorage.setItem('cart', JSON.stringify(tempCart));
  }, []);

  function fnTemp() {}
  // План:
  // редьюсер Cart из LocalStorage
  // синхронизация state b LocalStorage

  // Функция-тест ДИСПАТЧА, на кнопке
  function fnDisp() {
    console.log("fnDisp cart:", cart);
  }

  return (
    <>
      {/* Корзина
      <button onClick={fnDisp}>Disp</button> */}
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} />
            ))}

            <tr>
              <td colSpan="5" className="text-right">
                Общая стоимость
              </td>
              <td>{totalCost} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
