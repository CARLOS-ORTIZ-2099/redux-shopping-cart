import { useDispatch, useSelector } from "react-redux"
import { removeAll, removeOneProduct, removeProduct } from "../actions/shoopingCartActions"

export const Cart = () => {

  const selectCart = state => state.shoppingcartreducer 
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()  

  console.log(cart)  


  return (
    <div>
        <h2>cart</h2>
        <section style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
            {
                cart.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2> 
                        <img width={150} src={product.image} alt="" />
                        <h3>{product.price}$</h3>
                        <p>x {product.quantity}</p> 
                        <p>{product.total}</p>
                        <button onClick={() => dispatch({...removeOneProduct(), payload:{...removeOneProduct().payload, id: product.id}})}>
                            delete one
                        </button>
                        <button onClick={() => dispatch({...removeProduct(), payload: {...removeProduct().payload, id:product.id}})}>delete all</button>
                    </div>
                ))
            }
        </section>
        {
            cart.length >=1 && <button onClick={() => dispatch(removeAll())}>empty cart</button>
        }
    </div>
  )
}
