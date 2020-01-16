import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Back  from '../Assets/symbols/back.svg';

export const Header: React.FC = () => (
  <View style={style.headerContainer}>
    <Back/>
  </View>
);

const style = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 44,
    justifyContent: "center"
  },
headerText: {

}
});
