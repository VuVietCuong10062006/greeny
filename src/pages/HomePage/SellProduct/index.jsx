import React, { useContext } from "react";
import "./SellProduct.css";
import Context from "../../../context/Context";
import { addProduct } from "../../../store/actions";
import { Link } from "react-router-dom";
import formatMoney from "../../../utils/utils";

const SellProduct = () => {
    const { products, productCartItem, dispatchProducCart } =
        useContext(Context);
    let productSells = products.filter((p) => {
        return p.tag == "Sale";
    });

    const handleAddProductCart = (id) => {
        const productItem = products.find((p) => p.id === id);
        // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
        const isExist = productCartItem.some((p) => p.id === id);
        if (isExist) {
            alert("Sản phẩm đã có trong giỏ hàng");
            return;
        }
        // Thêm sản phẩm vào giỏ
        const newProductCarItem = {
            id: productItem.id,
            name: productItem.name,
            price: productItem.price,
            image: productItem.images[0],
            count:1
        };
        dispatchProducCart(addProduct(newProductCarItem));
        alert("them vao gio hang thanh cong");
    };

    return (
        <section className="sell">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sell-tittle">
                            <h2>Sản Phẩm Bán Chạy</h2>
                        </div>
                    </div>
                </div>

                <div className="product-list-sell row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {productSells.map((product) => (
                        <div key={product.id} className="col">
                            <div className="product-card">
                                <div className="product-image">
                                    <div className="product-label">
                                        <label>{product.tag}</label>
                                    </div>
                                    <div className="product-wish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <Link to={`${product.id}`}>
                                        <img src={product.images[0]} alt="" />
                                    </Link>
                                    <div className="product-widget">
                                        <a href="" className="product-video">
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                        <a href="" className="product-view">
                                            <i className="fa-solid fa-eye"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-rating">
                                        <i
                                            className={
                                                product.rating >= 1
                                                    ? "active fa-solid fa-star"
                                                    : "fa-solid fa-star"
                                            }
                                        ></i>
                                        <i
                                            className={
                                                product.rating >= 2
                                                    ? "active fa-solid fa-star"
                                                    : "fa-solid fa-star"
                                            }
                                        ></i>
                                        <i
                                            className={
                                                product.rating >= 3
                                                    ? "active fa-solid fa-star"
                                                    : "fa-solid fa-star"
                                            }
                                        ></i>
                                        <i
                                            className={
                                                product.rating >= 4
                                                    ? "active fa-solid fa-star"
                                                    : "fa-solid fa-star"
                                            }
                                        ></i>
                                        <i
                                            className={
                                                product.rating >= 5
                                                    ? "active fa-solid fa-star"
                                                    : "fa-solid fa-star"
                                            }
                                        ></i>
                                        {/* <a href="">(3)</a> */}
                                    </div>
                                    <h6 className="product-name">
                                        {product.name}
                                    </h6>
                                    <h6 className="product-price">
                                        {formatMoney(product.price)}
                                    </h6>
                                    <button
                                        onClick={() =>
                                            handleAddProductCart(product.id)
                                        }
                                        className="product-add"
                                    >
                                        <i className="fa-solid fa-basket-shopping"></i>
                                        <span>ADD</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="sell-btn">
                            <a
                                className="btn btn-outline"
                                href="./page/shop.html"
                            >
                                <i className="fa-solid fa-eye"></i>
                                <span>XEM THÊM</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellProduct;
