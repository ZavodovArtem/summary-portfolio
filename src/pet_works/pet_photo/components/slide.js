
import React, {useState, useEffect} from "react"
import slide1 from "../img/slide1.jpg"
import slide2 from "../img/slide2.jpg"
import slide3 from "../img/slide3.jpg"
import slide4 from "../img/slide4.jpg"
import slide5 from "../img/slide5.jpg"
import ph1 from '../img/ph1.jpg'
import ph2 from '../img/ph2.jpg'
import ph3 from '../img/ph3.jpg'
import ph4 from '../img/ph4.jpg'
import ph5 from '../img/ph5.jpg'
import ph6 from '../img/ph6.jpg'
import ph7 from '../img/ph7.jpg'
// import slide1 from '../../public/slide2.jpg';
// import slide1 from '../img/slide2.jpg';
// import "../components/slider.css"
import './Slide.css'


const img = [
    <><img key={ph1} src={ph1} />
    <img key={ph2} src={ph2} /></>,
    <img key={ph2} src={ph2} />,
    <img key={ph3} src={ph3} />,
    <img key={ph4} src={ph4} />,
    <img key={ph5} src={ph5} />,
    <img key={ph6} src={ph6} />,
    <img key={ph7} src={ph7} />,
]


export function Slider() {
    // Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

return (
    <div className="photoBody">
        <div className="slider">
            <div className="slider-img slider-img-prev"
                    key={prevImgIndex}>
                {img[prevImgIndex]}
            </div>
            <div className="slider-img"
                    key={activeIndex}>
                {img[activeIndex]}
            </div>
            <div className="slider-img slider-img-next"
                    key={nextImgIndex}>
                {img[nextImgIndex]}
            </div>
        </div>
    </div>
)
}