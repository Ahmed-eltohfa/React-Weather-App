import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from "./slices/weather-slice"

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
})