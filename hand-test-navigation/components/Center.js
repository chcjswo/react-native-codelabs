import React from 'react';
import { View } from 'react-native';

export default props => {
    return (
        <View style={{ alignItems: 'center' }}>
            {props.children}
        </View>
    );
}