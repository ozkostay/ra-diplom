import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { listProductsRequest, setOffset } from "../store/actions/actionCreators";
import CatalogItem from "./CatalogItem";
import Categories from "./Categories";

export default function Catalog() {
  const { products, loading, error, offset } = useSelector((state) => state.products);
  const { currentCategory } = useSelector((state) => state.categories);
  const [findString, setFindString] = useState("");
  // const [offset, setOffset] = useState(0);
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
    fnSetOffset(0);
    setFindString(event.target.input.value);
    // console.log("FIND: " + event.target.input.value);
    // dispatch(listProductsRequest(`items?q=${event.target.input.value}`));
    // event.target.input.value = "";
  }

  function fnSetOffset(start = offset + 6) {
    dispatch(setOffset(start));
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
