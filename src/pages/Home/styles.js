import styled from 'styled-components/native';

import {appTheme} from '~/theme/appTheme';
import {Headline} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${appTheme.colors.primary};
`;

export const Title = styled(Headline)`
  color: ${appTheme.colors.accent};
  font-size: 30;
`;
