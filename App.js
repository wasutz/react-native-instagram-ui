import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './components/MainScreen';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});
const AppContainer = createAppContainer(AppNavigator);
