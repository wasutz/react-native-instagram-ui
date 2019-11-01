import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class SearchTab extends Component {
    static navigationOptions = {
        title: 'Search'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>SearchTab</Text>
            </View>
        );
    }
}

export default createStackNavigator({SearchTab});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
