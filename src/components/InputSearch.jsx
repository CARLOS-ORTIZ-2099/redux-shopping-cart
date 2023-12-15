import { useDispatch } from "react-redux"
import { selectName } from "../actions/shoopingCartActions"


export const InputSearch = () => {
  const dispatch =   useDispatch()

  const handleChangeName = ({target}) => {
    console.log(target.value)
    const name = target.value
    dispatch({...selectName(), payload: name})
  }

  return (
  
        <input 
           onChange={handleChangeName}
           type="text"
           id="product"
           name="product"
           placeholder="type here you search product" />
        
 
  )
}
