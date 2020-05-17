import React from 'react';

import * as S from './styles';

export default function Forecast(props) {
  const forecast = props.forecast;
  return (
    <S.Container>
      <S.Forecaster
        data={forecast}
        keyExtractor={(item) => item.date}
        renderItem={({item}) => (
          <S.Container>
            <S.Item>
              <S.InfoText>{item.weekday}</S.InfoText>
              <S.InfoText>
                Min: {item.min}° / Max: {item.max}°
              </S.InfoText>
            </S.Item>
          </S.Container>
        )}
      />
    </S.Container>
  );
}
