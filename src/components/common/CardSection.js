import React from 'react';
import {View} from 'react-native';

const CardSection = ({ children }) => {
    return(
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };