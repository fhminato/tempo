import styled from 'styled-components/native';

import appTheme from '~/theme';
import {ProgressBar} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${appTheme.colors.night};
`;

export const Condition = styled.Text`
  font-weight: bold;
  color: ${appTheme.colors.text};
  font-size: 30px;
`;

export const City = styled.Text`
  color: ${appTheme.colors.text};
  font-size: 30px;
`;

export const Temp = styled.Text`
  color: ${appTheme.colors.text};
  font-weight: bold;
  font-size: 30px;
`;

export const BackgroundView = styled.View`
  flex: 2;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
