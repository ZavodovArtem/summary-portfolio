import React from "react";
import '../Main.scss'

const Tell: React.FC = () => {
    const phoneNumber = '+7 (987) 112-57-14';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="sideLeftTwoMail">
            <a className="sideLeftTwoMail" href={`tel:${phoneNumber}`} onClick={handleCall}>
                {phoneNumber}
            </a>
        </div>
    )
} 

export default Tell