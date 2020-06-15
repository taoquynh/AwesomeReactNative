/* eslint-disable react-native/no-inline-styles */
/**
 * Slide show
 */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import PageControl from 'react-native-page-control';
import {collections, natures} from '../datas/collection';

const screenWidth = Dimensions.get('window').width;

function ShowSlide() {
  const [numberOfPage, setPage] = useState(0);
  const scrollView = React.useRef(null);

  const arrayView = collections.map((item, index) => (
    <View key={index} style={styles.childView}>
      <Image style={styles.photo} source={{uri: item.url}} />
      <Text style={styles.titlePhoto}>{item.title}</Text>
    </View>
  ));

  const brrayView = natures.map((item, index) => (
    <View key={index} style={styles.childView2}>
      <Image style={styles.photo} source={{uri: item.url}} />
      {/* <Text style={styles.titlePhoto}>{item.title}</Text> */}
    </View>
  ));

  const test = native => {
    var page = Math.floor(native.nativeEvent.contentOffset.x / screenWidth);
    if (page < 0) {
      page = 0;
    }

    if (page > 7) {
      page = 7;
    }
    setPage(page);
  };

  useEffect(() => {
    let interval = null;
    if (numberOfPage < natures.length) {
      interval = setInterval(() => {
        // setContentX(screenWidth*(numberOfPage+1))
        setPage(numberOfPageX => numberOfPage + 1);
        // scrollView.current.scrollTo({x: contentX, y: 0, animated: true})
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [numberOfPage]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topView}>
          <ScrollView
            ref={scrollView}
            horizontal={true}
            contentContainerStyle={{
              width: natures.length * screenWidth,
              height: '100%',
              backgroundColor: 'black',
              alignItems: 'center',
            }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            bounces={false}
            onScroll={test}
            // contentOffset={{ x: contentX}}
            pagingEnabled={true}>
            {/* <Text style={styles.textStyle}>🌕</Text>
            <Text style={styles.textStyle}>🌖</Text>
            <Text style={styles.textStyle}>🌗</Text>
            <Text style={styles.textStyle}>🌘</Text>
            <Text style={styles.textStyle}>🌑</Text>
            <Text style={styles.textStyle}>🌒</Text>
            <Text style={styles.textStyle}>🌓</Text>
            <Text style={styles.textStyle}>🌔</Text> */}
            {brrayView}
          </ScrollView>
          <PageControl
            style={{position: 'absolute', bottom: '10%'}}
            numberOfPages={natures.length}
            currentPage={numberOfPage}
            pageIndicatorTintColor="white"
            currentPageIndicatorTintColor="red"
            onPageIndicatorPress={null}
          />
        </View>
        <View style={styles.bottomView}>
          <ScrollView
            contentContainerStyle={{
              width: screenWidth,
              height: 200 * collections.length + 10 * (collections.length + 1),
              alignItems: 'center',
            }}
            scrollEventThrottle={200}
            decelerationRate="fast"
            bounces={true}
            showsVerticalScrollIndicator={false}
            onScroll={test}>
            {arrayView}
          </ScrollView>
        </View>
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
    flexDirection: 'column',
  },
  topView: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 2 / 3,
  },
  textStyle: {
    width: screenWidth,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 80,
  },
  childView: {
    width: '95%',
    height: 200,
    marginTop: 10,
    borderRadius: 20,
  },
  childView2: {
    width: screenWidth,
    height: '100%',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  titlePhoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 20,
    color: '#330000',
    fontWeight: '500',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 20,
  },
});
export default ShowSlide;
