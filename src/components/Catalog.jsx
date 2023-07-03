import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProductsRequest } from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsRequest("items"));
  }, []);

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <form className="catalog-search-form form-inline">
          <input className="form-control" placeholder="Поиск" />
        </form>
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Все
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Женская обувь
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Мужская обувь
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Обувь унисекс
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Детская обувь
            </a>
          </li>
        </ul>
        <div className="row">
          {products.map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline-primary">Загрузить ещё</button>
        </div>
      </section>

      <section />
    </>
  );
}
