import React from 'react';
import {Item} from "./Current_weather_info";

import s from "./Current_weather_info.module.css"
import IndicatorSVGSelector from "../../../../assets/icons/shared/IndicatorSVGSelector";

interface Props {
    item: Item
}

export const Current_weather_info_item = ({item}: Props) => {
    const {icon_id, name, value, indication, info} = item;
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSVGSelector id={icon_id}/>
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
            <div className={s.indicator_indication}>{indication}</div>
            <div className={s.indicator_info}>{info}</div>
        </div>
    );
}

export default Current_weather_info_item;