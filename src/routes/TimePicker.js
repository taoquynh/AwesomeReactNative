/**
 * TimePicker iOS
 */

import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Modal,
  SafeAreaView,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function TimePicker() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timeZoneOffSetInHours, setTimeZone] = useState(
    (-1 * new Date().getTimezoneOffset()) / 60,
  );
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const showDate = () => {
    setMode('date')
    showDatePicker()
  };

  const showTime = () => {
    setMode('time')
    showDatePicker()
  };

  const getTime = date => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes();

    return (
      day +
      ' ' +
      monthNames[month] +
      ' ' +
      year +
      ' at ' +
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute)
    );
  };

  const onDateChange = (selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate);
    hideDatePicker()
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.date}>{getTime(date)}</Text>
        <TouchableHighlight underlayColor="#f3f3f3" onPress={showDate}>
          <Text style={styles.buttonText}>Chọn ngày</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#f3f3f3" onPress={showTime}>
          <Text style={styles.buttonText}>Chọn giờ</Text>
        </TouchableHighlight>
        <DateTimePickerModal
        isVisible={show}
        confirmTextIOS='Đồng ý'
        cancelTextIOS='Huỷ'
        date={date}
        mode={mode}
        headerTextIOS={mode == 'date' ? 'Chọn ngày' : 'Chọn giờ'}
        onConfirm={onDateChange}
        onCancel={hideDatePicker}
      />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  date: {
    fontSize: 25,
  },
  buttonText: {
    color: '#4285f4',
    fontSize: 16,
    padding: 10,
  },
});

export default TimePicker;
