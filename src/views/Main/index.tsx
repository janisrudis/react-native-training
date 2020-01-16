import React from 'react';
import {primary, background, menuTabRounding, menuTabHeight} from '../../Style/Style';
import {createAppContainer} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeIcon from '../../Assets/icons/menu/home.svg';
import HomeActiveIcon from '../../Assets/icons/menu/homeActive.svg';
import CartIcon from '../../Assets/icons/menu/cart.svg';
import CartActiveIcon from '../../Assets/icons/menu/cartActive.svg';
import BagIcon from '../../Assets/icons/menu/bag.svg';
import BagActiveIcon from '../../Assets/icons/menu/bagActive.svg';
import FavoriteIcon from '../../Assets/icons/menu/favorite.svg';
import FavoriteActiveIcon from '../../Assets/icons/menu/favoriteActive.svg';
import ProfileIcon from '../../Assets/icons/menu/profile.svg';
import ProfileActiveIcon from '../../Assets/icons/menu/profileActive.svg';
import {Home} from './Home';
import {Bag} from './Bag';
import {Favorites} from './Favorites';
import {Profile} from './Profile';
import {Shop} from './Shop';

export interface NavigationProps {
  navigation?: NavigationStackProp;
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          tintColor === primary ? <HomeActiveIcon /> : <HomeIcon />,
      },
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          tintColor === primary ? <CartActiveIcon /> : <CartIcon />,
      },
    },
    Bag: {
      screen: Bag,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          tintColor === primary ? <BagActiveIcon /> : <BagIcon />,
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          tintColor === primary ? <FavoriteActiveIcon /> : <FavoriteIcon />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          tintColor === primary ? <ProfileActiveIcon /> : <ProfileIcon />,
      },
    },
  },
  {
    initialRouteName: 'Shop',
    tabBarOptions: {
      activeTintColor: primary,
      style: {
        height: menuTabHeight,
        backgroundColor: background,
        borderTopRightRadius: menuTabRounding,
        borderTopLeftRadius: menuTabRounding,
        position: 'absolute',
        borderTopWidth: 0,
      },
      labelStyle: {fontSize: 10},
      tabStyle: {
        borderRadius: 30,
        width: 30,
        marginHorizontal: 15,
        marginVertical: 5,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
