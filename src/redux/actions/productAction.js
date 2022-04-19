import { GET_ALL_PRODUCT, ADD_TO_CART } from "../types/productType";

export const getAllProductAction = () => ({
    type: GET_ALL_PRODUCT
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

