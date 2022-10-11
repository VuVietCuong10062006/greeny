import React, { useContext } from "react";
import "./Feature.css";
import Context from "../../../context/Context";
import { addProduct } from "../../../store/actions";
import { Link } from "react-router-dom";

const Feature = () => {
    const { products, productCartItem, dispatchProducCart } = useContext(Context);
    let productFeatures = products.filter((p) => {
        return p.tag == "Feature";
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
        <section className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-title">
                            <h2>Sản Phẩm Nổi Bật</h2>
                        </div>
                    </div>
                </div>

                <div className="product-list-feature row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    {productFeatures.map((product) => (
                        <div key={product.id}  className="col">
                            <div className="feature-card">
                                <div className="feature-image">
                                    <div className="feature-label">
                                        <label>{product.tag}</label>
                                    </div>
                                    <div className="feature-wish">
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <Link to={`/${product.id}`}>
                                        <img src={product.images[0]} alt="" />
                                    </Link>
                                    <div className="feature-widget">
                                        <a href="" className="feature-video">
                                            <i className="fa-solid fa-play"></i>
                                        </a>
                                        <a href="" className="feature-view">
                                            <i className="fa-solid fa-eye"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="feature-content">
                                    <h6 className="feature-name">
                                        {product.name}
                                    </h6>
                                    <div className="feature-rating">
                                        <i className={product.rating >=1 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                        <i className={product.rating >=2 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                        <i className={product.rating >=3 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                        <i className={product.rating >=4 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                        <i className={product.rating >=5 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                        <a href="">(3)</a>
                                    </div>
                                    <h6 className="feature-price">{product.price}</h6>
                                    <p className="feature-desc">
                                        {product.description}
                                    </p>
                                    <button onClick={() => handleAddProductCart(product.id)} className="feature-add">
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

export default Feature;
