import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/0215511/1.jpg?2251",
            img2: "https://www.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg",
            title: "TV",
            isNew: true,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 2,
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?6954",
            img2: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/249074/1.jpg?6954",
            title: "cooking oil",
            isNew: false,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 3,
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/943724/1.jpg?7625",
            img2: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/943724/1.jpg?7625",
            title: "sugar",
            isNew: false,
            oldPrice: 200,
            price: 180,
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolore cum eum.
            </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts