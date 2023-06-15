import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="front-home">
      <div className='heading'>
        <h1>New Collection</h1>
        <h4> <u>Spiring & Summer</u> </h4>
        <p>Introducing our latest collection of clothes for the fashion-forward shopper! Our team of designers has put together a range of styles that are sure to suit every taste and occasion. From casual wear to formal attire, our collection has everything you need to keep your wardrobe up to date. </p>
        <Link to={"/AllProducts"}><button className="shop-now">Shop Now -</button></Link>
      </div>
      <din className="person-image">
        <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </din>
    </div>
  )
}

export default HeroSection
