import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = () => {
    const data = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/id/1184522745/photo/rodeo-horse-rider-wild-west-culture-americana-and-american-country-music-concept-theme-with-a.jpg?s=612x612&w=0&k=20&c=nQ5A-1FOuIvujY6AObkJ9xntyhfASTBG1zkh2-9yGg0=',
            title: 'Hat',
            oldPrice: 120,
            price: 110,
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/id/804651838/photo/red-flounce-skirt-on-invisible-mannequin-isolated-on-white.jpg?s=612x612&w=0&k=20&c=lkd-jGPIdAVA6BpWSIRJ7vx0nm4Bm4hBc6oP91nSiNw=',
            title: 'Skirt',
            oldPrice: 150,
            price: 140,
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/184330267/photo/womans-coat-isolated.jpg?s=612x612&w=0&k=20&c=vxXncrZlgYvt1uoV6We5Un7nm7YOrDu1xtSHOWxqE74=',
            title: 'coat',
            oldPrice: 300,
            price: 280,
        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/id/1125110782/photo/young-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to-black-t.jpg?s=612x612&w=0&k=20&c=NVobF35a4ogVyf9PrSCIwASDL2vsH9evJiYYGXSBKKI=',
            title: 'T-shirt',
            oldPrice: 100,
            price: 90,
        },
    ]
  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List