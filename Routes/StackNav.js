import React, {Component} from 'react';
import Login from '../screens/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {primaryColor} from '../assets/styles/Style';
import Register from '../screens/Register';

class StackNav extends Component {
  render() {
    return <AppContainer />;
  }
}

export default StackNav;

const AppStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Sign in',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: primaryColor,
        },
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Sign up',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: primaryColor,
        },
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppStack);
