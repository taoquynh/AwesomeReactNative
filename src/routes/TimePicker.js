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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function TimePicker() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timeZoneOffSetInHours, setTimeZone] = useState(
    (-1 * new Date().getTimezoneOffset()) / 60,
  );

  const pickTime = () => {
    showModal ? setShowModal(false) : setShowModal(true);
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

  const closeModel = () => {
    setShowModal(false);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };

  const setTime = () => {
    getTime(date);
    closeModel();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.date}>{getTime(date)}</Text>
        <TouchableHighlight underlayColor="#f3f3f3" onPress={pickTime}>
          <Text style={styles.buttonText}>Change Time</Text>
        </TouchableHighlight>
        <Modal visible={showModal}>
          <SafeAreaView>
            <View style={styles.modalContainer}>
              <View style={styles.modelNav}>
                <TouchableHighlight underlayColor="#fff" onPress={closeModel}>
                  <Text
                    style={[styles.buttonText, {width: 80, textAlign: 'left'}]}>
                    Cancel
                  </Text>
                </TouchableHighlight>
                <Text style={styles.navTitle}>Choose a time</Text>
                <TouchableHighlight underlayColor="#fff" onPress={setTime}>
                  <Text
                    style={[
                      styles.buttonText,
                      {width: 80, textAlign: 'right'},
                    ]}>
                    Set
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.modalContent}>
                <Text style={styles.selectText}>Chọn ngày:</Text>
                <DateTimePicker
                  value={date}
                  mode="date"
                  display='default'
                  onChange={onDateChange}
                />
                <View style={{width: widthScreen, height: 50}} />
                <Text style={styles.selectText}>Chọn giờ:</Text>
                <DateTimePicker
                  value={date}
                  mode="time"
                  onChange={onDateChange}
                />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
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
  modalContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  modelNav: {
    height: 44,
    width: widthScreen,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navTitle: {
    fontWeight: '500',
    color: '#222',
    fontSize: 18,
  },
  modalContent: {
    width: widthScreen,
    height: heightScreen - 120,
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  selectText: {
    marginLeft: 20,
    fontSize: 24,
  },
});
export default TimePicker;
