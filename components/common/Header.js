import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#701f38',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFF'
    }
};

export { Header };
