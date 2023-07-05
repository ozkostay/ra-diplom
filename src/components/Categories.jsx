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
      </ul>
    </>
  );
}
