/**
 * Bingo
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

function randomArray() {
  let data1 = [];
  let data2 = [];
  let data3 = [];
  const arrays = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '💥', '🎁'];

  for (let i = 0; i < 100; i++) {
    let item1 = arrays[Math.floor(Math.random() * 9)];
    data1.push(item1);
    let item2 = arrays[Math.floor(Math.random() * 9)];
    data2.push(item2);
    let item3 = arrays[Math.floor(Math.random() * 9)];
    data3.push(item3);
  }

  return [data1, data2, data3];
}

function Bingo() {
  const [data1, data2, data3] = randomArray();
  const [choosen1, setChoosen1] = useState('');
  const [choosen2, setChoosen2] = useState('');
  const [choosen3, setChoosen3] = useState('');
  const [resultLabel, setResultLabel] = useState('');
  const [amazingFlag, setAmazingFlag] = useState(false);
  const [translate] = useState(new Animated.Value(0));
  const [x, setX] = useState(0);
  const trucX = new Animated.Value(0);
  console.log('translate', translate);

  let listItem1 = data1.map((item, index) => (
    <Picker.Item key={index} label={item} value={item} />
  ));

  let listItem2 = data2.map((item, index) => (
    <Picker.Item key={index} label={item} value={item} />
  ));

  let listItem3 = data3.map((item, index) => (
    <Picker.Item key={index} label={item} value={item} />
  ));

  const goButtonDidTouch = () => {
    let index1, index2, index3;

    if (amazingFlag) {
      index1 = Math.floor(Math.random() * 100) % 10;
      index2 = data2.indexOf(data1[index1]);
      index3 = data3.lastIndexOf(data1[index1]);
      console.log('amazingFlag');
      console.log(index1, index2, index3);
    } else {
      index1 = Math.floor(Math.random() * 100) % 10;
      index2 = Math.floor(Math.random() * 100) % 10;
      index3 = Math.floor(Math.random() * 100) % 10;
      console.log('not amazingFlag');
      console.log(index1, index2, index3);
    }

    setChoosen1(data1[index1]);
    setChoosen2(data2[index2]);
    setChoosen3(data3[index3]);

    if (
      data1[index1] == data2[index2] &&
      data3[index3] == data1[index1] &&
      data1[index1] != ''
    ) {
      console.log('Bingo');
      setResultLabel('Bingo!!!');
    } else {
      console.log('💔');
      setResultLabel('💔');
    }

    animteText();
  };

  const win = () => {
    setAmazingFlag(!amazingFlag);
    console.log(amazingFlag);
  };

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
            <Picker
              style={styles.picker}
              selectedValue={choosen1}
              itemStyle={{fontSize: 80}}
              onValueChange={null}>
              {listItem1}
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={choosen2}
              itemStyle={{fontSize: 80}}
              onValueChange={null}>
              {listItem2}
            </Picker>
            <Picker
              style={styles.picker}
              selectedValue={choosen3}
              itemStyle={{fontSize: 80}}
              onValueChange={null}>
              {listItem3}
            </Picker>
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={goButtonDidTouch}>
              <Text style={styles.text}>GO</Text>
            </TouchableOpacity>
            <Animated.Text
              style={[styles.result, {transform: [{translateX: translate}]}]}>
              {resultLabel}
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
    height: 100,
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
export default Bingo;
