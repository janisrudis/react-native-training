import React, {Component} from 'react';
import {Container, H1} from '../../Style/Style';
import {Header} from '../../Components/Header';
// import LoginInput from '../../Components/LoginInput';
import {Alert, View} from 'react-native';
import {LoginInput} from '../../Components/LoginInput';
import {NavigationStackProp} from 'react-navigation-stack';
import {ForgetButton} from '../../Components/ForgetButton';
import {LargeButton} from '../../Components/LargeButton';
import { SocialButtons } from '../../Components/SocialButtons';

export default class SignUp extends Component<{
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
    const {navigation} = this.props;
    const {name, email, password} =this.state
    return (
      <Container>
      <View>
      <View style={{height: 18}} />
        <H1>Sign up</H1>
        <View style={{height: 70}} />
        <LoginInput
        inputActive={name.length > 0}
          placeholder="Name"
          onChangeText={text => this.setState({name: text})}
          textContentType= "name"

        />
        <LoginInput
        inputActive={email.length > 0}
        textContentType= "emailAddress"

          placeholder="Email"
          onChangeText={text => this.setState({email: text})}
        />
        <LoginInput
        inputActive={password.length > 0}
          placeholder="Password"
          onChangeText={text => this.setState({password: text})}
          textContentType= "password"
        />

        <ForgetButton
          text="Already have an account?"
          onPress={() => {
            navigation.navigate('Login', {
              // userEmail: inputEmail,
            });
          }}
        >
        Already have an account?
        </ForgetButton>
        <View style={{height: 20}} />
        <LargeButton text="sign up" onPress={() => this.proceedLogin()} />
        </View>
        <SocialButtons text="Or sign up with social account"/>
      </Container>
    );
  }
}
