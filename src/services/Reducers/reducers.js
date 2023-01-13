import { ADD_TO_CART } from "../constant";

const initialState = {
    cartData:[

    ]
}

const cartItems = (state=[],action) => {
    switch (action.type){
        case ADD_TO_CART:
            // console.warn('reducer',action)
            return[ 
                ...state,
                {cartData:action.data}
            ]
            default:
                return state

    }
}

export default cartItems;



// import { ADD_TO_CART } from '../constants'
// const initialState = {
//     cardData: []
// }
// export default function cardItems(state = [], action) {
//     switch (action.type) {
//         case ADD_TO_CART:
//             // console.warn("reducer",action)
//             return [
//                 ...state,
//                 {cardData: action.data}
//             ]
//         default:
//             return state
//     }


// }