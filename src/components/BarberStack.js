import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screen/BarberSide/HomeScreen';
import ServicesListScreen from '../screen/BarberSide/ServicesListScreen';
import ServicesEditScreen from '../screen/BarberSide/ServicesEditScreen';
import ServiceDetailsScreen from '../screen/BarberSide/ServiceDetailsScreen';
import ViewImageScreen from '../screen/BarberSide/ViewImageScreen';
import PackageDetailsScreen from '../screen/BarberSide/PackageDetailsScreen';
import PackagesListScreen from '../screen/BarberSide/PackagesListScreen';
import PackagesEditScreen from '../screen/BarberSide/PackagesEditScreen';
import ProfileScreen from '../screen/BarberSide/ProfileScreen';
import SpecialistScreen from '../screen/BarberSide/SpecialistScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class BarberStack extends Component {
  createServiceStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Services List" component={ServicesListScreen} />
      <Stack.Screen name="Service Details" component={ServiceDetailsScreen} />
      <Stack.Screen name="Add New Service" component={ServicesEditScreen} />
      <Stack.Screen
        name="Image View"
        component={ViewImageScreen}
        options={{
          title: '',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createPackageStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Packages List" component={PackagesListScreen} />
      <Stack.Screen name="Package Details" component={PackageDetailsScreen} />
      <Stack.Screen name="Add New Package" component={PackagesEditScreen} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Services" children={this.createServiceStack} />
          <Drawer.Screen name="Packages" children={this.createPackageStack} />
          <Drawer.Screen name="Specialists" component={SpecialistScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
