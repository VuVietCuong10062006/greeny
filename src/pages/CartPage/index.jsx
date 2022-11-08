import React, { useContext, useState } from "react";
import ShopBanner from "../ShopPage/ShopBanner";
import "./CartPage.css";
import Context from "../../context/Context";
import { addCount, deleteCount, subtractCount } from "../../store/actions";
import formatMoney from "../../utils/utils";

const CartPage = () => {
    const { productCartItem, dispatchProducCart } = useContext(Context);
    const [inputValue, setInputvalue] = useState(2);

    const totalMoneyProductCart = productCartItem.reduce((total , p) =>{
        return total + p.price*p.count
    },0)

    return (
        <>
            <ShopBanner />
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="cart-detail">
                                <h2 className="cart-detail-title">
                                    Giỏ hàng của bạn
                                </h2>
                                <p>
                                    Bạn đang có{" "}
                                    <strong>{productCartItem.length}</strong>{" "}
                                    sản phẩm trong giỏ hàng
                                </p>
                                <ul className="cart-list">
                                    {productCartItem.map((product) => (
                                        <li
                                            key={product.id}
                                            className="cart-item"
                                        >
                                            <div className="cart-image">
                                                <a href="./deital.html?id=1">
                                                    <img
                                                        src={product.image}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="cart-info">
                                                <h6>{product.name}</h6>
                                                <div className="cart-price">
                                                    <p className="item-price">
                                                        {formatMoney(product.price)}
                                                    </p>
                                                    <p className="item-price-total">
                                                        {formatMoney(product.price *
                                                            product.count)}
                                                    </p>
                                                </div>
                                                <div className="cart-action-group">
                                                    <div className="cart-action">
                                                        <button
                                                            onClick={() =>
                                                                dispatchProducCart(
                                                                    subtractCount(
                                                                        product.id
                                                                    )
                                                                )
                                                            }
                                                            className="action-minus"
                                                        >
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                        <input
                                                            className="action-input"
                                                            type="text"
                                                            name=""
                                                            id=""
                                                            value={
                                                                product.count
                                                            }
                                                            onChange={(e) =>
                                                                setInputvalue(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                dispatchProducCart(
                                                                    addCount(
                                                                        product.id
                                                                    )
                                                                )
                                                            }
                                                            className="action-plus"
                                                        >
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <button onClick={() => dispatchProducCart(deleteCount(product.id))} className="action-delete">
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="cart-order">
                                <h2>Thông tin đơn hàng</h2>
                                <div className="cart-order-bill">
                                    <p>Tổng tiền :</p>
                                    <p className="bill-total">{totalMoneyProductCart}</p>
                                </div>
                                <a href="./checkout.html">
                                    <button className="order-pay-button">
                                        Thanh Toán
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
