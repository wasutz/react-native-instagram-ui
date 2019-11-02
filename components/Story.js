import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Thumbnail } from 'native-base';

class Stories extends Component {
    render() {
        return (
            <View style={styles.story}>
                <Thumbnail 
                    source={{uri: this.props.profileImageUrl}}
                    style={this.props.isWatch ? styles.watched : styles.unwatched} />
            </View>
        );
    }
}

export default Stories;

const styles = StyleSheet.create({
  story: {
    marginLeft: 5
  },
  watched: {
    borderColor: '#ededed',
    borderWidth: 2
  },
  unwatched: {
    borderColor: '#d32f2f',
    borderWidth: 2
  }
});
