import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import Home from '~/pages/Home';

const StackRouter = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = createAppContainer(StackRouter);

export default Routes;
