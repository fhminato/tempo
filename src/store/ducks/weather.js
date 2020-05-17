import axios from 'axios';
import { createSelector } from "reselect";

const apiUrl = 'http://apiadvisor.climatempo.com.br';

export const Types = {
    LOAD_WEATHER_LATLON = 'LOAD_WEATHER_LATLON',
    LOAD_WEATHER_LATLON_COMPLETED = 'LOAD_WEATHER_LATLON_COMPLETED',
    LOAD_WEATHER_LATLON_ERROR = 'LOAD_WEATHER_LATLON_ERROR'
}

const INITIAL_STATE = {
    weather: null,
    loading: false,
    error: null
}

const weatherSelector = state => state.weather;

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Types.LOAD_WEATHER_LATLON:
            return {
                ...state,
                loading: true
            };
        case Types.LOAD_WEATHER_LATLON_COMPLETED:
            return {
                ...state,
                loading: false,
                weather: action.payload
            };
        case Types.LOAD_WEATHER_LATLON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: 
        return state;
    }
}

export const loadWeatherByLatLonAction = (data) => {
  return {
    type: Types.LOAD_WEATHER_LATLON,
    payload: {
      latitude: data.latitude,
      longitude: data.longitude,
    },
  };
};

export const loadWeatherByLatLonCompletedAction = weather => ({
    type: Types.LOAD_WEATHER_LATLON_COMPLETED,
    payload: weather
});

export const loadWeatherByLatLonErrorAction = error => ({
    type: Types.LOAD_WEATHER_LATLON_ERROR,
    payload: error
});

export const onLoadWeatherByLatLon = () => {
    return dispatch => {
        return axios.get(apiUrl)
        .then(response => {
            dispatch(loadWeatherByLatLonCompletedAction(response))
        })
        .catch(error => dispatch(loadWeatherByLatLonErrorAction(error)))
    }
}

export const getWeather = createSelector(
    [weatherSelector],
    weather => weather.weather
)

export default reducer