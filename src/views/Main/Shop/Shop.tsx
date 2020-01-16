import React from 'react';
import {Button, Text, View, StatusBar, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {NavigationProps} from '../index';
import {
  background,
  textColor,
  gray,
  primary,
  Container,
  menuTabMargin,
  menuTabHeight,
  Flex,
  hot,
  dark,
  H2,
  Px14,
  H3,
  success,
} from '../../../Style/Style';

const categories = ['New', 'Clothes', 'Shoes', 'Accessories'];

class WomenTab extends React.Component<NavigationProps> {
  render() {
    return (
      <Container style={{paddingBottom: menuTabHeight}}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={background}
          translucent={false}
        />

        <Flex style={{marginVertical: 8}}>
          <Flex style={styles.padding}>
            <Flex
              style={[
                styles.radius,
                {
                  backgroundColor: hot,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
            >
              <H2>SUMMER SALES</H2>
              <Px14>Up to 50% off</Px14>
            </Flex>
          </Flex>
          {categories.map(res => (
            <Flex key={res} style={styles.padding}>
              <Flex
                style={[
                  styles.radius,
                  {backgroundColor: dark, flexDirection: 'row'},
                ]}
              >
                <Flex style={{justifyContent: 'center', paddingLeft: 23}}>
                  <H3>{res}</H3>
                </Flex>
                <Flex
                  style={{
                    backgroundColor: 'crimson',
                    borderBottomEndRadius: 8,
                    borderTopEndRadius: 8,
                  }}
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  padding: {paddingVertical: 8},
  radius: {borderRadius: 8},
});

class MenTab extends React.Component<NavigationProps> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 150}}>🖕</Text>
      </View>
    );
  }
}

class KidsTab extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Kids!</Text>
      </View>
    );
  }
}

// const HomeStack = createStackNavigator({
//   Home: { screen: WomenTab },
//   Details: { screen: KidsTab },
// });

// const SettingsStack = createStackNavigator({
//   Settings: { screen: MenTab },
//   Details: { screen: KidsTab },
// });

export default createAppContainer(
  createMaterialTopTabNavigator(
    {
      Woman: {screen: WomenTab},
      Men: {screen: MenTab},
      Kids: {screen: KidsTab},
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: textColor,
        inactiveTintColor: gray,
        style: {
          backgroundColor: background,
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: primary,
          borderBottomWidth: 3,
        },
      },
    },
  ),
);
