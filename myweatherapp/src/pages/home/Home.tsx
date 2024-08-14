import React, {useEffect} from 'react';

import s from "./Home.module.css"


import Current_weather from "./components/current_weather/Current_weather";
import Current_weather_info from "./components/current_weather_info/Current_weather_info";
import Days from "./components/days/Days";
import {Weather} from "../../store/types/types";

interface Props {
    weather: Weather;
}

export const Home = ({weather}: Props) => {

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <Current_weather weather={weather}/>
                <Current_weather_info weather={weather}/>
            </div>
        </div>
    );
}
