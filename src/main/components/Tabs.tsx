import React, { useState } from "react";
import '../components/styles/Tab.scss'
import komuCho from '../img/logoKomuCho.svg'
import cloude from '../img/cloude.png'
import camera from '../img/logoCamera.png'
import reader from '../img/logoFileReader.png'
// import MySlider from "./Slide";
import ImageSlider from "./SliderWeather";
import ImageSliderKomuCho from "./SliderKomuCho";
import ImageSliderPhoto from "./SliderPhoto";
import ImageSliderReader from "./SliderReader";

function VerticalTab () {

    const [activeTab, setActiveTab] = useState <number | null> (null)

    const handleTabClick = (index: number) => {
        setActiveTab((prevActiveTab) => (index === prevActiveTab ? null : index));
    }

    const renderTabContent = (tabIndex: number, content: React.ReactNode) => {
        return activeTab === tabIndex && <div>{content}</div>;
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

            {activeTab !== null && <div className="TabRerenderHide">sdsdsdfsfd</div>}

                {renderTabContent(0, <div className="TabRenderContent">
                    <h2>Project "KomuCho"</h2>
                    <p>Это самый первый учебный проект. Через полгода после начала обучения было необходимо
                        сделать групповой проект. В него входило:
                        1) Разработать макет.
                        2) Сделать верстку по макету.
                        3) Сделать адаптивную верстку.
                        4) Работать с JS.
                        5) Деплой кода. 
                        Пример ниже. (Возможно перейти на проект)
                    </p>

                    <ImageSliderKomuCho />
                    <a href="#">Project "KomuCho"</a>


                </div>)}
                {renderTabContent(1, <div className="TabRenderContent">
                    <h2>Project "Weather"</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates assumenda rerum 
                        quia dicta hic autem. Eligendi sint beatae ipsum ullam placeat tenetur vero error, esse, 
                        itaque quibusdam aliquam ipsa.
                    </p>
                        <div>
                            <ImageSlider />
                        </div>
                </div>)}
                {renderTabContent(2, <div className="TabRenderContent">
                    <h2>Project "Photo"</h2>
                    <p>
                        После изучения основ HTML5, CSS, JS. Начал изучение React JS. Поэтому под конец годового курса в Университете Лобачевского от Академии Lad был сделан лэндинг.
                        Процесс работы был схож с групповым проектом.
                        <br/> 1) Макет в Figma
                        <br/> 2) Верстка
                        <br/> 3) Адаптивная Верстка
                        <br/> 4) Работа с компонентами, хуками
                        <br/> 5) Деплой приложения
                        <br/>Пример ниже <br/>(возможно перейти на проект)
                    </p>
                         <div>
                            <ImageSliderPhoto />
                            <a href="#">Project "Photo"</a>
                         </div>
                </div>)}
                {renderTabContent(3, <div className="TabRenderContent">
                    <h2>Project "Reader"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga aspernatur corporis eos, 
                        maiores quisquam dicta quae perspiciatis ratione odit sequi dolore inventore nobis, 
                        ea, perferendis esse accusantium itaque voluptas.</p>
                        <div>
                            <ImageSliderReader />
                        </div>
                </div>)}
            </div>
        </div>
    )
}

export default VerticalTab