import React, { useState, useEffect} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {BsCircleFill } from 'react-icons/bs';
import {VscCircleFilled} from "react-icons/vsc"
import imagenes from "../assets/carrusel/carrusel"



function Carrusel() {
  const slides = [
    {url: imagenes.Hogar1},{url: imagenes.Hogar2},{url: imagenes.Hogar3},{url: imagenes.Hogar4},{url: imagenes.Hogar5},{url: imagenes.Hogar6},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getIconColor = (index) => {
    return index === currentIndex ? 'BDD632' : '#D9D9D9';
  };

  useEffect(() => {
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, );



  return (


    <div className='max-w-[375px] h-[367px] w-full m-auto py-16 px-4 md:hidden lg:max-w-[675px] lg:h-[667px] '>
       
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-700'
      ></div>

      
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer m-2 lg:m-4'>
             
             <BsCircleFill
            color={getIconColor(slideIndex)}
            onClick={() => goToSlide(slideIndex)}
            className='hidden lg:flex'
            style={{ fontSize: '20px' }}
            
            />
            <VscCircleFilled
            color={getIconColor(slideIndex)}
            onClick={() => goToSlide(slideIndex)}
            className='lg:hidden'
            style={{ fontSize: '18px' }}
            
            
            /> 
             
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Carrusel;