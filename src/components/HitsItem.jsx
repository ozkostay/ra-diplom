import React from "react";

export default function HitsItem({ item }) {
  const stylePic = {
    height: 480,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: '1px solid black'
  };

  return (
    <>
      <div className="col-4">
        <div className="card catalog-item-card">
          <div style={stylePic}>
            <img
              src={item.images[0]}
              className="card-img-top img-fluid"
              alt="PIC'"
            />
          </div>

          <div className="card-body">
            <p className="card-text">{item.title}</p>
            <p className="card-text">{item.price + " руб."}</p>
            <a href="/products/1.html" className="btn btn-outline-primary">
              Заказать
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
