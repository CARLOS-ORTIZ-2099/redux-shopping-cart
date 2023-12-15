import { ADDTOCART, REMOVEALL, REMOVEONEPRODUCT, REMOVEPRODUCT } from "../types";

import { data } from "../helpers/data";

const initialState = []

export default function shoppingCartReducer(state = initialState, action){
    switch(action.type){
        case ADDTOCART:{
            console.log(action)
            if(state.some((product) => product.id == action.payload.id)){
               const result =  state.map((product) => product.id == action.payload.id ?
                 {...product, quantity: product.quantity+action.payload.quantity,
                     total: product.price*(product.quantity+action.payload.quantity)}
                 : product
                 )
                 return result
            } 
            
            const productFilter = data.find((product) => product.id == action.payload.id)
            return [...state,{...productFilter, quantity:1, total: productFilter.price*1}]
           
        }
        case REMOVEONEPRODUCT:{
            console.log(action)
            const deleteProduct = state.map((product) => product.id == action.payload.id && product.quantity >=2 ?
                {...product, quantity:product.quantity-action.payload.quantity, total: (product.quantity-action.payload.quantity)*(product.price)}
                :product
            )
            return deleteProduct
        }
        case REMOVEPRODUCT:{
            console.log(action)
            const productsFilter =  state.filter((product) => product.id !== action.payload.id)
            return productsFilter
        }
        case REMOVEALL:{
            return initialState
        }
        default: {
            return state
        }
        
    }
}

