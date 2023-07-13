import React from "react";

export default function ProductSize({ item, markSize }) {
  return (
    <span
      onClick={() => markSize(item.id)}
      className={
        item.active ? "catalog-item-size selected" : "catalog-item-size"
      }
    >
      {item.size}
    </span>
  );
}
