import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { productRequest, cartOrder } from "../store/actions/actionCreators";
import ProductSize from "./ProductSize";
import { logRoles } from "@testing-library/react";

export default function Product() {
  const { product, loading, error } = useSelector((state) => state.products);
  const { cart, totalCost, order } = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sizes, setSizes] = useState([]); // Активные размеры
  const [activeCart, setActiveCart] = useState("disabled"); // Активность кнопки корзины
  const [quantity, setQuantity] = useState(1); // количество в корзину

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
    if (tempSizes.length === 0) {
      console.log("cart 111");
      setActiveCart("d-none");
    } else {
      console.log("cart 222");
      // setActiveCart("");
    }
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
    // Формируем объект для корзины
    // и с ним переходим в корзину
    const activeSize = sizes.filter((i) => i.active);
    if (activeSize.length === 0) {
      return;
    }
    
    const tempOrder = {
      id: null,
      product: product,
      size: activeSize[0].size,
      quantity: quantity,
      price: product.price,
    };
    
    console.log("поехали в корзину", tempOrder);
    
    dispatch(cartOrder(tempOrder));
    navigate("/cart");
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
                {activeCart !== "d-none" && (
                  <p>
                    Количество:{" "}
                    <span className="btn-group btn-group-sm pl-2">
                      <button
                        onClick={() =>
                          setQuantity(quantity > 1 ? quantity - 1 : quantity)
                        }
                        className="btn btn-secondary"
                      >
                        -
                      </button>
                      <span className="btn btn-outline-primary">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity(quantity < 10 ? quantity + 1 : quantity)
                        }
                        className="btn btn-secondary"
                      >
                        +
                      </button>
                    </span>
                  </p>
                )}
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
