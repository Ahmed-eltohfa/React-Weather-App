import React from 'react'
import Header from './Header';
import Info from './Info';
import { useSelector } from "react-redux"


function Main() {

    const weather = useSelector(state => state.weather);
    const condition = weather["current"]["condition"]["text"];

    return (
        <div className={`main w-96 h-5/6 my-4 bg-gradient-to-b ${condition.includes("snow") ? "from-snowy-back to-snowy-front" : condition.includes("rain") ? "from-rainy-back to-rainy-front" : condition.includes("clear") ? "from-sunny-back to-sunny-front" : "from-cloudy-back to-cloudy-front"} p-8 rounded-md shadow-md`}>
            <Header />
            <Info />
        </div>
    )
}

export default Main;