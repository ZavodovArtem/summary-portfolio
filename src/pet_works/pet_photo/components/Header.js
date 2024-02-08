import './Header.css'
import '../Photo.css'
import headerLine from '../img/header-line.svg'
import nameLine from '../img/name-line.svg'

import React from "react";

function Header () {
    return (
    <>
    <div className='photoBody'>
        <div className='header'>
            {/* <button onClick={() => handleDarkSide((previousDarkside)=> !previousDarkside)} className="save">Dark Side</button> */}
            <h1 className='header-h1'>A memory in a photograph</h1>
            <img className='header-line' src= {headerLine}  />
        </div>
        <div className='namePhoto'>
            <div>
                <p className='name-photograph'>Anna <br /> Volynskaya</p>
                <p className='name-abba'>volynskaya.ph</p>
                <img className='name-img' src={nameLine} />
            </div>
            <div>
                <p className='name-city'>N.Novgorod</p>
            </div>
            
        </div>
    </div>
    </>
    )
}

export default Header