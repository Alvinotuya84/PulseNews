import SettingsStore from '../app/theme';
import {useColorScheme} from 'react-native';
import {Colors} from '../configs/colors.configs';
export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: {light?: string; dark?: string},
) {
  let themeToSet: 'dark' | 'light' = 'light';

  const {theme: userTheme} = SettingsStore();

  const systemTheme = useColorScheme() ?? 'light';

  if (userTheme === 'system') {
    themeToSet = systemTheme;
  } else {
    themeToSet = userTheme;
  }

  if (!props) {
    return Colors[themeToSet][colorName];
  }
  const colorFromProps = props[themeToSet];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[themeToSet][colorName];
  }
}

export function useTheme() {
  let themeToSet: 'dark' | 'light' = 'light';

  const {theme: userTheme} = SettingsStore();

  const systemTheme = useColorScheme() ?? 'light';

  if (userTheme === 'system') {
    themeToSet = systemTheme;
  } else {
    themeToSet = userTheme;
  }

  return themeToSet === 'dark' ? Colors.dark : Colors.light;
}

export function useThemeMode() {
  const {theme: userTheme} = SettingsStore();

  const systemTheme = useColorScheme() ?? 'light';

  if (userTheme === 'system') {
    return systemTheme;
  } else {
    return userTheme;
  }
}
