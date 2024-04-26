import React, { useState } from "react";
import '../styles/Slider.scss'
import Cho1 from '../../img/Komucho1.png'
import Cho2 from '../../img/komucho2.png'
import shawurma from '../../img/shaurma.png'
import coctail from '../../img/coctail.png'

const ImageSliderKomuCho2 = () => {
  const [images, setImages] = useState([
    Cho1,
    Cho2,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSliderClodeClick = (action: string) => {
    if (action === "previous") {
      handlePrevious();
    } else if (action === "next") {
      handleNext();
    }
  };

  return (
    <>
      <div className="slider_up">
        <img className="slider_img" src={images[currentIndex]} alt="" onClick={handleNext} />
      </div>
      <div className="slider_down">
        <img className="slider_clode" onClick={() => handleSliderClodeClick("previous")} src={coctail} alt="" />
        <img className="slider_clode" onClick={() => handleSliderClodeClick("next")} src={shawurma} alt="" />
      </div>
    </>
  );
};

export default ImageSliderKomuCho2;






