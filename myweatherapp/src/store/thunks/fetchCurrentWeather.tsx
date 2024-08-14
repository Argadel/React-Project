import {AppDispatch} from "../store";
import {WeatherService} from "../../services/WeatherService";
import {CurrentWeather} from "../slices/CurrentWeatherSlice";

export const fetchCurrentWeather =
    (payload: string) => async (dispatch: AppDispatch) => {

    try {
        dispatch(CurrentWeather.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload);
        if (res.status === 200) {
            dispatch(CurrentWeather.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(CurrentWeather.actions.fetchCurrentWeatherError(res));
        }
    } catch (error){
        console.log(error);
    }
};