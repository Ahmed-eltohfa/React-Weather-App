import React from 'react'
import Header from './Header';
import Info from './Info';
import { useSelector } from "react-redux"

function Main() {
    const weather = useSelector(state => state.weather.data);
    const condition = weather["current"]["condition"]["text"];

    const lowerCondition = condition.toLowerCase();
    const getCardGradient = () => {
        if (lowerCondition.includes("snow")) return "from-snowy-front to-snowy-back";
        if (lowerCondition.includes("rain")) return "from-rainy-front to-rainy-back";
        if (lowerCondition.includes("clear") || lowerCondition.includes("sunny")) return "from-sunny-front to-sunny-back";
        return "from-cloudy-front to-cloudy-back";
    };

    return (
        <div className={`main w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto my-4 bg-gradient-to-b ${getCardGradient()} p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-300 animate-fadeIn h-5/6`}>
            <Header />
            <Info />
        </div>
    )
}

export default Main;