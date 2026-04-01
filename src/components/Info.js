import React from 'react'
import cloudy from '../images/cloudy-c.png'
import rainy from '../images/rainy-c.png'
import sunny from '../images/sunny-c.png'
import snowy from '../images/snowy-c.png'
import { MdWaterDrop } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

import { useSelector } from "react-redux"

function Info() {
    const weather = useSelector(state => state.weather.data);
    const condition = weather["current"]?.condition?.text || "cloudy";
    const today = new Date();
    const lowerCondition = condition.toLowerCase();

    const weatherIcon = lowerCondition.includes("snow") ? snowy
        : lowerCondition.includes("rain") ? rainy
            : lowerCondition.includes("clear") || lowerCondition.includes("sunny") ? sunny
                : cloudy;

    const getIconColor = () => {
        if (lowerCondition.includes("snow")) return "fill-blue-400";
        if (lowerCondition.includes("rain")) return "fill-blue-600";
        if (lowerCondition.includes("clear") || lowerCondition.includes("sunny")) return "fill-yellow-500";
        return "fill-gray-500";
    };

    return (
        <div className='info flex flex-col justify-between relative h-5/6 gap-4 sm:gap-6'>
            {/* Weather Icon and Condition */}
            <div className="img flex flex-col items-center">
                <img
                    src={weatherIcon}
                    alt="Weather Icon"
                    className='w-28 sm:w-32 md:w-40 scale-100 sm:scale-110 md:scale-125 transition-transform duration-300 drop-shadow-lg hover:scale-110'
                />
                <div className="state font-bold text-lg sm:text-xl md:text-2xl text-white mt-2 capitalize drop-shadow-md">
                    {condition}
                </div>
            </div>

            {/* Main Weather Info */}
            <div className="mainInfo">
                <div className="flex items-start gap-1">
                    <div className="deg text-6xl sm:text-7xl md:text-9xl font-bold text-white leading-none drop-shadow-md">
                        {Math.round(weather["current"]["temp_c"])}
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 drop-shadow-md">°C</div>
                </div>
                <div className="date font-bold text-sm sm:text-base md:text-lg text-white/90 mt-2 drop-shadow-md">
                    {today.toDateString()}
                </div>
                <div className="feels-like text-sm sm:text-base text-white/80 mt-1 drop-shadow-md">
                    Feels like {Math.round(weather["current"]["feelslike_c"])}°C
                </div>
            </div>

            {/* Weather Details Grid */}
            <div className="b-info grid grid-cols-2 gap-2 sm:gap-3">
                <div className="metric flex justify-center items-center p-3 sm:p-4 flex-col gap-2 text-white bg-white/20 font-bold rounded-xl shadow-md hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm">Humidity</span>
                    <span className="text-lg sm:text-2xl"><MdWaterDrop className={getIconColor()} /></span>
                    <span className="text-sm sm:text-base">{weather["current"]["humidity"]}%</span>
                </div>
                <div className="metric flex justify-center items-center p-3 sm:p-4 flex-col gap-2 text-white bg-white/20 font-bold rounded-xl shadow-md hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm">Wind Speed</span>
                    <span className="text-lg sm:text-2xl"><FaWind className={getIconColor()} /></span>
                    <span className="text-sm sm:text-base">{Math.round(weather["current"]["wind_kph"])} km/h</span>
                </div>
                <div className="metric flex justify-center items-center p-3 sm:p-4 flex-col gap-2 text-white bg-white/20 font-bold rounded-xl shadow-md hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm">Visibility</span>
                    <span className="text-lg sm:text-2xl"><MdVisibility className={getIconColor()} /></span>
                    <span className="text-sm sm:text-base">{Math.round(weather["current"]["vis_km"])} km</span>
                </div>
                <div className="metric flex justify-center items-center p-3 sm:p-4 flex-col gap-2 text-white bg-white/20 font-bold rounded-xl shadow-md hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm">Pressure</span>
                    <span className="text-lg sm:text-2xl">⚙️</span>
                    <span className="text-sm sm:text-base">{Math.round(weather["current"]["pressure_mb"])} mb</span>
                </div>
            </div>
        </div>
    )
}

export default Info;