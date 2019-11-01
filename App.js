import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from './components/HomeTab';
import SearchTab from './components/SearchTab';
import UploadTab from './components/UploadTab';
import ActivityTab from './components/ActivityTab';
import ProfileTab from './components/ProfileTab';

export default function App() {
  return (
    <AppContainer />
  );
}

const AppStack = createBottomTabNavigator({
  HomeTab,
  SearchTab,
  UploadTab,
  ActivityTab,
  ProfileTab
});  

const AppNavigator = createSwitchNavigator({
  App: {
    screen: AppStack
  }
});

const AppContainer = createAppContainer(AppNavigator);
