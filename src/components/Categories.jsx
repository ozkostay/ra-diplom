import React, { startTransition, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  categoriesRequest,
  changCurrentCategory,
} from "../store/actions/actionCreators";
import CategoriesItem from "./CategoriesItem";

export default function Categories() {
  const { categories, loading, error, currentСategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  // const categories = [
  //   {
  //     id:	0,
  //     title: "Все",
  //     active: true
  //   },
  //   {
  //     id:	12,
  //     title: "Мужская обувь",
  //     active: false
  //   },
  //   {
  //     id:	13,
  //     title: "Женская обувь",
  //     active: false
  //   },
  //   {
  //     id:	14,
  //     title: "Обувь унисекс",
  //     active: false
  //   },
  //   {
  //     id:	15,
  //     title: "Детская обувь",
  //     active: false
  //   }
  // ];

  useEffect(() => {
    dispatch(categoriesRequest("categories"));
  }, []);

  function changeCurrentCategory(id) {
    dispatch(changCurrentCategory(id));
  }

  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        {categories.map((item) => (
          <CategoriesItem
            key={item.id}
            item={item}
            currentСategory={currentСategory}
            changeCurrentCategory={changeCurrentCategory}
          />
        ))}
        {/* <li className="nav-item">
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
        </li> */}
      </ul>
    </>
  );
}
