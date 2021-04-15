import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import StartScreen from '../screens/StartScreen';
import TodoApp from '../components/TodoApp';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes() {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="TodoApp" component={TodoApp} />
    </Drawer.Navigator>
  );
}


export default function Navigation() {

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="StartScreen" component={StartScreen} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Home" component={DrawerRoutes} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};