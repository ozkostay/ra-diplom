import React from "react";

export default function CategoriesItem({
  item,
  currentCategory,
  changeCurrentCategory,
}) {
  return (
    <>
      <li className="nav-item">
        <a
          className={
            item.id === currentCategory ? "nav-link active" : "nav-link"
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
