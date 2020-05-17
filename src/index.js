import React from 'react';
import {Provider} from 'react-redux';
import Routes from '~/routes';
import {store, persistor} from './store';
import appTheme from '~/theme';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={appTheme}>
        <Routes />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
