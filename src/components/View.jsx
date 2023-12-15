import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/shoopingCartActions"
import { Cart } from "./Cart"
import { Searchproduct } from "./Searchproduct"


export const View = () => {

    // funcion que se encarga de acceder al estado del global, gracias al provider
   const products = useSelector(product => product.filterreducer)
   console.log(products)

    const dispatch = useDispatch()

  return (
    <>
        <Cart/>
        <Searchproduct/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr)'}}>
         {
            products.map((product) => (
                <div key={product.id}>
                      <h2>{product.name}</h2> 
                      <img width={150} src={product.image} alt="" />
                      <h3>{product.price}$</h3>
                      <p>{product.category}</p> 
                      <button onClick={() => dispatch({...addToCart(), payload:{...addToCart().payload, id: product.id}})}>
                        add to cart
                      </button>
                </div>
            ))
         }
        </div>
    </>
  )
}
