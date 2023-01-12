import { ADD_TO_CART } from "../constant";


const addToCart = (data) => {
    return{
        type:ADD_TO_CART,
        data:data
    }
}

// const removeFromCart = (data) => {
//     return{
//         type:'Remove_From_CART',
//         data:data
//     }
// }

export default addToCart;
// export {removeFromCart}