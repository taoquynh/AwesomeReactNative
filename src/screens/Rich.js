/**
 * Ứng dụng I Am Rich
 */

import React, { useRef, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function Rich() {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const topPadding = useRef(new Animated.Value(1000)).current

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: false
                }
            ),
            Animated.timing(
                topPadding,
                {
                    toValue: 400,
                    duration: 5000,
                    useNativeDriver: false
                }
            )
        ]).start()
    }, [])

    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
                <Animated.Image style={[styles.ruby, { opacity: fadeAnim }]} source={require('../assets/ruby.png')}></Animated.Image>
                <Animated.Text style={[styles.richLabel, { paddingTop: topPadding }]}>I AM RICH</Animated.Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
    },
    ruby: {
        width: screenWidth,
        resizeMode: 'contain'
    },
    richLabel: {
        color: 'white',
        fontSize: 60,
        fontWeight: '300',
        position: 'absolute',
        paddingTop: 400,
    }
})
export default Rich;