import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hits from "./Hits";
import Catalog from "./Catalog";
import { hitsRequest } from "../store/actions/actionCreators";

export default function Home() {
  const { hits } = useSelector((state) => state.hits);

  return (
    <>
      <Hits />
      <Catalog />
    </>
  );
}
