import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '@/src/screens/Auth/SignUpScreen';
import LoginScreen from '@/src/screens/Auth/LoginScreen';
import {NavigationRoutes} from './NavigationRoutes';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoutes.Auth.Login}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.Auth.SignUp}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
