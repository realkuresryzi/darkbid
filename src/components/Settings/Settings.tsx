import React, { useState } from 'react'
import "./Settings.css";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";


const Settings = () => {
    
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(true);
    const [switch3, setSwitch3] = useState(true);

    return (
        <div className="set">
            <div className="set__item">
                <span className="bold-text">Dark mode</span>
                {!switch1 && <RiToggleLine className="set__icon" onClick={() => setSwitch1(!switch1)}/>}
                {switch1 && <RiToggleFill className="set__icon" onClick={() => setSwitch1(!switch1)}/>}
            </div>
            <div className="set__item">
                <span className="bold-text">Notifications</span>
                {!switch2 && <RiToggleLine className="set__icon" onClick={() => setSwitch2(!switch2)}/>}
                {switch2 && <RiToggleFill className="set__icon" onClick={() => setSwitch2(!switch2)}/>}
            </div>
            <div className="set__item">
                <span className="bold-text">Auto payment</span>
                {!switch3 && <RiToggleLine className="set__icon" onClick={() => setSwitch3(!switch3)}/>}
                {switch3 && <RiToggleFill className="set__icon" onClick={() => setSwitch3(!switch3)}/>}
            </div>
            <div className="set__item">
                <span className="bold-text">Language</span>
                <span>English</span>
            </div>
            <div className="set__item set__item--delete">Delete account</div>
            {switch1 && <div className="black"></div>}
        </div>
    )
}

export default Settings