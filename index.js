import 'react-native-gesture-handler';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import {appTheme} from './src/theme/index';
import {axiosConfig} from './src/config/axios-config';
import {store, AppWithNavigationState} from './src/config/store-config';

axiosConfig.init();

const Redux = () => {
  <Provider store={store}>
    <PaperProvider theme={appTheme}>
      <StatusBar
        backgroundColor={appTheme.colors.primaryDark}
        barStyle="light-content"
        hidden={true}
      />
      <AppWithNavigationState />
    </PaperProvider>
  </Provider>;
};

AppRegistry.registerComponent(appName, () => Redux);
