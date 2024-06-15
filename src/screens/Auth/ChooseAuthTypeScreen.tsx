import {View, Text} from 'react-native';
import React from 'react';
import Page from '@/src/components/reusables/Page';
import ImageWrapper from '@/src/components/reusables/ImageWrapper';
import {sHeight, sWidth} from '@/src/constants/dimensions.constants';
import ThemedText from '@/src/components/reusables/ThemedText';
import {useTheme} from '@/src/hooks/useTheme.hook';
import Box from '@/src/components/reusables/Box';
import ThemedButton from '@/src/components/reusables/ThemedButton';

type Props = {};

const ChooseAuthTypeScreen = (props: Props) => {
  const theme = useTheme();
  return (
    <Page align="center" justify="space-between" px={20}>
      <ImageWrapper
        source={require('@/assets/auth/choose_auth_type.png')}
        height={sHeight * 0.5}
        width={sWidth * 0.8}
      />

      <ThemedText color={theme.primary} size={'xxl'}>
        Stay Informed with Pulse News
      </ThemedText>
      <ThemedText align="center" color={theme.text} size={'md'}>
        Discover the latest news personalized to your interests and preferences
      </ThemedText>

      <Box
        width={'100%'}
        py={20}
        gap={10}
        justify="space-evenly"
        direction="row">
        <ThemedButton width={sWidth * 0.4} type="primary" label={'Login'} />

        <ThemedButton
          width={sWidth * 0.4}
          type="primary-outlined"
          label={'Register'}
        />
      </Box>
    </Page>
  );
};

export default ChooseAuthTypeScreen;
