import 'react-native-gesture-handler';
import {store} from '@/src/app/store';
import SplashScreen from '@/src/components/SplashScreen';
import Navigation from '@/src/navigation';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    margin: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
  },
});

const App = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />

          {/* {splashScreenVisible && (
            <SplashScreen
              onAnimationEnd={() => {
                setSplashScreenVisible(false);
              }}
            />
          )} */}
        </View>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
