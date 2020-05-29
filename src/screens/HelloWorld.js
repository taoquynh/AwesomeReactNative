/**
 * Hello World
 */

import React from 'react';
import { View, Text } from 'react-native';

function HelloWorldApp() {
    return (
        <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>
                Hello, World!
            </Text>
        </View>
    )
}

export default HelloWorldApp;