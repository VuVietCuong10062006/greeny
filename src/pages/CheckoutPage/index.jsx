import React, { useContext } from "react";
import ShopBanner from "../ShopPage/ShopBanner";
import "./CheckoutPage.css";

import Context from "../../context/Context";
import payment6 from "../../assets/image/payment-6.png";
import payment7 from "../../assets/image/payment-7.png";
import payment9 from "../../assets/image/payment-9.png";
import formatMoney from "../../utils/utils";

const CheckoutPage = () => {
    const { productCartItem } = useContext(Context);

    return (
        <>
            <ShopBanner />
            <section className="checkout">
                <div className="container">
                    <div className="row flex-wrap-reverse">
                        <div className="col-lg-7 col-md-7">
                            <div className="checkout-info">
                                <div className="info-ship">
                                    <h2>Thông tin vận chuyển</h2>
                                    <p>
                                        Bạn có tài khoản chưa?
                                        <a href="./login.html">Đăng nhập</a>
                                    </p>
                                    <div className="info-ship-input">
                                        {/* <!-- <label htmlFor="fullname"></label> --> */}
                                        <input
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Tên đầy đủ"
                                        />
                                        <small>Error message</small>
                                    </div>
                                    <div className="input-email-phone">
                                        <div className="info-ship-input">
                                            {/* <!-- <label htmlFor="email"></label> --> */}
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                            />
                                            <small>Error message</small>
                                        </div>
                                        <div className="info-ship-input">
                                            {/* <!-- <label htmlFor="phone"></label> --> */}
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder="Số điện thoại"
                                            />
                                            <small>Error message</small>
                                        </div>
                                    </div>
                                    <div className="info-ship-input">
                                        {/* <!-- <label htmlFor="address"></label> --> */}
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            placeholder="Địa chỉ"
                                        />
                                        <small>Error message</small>
                                    </div>
                                    <div className="input-address-detail">
                                        <div className="info-ship-input">
                                            <select name="province" id="citis">
                                                <option value="">
                                                    Tỉnh / thành
                                                </option>
                                            </select>
                                            <small>Error message</small>
                                        </div>
                                        <div className="info-ship-input">
                                            <select
                                                name="province"
                                                id="district"
                                            >
                                                <option value="">
                                                    Quận / huyện
                                                </option>
                                            </select>
                                            <small>Error message</small>
                                        </div>
                                        <div className="info-ship-input">
                                            <select name="province" id="ward">
                                                <option value="">
                                                    Xã / phường
                                                </option>
                                            </select>
                                            <small>Error message</small>
                                        </div>
                                    </div>
                                    <div className="info-ship-input">
                                        {/* <!-- <label htmlFor="note"></label> --> */}
                                        <input
                                            type="text"
                                            id="note"
                                            name="note"
                                            placeholder="Ghi chú"
                                        />
                                        <small>Error message</small>
                                    </div>
                                </div>
                                <div className="payments">
                                    <h2>Hình thức thanh toán</h2>
                                    <div className="radio-wrapper">
                                        <input
                                            type="radio"
                                            name="payments"
                                            id="payments"
                                        />
                                        <label htmlFor="payments">
                                            <span>Thanh toán qua VNPAY-QR</span>
                                            <img src={payment6} alt="" />
                                        </label>
                                    </div>
                                    <div className="radio-wrapper">
                                        <input
                                            type="radio"
                                            name="payments"
                                            id="payments"
                                        />
                                        <label htmlFor="payments">
                                            <span>Thanh toán qua Ví MoMo</span>
                                            <img src={payment7} alt="" />
                                        </label>
                                    </div>
                                    <div className="radio-wrapper">
                                        <input
                                            type="radio"
                                            // checked="checked"
                                            name="payments"
                                            id="payments"
                                        />
                                        <label htmlFor="payments">
                                            <span>
                                                {" "}
                                                Thanh toán khi nhận hàng (COD)
                                            </span>
                                            <img src={payment9} alt="" />
                                        </label>
                                    </div>
                                </div>
                                <div className="confirm">
                                    <a href="./shop.html">Tiếp tục mua hàng</a>
                                    <button>
                                        <span>Thanh Toán</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="checkout-order">
                                <div className="order-product">
                                    <ul className="order-product-list">
                                        {productCartItem.map((product) => (
                                            <li key={product.id} className="order-product-item">
                                                <div className="order-product-image">
                                                    <a href="./deital.html">
                                                        <img
                                                            src={product.image}
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="order-product-number">
                                                        {product.count}
                                                    </span>
                                                </div>
                                                <div className="order-product-content">
                                                    <h6 className="order-product-name">
                                                        {product.name}
                                                    </h6>
                                                    <p className="order-product-price">
                                                        {formatMoney(product.price)}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="order-discount-btn">
                                    <input
                                        type="text"
                                        placeholder="Mã giảm giá"
                                    />
                                    <button>Sử dụng</button>
                                </div>
                                <div className="order-bill">
                                    <div className="bill-money bill-subtotal">
                                        <span>Tạm tính</span>
                                        <span className="sub-total-money">
                                            $56
                                        </span>
                                    </div>
                                    <div className="bill-money bill-discount">
                                        <span>Giảm giá</span>
                                        <span className="discount-money">
                                            $10
                                        </span>
                                    </div>
                                    <div className="bill-money bill-total">
                                        <span>Tổng tiền</span>
                                        <span className="total-money">$46</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckoutPage;
