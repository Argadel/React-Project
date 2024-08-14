import React from 'react';

import s from "./Header.module.css";
import GlobalSVGSelector from "../../assets/icons/shared/GlobalSVGSelector";
import Select from 'react-select';
import {UseTheme} from "../../hooks/UseTheme";
import {Theme} from "../../context/ThemeContext";

interface Props {}

export const Header = (props: Props) => {
    const theme = UseTheme();
    const options = [
        { value: 'city-1', label: 'Санкт-Петербург' },
        { value: 'city-2', label: 'Москва' },
        { value: 'city-3', label: 'Новгород' },
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
        }),
    };

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id="header-logo" />
                </div>
                <div className={s.title}>  Weather Forecast</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSVGSelector id="change_theme"/>
                </div>
            </div>
        </header>
    );
};

export default Header;