import {NavigationProp} from '@react-navigation/native';

export const NavigationRoutes = {
  Auth: {
    LoginScreen: 'LoginScreen',
    SignUpScreen: 'SignUpScreen',
    OnBoardingScreen: 'OnBoardingScreen',
    ChooseAuthTypeScreen: 'ChooseAuthTypeScreen',
  },
  Home: {
    Dashboard: 'Dashboard',
    Profile: 'Profile',
  },
};
type AuthStackParamList = {
  [K in keyof typeof NavigationRoutes.Auth]: undefined;
};

type HomeStackParamList = {
  [K in keyof typeof NavigationRoutes.Home]: undefined;
};

export type RootStackParamList = AuthStackParamList & HomeStackParamList;
export type StackNavigationTypes = NavigationProp<RootStackParamList>;
