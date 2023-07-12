import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productRequest } from "../store/actions/actionCreators";

export default function Product() {
  const { product, loading, error } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentVars, setCurrentVars] = useState({
    quantity: 1,
    sizes: [],
    currentSizeIndex: 0,
  });

  // Получаем товар из базы
  useEffect(() => {
    // console.log(`items/${id}`);
    dispatch(productRequest(`items/${id}`));
    console.log("product", product);
  }, []);

  useEffect(() => {
    console.log("ERROR", product);
    const sizesAvailable = [...product.sizes]
      .filter((i) => i.available)
      .map((i) => i.size);
    console.log("111", product.sizes, "222", sizesAvailable);
    setCurrentVars({
      quantity: 1,
      sizes: [...sizesAvailable],
      currentSizeIndex: 0,
    });
    console.log(currentVars);
  }, [product]);

  // Выясняем какие размеры есть, флаг available
  // По умолчанию ни один размер не выбран. После выбора он становится выделенным,
  // как на скриншоте.
  // Важно: кнопка «В корзину» активируется только тогда, когда есть размеры в наличии и выбран конкретный размер.
  // Размер можно выбрать только один.

  return (
    <>
      <section className="catalog-item">
        <h2 className="text-center">{product.title}</h2>
        <div className="row">
          <div className="col-5">
            {/* {product?.images[0] && (
              <img src={product.images[0]} className="img-fluid" alt="PIC" />
            )} */}
          </div>
          <div className="col-7">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Артикул</td>
                  <td>{product.sku}</td>
                </tr>
                <tr>
                  <td>Производитель</td>
                  <td>{product.manufacturer}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>{product.color}</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>{product.material}</td>
                </tr>
                <tr>
                  <td>Сезон</td>
                  <td>{product.season}</td>
                </tr>
                <tr>
                  <td>Повод</td>
                  <td>{product.reason}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <p>
                Размеры в наличии:{" "}
                {/* <span className="catalog-item-size selected">18 US</span>{" "}
                <span className="catalog-item-size">20 US</span> */}
                {
                  // console.log(currentVars.sizes)
                  currentVars.sizes.map((item) => {
                    console.log("SIZE", item);
                    // <span className="catalog-item-size">{item}</span>
                  })
                }
                {/* <span className="catalog-item-size">20 US</span> */}
              </p>
              <p>
                Количество:{" "}
                <span className="btn-group btn-group-sm pl-2">
                  <button className="btn btn-secondary">-</button>
                  <span className="btn btn-outline-primary">1</span>
                  <button className="btn btn-secondary">+</button>
                </span>
              </p>
            </div>
            <button className="btn btn-danger btn-block btn-lg">
              В корзину
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
