import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {onLoadWeatherByLatLon} from '../../store/ducks/weather';
import {TouchableWithoutFeedback} from 'react-native';
import * as S from './styles';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadWeatherByLatLon());
  }, []);

  return (
    <TouchableWithoutFeedback>
      <S.Container>
        <S.Title>TEMPO</S.Title>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
