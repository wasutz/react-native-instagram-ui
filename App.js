import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from './components/HomeTab';
import SearchTab from './components/SearchTab';
import UploadTab from './components/UploadTab';
import ActivityTab from './components/ActivityTab';
import ProfileTab from './components/ProfileTab';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <AppContainer />
    );
  }
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
