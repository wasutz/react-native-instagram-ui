import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="camera" style={{paddingLeft: 10}}/>,
        title: 'Instagram',
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}}/>
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>MainScreen</Text>
            </View>
        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
