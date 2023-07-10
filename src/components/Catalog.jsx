import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { listProductsRequest, setOffset, setFindString } from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";
import Categories from "./Categories";

export default function Catalog(params) {
  if (params.param) {
    console.log(params);
  }
  
  const { products, loading, error, offset, findString } = useSelector((state) => state.products);
  const { currentCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const location = useLocation();

  function HeaderView() {
    // console.log("ROUTER ", location.pathname);
    // return <span>Path : {location.pathname}</span>
  }

  useEffect(() => {
    //console.log("currentCategory", currentCategory);
    let queryString = "";
    if (currentCategory !== 0) {
      queryString = "categoryId=" + currentCategory;
      //console.log("AAAAAAAAAAAAAAAAAAAAAAAA", queryString);
    }
    if (findString !== "") {
      //console.log("BBBBBBBBBBBBBBBBBBBBBB", findString);
      queryString = queryString + (queryString !== "" ? "&" : "") + `q=${findString}`;
    }
    if (offset > 0) {
      queryString = queryString + (queryString !== "" ? "&" : "") + `offset=${offset}`;
      //console.log("CCCCCCCCCCCCCCCCCCCCCCC", queryString);
    }

    if (queryString.length > 0) {
      queryString = "?" + queryString;
    }
    console.log("queryString ITOG", queryString, offset);
    dispatch(listProductsRequest(`items${queryString}`));
  }, [currentCategory, findString, offset]);

  function fnFindProducts(event) {
    event.preventDefault();
    console.log('fnFindProducts');
    fnSetOffset(0);
    // dispatch(setFindString(event.target.input.value));
    
    console.log("FIND: " + findString);
    dispatch(listProductsRequest(`items?q=${findString}`));
    // event.target.input.value = "";
  }

  function fnSetOffset(start = offset + 6) {
    dispatch(setOffset(start));
  }
  
  function fnFind(e) {
    console.log('99', e.target.value);
    setFindString(e.target.value)
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
            <input value={findString} onChange={fnFind} className="form-control" placeholder="Поиск" />
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

      <section />
    </>
  );
}
