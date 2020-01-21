import React from 'react';
import {View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {NavigationProps} from '../../index';
import {
  background,
  Container,
  menuTabHeight,
  deviceWidth,
  Px11,
} from '../../../../Style/Style';
import Filter from '../../../../Assets/icons/filter.svg';
import List from '../../../../Assets/icons/list.svg';
import Order from '../../../../Assets/icons/order.svg';
import { CategoryButtons } from './CategoryButtons';
import { ItemCards } from './ItemCards';






const categories = [
  {
    name: 'T-Shirt SPANISH',
    brand: 'Mango',
    price: 9,
    discount: null,
    review: [4, 5, 3],
    image: '#fed766',
  },
  {
    name: 'Blouse',
    brand: 'Dorothy Perkins',
    price: 21,
    discount: 20,
    review: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    image: '#e6e6ea',
  },
  {
    name: 'Shirt',
    brand: 'Mango',
    price: 9,
    discount: null,
    review: [],
    image: '#fe4a49',
  },
  {
    name: 'Light blouse',
    brand: 'Dorothy Perkins',
    price: 21,
    discount: 20,
    review: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    image: '#2ab7ca',
  },
];


export class Catalog extends React.Component<NavigationProps> {
  render() {
    const cardWidth = deviceWidth / 2 - 24;



    return (
      <Container style={{paddingBottom: menuTabHeight}}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={background}
          translucent={false}
        />
        <View>
       
        <CategoryButtons />


          <View style={{flexDirection: 'row', justifyContent: "space-between", marginBottom: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Filter />
              <Px11>Filters</Px11>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Order />
              <Px11>Price: lowest to high</Px11>
            </View>
            <View>
              <List />
            </View>
          </View>
        </View>

      
       <ItemCards/>
      </Container>
    );
  }
}

