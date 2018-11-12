import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        const { title, thumbnail_image, artist } = this.props.album;
        const { thumbnailStyle, headerContentStyle, leftHeaderStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={leftHeaderStyle}>
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    leftHeaderStyle: {
        marginRight: 10
    }
};

export default AlbumDetail;

