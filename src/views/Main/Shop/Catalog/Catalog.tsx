import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationProps} from '../../index';
import {
  background,
  Container,
  menuTabHeight,
  Flex,
  hot,
  dark,
  H2,
  Px14,
  H3,
  deviceWidth,
  textColor,
  Px11,
  Px16,
  gray,
  white,
} from '../../../../Style/Style';
import LinearGradient from 'react-native-linear-gradient';
import Heart from '../../../../Assets/icons/heart.svg';
import Filter from '../../../../Assets/icons/filter.svg';
import List from '../../../../Assets/icons/list.svg';
import Order from '../../../../Assets/icons/order.svg';

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

const categoriesButtons = [
  'T-shirt',
  'Crop tops',
  'Blouses',
  'Pants',
  'Jeans',
  'Shorts',
  'Skirts',
];

export class Catalog extends React.Component<NavigationProps> {
  render() {
    const cardWidth = deviceWidth / 2 - 24;
    const cardHeight = cardWidth * 1.135;

    const average = (array: number[]) =>
      array.reduce((a, b) => a + b) / array.length;

    const saturate = (string: string) =>
      `#${string[1]}${string[2]}${string[3]}${string[4]}13`;

    return (
      <Container style={{paddingBottom: menuTabHeight}}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={background}
          translucent={false}
        />
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{backgroundColor: background}}
          >
            {categoriesButtons.map(res => (
              <View key={res}>
                <Px14
                  style={{
                    backgroundColor: white,
                    color: dark,
                    borderRadius: 29,
                    marginRight: 7,
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                  }}
                >
                  {res}
                </Px14>
              </View>
            ))}
          </ScrollView>
          <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
            <View style={{flexDirection: 'row'}}>
              <Filter />
              <Px11>Filters</Px11>
            </View>
            <View style={{flexDirection: 'row'}}>
              <List />
              <Px11>Price: lowest to high</Px11>
            </View>
            <View>
              <List />
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingVertical: 16,
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            {categories.map(item => (
              <View
                key={item.name}
                style={{width: cardWidth, marginBottom: 26}}
              >
                <LinearGradient
                  colors={[saturate(item.image), item.image]}
                  style={[styles.image, {height: cardHeight}]}
                >
                  {item.discount === null ? null : (
                    <Text
                      style={{
                        backgroundColor: hot,
                        color: textColor,
                        position: 'absolute',
                        padding: 5,
                        borderRadius: 29,
                        fontSize: 14,
                        top: 7,
                        left: 7,
                      }}
                    >
                      -{item.discount}%
                    </Text>
                  )}
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: dark,
                      borderRadius: 50,
                      height: 36,
                      width: 36,
                      justifyContent: 'center',
                      alignItems: 'center',
                      bottom: -18,
                      right: 0,
                    }}
                  >
                    <Heart />
                  </View>
                </LinearGradient>

                <View>
                  <Text style={{color: gray, marginVertical: 7}}>
                    {item.review.length > 0
                      ? [...Array(average(item.review))].map(res => '⭐')
                      : null}
                    ({item.review.length})
                  </Text>
                </View>
                <Px11 style={{color: gray}}>{item.brand}</Px11>

                <Px16 style={{color: textColor, marginBottom: 3}}>
                  {item.name}
                </Px16>

                {item.discount === null ? (
                  <Px14 style={{color: textColor}}>{item.price}$</Px14>
                ) : (
                  <Px14>
                    <Px14
                      style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid',
                        color: gray,
                      }}
                    >
                      {item.price}$
                    </Px14>

                    <Px14 style={{color: hot, marginHorizontal: 4}}>
                      {item.price * (1 - item.discount / 100)}$
                    </Px14>
                  </Px14>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </Container>
    );
  }
}
//
const styles = StyleSheet.create({
  padding: {paddingVertical: 8},
  image: {borderRadius: 8},
});
