import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  onLoadWeatherByLatLon,
  getWeather,
  getWeatherForecast,
  getWeatherError,
  weatherClearErrorAction,
} from '../../store/ducks/weather';
import Forecast from '~/components/Forecast';
import {Snackbar} from 'react-native-paper';
import * as S from './styles';

export default function Home() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => getWeather(state));
  const weatherForecast = useSelector((state) => getWeatherForecast(state));
  const weatherError = useSelector((state) => getWeatherError(state));

  useEffect(() => {
    dispatch(onLoadWeatherByLatLon());
  }, []);

  return (
    <S.Container>
      <S.BackgroundView>
        <S.Condition>{weather?.description}</S.Condition>
        <S.City>{weather?.city_name}</S.City>
        <S.Temp>{weather?.temp}°</S.Temp>
      </S.BackgroundView>

      <Forecast forecast={weatherForecast} currently={weather?.currently} />
      <Snackbar
        visible={weatherError != null}
        style={{backgroundColor: '#fff'}}
        onDismiss={() => console.log()}
        action={{
          label: 'Fechar',
          onPress: () => {
            dispatch(weatherClearErrorAction());
          },
        }}>
        Ocorreu um erro.
      </Snackbar>
    </S.Container>
  );
}
