import { data } from "../helpers/data";
import { SELECTCATEGORY, SELECTNAME } from "../types";

const initial = data

export const filterReducer = (state = initial , {type, payload}) => {
    switch(type){
        
        case SELECTCATEGORY:{
            console.log(state)
            console.log(type)
            const c = payload.category
            if(c == 'ALL') {
                return data
            }
            const result = data.filter((product) => product.category == c)
          return result 
        }
        case SELECTNAME:{
            console.log(type)
            console.log(payload)
            const result = data.filter((product) => product.name.toLowerCase().includes(payload.toLowerCase()))
            return result
        }   
        default: return state
    }
}

