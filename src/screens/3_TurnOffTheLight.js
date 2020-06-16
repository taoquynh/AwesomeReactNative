/**
 * Ứng dụng bật tắt đèn
 */

import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Switch,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function TheLight() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image
            style={styles.styleImage}
            resizeMode="contain"
            source={
              isEnabled
                ? require('../assets/BulbOn.jpg')
                : require('../assets/BulbOff.jpg')
            }
          />
        </View>
        <View style={styles.bottomView}>
          <Switch
            trackColor={{false: '#3e3e3e', true: 'blue'}}
            thumbColor={isEnabled ? 'white' : 'gray'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topView: {
    flex: 8 / 10,
  },
  bottomView: {
    flex: 2 / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    width: screenWidth,
    height: (screenHeight / 10) * 8,
  },
});

export default TheLight;
