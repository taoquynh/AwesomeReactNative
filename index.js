/* eslint-disable no-unused-vars */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from './src/screens/1_HelloWorld';
import Layout from './src/screens/Layout';
import DemoTimer from './src/screens/4_DemoTimer';
import TheLight from './src/screens/3_TurnOffTheLight';
import Rich from './src/screens/2_Rich';
import TimePicker from './src/screens/TimePicker';
import DemoDateTimePicker from './src/screens/DemoDateTimePicker';
import Bingo from './src/screens/5_Bingo';
import SomeScene from './src/screens/TestPicker';
import ShowSlide from './src/screens/6_ShowSlide';

AppRegistry.registerComponent(appName, () => ShowSlide);
