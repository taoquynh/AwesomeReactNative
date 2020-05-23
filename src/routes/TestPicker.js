/**
 * Test Picker trên Android
 */

import { WheelPicker, TimePicker, DatePicker } from 'react-native-wheel-picker-android'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const wheelPickerData = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

class SomeScene extends Component {
  state = {
    selectedItem: 0,
  }

  onItemSelected = selectedItem => {
    this.setState({ selectedItem })
  }

  onPress = () => {
    this.setState({ selectedItem: 3 })
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Button title={'Select third element'} onPress={this.onPress}/>
      <Text>Selected position: {this.state.selectedItem}</Text>
      <WheelPicker 
        selectedItem={this.state.selectedItem}
        data={wheelPickerData} 
        onItemSelected={this.onItemSelected}/>
      </View>
    );
  }
}
export default SomeScene;
