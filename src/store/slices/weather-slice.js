import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchWeather = createAsyncThunk('weatherSlice/fetchweather', async (url) => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    // console.log(data);
    return data;
})

const init = {
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1725664545,
        "localtime": "2024-09-07 00:15"
    },
    "current": {
        "last_updated_epoch": 1725663600,
        "last_updated": "2024-09-07 00:00",
        "temp_c": 9,
        "temp_f": 59,
        "is_day": 0,
        "condition": {
            "text": "cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 3.8,
        "wind_kph": 6.1,
        "wind_degree": 180,
        "wind_dir": "S",
        "pressure_mb": 1011,
        "pressure_in": 29.85,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 100,
        "cloud": 50,
        "feelslike_c": 15.1,
        "feelslike_f": 59.1,
        "windchill_c": 15.2,
        "windchill_f": 59.3,
        "heatindex_c": 15.2,
        "heatindex_f": 59.3,
        "dewpoint_c": 13.5,
        "dewpoint_f": 56.4,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 1,
        "gust_mph": 7.4,
        "gust_kph": 11.8,
        "air_quality": {
            "co": 579.05,
            "no2": 115.625,
            "o3": 12,
            "so2": 10.175,
            "pm2_5": 33.3,
            "pm10": 41.44,
            "us-epa-index": 2,
            "gb-defra-index": 3
        }
    }
}

export const weatherSlice = createSlice({
    initialState: init,
    name: 'weatherSlice',
    reducers: {
        setWeather: (state, action) => {
            // console.log(state)
            return state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            return state = action.payload;
        })
    }
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer