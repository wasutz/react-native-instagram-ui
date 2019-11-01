import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';

class HomeTab extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}}/>,
        title: 'Instagram',
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}}/>
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
            </View>
        );
    }
}

export default createStackNavigator({HomeTab});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
