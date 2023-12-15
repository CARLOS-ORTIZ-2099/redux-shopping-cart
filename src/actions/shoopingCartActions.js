// aqui iran las funciones de acciones donde cada una de ellas devolvera un objeto con su accion correspondiente y su payload si es nesesario, estas seran llamadas por el dispatch(funcion despachadora)

import { ADDTOCART, REMOVEALL, REMOVEONEPRODUCT, REMOVEPRODUCT, SELECTCATEGORY, SELECTNAME } from "../types"


export const addToCart = () => ( {type: ADDTOCART, payload:{quantity:1,id:''}} ) ;
export const removeOneProduct = () => ( {type: REMOVEONEPRODUCT, payload:{quantity:1, id:''}} ) ;
export const removeProduct = () => ( {type: REMOVEPRODUCT, payload:{id:''}} ) ;
export const removeAll = () => ( {type: REMOVEALL} ) ;
 
export const selectCategory = () => ({type: SELECTCATEGORY, payload:{category:''} })

export const selectName = () => ({type: SELECTNAME})

