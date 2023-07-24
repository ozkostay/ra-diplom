import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  listProductsRequest,
  setOffset,
  setFindString,
} from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";
import Categories from "./Categories";
import Spiner2 from "./Spiner2";

export default function Catalog(params) {
  // if (params.param) {
  //   console.log(params);
  // }

  const { products, loading, error, offset, findString } = useSelector(
    (state) => state.products
  );
  const { currentCategory } = useSelector((state) => state.categories);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let queryString = "";
    if (currentCategory !== 0) {
      queryString = "categoryId=" + currentCategory;
    }
    if (findString !== "") {
      queryString =
        queryString + (queryString !== "" ? "&" : "") + `q=${findString}`;
    }
    if (offset > 0) {
      queryString =
        queryString + (queryString !== "" ? "&" : "") + `offset=${offset}`;
    }

    if (queryString.length > 0) {
      queryString = "?" + queryString;
    }
    dispatch(listProductsRequest(`items${queryString}`));
  }, [currentCategory, offset]);

  function fnFindProducts(event) {
    event.preventDefault();
    fnSetOffset(0);
    dispatch(listProductsRequest(`items?q=${findString}`));
  }

  function fnSetOffset(start = offset + 6) {
    dispatch(setOffset(start));
  }

  function fnFind(e) {
    dispatch(setFindString(e.target.value));
  }

  function fnDisp() {
    console.log("fnDisp cart:", cart);
  }

  return (
    <>
      {loading && (
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <Spiner2 />
        </section>
      )}

      {!loading && (
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          {location.pathname === "/catalog" && (
            <form
              className="catalog-search-form form-inline"
              onSubmit={fnFindProducts}
            >
              <input
                value={findString}
                onChange={fnFind}
                className="form-control"
                placeholder="Поиск"
              />
            </form>
          )}
          <Categories />
          <div className="row">
            {products.map((item) => (
              <CatalogItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => fnSetOffset()}
            >
              Загрузить ещё
            </button>
          </div>
        </section>
      )}
    </>
  );
}
