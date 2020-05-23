/**
 * Test Picker trên Android
 */

import {
  WheelPicker,
  TimePicker,
  DatePicker,
} from 'react-native-wheel-picker-android';
import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

function randomArray() {
  let data1 = [];
  let data2 = [];
  let data3 = [];
  const arrays = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '💥', '🎁'];

  for (let i = 0; i < 100; i++) {
    let item1 = arrays[Math.floor(Math.random() * 100) % 10];
    data1.push(item1);
    let item2 = arrays[Math.floor(Math.random() * 100) % 10];
    data2.push(item2);
    let item3 = arrays[Math.floor(Math.random() * 100) % 10];
    data3.push(item3);
  }

  return [data1, data2, data3];
}

function PickerAndroid() {
  const [data1, data2, data3] = randomArray();
  const [translate] = useState(new Animated.Value(0));

  const animteText = () => {
    Animated.sequence([
      Animated.timing(translate, {
        toValue: 10,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(translate, {
        toValue: -10,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(translate, {
        toValue: 5,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 50,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/Hyperspace.jpg')}>
          <View style={styles.topView}>
            <WheelPicker
            style={styles.picker}
              selectedItem={null}
              data={data1}
              onItemSelected={null}
              itemTextSize={30}
              selectedItemTextSize={30}
              isCyclic={true}
            />
            <WheelPicker
            style={styles.picker}
              selectedItem={null}
              data={data2}
              onItemSelected={null}
              itemTextSize={30}
              selectedItemTextSize={30}
              isCyclic={true}
            />
            <WheelPicker
            style={styles.picker}
            selectedItem={null}
            data={data3}
            onItemSelected={null}
            itemTextSize={30}
            selectedItemTextSize={30}
            isCyclic={true}
          />
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity style={[styles.button]} onPress={null}>
              <Text style={styles.text}>GO</Text>
            </TouchableOpacity>
            <Animated.Text
              style={[styles.result, {transform: [{translateX: translate}]}]}>
              '🥰'
            </Animated.Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 32,
    alignSelf: 'center',
    color: 'white',
  },
  picker: {
    width: '33.33333333%',
    height: 150,
  },
  topView: {
    flex: 3 / 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1 / 4,
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    width: 300,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  },
});
export default PickerAndroid;
