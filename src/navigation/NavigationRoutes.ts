import {NavigationProp} from '@react-navigation/native';

export const NavigationRoutes = {
  Auth: {
    Login: 'LoginScreen',
    SignUp: 'SignUpScreen',
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
