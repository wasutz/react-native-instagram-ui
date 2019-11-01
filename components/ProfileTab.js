import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class ProfileTab extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default createStackNavigator({ProfileTab});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
