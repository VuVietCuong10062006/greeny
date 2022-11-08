import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import productApi from "../api/productApi"

export const getProducts = createAsyncThunk(
    "productCart/getProducts",
    async () => {
        const res = await axios.get(productApi.getProducts())
        return res.data
        console.log(res.data)
    }
)

const productCartSlice = createSlice({
    name:"productCart",
    initialState:{
        products:[],
        tags: '',
    categorys: '',
    ratings: '',
    productCartItem: '',
    dispatchProducCart: '',
    },
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getProducts.fulfilled, (state,action) =>{
            state.products = action.payload
        })
    }

}) 

export default productCartSlice.reducer