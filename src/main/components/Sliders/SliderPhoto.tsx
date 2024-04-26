import React, { useState } from "react";
import '../styles/Slider.scss'
// import wea1 from '../img/weather1.png'
// import wea2 from '../img/weather2.png'
// import wea3 from '../img/weather3.png'
// import cloude from '../../img/cloude.png'
import Pho1 from '../../img/photo1.png'
import Pho2 from '../../img/photo2.png'
import camera from '../../img/camera.png'
import snimok from '../../img/photosnimok.png'

const ImageSliderPhoto = () => {
    const [images, setImages] = useState  ([
      Pho1,
      Pho2,
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
          <img className="slider_clode" onClick={handlePrevious} src={snimok} alt="" />
          <img className="slider_clode" onClick={handleNext} src={camera} alt="" />
      </div>
        </>
    );
};

export default ImageSliderPhoto;
