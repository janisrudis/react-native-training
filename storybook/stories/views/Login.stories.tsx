import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Navigation from '../../../src/views/Login'
import SignUp from '../../../src/views/Login/SignUp';
import Login from '../../../src/views/Login/Login';
import ForgotPassword from '../../../src/views/Login/ForgotPassword';


storiesOf('Login', module)
.add('Connected Screens', () => <Navigation />)
  .add('Log in', () => <Login />)
  .add('Forget Password', () => <ForgotPassword />)
  .add('Sign up', () => <SignUp />)
