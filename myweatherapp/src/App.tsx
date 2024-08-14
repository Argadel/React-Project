import React, {useEffect} from 'react';

import {Home} from "./pages/home/Home";
import Header from "./shared/header/Header";

import {Routes, Route} from "react-router-dom";
import {useCustomDispatch, useCustomSelector} from "./hooks/store_hooks";
import {selectCurrentWeatherData} from "./store/selectors";
import {fetchCurrentWeather} from "./store/thunks/fetchCurrentWeather";

interface Props {}

export const App = (props: Props) => {
    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector(selectCurrentWeatherData);
    useEffect(() => {
        dispatch(fetchCurrentWeather('lat=55,75&lon=37,61'));
    }, [])

    return (
        <div className="global_container">
             <div className="container">
                 <Header />
                 <Routes>
                    <Route path="/" element={<Home weather={weather}/>} />
                 </Routes>
            </div>
        </div>

  );
}

export default App;
