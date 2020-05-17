import weatherReducer from '~/store/ducks/weather.js';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Routes from '~/routes';

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const initialState = Routes.router.getStateForAction(
  Routes.router.getActionForPathAndParams('Home'),
);

const navReducer = (state = initialState, action) => {
  return Routes.router.getStateForAction(action, state) || state;
};

const middleware = createReactNavigationReduxMiddleware((state) => state.nav);

const App = createReduxContainer(Routes, 'root');

const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const reducers = combineReducers({
  weather: weatherReducer,
  nav: navReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, middleware)),
);

export {store, AppWithNavigationState};
