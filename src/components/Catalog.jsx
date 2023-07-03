import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProductsRequest } from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";
import Categories from './Categories';

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
        <Categories />
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
