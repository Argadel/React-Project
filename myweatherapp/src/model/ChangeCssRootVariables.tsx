import {Theme} from "../context/ThemeContext";

export function ChangeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'components-background',
        'cards-primary',
        'box-shadow',
        'text-primary',
        'text-light',
        'text-base',
        'selector-primary'
    ];

    components.forEach(component =>{
        root.style.setProperty(
            `--${component}-default`, `var(--${component}-${theme})`
        );
    });
}