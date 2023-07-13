import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productRequest } from "../store/actions/actionCreators";
import ProductSize from "./ProductSize";

export default function Product() {
  const { product, loading, error } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState([]); // Активные размеры
  const [activeCart, setActiveCart] = useState(" disabled"); // Активность кнопки корзины

  // Получаем товар из базы
  useEffect(() => {
    dispatch(productRequest(`items/${id}`));
  }, []);

  // Выясняем какие размеры есть, флаг available
  useEffect(() => {
    if (!product.id) {
      return;
    }
    const sizesAvailable = [...product.sizes].filter((i) => i.available);
    const tempSizes = [];
    sizesAvailable.forEach((item, index) => {
      tempSizes.push({
        id: index,
        size: item.size,
        active: false,
      });
    });
    setSizes(tempSizes);
  }, [product]);

  function markSize(id) {
    // Размер можно выбрать только один.
    const tempSizes = [...sizes];
    tempSizes.forEach((item) => {
      item.active = item.id === id ? true : false;
    });
    setSizes(tempSizes);
    setActiveCart(""); // Кнопка «В корзину» активируется только тогда, когда есть размеры в наличии и выбран конкретный размер.
  }

  function ProductToCart() {
    console.log("поехали в корзину");
    // Наименование (сам объект)
    // Размер
    // Кол-во
    // Стоимость
    // Итог (по итогу в конце сумма)
  }

  if (product.id) {
    return (
      <>
        <section className="catalog-item">
          <h2 className="text-center">{product.title}</h2>
          <div className="row">
            <div className="col-5">
              {product?.images[0] && (
                <img src={product.images[0]} className="img-fluid" alt="PIC" />
              )}
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
                  Размеры в наличии:
                  {sizes.map((item) => (
                    <ProductSize
                      key={item.id}
                      item={item}
                      markSize={markSize}
                    />
                  ))}
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
              <button
                onClick={ProductToCart}
                className={`btn btn-danger btn-block btn-lg ${activeCart}`}
              >
                В корзину
              </button>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <></>;
  }
}
