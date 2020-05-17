import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import weatherReducer from './ducks/weather';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['weather'],
};

const weatherPersistConfig = {
  key: 'weather',
  storage: AsyncStorage,
  blacklist: [],
};

const reducer = combineReducers({
  weather: persistReducer(weatherPersistConfig, weatherReducer),
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
