import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class ActivityTab extends Component {
    static navigationOptions = {
        title: 'Activity'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Activity</Text>
            </View>
        );
    }
}

export default createStackNavigator({ActivityTab});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
