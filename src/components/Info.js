import React from 'react'
import cloudy from '../images/cloudy-c.png'
import rainy from '../images/rainy-c.png'
import sunny from '../images/sunny-c.png'
import snowy from '../images/snowy-c.png'
import { MdWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";

import { useSelector } from "react-redux"



function Info() {

    const weather = useSelector(state => state.weather);
    const condition = weather["current"]["condition"]["text"];
    const today = new Date();


    return (
        <div className='info flex flex-col justify-evenly relative h-5/6'>
            <div className="img mt-14">
                <img src=
                    {
                        condition.includes("snow") ? snowy : condition.includes("rain") ? rainy : condition.includes("clear") ? sunny : cloudy
                    } alt="Weather Icon" className='md:scale-150' />
                <div className="state font-bold text-xl -translate-y-4 text-main-front">
                    {weather["current"]["condition"]["text"]}
                </div>
            </div>
            <div className="mainInfo">
                <div className="deg text-9xl font-bold relative text-main-front">
                    {weather["current"]["temp_c"]} <sup className='absolute top-4'>°</sup>
                </div>
                <div className="date font-bold text-lg text-main-front">
                    {today.toDateString()}
                </div>
                <div className="b-info grid grid-cols-2 mt-2 gap-3">
                    <div className="l flex justify-center items-center p-3 flex-col gap-1 text-main-front bg-white/10 font-bold rounded-md shadow">
                        <span className="poi">Humidity</span>
                        <span className="poi"><MdWaterDrop className='fill-snowy' /></span>
                        <span className="poi">{weather["current"]["humidity"]}%</span>
                    </div>
                    <div className="r flex justify-center items-center p-3 flex-col gap-1 text-main-front bg-white/10 font-bold rounded-md shadow">
                        <span className="poi">Wind</span>
                        <span className="poi"><FaWind className='fill-snowy' /></span>
                        <span className="poi">{weather["current"]["wind_kph"]} km/h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;