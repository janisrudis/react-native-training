import React, { Component } from 'react'
import { Container, H1, Px14 } from '../../Style/Style';
import { View, Alert } from 'react-native';
import { LoginInput } from '../../Components/LoginInput';
import { LargeButton } from '../../Components/LargeButton';
import { NavigationStackProp } from 'react-navigation-stack';



export default class ForgotPassword extends Component<{
  navigation?: NavigationStackProp;
}> {
  state = {
    password: '',
    name: '',
    email: '',
  };

  proceedLogin = () => {
    if (this.state.password.trim().length < 8) {
      Alert.alert('Alert', 'Password must be minimum 8 characters');
      return;
    }
    //Do this if correct
  };

  render() {
    const {email} =this.state
    return (
      <Container>
      <View>
      <View style={{height: 18}} />
      <H1 >Forgot password</H1>
        <View style={{height: 70}} />
        <Px14 style={{marginBottom: 16}}>Please, enter your email address. You will receive a link to create a new password via email.</Px14>
        <LoginInput
        inputActive={email.length > 0}
        textContentType= "emailAddress"

          placeholder="Email"
          onChangeText={text => this.setState({email: text})}
        />

        <View style={{height: 20}} />
        <LargeButton text="Send" onPress={() => this.proceedLogin()} />
        </View>
      </Container>
    );
  }
}