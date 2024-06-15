import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../navigation/NavigationRoutes';

export function useSafeNavigation() {
  const navigation = useNavigation()<>;

  function navigate(screenName: keyof typeof NavigationRoutes) {
    if (NavigationRoutes[screenName]) {
      navigation.navigate(NavigationRoutes[screenName]);
    } else {
      console.warn(`The screen "${screenName}" does not exist.`);
    }
  }

  return {navigate};
}
