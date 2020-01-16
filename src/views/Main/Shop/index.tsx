import React from 'react';
import { NavigationProps } from "../../Login/index";
import { View, Text, Button, StatusBar } from "react-native";
import ShopTab from './Shop';
import { background } from '../../../Style/Style';


export const Shop: React.FC<NavigationProps> = ({navigation}) => {
  return (
      
     
    <ShopTab/>
      
  );
};