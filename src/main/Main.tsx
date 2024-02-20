import React from "react";
import ResumeMainSides from "./components/ResumeMainSides-front";
import ResumeMainProject from "./components/ResumeMainProject";


function Main() {
    
    
    return(
        <>
            <div className="resumeMain">
                {/* <a href="/home">В погоду</a>
                <a href="/photo">В Фото</a>
                <a href="/reader">В ридер</a>
                <a href="https://dzen.ru/?yredirect=true"> андекс</a> */}
                <ResumeMainSides />
                <ResumeMainProject />
            </div>
        </>
    )
}

export default Main