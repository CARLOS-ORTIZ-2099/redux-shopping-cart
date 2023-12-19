// aqui iran las funciones de acciones donde cada una de ellas devolvera un objeto con su accion correspondiente y su payload si es nesesario, estas seran llamadas por el dispatch(funcion despachadora)

import { ADDTOCART, REMOVEALL, REMOVEALLPRODUCT, REMOVEONEPRODUCT, SELECTCATEGORY, SELECTNAME } from "../types"


export const addToCart = (id) => ( {type: ADDTOCART, payload:id} ) ;

export const removeProduct = (id, all = false) => (all ?  {type: REMOVEALLPRODUCT, payload:id}: {type: REMOVEONEPRODUCT, payload: id} ) ;


export const clearCart = () => ( {type: REMOVEALL} ) ;




 
export const selectCategory = () => ({type: SELECTCATEGORY, payload:{category:''} })

export const selectName = () => ({type: SELECTNAME})

