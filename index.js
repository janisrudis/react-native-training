import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import storybook from './storybook';

const IS_STORYBOOK = true;

if (IS_STORYBOOK) {
  YellowBox.ignoreWarnings([
    'Warning: Async Storage has been extracted from react-native core',
  ]);
}

AppRegistry.registerComponent(appName, () => (IS_STORYBOOK ? storybook : App));
