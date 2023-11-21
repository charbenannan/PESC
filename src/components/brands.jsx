import React, { useState, useEffect } from 'react';
import '../css/brands.css';

export default function Brands() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    ["./images/kfc.png", './images/ecobank.png', './images/La-Community-Bank-Ltd.png', './images/sg.png'],
    ['./images/abdavid.png', './images/ghl.png', './images/gold_key.png', './images/adk.png'],
    ['./images/chase.png', './images/denya.png', './images/fasat.png', './images/ibi_projects.png'],
    ['./images/International.png', './images/unilever.png', './images/Metso-Minerals.png', './images/micheletti.png'],
    ['./images/mobus.png', './images/supremo.png', './images/whitewall.png']
  ];

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className='Brands'>
      <h2 className='text-5xl font-semibold mt-32 text-center text-black'>TRUSTED BY</h2>
      <hr className='border-t-2 border-[#F43838] mx-auto my-8' />

      <div className='slider mb-10'>
        <div className='slide-track' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((imageSet, index) => (
            <div key={index} className='slide'>
              {imageSet.map((imagePath, imageIndex) => (
                <img key={imageIndex} src={imagePath} alt={`slide-${index}-${imageIndex}`} style={{ maxWidth: '25%' }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}