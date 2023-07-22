import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlaceOrder() {
  const { cart } = useSelector((state) => state.cart);
  const [phone, setPhone] = useState('');
  const [address, setaddress] = useState('');
  const [deliveryRules, setDeliveryRules] = useState(false);

  function chengeCheckbox() {
    setDeliveryRules(!deliveryRules);
  }

  function sendOrder(event) {
    event.preventDefault();
    // {
    //   "owner": {
    //     "phone": "+7xxxxxxxxxxx",
    //     "address": "Moscow City",
    //   },
    //   "items": [
    //     {
    //       "id": 1,
    //       "price": 34000,
    //       "count": 1
    //     }
    //   ]
    // }
    const odjForOrder = {
      owner: {
        phone,
        address,
      },
      items: []
    }
    cart.forEach((item) => {
      odjForOrder.items.push(
        {
          id: item.product.id,
          price: item.price,
          count: item.quantity,
        }
      );
    })
    console.log('ORDER odjForOrder', odjForOrder);
    // console.log(
    //   'phone',phone,
    //   'address', address,
    //   'check', deliveryRules
    // );
  }

  return (
  <>
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input 
              className="form-control" 
              placeholder="Ваш телефон" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input 
              className="form-control" 
              placeholder="Адрес доставки"
              value={address} 
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <input 
              type="checkbox"
              id="agreement"
              className="form-check-input" 
              checked={deliveryRules} 
              onChange={chengeCheckbox}
            />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button 
            type="submit" 
            className="btn btn-outline-secondary"
            onClick={sendOrder}
          >Оформить</button>
        </form>
      </div>
    </section>  
  </>    
  )
}


