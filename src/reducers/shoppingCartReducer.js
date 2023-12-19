 import { ADDTOCART, REMOVEALL, REMOVEALLPRODUCT, REMOVEONEPRODUCT } from "../types";

import { data } from "../helpers/data";

const initialState = { products : data, cart: []}

export default function shoppingCartReducer(state = initialState, action){
    switch(action.type){
        case ADDTOCART:{
            console.log(action)

           let newItem = state.products.find(product => product.id === action.payload)
           let itemInCart = state.cart.find(product => product.id === newItem.id)

           if(itemInCart){
            return {...state, cart : state.cart.map((item) => item.id === newItem.id 
                ? {...item,quantity: item.quantity + 1, total: (item.quantity+1)*item.price}
                : item) }
           }
           else{
            return {...state, cart: [...state.cart, {...newItem, quantity:1, total: newItem.price}]}
           }
        }
       case REMOVEONEPRODUCT:{
            let itemDelete = state.cart.find((product) => product.id === action.payload)
            return itemDelete.quantity > 1 
            ? { ...state, cart: state.cart.map((product) => product.id === action.payload 
                    ? {...product, quantity: product.quantity -1} 
                    : product)
            }
            : {
                ...state, cart: state.cart.filter((product) => product.id !== action.payload)
            }
        }
         
        case REMOVEALLPRODUCT:{
           
            const productsFilter =  state.cart.filter((product) => product.id !== action.payload)
            return {...state, cart: productsFilter}
        }
        case REMOVEALL:{
            return initialState
        }
        default: {
            return state
        }
        
    }
}




  
/*  export function shoppingReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        let newItem = state.products.find(
          (product) => product.id === action.payload
        );
        //console.log(newItem);
  
        let itemInCart = state.cart.find((item) => item.id === newItem.id);
  
        return itemInCart
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: [...state.cart, { ...newItem, quantity: 1 }],
            };
      }

      case REMOVE_ONE_FROM_CART: {
        let itemToDelete = state.cart.find((item) => item.id === action.payload);
  
        return itemToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
      }
      case REMOVE_ALL_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }
      case CLEAR_CART:
        return initialState;
      default:
        return state;
    }
  }   */