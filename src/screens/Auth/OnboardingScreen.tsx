import Box from '@/components/reusables/Box';
import Page from '@/components/reusables/Page';
import ThemedButton from '@/components/reusables/ThemedButton';
import ThemedText from '@/components/reusables/ThemedText';
import {sHeight, sWidth} from '@/constants/dimensions.constant';
import {useTheme} from '@/hooks/useTheme.hook';
import userStore from '@/stores/user.store';
import {animateLayout} from '@/utils/animation.utils';
import {AVPlaybackSource} from 'expo-av';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import React, {useState} from 'react';
import {ImageSourcePropType, ScrollView} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const onboardingSlidesData = [
  {
    title: 'Expand Your Circle by connecting  with people around the world',
    img: require('@/assets/gifs/S2_gif.gif'),
    video: require('@/assets/videos/S2_video.mp4'),
    desc: 'Swipe, match, and build global friendships with  OnlyHugs. Connect with people worldwide and broaden your horizons.',
  },
  {
    title: 'Chat with strangers and make the your partner',
    img: require('@/assets/gifs/S3_gif.gif'),
    video: require('@/assets/videos/S3_video.mp4'),
    desc: 'Break the ice and enjoy spontaneous chats with interesting strangers. Engage in lively conversations, discover common interests, and pave the way for meaningful connections.',
  },
  {
    title: 'Embark on a Personalized Journey to Discover Your Ideal Connection',
    img: require('@/assets/gifs/S4_gif.gif'),
    video: require('@/assets/videos/S4_video.mp4'),
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
                userStore.setState({onboarded: true});
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
                  video={item.video}
                  title={item.title}
                  content={item.desc}
                  key={index}
                />
              );
            })}
            <SignUpOptions />
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
  video,
  isInView,
}: {
  title: string;
  content: string;
  img: ImageSourcePropType;
  video: AVPlaybackSource;
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
        {/* {
					<>
						Platform.OS === "ios" ? (
						<Image
							source={img}
							resizeMode="cover"
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
						) : (
						<Video
							source={video}
							shouldPlay={false}
							isLooping
							style={{
								width: "100%",
								height: "100%",
							}}
						/>
						)
					</>
				} */}
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

export function SignUpOptions() {
  const theme = useTheme();
  return (
    <Box align="center" justify="center" gap={40} width={sWidth} px={20}>
      <Image
        source={require('@/assets/utils/app/logo-with-title.png')}
        contentFit="contain"
        style={{
          width: 200,
          height: 150,
        }}
      />
      <ThemedText>Let’s dive into your account</ThemedText>

      <ThemedButton
        block
        label={'Continue with email'}
        type="primary-outlined"
        onPress={() => {
          router.push({
            pathname: '/sign-up',
            params: {
              signUpMethod: 'email',
            },
          });
        }}
      />
      <ThemedButton
        block
        label={'Continue with phone'}
        onPress={() => {
          router.push({
            pathname: '/sign-up',
            params: {
              signUpMethod: 'phone',
            },
          });
        }}
      />
      <Box block direction="row" align="center" gap={20} px={10}>
        <Box flex={1} height={1} color={theme.surface} />
        <ThemedText size={'sm'}>or sign up with</ThemedText>
        <Box flex={1} height={1} color={theme.surface} />
      </Box>
      <Box direction="row" align="center" justify="space-between" gap={20}>
        <ThemedButton type="surface" pa={15} radius={40}>
          <Image
            source={require('@/assets/utils/auth/facebook.png')}
            contentFit="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </ThemedButton>
        <ThemedButton type="surface" pa={15} radius={40}>
          <Image
            source={require('@/assets/utils/auth/google.png')}
            contentFit="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </ThemedButton>
        <ThemedButton type="surface" pa={15} radius={40}>
          <Image
            source={require('@/assets/utils/auth/x-black.png')}
            contentFit="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </ThemedButton>
      </Box>
      <ThemedButton
        type="text"
        onPress={() => {
          router.push('/sign-in-options');
        }}>
        <Box direction="row" align="center" gap={10}>
          <ThemedText size={'sm'}>Already have an account?</ThemedText>
          <ThemedText size={'sm'} fontWeight="bold" color={theme.primary}>
            Sign in
          </ThemedText>
        </Box>
      </ThemedButton>
    </Box>
  );
}
