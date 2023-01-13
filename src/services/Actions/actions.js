import { ADD_TO_CART } from "../constant"
import { REMOVE_FROM_CART } from "../constant1"

const addToCart = (data) => {
    return{
        type: ADD_TO_CART,
        data:data
    }
}

const removeFromCart = (data) => {
    return{
        type: REMOVE_FROM_CART,
        data:data
    }
}

export default addToCart;
export {removeFromCart};