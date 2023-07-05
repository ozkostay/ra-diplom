import React from "react";

export default function CategoriesItem({
  item,
  currentСategory,
  changeCurrentCategory,
}) {
  return (
    <>
      <li className="nav-item">
        <a
          className={
            item.id === currentСategory ? "nav-link active" : "nav-link"
          }
          onClick={() => {
            changeCurrentCategory(item.id);
          }}
          href="#"
        >
          {item.title}
        </a>
      </li>
    </>
  );
}
