import React, { useContext } from "react";
import "./ProductDetailPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link, useParams } from "react-router-dom";
import Context from "../../context/Context";
import { addProduct } from "../../store/actions";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { products, productCartItem, dispatchProducCart } =
        useContext(Context);

    const productItem = products.find((p) => p.id === +productId);

    const handleAddProductCart = () => {
        // Kiểm tra sản phẩm đã có trong giở hàng hay chưa?
        const isExist = productCartItem.some(
            (product) => product.id === +productId
        );
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
            count: 1,
        };
        dispatchProducCart(addProduct(newProductCarItem));
        alert("them vao gio hang thanh cong");
    };

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                  <img src={productItem.images[i]} alt=""/>
                </a>
              );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="details">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="details-gallery">
                                <div className="details-label">
                                    <label>{productItem.tag}</label>
                                </div>

                                <ul className="details-preview">
                                    <Slider {...settings}>
                                        {productItem.images.map(
                                            (image, index) => (
                                                <li key={index}>
                                                    <img src={image} alt="" />
                                                </li>
                                            )
                                        )}
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="details-content">
                                <h3 className="details-name">
                                    {productItem.name}
                                </h3>
                                <div className="details-info">
                                    <p>
                                        ID:
                                        <span className="details-id">
                                            {productItem.id}
                                        </span>
                                    </p>
                                    <p>
                                        THƯƠNG HIỆU:
                                        <span className="details-brand">
                                            ORGANIC
                                        </span>
                                    </p>
                                </div>
                                <div className="details-rating">
                                    <i
                                        className={
                                            productItem.rating >= 1
                                                ? "active fa-solid fa-star"
                                                : "fa-solid fa-star"
                                        }
                                    ></i>
                                    <i
                                        className={
                                            productItem.rating >= 2
                                                ? "active fa-solid fa-star"
                                                : "fa-solid fa-star"
                                        }
                                    ></i>
                                    <i
                                        className={
                                            productItem.rating >= 3
                                                ? "active fa-solid fa-star"
                                                : "fa-solid fa-star"
                                        }
                                    ></i>
                                    <i
                                        className={
                                            productItem.rating >= 4
                                                ? "active fa-solid fa-star"
                                                : "fa-solid fa-star"
                                        }
                                    ></i>
                                    <i
                                        className={
                                            productItem.rating >= 5
                                                ? "active fa-solid fa-star"
                                                : "fa-solid fa-star"
                                        }
                                    ></i>
                                    {/* <a href="">(3 reviews)</a> */}
                                </div>
                                <h3 className="details-price">
                                    {productItem.price}
                                </h3>
                                <p className="details-desc">
                                    {productItem.description}
                                </p>
                                <div className="details-button-group">
                                    <button
                                        onClick={handleAddProductCart}
                                        className="details-add"
                                    >
                                        <i className="fa-solid fa-basket-shopping"></i>
                                        <span>THÊM VÀO GIỎ HÀNG</span>
                                    </button>
                                    <Link
                                        to="/cart-page"
                                        className="details-add detail-cart"
                                    >
                                        <i className="fa-solid fa-eye"></i>
                                        <span>XEM GIỎ HÀNG</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-descriptions">
                <div className="container">
                    <h2 className="descriptions-title">
                        Mô Tả Chi Tiết Sản Phẩm
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="details-descriptions-content">
                                <ul>
                                    <li>
                                        Chứng nhận/ Canh tác: Canh tác theo
                                        hướng hữu cơ
                                    </li>
                                    <li>
                                        Xuất xứ: Trang trại MaxOrganic, Lâm
                                        Đồng.
                                    </li>
                                    <li>
                                        Công dụng: Ớt chuông có hàm lượng
                                        vitamin C cao hơn cả cam, chanh, đu đủ,
                                        dứa/ thơm. Tại Organica, chúng tôi trồng
                                        được những trái ớt chuông hữu cơ có cùi
                                        giày, ăn giòn ngọt không khác gì trái
                                        cây.
                                    </li>
                                    <li>
                                        Gợi ý sử dụng: Ăn trực tiếp, xào, ép
                                        nước, làm salad.
                                    </li>
                                    <li>
                                        Hạn sử dụng: 3 - 6 ngày tùy điều kiện
                                        bảo quản.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="descriptions-video">
                                <img src={productItem.images[1]} alt="" />
                                <a
                                    // href="https://youtu.be/9xzcVxSBbG8"
                                    className="play-video"
                                    // data-vbtype="video"
                                >
                                    <i className="fa-solid fa-circle-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailPage;
