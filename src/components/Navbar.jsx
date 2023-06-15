import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/CartContext'


const Navbar = () => {

const {cart} = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="nav">
        <div className='logo'>
          <Link className="navbar-brand" to={"/"} > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5F8UgSyFsYvEFVNHQSWW1e52wb6O4idMilcF0NaWf4LmNsiPabpk3DYdOZHWO297PDY&usqp=CAU" alt="" /></Link>

        </div>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link className="nav-link nav-text "  to = {"/"}> <h5>Home</h5></Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text  " to={"/"}> <h5>Men's</h5></Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text  " to={"/"}> <h5>Women's</h5></Link>

          </li>

          <li className="nav-item">
          <Link className="nav-link nav-text  " to={"/"}> <h5>Kid's</h5></Link>

          </li>

          <li className="nav-item">
            <Link className="nav-link nav-text  " to={"/contact"}> <h5>Contact</h5></Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to={"/cart"}>  <h5 className="cart-image"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfaTwYIV3-C6EG5GRtvCYtOenOWZ-bcq2OQ&usqp=CAU" alt="" /> <sup>({cart.length})</sup> </h5></Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
