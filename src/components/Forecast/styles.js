import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import appTheme from '~/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff00};
`;

export const Item = styled.View`
  border-bottom-width: 1px;
  border-color: #fff;
  flex: 1;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 5px;
  background: #00000020;
  border-radius: 5px;
  padding: 12px;
`;

export const InfoText = styled.Text`
  font-size: 15px;
  color: ${appTheme.colors.text};
`;

export const Forecaster = styled(FlatList)``;
