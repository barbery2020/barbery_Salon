
import Main from './src/screen/chat/Main';
import Chat from './src/screen/chat/Chat';
import {createAppContainer} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'


const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});


export default createAppContainer(navigator)
