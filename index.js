import React from 'react'
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import {Catalog} from './src/views/Main/Shop/Catalog/Catalog'
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './src/apollo'
import { name as appName } from './app.json';
import storybook from './storybook';
const IS_STORYBOOK = true;
if (IS_STORYBOOK) {
  YellowBox.ignoreWarnings([
    'Warning: Async Storage has been extracted from react-native core',
  ]);
}
AppRegistry.registerComponent(
  appName,
  () => () => <ApolloProvider client={client}>
    <Catalog/>
  </ApolloProvider>
);