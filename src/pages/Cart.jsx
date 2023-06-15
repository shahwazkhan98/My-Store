import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {

  
const {cart} = useContext(CartContext)
// console.log(cart)

const { dispatch } = useContext(CartContext)

const handleRemove = (id) => {
  dispatch({
    type: "REMOVE_CART",
    payload: id
  })

}

const total = cart.reduce((p,c)=>{
  return p + c.price
},0)

const [qty, setQty] = useState(1)

const [prices, setPrices] = useState(total)
const add = (price) => {

    setQty(qty + 1)
    setPrices(price + prices)

}
const minus = (price) => {

  setQty(qty - 1)
  setPrices(prices - price)

}



// const [totalprice, setTotalprice] = useState(cart[0].price)

// const add = () => {
//   setTotalprice(cart[0].price * (qty + 1))
// }

// const minus = () => {
//   setTotalprice(cart[0].price * (qty - 1))
// }





  return (
    <div className="cart-container">

    <div className="cart-items">  
    {
      cart.map(cartItem =>  <div className="cart-item" key={cartItem.id}>


      <img src={cartItem.image} alt="" />
      <span className="product-detail">
        <h1>{cartItem.title}</h1>
        <h6 className="rate"> <b>Rate</b> : ${cartItem.price}</h6>

        <div className="quntity">
          <div><h6> <b>Qty</b> : </h6> </div>

          {/* <div className="AddMinusBtn"> */}
            <button className={cartItem.length === 1 ? "d-none minus" : "d-block"} onClick={() => minus (cartItem.price)}> <FaMinus /> </button>
            <button className={cartItem.length !== 1 ? "d-none minus" : "d-block"} disabled > <FaMinus />  onClick={() => minus(cartItem.price)} </button>

            <b>{qty} </b>

            <button className="add" onClick={() => add(cartItem.price)}> <FaPlus />  </button>
          {/* </div> */}
        </div>
        {/* <h1 className="totalPrice"> <strong>Total Price : ${totalprice}</strong></h1> */}
      </span>
      <button className="remove-btn" onClick={() => handleRemove(cartItem.id)}>Remove Item</button>
    </div>
      )
    }
    </div>

    <div className="bill-section">
        <h1> <b>Total Amount</b> : <br/> <br/> ${parseFloat(prices).toFixed(2)}</h1>
        <button className="pay-btn">Pay Now</button>
      <Link to={"/AllProducts"}><button className="continue">Continue Shoppping</button></Link>
    </div>
   </div>
  )
}

export default Cart
