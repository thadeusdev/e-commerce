import React, { useState } from 'react'
import './Slider.scss'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    };

    const data = [
        'https://media.istockphoto.com/id/1186111791/vector/cartoon-color-different-watches-icon-set-vector.jpg?s=612x612&w=0&k=20&c=-8819pKVXaC_1RUEmJG4BLWt1oc9r8Lf1n_u8X5FMc4=',
        'https://media.istockphoto.com/id/627660950/photo/students-watching-american-football-game-at-home.jpg?s=612x612&w=0&k=20&c=5CYTY2frRCiAklHf7eq_Cb2GS2Wt9xyVNV62B3Onc4I=',
        'https://media.istockphoto.com/id/1221362520/vector/shoes-mens-womens-and-childrens-footwear-different-types-trendy-casual-stylish-elegant.jpg?s=612x612&w=0&k=20&c=57QnGmd6wCj05VfvPoTjPs8KV8cya8Sa5VtLcKeWo4U=',
    ];

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider