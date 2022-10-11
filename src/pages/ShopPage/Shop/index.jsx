import React, { useContext, useState } from "react";
import "./Shop.css";
import Context from "../../../context/Context";
import { addProduct } from "../../../store/actions";

const Shop = () => {
    const {
        tags,
        categorys,
        ratings,
        products,
        productCartItem,
        dispatchProducCart,
    } = useContext(Context);

    const [filter, setFilter] = useState({
        tag: "",
        category: "",
        rating : ""
    });

    const [checkedTag, setCheckedTag] = useState();
    const [checkedCategory, setCheckedCategory] = useState();
    const [checkedRating, setCheckedRating] = useState();

    const handleChangetag = (e) => {
        let tagChange = e.target.value;
        setCheckedTag(tagChange);
        setFilter({ ...filter, tag: tagChange });
    };

    const handleChangetagCategory = (e) => {
        let categoryChange = e.target.value;
        setCheckedCategory(categoryChange);
        setFilter({ ...filter, category: categoryChange });
    };

    const handleChangeRating = (e) => {
        let ratingChange = e.target.value;
        setCheckedRating(ratingChange);
        setFilter({ ...filter, rating: ratingChange });
    };

    // Lọc khóa học theo filter
    const filterCourse = () => {
        let newCourses = [...products];

        if (filter.tag) {
            newCourses = newCourses.filter(
                (product) => product.tag === filter.tag
            );
        }

        if (filter.category) {
            newCourses = newCourses.filter(
                (product) => product.category === filter.category
            );
        }

        if (filter.rating) {
            newCourses = newCourses.filter(
                (product) => product.rating === +filter.rating
            );
        }

        return newCourses;
    };

    const renderedProducts = filterCourse();

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
            count: 1,
        };
        dispatchProducCart(addProduct(newProductCarItem));
        alert("them vao gio hang thanh cong");
    };

    return (
        <section className="shop">
            <div className="container">
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-3 col-md-5">
                        <div className="shop-widget-promo">
                            <a href="">
                                <img
                                    src="../public/image/banner/shop-promo.jpg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="shop-widget">
                            <h6 className="shop-widget-title">Lọc Theo Giá</h6>
                            <div className="shop-widget-group">
                                <input
                                    className="search-price-min"
                                    type="text"
                                    placeholder="Min"
                                />
                                <input
                                    className="search-price-max"
                                    type="text"
                                    placeholder="Max"
                                />
                            </div>
                            <button className="shop-widget-btn btn-search-price">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Tìm Kiếm</span>
                            </button>
                        </div>

                        <div className="shop-widget">
                            <h6 className="shop-widget-title">
                                Lọc Theo Xếp Hang
                            </h6>
                            <form>
                                <ul className="shop-widget-list shop-widget-list-rating">
                                    {ratings.map((rating, index) => (
                                        <li key={index}>
                                            <div className="shop-widget-content">
                                                <input
                                                    className="checkbox-rating"
                                                    type="radio"
                                                    id="star5"
                                                    value={rating.value}
                                                    checked={rating.value === checkedRating}
                                                    onChange={(e) => handleChangeRating(e)}
                                                />
                                                <label htmlFor="star5">
                                                    <i className={rating.value >=1 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                    <i className={rating.value >=2 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                    <i className={rating.value >=3 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                    <i className={rating.value >=4 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                    <i className={rating.value >=5 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                </label>
                                            </div>
                                            <span className="shop-widget-number">
                                                (13)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                            </form>
                        </div>

                        <div className="shop-widget">
                            <h6 className="shop-widget-title">
                                Lọc Theo Trạng Thái
                            </h6>
                            <form>
                                <ul className="shop-widget-list shop-widget-list-tag">
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <div className="shop-widget-content">
                                                <input
                                                    className="checkbox-tag"
                                                    type="radio"
                                                    id="tag1"
                                                    value={tag.value}
                                                    checked={
                                                        tag.value === checkedTag
                                                    }
                                                    onChange={(e) =>
                                                        handleChangetag(e)
                                                    }
                                                />
                                                <label htmlFor="tag1">
                                                    {tag.name}
                                                </label>
                                            </div>
                                            <span className="shop-widget-number">
                                                (13)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                            </form>
                        </div>

                        <div className="shop-widget">
                            <h6 className="shop-widget-title">
                                Lọc Theo Danh Mục
                            </h6>
                            <form>
                                <ul className="shop-widget-list shop-widget-list-category">
                                    {categorys.map((category, index) => (
                                        <li key={index}>
                                            <div className="shop-widget-content">
                                                <input
                                                    className="checkbox-category"
                                                    type="radio"
                                                    id="cate1"
                                                    value={category.value}
                                                    checked={
                                                        category.value ===
                                                        checkedCategory
                                                    }
                                                    onChange={(e) =>
                                                        handleChangetagCategory(
                                                            e
                                                        )
                                                    }
                                                />
                                                <label htmlFor="cate1">
                                                    {category.name}
                                                </label>
                                            </div>
                                            <span className="shop-widget-number">
                                                (13)
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {/* <button className="shop-widget-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Xoá</span>
                            </button>  */}
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md 7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shop-filter">
                                    <label htmlFor="option">
                                        Sắp xếp theo :
                                    </label>
                                    <select
                                        className="select-option"
                                        name=""
                                        id="option"
                                    >
                                        <option value="0">Măc định</option>
                                        <option value="1">
                                            Giá thấp đến cao
                                        </option>
                                        <option value="2">
                                            Giá cao đến thấp
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="shop-product-list row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                            {renderedProducts.map((product) => (
                                <div key={product.id} className="col">
                                    <div className="product-card">
                                        <div className="product-image">
                                            <div className="product-label">
                                                <label>{product.tag}</label>
                                            </div>
                                            <div className="product-wish">
                                                <i className="fa-solid fa-heart"></i>
                                            </div>
                                            <a href="./deital.html">
                                                <img
                                                    src={product.images[0]}
                                                    alt=""
                                                />
                                            </a>
                                            <div className="product-widget">
                                                <a
                                                    href=""
                                                    className="product-video"
                                                >
                                                    <i className="fa-solid fa-play"></i>
                                                </a>
                                                <a
                                                    href=""
                                                    className="product-view"
                                                >
                                                    <i className="fa-solid fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-rating">
                                                <i className={product.rating >=1 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                <i className={product.rating >=2 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                <i className={product.rating >=3 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                <i className={product.rating >=4 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                <i className={product.rating >=5 ? "active fa-solid fa-star" : "fa-solid fa-star" }></i>
                                                {/* <a href="">(3)</a> */}
                                            </div>
                                            <h6 className="product-name">
                                                {product.name}
                                            </h6>
                                            <h6 className="product-price">
                                                {product.price}
                                            </h6>
                                            <button
                                                onClick={() =>
                                                    handleAddProductCart(
                                                        product.id
                                                    )
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

                        <div className="shop-panigation row">
                            <div className="col-lg-12">
                                <div className="shop-paginate">
                                    <ul className="pagination">
                                        <li className="pagination-item btn-prev">
                                            <i className="fa-solid fa-arrow-left-long"></i>
                                        </li>
                                        <ul className="pagination-page-list">
                                            {/* <li className="pagination-item pagination-page">1
                                      </li>  */}
                                        </ul>
                                        <li className="pagination-item btn-next">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
