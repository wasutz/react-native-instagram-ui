import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Story from './Story';

class Stories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            paddingStart: 5,
                            paddingEnd: 5
                        }} >
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1000/960/640' 
                            isWatch={true} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1001/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1002/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1005/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1006/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1008/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1009/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1010/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1011/960/640' 
                            isWatch={false} />
                        <Story 
                            profileImageUrl='https://picsum.photos/id/1013/960/640' 
                            isWatch={false} />
                </ScrollView>
            </View>
        );
    }
}

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5
  }
});
