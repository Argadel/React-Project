import React from 'react';

import s from "./Current_weather.module.css";
import GlobalSVGSelector from "../../../../assets/icons/shared/GlobalSVGSelector";
import {Weather} from "../../../../store/types/types";
import DateTime from "./Current_DateTime";



interface Props {
    weather: Weather;
}

export const Current_weather = ({weather}: Props) => {

    return (
        <div className={s.current_weather}>
            <div className={s.top}>
                <div className={s.top_wrapper}>
                    <div className={s.current_temp}>{Math.floor(weather.main.temp)} °C</div>
                    <div className={s.current_city}>
                        <span>Moscow</span>
                    </div>
                </div>
                <div className={s.pic}>
                    <GlobalSVGSelector id="sun_weather"/>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.current_time}><span><DateTime /></span></div>
            </div>
        </div>
    );
}

export default Current_weather;