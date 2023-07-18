import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addCartRequest } from '../store/actions/actionCreators';

export default function Cart() {
  const {cart} = useSelector((state) => state.cart)
  const order = useLocation().state.order;
  const dispatch = useDispatch;
  // console.log('CART props', order);
  useEffect(() => {
    if (order) {
      const tempCart = [...cart];
      tempCart.push(order);
      dispatch(addCartRequest(tempCart));
    }
    
  },[])
  // пишем state без саги
  // редьюсер Cart из LocalStorage
  // синхронизация state b LocalStorage


  
  return (
    <>
    Корзина
    {cart.map((item) => (<p>{item.product.title}</p>))}
    </>
  )
}