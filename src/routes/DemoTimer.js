/**
 * DemoTimer
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const formatNumber = number => {
    if (number > 9) {
        return `${number}`
    } else {
        return `0${number}`
    }
}
const getRemaining = (time) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time - mins * 60)
    return { mins: formatNumber(mins), secs: formatNumber(secs) }
}

function DemoTimer() {
    const [remainingSecs, setRemainingSecs] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const { mins, secs } = getRemaining(remainingSecs)

    toggle = () => {
        setIsActive(!isActive)
    }

    reset = () => {
        setRemainingSecs(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1)
            }, 1000);
        } else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, remainingSecs])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Text style={styles.timeText}>{`${mins} : ${secs}`}</Text>
            <TouchableOpacity style={styles.button} onPress={this.toggle}>
                <Text style={styles.buttonText}>{isActive ? 'PAUSE' : 'START'}</Text>
            </TouchableOpacity>
             <TouchableOpacity style={[styles.button, styles.buttonReset]} onPress={this.reset}>
                 <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07121B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 10,
        borderColor: '#89AAFF',
        width: screen.width / 2,
        height: screen.width / 2,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 45,
        color: '#B9AAFF',
    },
    timeText: {
        color: '#fff',
        fontSize: 90,
        marginBottom: 20,
    },
    buttonReset: {
        marginTop: 20,
        borderColor: '#FF851B',
        width: screen.width / 3,
        height: screen.width / 3,
    },
    buttonTextReset: {
        color: '#FF851B',
        fontSize: 30,
    }
})

export default DemoTimer;