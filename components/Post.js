import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: this.props.profileImageUrl}} />
                            <Body>
                                <Text>{this.props.profileName}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={{uri: this.props.postImageUrl}}
                            style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon type="FontAwesome" name="heart-o" />
                            </Button>
                            <Button transparent>
                                <Icon type="FontAwesome" name="comment-o" />
                            </Button>
                            <Button transparent>
                                <Icon type="FontAwesome" name="paper-plane-o" />
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Icon type="FontAwesome" name="bookmark-o" />
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem style={styles.detailContainer}>
                        <Body>
                            <Text style={styles.likeText}>
                                {this.props.likes} {this.props.likes > 1 ? 'Likes' : 'Like'} 
                            </Text>
                            <Text>
                                {this.props.description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  detailContainer: {
      marginTop: -25
  },
  likeText: {
      fontWeight: '600'
  }
});
