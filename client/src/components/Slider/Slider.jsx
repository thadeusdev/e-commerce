import React, { useState } from 'react'
import './Slider.scss'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1)
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1)
    };

    const data = [
        'https://ke.jumia.is/cms/2023/W13/HP/Sliders/KE_Easter_Cross_Generic_0323_S.jpg',
        'https://ke.jumia.is/cms/2023/W13/HP/Sliders/Revised/KE_Easter_Drinks_0323_S_rvsd.jpg',
        'https://ke.jumia.is/cms/2023/W13/HP/Sliders/Revised/_S.jpg',
        'https://ke.jumia.is/cms/2023/W13/HP/GadgetReview/V2/KE_Ring_GadgetReviews_Teasing_0323_S_Friday.jpg',
        'https://ke.jumia.is/cms/2023/W13/HP/Sliders/Revised/_712x384.jpg',
        'https://ke.jumia.is/cms/2023/SuperBrandDays/Nivea/V0/Generics/Revised/KE_Nivea_SBD_0323_S_rvsd.jpg'
    ];

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
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