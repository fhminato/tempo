import {DefaultTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'built-titling-rg',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'built-titling-bd',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'built-titling-lt',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'built-titling-el',
      fontWeight: 'normal',
    },
  },
};

export default appTheme = {
  ...DefaultTheme,
  colors: {
    day: '#1167b1',
    night: '#753bbd',
    evening: '#FFA000',
    backgroundPage: '#fff',
    background: '#fff',
    text: '#fff',
  },
  fonts: configureFonts(fontConfig),
};
