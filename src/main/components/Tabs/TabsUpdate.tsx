import React, { useState } from "react";
import '../styles/Tab.scss'
import komuCho from '../../img/logoKomuCho.svg'
import cloude from '../../img/cloude.png'
import camera from '../../img/logoCamera.png'
import reader from '../../img/logoFileReader.png'
import question from '../../img/question.png'
// import MySlider from "./Slide";
import ImageSliderWeather from "../Sliders/SliderWeather";
import ImageSliderKomuCho from "../Sliders/SliderKomuCho";
import ImageSliderPhoto from "../Sliders/SliderPhoto";
import ImageSliderReader from "../Sliders/SliderReader";


function VerticalTab () {

    const [activeTab, setActiveTab] = useState <number | null> (null)

    const handleTabClick = (index: number) => {
        setActiveTab(prevActiveTab => (index === prevActiveTab ? null : index));
    }

    const renderTabContent = (tabIndex: number, content: React.ReactNode) => {
        return activeTab === tabIndex ? content : null;
    }

    return(
        <div className="Tab">
            <div className="TabButton">
                <button className="TabButtonEvery + TabButtonOne" onClick={() => handleTabClick(0)}> <div className="TabButtonColumn">Project "KomuCho"<img src={komuCho} alt="#" /></div></button>
                <button className="TabButtonEvery + TabButtonTwo" onClick={() => handleTabClick(1)}> <div className="TabButtonColumn"> Project "Weather" <img className="TabButtonCloude" src={cloude} alt="#" /></div></button>
                <button className="TabButtonEvery + TabButtonThree" onClick={() => handleTabClick(2)}> <div className="TabButtonColumn"> Project "Photo" <img className="TabButtonCloude" src={camera} alt="#" /> </div></button>
                <button className="TabButtonEvery + TabButtonFour" onClick={() => handleTabClick(3)}> <div className="TabButtonColumn"> Project "Reader" <img className="TabButtonCloude" src={reader} alt="#" /> </div></button>
            </div>
            <div className="TabRender">
                {activeTab === null ? <div className="TabRerender"><img className="TabRerenderQuestion" src={question} alt="" /></div> : null}
                {renderTabContent(0, <div className="TabRenderContent">
                    <a className="TabRenderContentH" href="#" target="_blank">Project "KomuCho"</a>
                    <p className="TabRenderContentP"> Это самый первый учебный проект. Через полгода после начала обучения было необходимо
                        сделать групповой проект. <br/> В него входило:
                        <br/> 1) Разработать макет.
                        <br/> 2) Сделать верстку по макету.
                        <br/> 3) Сделать адаптивную верстку.
                        <br/> 4) Работать с JS.
                        <br/> 5) Деплой кода. 
                        Пример ниже. <br/>(Возможно перейти на проект)
                    </p>
                    <div className="TabRenderContentSlider">
                        {/* <MySlider /> Оставлено для возможного применения........ */}
                        <ImageSliderKomuCho />
                        <a className="TabRenderA" href="#" target="_blank">Project "KomuCho"</a>
                    </div>


                </div>)}
                {renderTabContent(1, <div className="TabRenderContent">
                    <a className="TabRenderContentH" href="/home" target="_blank">Project "Weather"</a>
                    <p className="TabRenderContentP"> Приложение погоды очень банальное приложение для разработки, но решил сделать по некоторым причинам:
                        <br/> 1) Типизация кода. Писать на React tsx
                        <br/> 2) Работа со слоями, Parallax effect
                        <br/> 3) Настройки деплоя React-приложения с несколькими страницами
                        <br/> 4) Работа с API
                        <br/> 5) Адаптивная верстка
                        <br/> Пример ниже <br/>(возможно перейти на проект)
                    </p>
                        <div className="TabRenderContentSlider">
                            <ImageSliderWeather />
                            <a className="TabRenderA" href="/home" target="_blank">Project "Weather"</a>
                        </div>
                </div>)}
                {renderTabContent(2, <div className="TabRenderContent">
                    <a className="TabRenderContentH" href="/photo" target="_blank"> Project "Photo"</a>
                    <p className="TabRenderContentP">
                        После изучения основ HTML5, CSS, JS. Начал изучение React JS. Поэтому под конец годового курса в Университете Лобачевского от Академии Lad был сделан лэндинг.
                        Процесс работы был схож с групповым проектом.
                        <br/> 1) Макет в Figma
                        <br/> 2) Верстка
                        <br/> 3) Адаптивная Верстка
                        <br/> 4) Работа с компонентами, хуками
                        <br/> 5) Деплой приложения
                        <br/>Пример ниже <br/>(возможно перейти на проект)

                    </p>
                         <div className="TabRenderContentSlider">
                            <ImageSliderPhoto />
                            <a className="TabRenderA" href="/photo" target="_blank"> Project "Photo"</a>
                         </div>
                </div>)}
                {renderTabContent(3, <div className="TabRenderContent">
                    <a className="TabRenderContentH" href="/reader" target="_blank">Project "Reader"</a>
                    <p className="TabRenderContentP">
                        Задача на чистом JS. Было необходимо сделать форму выбора Excel-файла с компьютера.
                        Файл был с данными, которые должны отображаться в браузере. С помощьюокна поиска - осуществлять поиск по символам. 
                        В последствии должна быть фильтрация с учетом поиска и стратусом "Найдено" или "Не найдено".
                        <br/>Пример ниже <br/>(возможно перейти на проект)

                    </p>
                        <div className="TabRenderContentSlider">
                            <ImageSliderReader />
                            <a className="TabRenderA" href="/reader" target="_blank">Project "Reader"</a>
                        </div>
                        {/* <a className="TabRenderA" href="#">Project "Reader"</a> */}
                </div>)}
            </div>
        </div>
    )
}

export default VerticalTab
