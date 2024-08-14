import  React, { useState , useEffect } from 'react'
import s from "./Current_weather.module.css";

export const DateTime = () => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const [date,setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
        <div>
            <div className={s.current_day}>{days[date.getDay()]}</div>
            <div className={s.current_time}>
                Time: <span>{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
            </div>
        </div>
    )
}

export default DateTime