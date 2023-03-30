import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const images = [
    "https://media.istockphoto.com/id/1125110782/photo/young-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to-black-t.jpg?s=612x612&w=0&k=20&c=NVobF35a4ogVyf9PrSCIwASDL2vsH9evJiYYGXSBKKI=",
    "https://media.istockphoto.com/id/542577988/photo/hipster-wearing-white-blank-t-shirt-with-space-for-your-logo.jpg?s=612x612&w=0&k=20&c=BcMxgS5GGUQ_XYIQ54uvbwUw9AI_76hpLiD9EV_-7kI=",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>Ksh 200</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod.
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev = 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: James</span>
          <span>Product type: T-shirt</span>
          <span>Tag: T-shirt, Men, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product