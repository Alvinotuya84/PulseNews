import Box from '@/src/components/reusables/Box';
import Page from '@/src/components/reusables/Page';
import ThemedButton from '@/src/components/reusables/ThemedButton';
import ThemedText from '@/src/components/reusables/ThemedText';
import {sHeight, sWidth} from '@/src/constants/dimensions.constants';
import {useTheme} from '@/src/hooks/useTheme.hook';
import {animateLayout} from '@/src/utils/animation.utils';

import React, {useState} from 'react';
import {ImageSourcePropType, ScrollView} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import FastImage, {Source} from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const onboardingSlidesData = [
  {
    title: 'Expand Your Circle by connecting  with people around the world',
    img: require('@/assets/news_one.png'),
    desc: 'Swipe, match, and build global friendships with  OnlyHugs. Connect with people worldwide and broaden your horizons.',
  },
  {
    title: 'Chat with strangers and make the your partner',
    img: require('@/assets/news_two.png'),
    desc: 'Break the ice and enjoy spontaneous chats with interesting strangers. Engage in lively conversations, discover common interests, and pave the way for meaningful connections.',
  },
  {
    title: 'Embark on a Personalized Journey to Discover Your Ideal Connection',
    img: require('@/assets/news_three.png'),
    desc: 'Ready to take it to the next level? Swipe, match, and turn intriguing conversations into lasting connections. OnlyHugs is here to help you find your ideal partner and embark on a journey of shared experiences.',
  },
];

function Onboard() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const theme = useTheme();

  const insets = useSafeAreaInsets();

  const scrollRef = React.useRef<ScrollView>(null);

  return (
    <>
      <Page
        header={{
          rightComponent: (
            <>
              {currentSlideIndex <= onboardingSlidesData.length - 1 && (
                <ThemedButton
                  label={'Skip'}
                  onPress={() => {
                    scrollRef.current?.scrollToEnd({animated: true});
                    setCurrentSlideIndex(onboardingSlidesData.length + 1);
                  }}
                  type="text"
                  size="sm"
                  labelProps={{
                    color: theme.primary,
                  }}
                />
              )}
            </>
          ),
        }}
        align="center"
        px={0}>
        <Box height={sHeight - insets.bottom - 180}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            onScroll={event => {
              const slideIndex = Math.round(
                event.nativeEvent.contentOffset.x / sWidth,
              );
              animateLayout();
              setCurrentSlideIndex(slideIndex);

              if (slideIndex === onboardingSlidesData.length) {
                // userStore.setState({onboarded: true});
              }
            }}
            snapToAlignment="center"
            decelerationRate={'fast'}
            style={{
              width: sWidth,
            }}>
            {onboardingSlidesData.map((item, index) => {
              return (
                <OnboardingScreen
                  img={item.img}
                  title={item.title}
                  content={item.desc}
                  key={index}
                />
              );
            })}
          </ScrollView>
        </Box>

        <Box
          direction="row"
          gap={10}
          align="center"
          height={currentSlideIndex <= onboardingSlidesData.length - 1 ? 20 : 0}
          overflow="hidden">
          {onboardingSlidesData.map((item, index) => {
            return (
              <Box
                key={index}
                width={currentSlideIndex === index ? 20 : 10}
                height={10}
                radius={10}
                color={
                  currentSlideIndex === index ? theme.primary : theme.surface
                }
                style={{
                  alignSelf: 'center',
                }}
              />
            );
          })}
        </Box>
        <Box direction="row" align="center" gap={20} py={20}>
          <ThemedText
            size={'sm'}
            style={{
              opacity: 0.5,
            }}>
            Terms of Use
          </ThemedText>
          <ThemedButton type="text">
            <Box direction="row" gap={5} align="center">
              <CountryFlag
                size={18}
                style={{
                  borderRadius: 10,
                }}
                isoCode="US"
              />
              <Box px={15} py={2} color={theme.surface} radius={20}>
                <ThemedText size={'sm'}>EN</ThemedText>
              </Box>
            </Box>
          </ThemedButton>
          <ThemedText
            size={'sm'}
            style={{
              opacity: 0.5,
            }}>
            Privacy Policy
          </ThemedText>
        </Box>
      </Page>
    </>
  );
}

export default Onboard;

const OnboardingScreen = ({
  title,
  content,
  img,
  isInView,
}: {
  title: string;
  content: string;
  img: Source;
  isInView?: boolean;
}) => {
  const theme = useTheme();

  return (
    <Box align="center" justify="flex-start" gap={40} width={sWidth} px={20}>
      <Box
        width={'100%'}
        height={sHeight / 2}
        align="center"
        justify="center"
        color={theme.surface}
        radius={20}>
        <FastImage
          source={img}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Box align="center" justify="center" gap={10}>
        <ThemedText
          size={22}
          color={theme.primary}
          align="center"
          fontWeight="bold">
          {title}
        </ThemedText>
        <ThemedText fontWeight="regular" align="center">
          {content}
        </ThemedText>
      </Box>
    </Box>
  );
};
