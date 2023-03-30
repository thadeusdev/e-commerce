import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium reiciendis in commodi molestias! Nihil veritatis dolorem ipsa molestias id modi laudantium, dolorum impedit quod.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia at blanditiis eum consequatur consequuntur eveniet qui fuga veniam sit. Sint cupiditate fuga quo ut?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            <img src="img/shopper-high-resolution-logo-black-on-transparent-background.png" alt="" style={{width: '100px', height: '50px'}} />
          </span>
          <span className='copyright'>
            &#169; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer