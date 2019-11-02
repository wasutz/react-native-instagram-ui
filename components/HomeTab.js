import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import Stories from './Stories';
import Post from './Post';

class HomeTab extends Component {
    static navigationOptions = {
        headerLeft: <Icon type="AntDesign" name="camerao" style={{paddingLeft: 10}}/>,
        title: 'Instagram',
        headerRight: <Icon name="paper-plane" style={{paddingRight: 10}}/>
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Stories />
                    <Post
                        profileName="Puggy"
                        profileImageUrl='https://picsum.photos/id/1025/960/640'
                        postImageUrl='https://picsum.photos/id/10/1000/667'
                        likes={112}
                        description="Cool!" />
                    <Post
                        profileName="Paul"
                        profileImageUrl='https://picsum.photos/id/1005/960/640'
                        postImageUrl='https://picsum.photos/id/11/1000/667'
                        likes={1}
                        description="I love this!" />
                    <Post
                        profileName="Alicia"
                        profileImageUrl='https://picsum.photos/id/1011/960/640'
                        postImageUrl='https://picsum.photos/id/12/1000/667'
                        likes={57}
                        description="I wish you all the best :)" />
                </Content>
            </Container>
        );
    }
}

export default createStackNavigator({HomeTab});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
