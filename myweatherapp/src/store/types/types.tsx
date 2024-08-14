export type Weather = {
    main: {
        temp: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
        pressure: number;
    };

    wind: {
        speed: number;
    }
};

export type ExtendedForecastData = {
    day: string;
    temp: {
        temp_min: number;
        temp_max: number;
    };
    weather: {
        id: number;
        main: string;
    };
}