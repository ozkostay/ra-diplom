import React from 'react';

export default function CategoriesItem({item}) {
  
  return (
    <>
      <li className="nav-item">
        <a className={item.active ? "nav-link active" : "nav-link"} onClick={() => {console.log(item.id)}} href="#">
          {item.title}
        </a>
      </li>
    </>
  )
}