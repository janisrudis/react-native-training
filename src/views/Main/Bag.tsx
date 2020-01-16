import React from 'react';
import { NavigationProps } from "../Login/index";
import { View, Text, Button } from "react-native";

export const Bag: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bag!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};