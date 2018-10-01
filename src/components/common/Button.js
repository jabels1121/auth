import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';


const Button = ({ onPress, buttonText, children }) => {
    const { textStyle, androidButtonStyle, iosButtonStyle } = styles;
    return(
        <TouchableOpacity
            onPress={onPress}
            style={androidButtonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#404040',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    iosButtonStyle: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,                //This is iOS button styling
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    androidButtonStyle: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#eeeeee',
        borderWidth: 1.5,
        borderColor: '#e3e3e3',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;