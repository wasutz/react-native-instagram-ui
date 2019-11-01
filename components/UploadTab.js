import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class UploadTab extends Component {
    static navigationOptions = {
        title: 'Gallery'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Upload Tab</Text>
            </View>
        );
    }
}

export default createStackNavigator({UploadTab});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
