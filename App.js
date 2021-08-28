import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import NotifcationScreen from './Screens/Notifcation';
import ProfileScreen from './Screens/Profile';
import SingupScreen from './Screens/Singup';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initailRouteName='Home' >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='Login' component={LoginScreen}  options={{headerShown:false}}/>
        <Stack.Screen name='Notifcation' component={NotifcationScreen} options={{headerShown:false}} />
        <Stack.Screen name='Singup' component={SingupScreen} options={{headerShown:false}} /> 
        <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
