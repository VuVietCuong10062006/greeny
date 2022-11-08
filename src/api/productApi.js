// https://jsonplaceholder.typicode.com

import axiosClient from "./axiosClient";

// https://jsonplaceholder.typicode.com/users
const productApi = {
  getProducts() {
    const url = "/products";
    return axiosClient.get(url);
  },
  getProductFeature() {
    const url = `/products?tag=Feature`;
    return axiosClient.get(url);
  },
  searchProduct(value) {
    const url = `/products?q=${value}`;
    return axiosClient.get(url);
  },
  sortProductShop(object) {
    const {sort, tag, category, rating} = object

    // let baseUrl = "products?";
    // let count = 0;
    // let temp = '';
    // for (const key in object) {
    //     if (!!object[key] && key === 0) {
    //         baseUrl = baseUrl + `_sort=price&_order=${object[key]}&`
    //     }
    //     if (!!object[key]) {
    //         baseUrl = baseUrl + `_sort=price&_order=${object[key]}`
    //     }
    // }
    // if (count === 1) {
    //     temp = '&' 
    // }
    const url = `products?${!!sort ? `_sort=price&_order=${sort}&` : ""}${
      !!tag ? `tag=${tag}&` : ""
    }${!!category ? `category=${category}&` : ""}${
      !!rating ? `rating=${rating}` : ""
    }`;
    return axiosClient.get(url);
  },
};

export default productApi;
