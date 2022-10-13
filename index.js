/**
 * @format
 */
//imports the relevant libraries 
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';       //imports app.json file




AppRegistry.registerComponent(appName, () => App);

//registers the app component
