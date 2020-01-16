import React from 'react';
import {NavigationProps} from '../Login/index';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {Container, background, Flex, BackgroundImage, H1, primary, white, menuTabMargin} from '../../Style/Style';
import SafeAreaView from 'react-native-safe-area-view';
import {StatusBar} from 'react-native';
// import image from ""

export const Home: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <Flex style={{flex: 1, paddingBottom: menuTabMargin}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Flex>
        <Flex style={{justifyContent: 'flex-end', alignItems: "flex-end"}}>
        <BackgroundImage
        style={{top: 0}}
        source={require('../../Assets/images/main/newCollection.png')}
      />
      <H1 style={{color: white, marginRight: 18, marginBottom: 27}}>New collection</H1>
    
        </Flex>
        <Flex style={{backgroundColor: 'yellow', flexDirection: 'row'}}>
          <Flex>
            <Flex style={{backgroundColor: background, justifyContent: "center"}}>
            <H1 style={{color: primary, padding: 15}}>Summer sale</H1>
            </Flex>
            <Flex style={{justifyContent: 'center'}}>
            <BackgroundImage
        style={{top: 0}}
        source={require('../../Assets/images/main/black.png')}
      />
      <H1 style={{color: white, padding: 13}}>Black</H1>
            </Flex>
          </Flex>
          <Flex >
          <BackgroundImage
        style={{top: 0}}
        source={require('../../Assets/images/main/mensHats.png')}
      />
      <Flex style={{justifyContent: 'center'}}>
      <H1 style={{color: white, paddingLeft: 15, paddingRight: 30}}>Men's hats</H1>
      
      </Flex>
      <Flex/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

