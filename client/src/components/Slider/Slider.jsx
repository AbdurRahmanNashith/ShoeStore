import React from 'react';
import "./Slider.scss";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from 'react';


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://c0.wallpaperflare.com/preview/996/268/956/assorted-handbags-lot.jpg",
    "https://c0.wallpaperflare.com/preview/95/238/466/a-pair-of-brown-timberland-boots.jpg",
    
    
  ];

  const prevSlide =() =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1 );
  };
  const nextSlide =() =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1 );
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img className="img1" src={data[0]} alt="" />
        <img  className="img2" src={data[1]} alt="" />
        <img className="img3" src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className='icon' onClick={prevSlide}> <KeyboardArrowLeftOutlinedIcon /> </div>
        <div className='icon'onClick={nextSlide}> <KeyboardArrowRightOutlinedIcon /> </div>     
    </div>
  </div >
    
  )
}

export default Slider
