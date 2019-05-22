import React from 'react';
import { Text, View, TextInput } from 'react-native';

const styles = {
    inputStyle: { 
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        lineHeight: 23,
        flex: 2    
    },
    labelStyle: {
        fontSize: 20,
        paddingRight: 5,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
};

const Input = (props) => {
    const { inputStyle, containerStyle, labelStyle } = styles; 
    const { value, onChangeText, label } = props; 
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText} 
                style={inputStyle}
            />
        </View>     
    );
};

export { Input };
