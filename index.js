/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from './src/routes/HelloWorld';
import Layout from './src/routes/Layout';
import DemoTimer from './src/routes/DemoTimer';
import TheLight from './src/routes/TurnOffTheLight';
import Rich from './src/routes/Rich';
import TimePicker from './src/routes/TimePicker';
import DemoDateTimePicker from './src/routes/DemoDateTimePicker';
import Bingo from './src/routes/Bingo';

AppRegistry.registerComponent(appName, () => TimePicker);
