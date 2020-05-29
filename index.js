/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from './src/screens/HelloWorld';
import Layout from './src/screens/Layout';
import DemoTimer from './src/screens/DemoTimer';
import TheLight from './src/screens/TurnOffTheLight';
import Rich from './src/screens/Rich';
import TimePicker from './src/screens/TimePicker';
import DemoDateTimePicker from './src/screens/DemoDateTimePicker';
import Bingo from './src/screens/Bingo';
import SomeScene from './src/screens/TestPicker';
import PickerAndroid from './src/screens/PickerForAndroid';
import ShowSlide from './src/screens/ShowSlide';

AppRegistry.registerComponent(appName, () => ShowSlide);
