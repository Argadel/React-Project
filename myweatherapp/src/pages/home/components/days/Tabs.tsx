import React from 'react';

import s from "./Days.module.css";

interface Props {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
            value: 'For 5 days',
        },
        {
            value: 'For 10 days',
        },
        {
            value: 'For a month',
        },
    ];
    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map(tab => (<div className={s.tab} key={tab.value}>{tab.value}</div>))}
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    );
}

export default Tabs;