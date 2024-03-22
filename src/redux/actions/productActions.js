import { ActionTypes } from "../constants/action-type"
export const setProducts=(products)=>{
    return {
        type:"SET_PRODUCTS",
        payload:products,
    }
}

export const selectedProduct=(product)=>{
    return {
        type:"SELECTED_PRODUCT",
        payload:product,
    }
}
export const removeSelectedProduct=()=>{
    return {
        type:"REMOVE_SELECTED_PRODUCT",
    }
}