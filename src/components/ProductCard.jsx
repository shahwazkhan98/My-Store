import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const ProductCard = ({product}) => {

  const {id , image , title , price} = product

  const {dispatch} = useContext(CartContext)

  const handleAdd = (product)=>{
      dispatch({
        type : "ADD_CART",
        payload : product
      })
  }
  return (
    <>
    <div className='product'>
      <img src={image} alt="" />
        <h8>{title}</h8>
        <span>
            <h6 className='price'> <b>Price</b> : ${price}</h6>
            <button className='add_cart' onClick={()=>handleAdd(product)}> <h6>Add to Cart</h6></button>
        </span>
    </div>
    </>
    
  )
}

export default ProductCard
