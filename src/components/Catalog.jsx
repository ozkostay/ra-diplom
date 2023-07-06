import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { listProductsRequest } from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";
import Categories from "./Categories";

export default function Catalog() {
  const { products, loading, error } = useSelector((state) => state.products);
  const { currentCategory } = useSelector((state) => state.categories);
  const [findString, setFindString] = useState("");
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  function HeaderView() {
    // console.log("ROUTER ", location.pathname);
    // return <span>Path : {location.pathname}</span>
  }

  useEffect(() => {
    console.log("currentCategory", currentCategory);
    let queryString = "";
    // let questionMark = "";
    if (currentCategory !== 0) {
      queryString = "categoryId=" + currentCategory;
      console.log("AAAAAAAAAAAAAAAAAAAAAAAA", queryString);
      // questionMark = "?";
    }
    if (findString !== "") {
      console.log("DDDDDDDDDDDDDDDDDDDDDDDD", findString);
      queryString = queryString + (queryString !== "" ? "&" : "") + findString;
    }
    if (queryString.length > 0) {
      queryString = "?" + queryString;
    }
    console.log("queryString", queryString, offset);
    dispatch(listProductsRequest(`items${queryString}`));
  }, [currentCategory, findString]);

  function fnFindProducts(event) {
    event.preventDefault();
    setOffset(0);
    setFindString("q=" + event.target.input.value);
    // console.log("FIND: " + event.target.input.value);
    // dispatch(listProductsRequest(`items?q=${event.target.input.value}`));
    // event.target.input.value = "";
  }

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {location.pathname === "/catalog" && (
          <form
            className="catalog-search-form form-inline"
            onSubmit={fnFindProducts}
          >
            <input name="input" className="form-control" placeholder="Поиск" />
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
            onClick={() => setOffset(offset + 6)}
          >
            Загрузить ещё
          </button>
        </div>
      </section>

      <section />
    </>
  );
}
