import React, { useState } from "react";
import '../components/styles/Tab.scss'
import komuCho from '../img/logoKomuCho.svg'
import cloude from '../img/cloude.png'
import camera from '../img/logoCamera.png'
import reader from '../img/logoFileReader.png'

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
                {renderTabContent(0, <div className="TabRenderContent">
                    <h2>Project "KomuCho"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur enim nobis. 
                        Ipsam libero ab reprehenderit eaque laudantium incidunt beatae 
                        excepturi nihil, modi, ipsum quo fugiat sint dolorum veritatis 
                        maiores!
                    </p>


                </div>)}
                {renderTabContent(1, <div className="TabRenderContent">
                    <h2>Project "Weather"</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates assumenda rerum 
                        quia dicta hic autem. Eligendi sint beatae ipsum ullam placeat tenetur vero error, esse, 
                        itaque quibusdam aliquam ipsa.</p>
                </div>)}
                {renderTabContent(2, <div className="TabRenderContent">
                    <h2>Project "Photo"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti dolorem iste ducimus velit tenetur
                         impedit ab optio hic possimus illo eum fuga, quidem pariatur itaque. 
                         Quisquam in sequi suscipit.</p>
                </div>)}
                {renderTabContent(3, <div className="TabRenderContent">
                    <h2>Project "Reader"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga aspernatur corporis eos, 
                        maiores quisquam dicta quae perspiciatis ratione odit sequi dolore inventore nobis, 
                        ea, perferendis esse accusantium itaque voluptas.</p>
                </div>)}
            </div>
        </div>
    )
}

export default VerticalTab