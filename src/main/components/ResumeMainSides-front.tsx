import React from "react";
import '../Main.scss'
import ph from '../img/resumPh.jpg'
import mmail from '../img/mail.svg'
import ccal from '../img/call.svg'
import web from '../img/website.svg'
import point from '../img/location.svg'
import read from '../img/reading.svg'
import dance from  '../img/dancing.svg'
import sing from '../img/singing.svg'
import foot from '../img/football.svg'
import exp from '../img/experience.svg';
import edu from '../img/education.svg'
import skill from '../img/skills.svg'
import html from '../img/html5.svg'
import css from '../img/css3.svg'
import js from '../img/javascript.svg'
import figm from '../img/figma.svg'
import ps from '../img/ps.svg'
import EmailLink from "./ResumeMainSides-front/email";
import Tell from "./ResumeMainSides-front/number";
import HoverComponent from "./ResumeMainSides-front/Map";

// import  Url from "url";



function ResumeMainSides() {
    return(
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
                            <EmailLink email = 'art.zavodov@gmail.com' />
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={ccal} alt="" />
                            <Tell  />
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={web} alt=""/> 
                            <a className="sideLeftTwoMail" href="https://vk.com/ortemka24zivaldi" target="_blank" rel="noreferrer">Artyom Zavodov on VKontakte</a>
                        </div>
                        <div className="sideLeftTwo">
                            <img className='sideLeftTwoSvg' src={point} alt=""/>
                            <HoverComponent />
                        </div>
                        <div className="sideLeftThree">
                            <h3 className="sideLeftThreeMail">Industry Knowledge</h3>
                            <ul className="sideLeftThreeMail">
                                <li className="sideLeftThreeMailLi">HTML5 & CSS3</li>
                                <li className="sideLeftThreeMailLi">Flex и Grid CSS</li>
                                <li className="sideLeftThreeMailLi">CSS preprocessors</li>
                                <li className="sideLeftThreeMailLi">Git & GitHub</li>
                                <li className="sideLeftThreeMailLi">JavaScript</li>
                                <li className="sideLeftThreeMailLi">JavaScript Core (DOM, AJAX, JSON)</li>
                                <li className="sideLeftThreeMailLi">REST API</li>
                                <li className="sideLeftThreeMailLi">JavaScript frameworks</li>
                                <li className="sideLeftThreeMailLi">TypeScript</li>
                                <li className="sideLeftThreeMailLi">Figma</li>
                            </ul>
                        </div>
                        <div className="sideLeftThree"> 
                            <h3 className="sideLeftThreeMail">Languages</h3>
                            <ul className="sideLeftThreeMail">
                                <li className="sideLeftThreeMailLi">English</li>
                                <li className="sideLeftThreeMailLi">Russian</li>
                            </ul>
                        </div>
                        <div className="sideLeftThree">
                            <h3 className="sideLeftThreeMail">Social</h3>
                            <ul className="sideLeftThreeMail">
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="https://vk.com/ortemka24zivaldi" target="_blank" rel="noreferrer">Artyom on VKontakte</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="https://web.telegram.org/a/" target="_blank" rel="noreferrer">Artyom on Telegram</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="#" target="_blank">Artyom on Viber</a></li>
                            </ul>
                        </div>
                        <div className="sideLeftThree">
                            <h2 className="sideLeftThreeMail">Hobbies</h2>
                            <div className="sideLeftFour">
                                <img src={read} alt="" />
                                <img src={dance} alt="" />
                                <img src={sing} alt="" />
                                <img src={foot} alt="" />
                            </div>
                        </div>
                        <div className="sideLeftThree">
                            <h2 className="sideLeftThreeMail">My projects</h2>
                            <ul className="sideLeftThreeMail">
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="#" target="_blank">In KomuCho</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="/home" target="_blank">In the weather</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="/photo" target="_blank">In Photos</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="/reader" target="_blank">To the reader</a></li>
                                <li className="sideLeftThreeMailLi"><a className="sideLeftThreeMail" href="https://dzen.ru/?yredirect=true" target="_blank" rel="noreferrer">To Yandex</a></li>
                            </ul>
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
                                <p className="timeWork">April 2023 - present
                                    <br/>
                                10 months</p>
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
    )
}

export default ResumeMainSides