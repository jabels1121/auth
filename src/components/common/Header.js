// import libraries for making component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{ props.headerText }</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        height: 60,
        backgroundColor: '#f1f4ff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        position: 'relative',
        marginBottom: 15
    },
    textStyle: {
        fontSize: 22.5,
        color: '#000000'
    }
};
// Make a component available to other parts of the app
export { Header };