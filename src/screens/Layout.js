/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Layout with FlexBox
 */

import React from 'react';
import {View} from 'react-native';

function Layout() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexGrow: 2,
      }}>
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'orange'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
    </View>
  );
}

/**
 * Khác nhau giữa 2 hàm Flex1 và Flex2
 * Flex1 là 3 view nằm trong 1 view
 * Flex 2 là 3 view đặt trong 1 cặp thẻ script
 */
function Flex1() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e6fff8',
      }}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: '#ffece5',
        }}
      />
      <View
        style={{
          flex: 0.3,
          backgroundColor: '#ecffe5',
        }}
      />
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#e5ffff',
        }}
      />
    </View>
  );
}

function Flex2() {
  return (
    <>
      <View
        style={{
          flex: 0.2,
          backgroundColor: '#ffece5',
        }}
      />
      <View
        style={{
          flex: 0.3,
          backgroundColor: '#ecffe5',
        }}
      />
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#e5ffff',
        }}
      />
    </>
  );
}

function FlexDirection() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column-reverse',
        // flexDirection có các giá trị: row, row-reverse, column, column-reverse
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
    </View>
  );
}

function JustifyContent() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // justifyContent có các giá trị: flex-start, flex-end, center, space-between, space-acround, space-evenly
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
    </View>
  );
}

function AlignItems() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        // alignItems nhận các giá trị: stretch, flex-start, flex-end, center, baseline
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{height: 50, backgroundColor: 'orange'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
    </View>
  );
}

function AlignSelf() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 50,
          backgroundColor: 'skyblue',
          // alignSelf tác dụng đến từng đối tượng children
          alignSelf: 'stretch',
        }}
      />
      <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
    </View>
  );
}

function FlexWrap() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        // flexWrap nhận các giá trị: wrap: non-wrap, wrap-reverse
        justifyContent: 'space-between',
        alignContent: 'space-around',
      }}>
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'orange'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
    </View>
  );
}
export default Layout;
