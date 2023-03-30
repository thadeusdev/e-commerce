import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/0215511/1.jpg?2251",
            img2: "https://www.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg",
            title: "TV",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio esse natus.',
            isNew: true,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 2,
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?6954",
            img2: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?6954",
            title: "cooking oil",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio esse natus.',
            isNew: false,
            oldPrice: 200,
            price: 180,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price"> 1 x Ksh {item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' />
            </div>
        ))}  
        <div className="total">
            <span>SUBTOTAL</span>
            <span>Ksh 123</span>
        </div>  
        <button>PROCEED TO CHECKOUT</button>  
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart