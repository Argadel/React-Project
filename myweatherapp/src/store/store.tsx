import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CurrentWeather} from "./slices/CurrentWeatherSlice";
import CurrentWeatherReducer from "./slices/CurrentWeatherSlice";

const rootReducer = combineReducers({
    CurrentWeatherReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) =>getDefaultMiddleware({
        serializableCheck: false,
    }))
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];