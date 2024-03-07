import React, { useState } from "react";
import '../components/styles/Slider.scss'
// import wea1 from '../img/weather1.png'
// import wea2 from '../img/weather2.png'
// import wea3 from '../img/weather3.png'
import cloude from '../img/cloude.png'
import Cho1 from '../img/Komucho1.png'
import Cho2 from '../img/komucho2.png'

const ImageSliderKomuCho = () => {
  const [images, setImages] = useState  ([
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
        <img className="slider_clode" onClick={handlePrevious} src={cloude} alt="" />
        <img className="slider_clode" onClick={handleNext} src={cloude} alt="" />
        {/* <button className="slider_but" onClick={handleNext}>Следующее</button> */}
    </div>
      </>
  );
};

export default ImageSliderKomuCho;
