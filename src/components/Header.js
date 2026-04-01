import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { fetchWeather } from "../store/slices/weather-slice"

function Header() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [searchInput, setSearchInput] = useState("");

    const weather = useSelector(state => state.weather.data)
    const dispatch = useDispatch();

    const generateLink = (city) => {
        return `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchInput.trim()) {
            dispatch(fetchWeather(generateLink(searchInput.trim())));
            setSearchInput("");
        }
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            if (data.address?.city) {
                                dispatch(fetchWeather(generateLink(data.address.city)));
                            }
                        })
                        .catch(err => console.error("Location fetch error:", err))
                },
                (error) => console.error("Geolocation error:", error)
            );
        }
    }, [dispatch, apiKey])

    return (
        <div className='header flex flex-col gap-3 sm:gap-2'>
            <div className="location font-bold flex items-center gap-2 text-white text-sm sm:text-base drop-shadow-md">
                <FaLocationDot className="flex-shrink-0" />
                <span className="truncate">{weather["location"]["name"]}</span>
            </div>
            <div className="input flex font-bold justify-between px-4 py-2 border-white border-2 rounded-full items-center bg-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                <input
                    type="text"
                    name="city"
                    placeholder='Enter Location'
                    className="inp bg-inherit border-none outline-none placeholder-white/60 text-white text-sm sm:text-base w-full"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleSearch}
                    aria-label="Search for city"
                />
                <FaSearch className='fill-white flex-shrink-0 ml-2' />
            </div>
        </div>
    )
}

export default Header;
