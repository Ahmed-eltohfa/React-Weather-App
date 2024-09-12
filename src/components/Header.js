import React, { useEffect } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { fetchWeather } from "../store/slices/weather-slice"

function Header() {
    const apiKey = process.env.REACT_APP_API_KEY;

    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch();
    function generateLink(city) {
        return `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            // console.log(latitude, longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(fetchWeather(generateLink(data.address.city)));
                }).catch(() => { console.log("error") })
        })
    }, [])



    return (
        <div className='header flex flex-col gap-1'>
            <div className="location font-bold flex items-center gap-1 text-main-front">
                <FaLocationDot />
                {weather["location"]["name"]}
            </div>
            <div className="input flex font-bold justify-between px-2 py-1 border-main-front border-2 rounded-2xl items-center">
                <input onKeyDown={(e) => { e.key === 'Enter' ? dispatch(fetchWeather(generateLink(e.target.value))) : console.log("falid"); e.key === "Enter" ? e.target.value = "" : console.log("failed") }} type="text" name="city" id="" placeholder='Enter Location' className="inp bg-inherit border-none outline-none placeholder-main-front text-main-front" />
                <FaSearch className='fill-main-front' />
            </div>
        </div>
    )
}

export default Header;
