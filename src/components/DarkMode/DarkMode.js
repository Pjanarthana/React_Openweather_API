import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkmode = () => {
        document.querySelector("body").setAttribute('dark-theme','dark')
        localStorage.setItem("selectedTheme","dark")
    }
    const setLightmode = () => {
        document.querySelector("body").setAttribute('dark-theme','light')
        localStorage.setItem("selectedTheme","light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark") {
        setDarkmode();
    }
    

    const toggletheme = e =>{
        if(e.target.checked) setDarkmode();
        else setLightmode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggletheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
