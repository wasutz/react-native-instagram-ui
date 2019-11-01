import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
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

const getTab = (tab, icon) => {
  return {
    screen: tab,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name={icon} style={{color: tintColor}}/>)
    }
  }
}

const AppStack = createBottomTabNavigator({
  Home: getTab(HomeTab, "home"),
  Search: getTab(SearchTab, "search"),
  Upload: getTab(UploadTab, "add"),
  Activity: getTab(ActivityTab, "heart"),
  Profile: getTab(ProfileTab, "person")
}, {
  tabBarOptions: {
    showLabel: false
  }
});  

const AppNavigator = createSwitchNavigator({
  App: {
    screen: AppStack
  }
});

const AppContainer = createAppContainer(AppNavigator);
