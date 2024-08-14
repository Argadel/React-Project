import React from 'react';

import s from "./Days.module.css";

import {Day} from "./Days";
import GlobalSVGSelector from "../../../../assets/icons/shared/GlobalSVGSelector";

interface Props {
    dayy: Day;
}

export const Cards = ({dayy}: Props) => {
    const {day_info,temp_day,temp_night, info, icon_id, day} = dayy;
    return (
        <div className={s.cards}>
            <div className={s.day}>{dayy.day}</div>
            <div className={s.day_info}>{dayy.day_info}</div>
            <div className={s.img}>
                <GlobalSVGSelector id={dayy.icon_id}/>
            </div>
            <div className={s.temp_day}>{dayy.temp_day}</div>
            <div className={s.temp_night}>{dayy.temp_night}</div>
            <div className={s.info}>{dayy.info}</div>
        </div>
    );
}

export default Cards;