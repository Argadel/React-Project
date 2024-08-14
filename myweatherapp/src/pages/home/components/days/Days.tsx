import React, {useEffect} from 'react';

import s from "./Days.module.css";

import "./Cards"
import {Cards} from "./Cards";
import {Tabs} from "./Tabs";
import {Weather} from "../../../../store/types/types";

interface Props {
    weather: Weather;
}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}


export const Days = ({weather}: Props) => {

    const days = [
        {
            day: 'Today',
            day_info: '',
            icon_id: '',
            temp_day: '',
            temp_night: '',
            info: '',
        },
        {
            day: 'Tomorrow',
            day_info: '',
            icon_id: '',
            temp_day: '',
            temp_night: '',
            info: '',
        },
        {
            day: '',
            day_info: '',
            icon_id: '',
            temp_day: '',
            temp_night: '',
            info: '',
        },
        {
            day: '',
            day_info: '',
            icon_id: '',
            temp_day: '',
            temp_night: '',
            info: '',
        },
        {
            day: '',
            day_info: '',
            icon_id: '',
            temp_day: '',
            temp_night: '',
            info: '',
        },
    ]
    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((day: Day) => (<Cards dayy={day} key={day.day}/>))}
            </div>
        </>
    );
}

export default Days;