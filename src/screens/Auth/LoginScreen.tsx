import {View, Text} from 'react-native';
import React from 'react';
import Page from '@/src/components/reusables/Page';
import {useSafeNavigation} from '@/src/hooks/useSafeNavigation';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useSafeNavigation();
  return (
    <Page>
      <Text onPress={() => navigation.navigate('OnBoardingScreen')}>
        LoginScreen
      </Text>
    </Page>
  );
};

export default LoginScreen;
