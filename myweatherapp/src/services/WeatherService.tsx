import { AxiosResponse } from "axios";
import {Weather} from "../store/types/types";
import api from "../axios/axios_config";

export class WeatherService {
    static getCurrentWeather (coord: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?${coord}`);
    }
}

