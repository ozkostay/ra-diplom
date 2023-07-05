import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hits from "./Hits";
import { hitsRequest } from "../store/actions/actionCreators";

export default function Home() {
  const { hits, loading, error, route } = useSelector((state) => state.hits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hitsRequest("top-sales"));
  }, []);

  return <>{hits.length > 0 && <Hits hits={hits} />}</>;
}
