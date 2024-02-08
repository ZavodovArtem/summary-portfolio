import React from "react";
import '../main/Main.scss'
import ph from './img/resumPh.jpg'
import mmail from './img/mail.svg'
import ccal from './img/call.svg'
import web from './img/website.svg'
import point from './img/location.svg'
import read from './img/reading.svg'
import dance from  './img/dancing.svg'
import sing from './img/singing.svg'
import foot from './img/football.svg'
import exp from './img/experience.svg';
import edu from './img/education.svg'
import skill from './img/skills.svg'
import html from './img/html5.svg'
import css from './img/css3.svg'
import js from './img/javascript.svg'
import figm from './img/figma.svg'
import ps from './img/ps.svg'


function Main() {
    
    
    return(
        <>
            <div className="resumeMain">
                <a href="/home">В погоду</a>
                <a href="/photo">В Фото</a>
                <a href="/reader">В ридер</a>
                <a href="https://dzen.ru/?yredirect=true"> андекс</a>
                <div className="resumeMainSides">
                    <div className="sideLeft">
                        <div className="sideLeftOne">
                            <img className="sideLeftOnePh" src= {ph} alt=""/>
                            <div className="SideLeftOneTextgroup">
                                <p className="sideLeftOneName">Artiom</p>
                                <p className="sideLeftOneSName">Zavodov</p>
                                <p className="sideLeftOneName">Frontend dev</p>
                            </div>
                        </div>
                        <div className="sideLeftTwo">
                            <img className="sideLeftTwoSvg" src={mmail} alt="" />
                            <p className="sideLeftTwoMail">art.zavodov@gmail.com</p>
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={ccal} alt="" />
                            <p className="sideLeftTwoMail">8-987-112-57-14</p>
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={web} alt=""/>
                            <p className="sideLeftTwoMail">ВК</p>
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={point} alt=""/>
                            <p className="sideLeftTwoMail">Nizhny Novgorod</p>
                        </div>
                        <div className="sideLeftThree">
                            <h3 className="sideLeftThreeMail">Industry Knowledge</h3>
                            <p className="sideLeftThreeMail">
                                HTML5 & CSS3
                                <br/>
                                Flex и Grid CSS
                                <br/>
                                CSS preprocessors
                                <br/>
                                Git & GitHub
                                <br/>
                                JavaScript
                                <br/>
                                JavaScript Core (DOM, AJAX, JSON)
                                <br/>
                                REST API
                                <br/>
                                JavaScript frameworks
                                <br/>
                                TypeScript
                                <br />
                                Figma
                            </p>
                        </div>
                        <div className="sideLeftThree"> 
                            <h3 className="sideLeftThreeMail">Languages</h3>
                            <p className="sideLeftThreeMail">
                                English
                                <br />
                                Russian
                            </p>
                        </div>
                        <div className="sideLeftThree">
                            <h3 className="sideLeftThreeMail">Social</h3>
                            <p className="sideLeftThreeMail">
                                ВК
                                <br />
                                Telegram
                                <br />
                                Viber
                            </p>
                        </div>
                        <div className="sideLeftThree">
                            <h2 className="sideLeftThreeMail">Hobbies</h2>
                        </div>
                        <div className="sideLeftFour">
                            <img src={read} alt="" />
                            <img src={dance} alt="" />
                            <img src={sing} alt="" />
                            <img src={foot} alt="" />
                        </div>
                    </div>
                    <div className="sideRight">
                        <div>
                            <img className="sideRightOneTitle" src={exp} alt="" />
                        </div>
                        <div>
                            <p className="work">Department of the Federal Service for State Registration, Cadastre and Cartography for the Nizhny Novgorod Region
                                <br />
                                <p className="special">Expert specialist </p>
                                <p className="timeWork">October 2020 – April 2021
                                    <br />
                                7 months</p>
                                <br />
                                Legal department for handling appeals
                            </p>

                            <p className="work">Sber
                                <br />
                                <p className="special">Specialist</p>
                                <p className="timeWork">June 2021 - July 2022
                                    <br />
                                1 year 2 months</p>
                                <br />
                                Department for interaction with Rosreestr. Verification of registration of real estate of individuals
                            </p>

                            <p className="work">Sber
                                <br />
                                <p className="special">Senior Specialist</p>
                                <p className="timeWork">July 2022 - April 2023
                                    <br />
                                    10 months</p>
                                <br />
                                Operational support for corporate clients. Working with legal entities.
                            </p>

                            <p className="work">Sber
                                <br />
                                <p className="special">Senior Specialist</p>
                                <p className="timeWork">Апрель 2023 — по настоящее время
                                    <br/>
                                10 месяцев</p>
                                <br/>
                                Preparation of loan documentation
                            </p>

                        </div>
                        <div>
                            <img className="sideRightOneTitle" src={edu} alt="" />
                        </div>
                        <div className="edu">
                            <p className="eduOne">Russian State University of Justice
                                <br />
                            Legal, Jurisprudence (Master of Law)</p>
                            <p className="eduTwo">2023</p>
                            <p className="eduOne">Nizhny Novgorod State University named after. N.I. Lobachevsky (National Research University), Nizhny Novgorod
                                <br/>
                            Retraining on the basis of higher education, (Web programming)</p>
                            <p className="eduTwo">2023</p>
                        </div>
                        <div>
                            <img className="sideRightOneTitle" src={skill} alt="" />
                        </div>
                        <div className="sideRightTwo">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <div className="sideRightTwo" >
                            <img src={figm} alt="" />
                            <img src={ps} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main