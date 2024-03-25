import React, { useState } from "react";
import '../styles/Slider.scss'
// import wea1 from '../img/weather1.png'
// import wea2 from '../img/weather2.png'
// import wea3 from '../img/weather3.png'
// import cloude from '../../img/cloude.png'
import read1 from '../../img/reader1.png'
import read2 from '../../img/reader2.png'
import code1 from '../../img/code1.png'
import code2 from '../../img/code2.png'

const ImageSliderReader = () => {
  const [images, setImages] = useState  ([
    read1,
    read2,
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="slider_up">
      <img className="slider_img" src={images[currentIndex]} alt="" />
    </div>
    <div className="slider_down">
        {/* Оставлено по поводу спорного решения по кнопкам */}
        {/* <button className="slider_but" onClick={handlePrevious}><img className="cl" src={cloude} alt="" />Предыдущее</button> */}
        {/* <div className="slider_but" onClick={handlePrevious}><img className="cl" src={cloude} alt="" />Предыдущее</div> */}
        {/* <div className="slider_div" onClick={handlePrevious}><img className="slider_clode" src={cloude} alt="" /></div> */}
        {/* <button className="slider_but" onClick={handlePrevious}>Предыдущее</button> */}
        {/* <button className="slider_but" onClick={handleNext}>Следующее</button> */}
        <img className="slider_clode" onClick={handlePrevious} src={code2} alt="" />
        <img className="slider_clode" onClick={handleNext} src={code1} alt="" />
    </div>
      </>
  );
};

export default ImageSliderReader;
