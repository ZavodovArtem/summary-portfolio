import React from "react";

const HeaderBut = ({handleDarkSide})  => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleDarkSide((previousDarkside)=> !previousDarkside)} className="save">Dark Side</button>
        </div>
    )
}


export default HeaderBut