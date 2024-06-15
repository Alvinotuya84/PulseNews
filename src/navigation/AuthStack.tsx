import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '@/src/screens/Auth/SignUpScreen';
import LoginScreen from '@/src/screens/Auth/LoginScreen';
import {NavigationRoutes} from './NavigationRoutes';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import ChooseAuthTypeScreen from '@/src/screens/Auth/ChooseAuthTypeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavigationRoutes.Auth.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.Auth.SignUpScreen}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.Auth.OnBoardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={NavigationRoutes.Auth.ChooseAuthTypeScreen}
        component={ChooseAuthTypeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
