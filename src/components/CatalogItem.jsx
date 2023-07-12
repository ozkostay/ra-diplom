import React from "react";
import { useNavigate } from "react-router-dom";

export default function CatalogItem({ item }) {
  const navigate = useNavigate();
  const stylePic = {
    height: 480,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: '1px solid black'
  };

  function fnShowProduct(id) {
    console.log("ItemID ", id);
    navigate(`/catalog/${id}`);
  }

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
            <p className="card-text">{item.category}</p>
            <p className="card-text">{item.price + " руб."}</p>
            {/* <a href="/products/1.html" className="btn btn-outline-primary">
              Заказать
            </a> */}
            <a
              onClick={() => fnShowProduct(item.id)}
              className="btn btn-outline-primary"
            >
              Заказать
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
