import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#701f38',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#701f38',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    }
};

const Button = () => {
    const { buttonStyle, textStyle } = styles;  
    return (
        <TouchableOpacity onPress={() => console.log('pressed')} style={buttonStyle}>
            <Text style={textStyle}>Open</Text>
        </TouchableOpacity>
    );
};

export default Button;
