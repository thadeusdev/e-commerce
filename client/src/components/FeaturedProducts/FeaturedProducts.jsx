import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import axios from 'axios';

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=",
            img2: "https://media.istockphoto.com/id/1297633362/photo/her-beauty-makes-it-hard-not-to-stare.jpg?s=612x612&w=0&k=20&c=_9EUpPSnGGbnkD-Ejfa-wTcso_ET10QQhpgglHcyUyM=",
            title: "buauty",
            isNew: true,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 2,
            img: "https://media.istockphoto.com/id/611294276/photo/uhd-4k-smart-tv-on-white-background.jpg?s=612x612&w=0&k=20&c=VtBQvDY7t131L2GScWcg6f4mXw1Kcgn3jqLUUD2jP1s=",
            img2: "https://media.istockphoto.com/id/1354701109/photo/tv-mockup-in-the-dark-living-room-at-night-3d-illustration-tv-screen-tv-cabinet-plant.jpg?s=612x612&w=0&k=20&c=LhImwJQLnXYiJtsprHfK0nXYQEO4Y98bakyJ7h6SFJU=",
            title: "TV",
            isNew: false,
            oldPrice: 200,
            price: 180,
        },
        {
            id: 3,
            img: "https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo=",
            img2: "https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=",
            title: "watch",
            isNew: false,
            oldPrice: 200,
            price: 180,
        },
    ]

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/products', {
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
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