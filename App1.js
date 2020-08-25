

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat:ChatScreen
  },
  {
    headerMode:"none"

  }
);

export default createAppContainer(AppNavigator);