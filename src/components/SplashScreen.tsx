import {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
  onAnimationEnd: () => void;
};

const SplashScreen = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash_manifest.json'),

    logo: require('../../config-assets/logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      const {height} = Dimensions.get('window');

      Animated.stagger(250, [
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: -50,
        }),
        Animated.spring(translateY, {
          useNativeDriver: true,
          toValue: height,
        }),
      ]).start();

      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 150,
        delay: 350,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View
      {...container}
      style={[container.style, {opacity, backgroundColor: 'red'}]}>
      <Animated.Image
        {...logo}
        style={[logo.style, {transform: [{translateY}]}]}
      />
    </Animated.View>
  );
};
export default SplashScreen;
