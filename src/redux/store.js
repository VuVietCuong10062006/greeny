import { configureStore } from "@reduxjs/toolkit"
import productsReduce from "./productCartSlice"

const store = configureStore({
    reducer: {
        products : productsReduce,
    }
}) 

export default store