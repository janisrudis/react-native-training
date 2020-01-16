import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Header } from './Header';

export const NavigationWrapper: React.FC = ({children}) => (
  <View style={style.container}>
    <Header />
    {children}
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
