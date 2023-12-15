import { combineReducers } from 'redux'
import shoppingCartReducer from './shoppingCartReducer'
import { filterReducer } from './filterReducer'


export const reducer = combineReducers({
    shoppingcartreducer: shoppingCartReducer,
    filterreducer:filterReducer

})


