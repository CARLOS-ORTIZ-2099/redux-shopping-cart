import { useDispatch } from "react-redux"
import { selectCategory } from "../actions/shoopingCartActions"

export const Select = () => {

const dispatch =  useDispatch()
  
const handleSelectCategory = ({target}) => {
  const categoryName = target.value
  dispatch({...selectCategory(), payload:{...selectCategory().payload, category: categoryName}})
}

  return (
    <div>
        <select className="mt-4"  id="category" name="category" onChange={handleSelectCategory}> 

            <option value="ALL">ALL</option>
            <option value="tecnologia">tecnologia</option>
            <option value="calzado">calzado</option>
            <option value="fitnes">fitnes</option>
            <option value="accesorios">accesorios</option>
            <option value="videojuegos">videojuegos</option>
            <option value="textil">textil</option>

        </select>
    </div>
  )
}
