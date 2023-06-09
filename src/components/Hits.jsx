import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hitsRequest } from "../store/actions/actionCreators";
import HitsItem from "./HitsItem";

export default function Hits({ hits }) {
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {hits.map((item) => (
            <HitsItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
