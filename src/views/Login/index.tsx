import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import SignUp from './SignUp';
import { background } from '../../Style/Style';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Back from "../../Assets/symbols/back.svg"
import { white } from 'color-name';


export interface NavigationProps {
  navigation?: NavigationStackProp;
}



const LoginNavigation = createStackNavigator(
  {
    Login: Login,
    Forget: ForgotPassword,
    SignUp: SignUp,
  },
  {
// import { Login } from './Login';
     initialRouteName: 'SignUp',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: background,
        height: 44,
      },
      headerTitleStyle: {
        color: background,
        fontSize: 14,
      },
      
    }
  },
);

export default createAppContainer(LoginNavigation);
