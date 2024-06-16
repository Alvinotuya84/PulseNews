import {View, Text} from 'react-native';
import React from 'react';
import Page from '@/src/components/reusables/Page';
import ImageWrapper from '@/src/components/reusables/ImageWrapper';
import Box from '@/src/components/reusables/Box';
import ThemedText from '@/src/components/reusables/ThemedText';
import {useTheme} from '@/src/hooks/useTheme.hook';
import {scale} from '@/src/constants/scaler.constants';
import AuthStepIndicator from '@/src/components/reusables/AuthStepIndicator';

type Props = {};

const SignUpScreen = (props: Props) => {
  const theme = useTheme();
  return (
    <Page px={scale(20)}>
      <ImageWrapper
        source={require('@/assets/logo-light.png')}
        height={200}
        width={200}
        resizeMode="contain"
      />
      <Box align="center">
        <ThemedText
          weight="bold"
          color={theme.primary}
          fontWeight="bold"
          size={'xxl'}>
          Create Account
        </ThemedText>

        <ThemedText>
          Welcome back stay informed with personalized news tailored just for
          you
        </ThemedText>

        <AuthStepIndicator currentStep={3} />
      </Box>
    </Page>
  );
};

export default SignUpScreen;
