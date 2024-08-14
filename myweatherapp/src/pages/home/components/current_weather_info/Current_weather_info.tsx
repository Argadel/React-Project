import React from 'react';

import s from "./Current_weather_info.module.css";
import clouds from "../../../../assets/images/clouds.png"; /*img should be addressed in function BEFORE other any info for OPACITY to work properly!*/
import "./Current_weather_info_item";
import { Current_weather_info_item } from "./Current_weather_info_item";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather;
}

export interface Item {
    icon_id: string,
    name: string,
    value: number,
    indication: string,
    info: string,
}

export const Current_weather_info = ({weather}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Temperature',
            value: (Math.floor(weather.main.temp)),
            indication: '   °C',
            info: ''
        },
        {
            icon_id: 'precipitation',
            name: 'Humidity',
            value: weather.main.humidity,
            indication: '   %',
            info: ''
        },
        {
            icon_id: 'pressure',
            name: 'Pressure',
            value: (Math.floor(0.75 * (weather.main.pressure))),
            indication: ' mmHg',
            info: ''
        },
        {
            icon_id: 'wind',
            name: 'Wind',
            value: weather.wind.speed,
            indication: ' m/s',
            info: ''
        },
    ];
    return (
        <div className={s.current_weather_info}>
            <img className={s.clouds} src={clouds} alt="clouds"/>
            <div className={s.items}>
                {items.map((item: Item) => (<Current_weather_info_item key={item.icon_id} item={item}/>))}
            </div>
        </div>
    );
}

export default Current_weather_info;

