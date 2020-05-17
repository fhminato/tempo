import {createSelector} from 'reselect';
import api from '~/services/api';
import Geolocation from '@react-native-community/geolocation';

export const Types = {
  LOAD_WEATHER_LATLON: 'LOAD_WEATHER_LATLON',
  LOAD_WEATHER_LATLON_COMPLETED: 'LOAD_WEATHER_LATLON_COMPLETED',
  LOAD_WEATHER_LATLON_ERROR: 'LOAD_WEATHER_LATLON_ERROR',
  WEATHER_CLEAR_ERROR: 'WEATHER_CLEAR_ERROR',
};

const INITIAL_STATE = {
  weather: null,
  forecast: [],
  loading: false,
  error: null,
};

const weatherSelector = (state) => state.weather;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_WEATHER_LATLON:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_WEATHER_LATLON_COMPLETED:
      return {
        ...state,
        loading: false,
        weather: action.payload.results,
        forecast: action.payload.results.forecast,
      };
    case Types.LOAD_WEATHER_LATLON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Types.WEATHER_CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const loadWeatherByLatLonAction = (data) => {
  return {
    type: Types.LOAD_WEATHER_LATLON,
    payload: {
      latitude: data.latitude,
      longitude: data.longitude,
    },
  };
};

export const loadWeatherByLatLonCompletedAction = (weather) => ({
  type: Types.LOAD_WEATHER_LATLON_COMPLETED,
  payload: weather,
});

export const loadWeatherByLatLonErrorAction = (error) => ({
  type: Types.LOAD_WEATHER_LATLON_ERROR,
  payload: error,
});

export const weatherClearErrorAction = () => ({
  type: Types.WEATHER_CLEAR_ERROR,
});

export const onLoadWeatherByLatLon = () => {
  return (dispatch) => {
    Geolocation.getCurrentPosition((info) => {
      return api
        .get(
          `/weather?key=8fdd93ce&lat=${info.latitude}&log=${info.longitude}&user_ip=remote`,
        )
        .then((response) => {
          dispatch(loadWeatherByLatLonCompletedAction(response.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(loadWeatherByLatLonErrorAction(error));
        });
    });
  };
};

export const getWeather = createSelector(
  [weatherSelector],
  (weather) => weather.weather,
);

export const getWeatherForecast = createSelector(
  [weatherSelector],
  (weather) => weather.forecast,
);

export const getWeatherError = createSelector(
  [weatherSelector],
  (weather) => weather.error,
);

export const getWeatherLoading = createSelector(
  [weatherSelector],
  (weather) => weather.loading,
);

export default reducer;
