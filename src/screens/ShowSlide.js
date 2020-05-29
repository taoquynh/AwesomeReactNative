/**
 * Slide show
 */

import React, {useState} from 'react';
import {
  SafeArea,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ShowSlide() {
  const [numberOfPage, setPage] = useState(0);

  const test = native => {
    const page = Math.floor(native.nativeEvent.contentOffset.x / screenWidth);
    setPage(page);
    console.log(numberOfPage);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            width: 8 * screenWidth,
            height: '30%',
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          onScroll={test}
          pagingEnabled={true}>
          <Text style={styles.textStyle}>🌕</Text>
          <Text style={styles.textStyle}>🌖</Text>
          <Text style={styles.textStyle}>🌗</Text>
          <Text style={styles.textStyle}>🌘</Text>
          <Text style={styles.textStyle}>🌑</Text>
          <Text style={styles.textStyle}>🌒</Text>
          <Text style={styles.textStyle}>🌓</Text>
          <Text style={styles.textStyle}>🌔</Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    width: screenWidth,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 80,
  },
});
export default ShowSlide;
