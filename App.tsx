import {store} from '@src/app/store';
import SplashScreen from '@src/components/SplashScreen';
import {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   // set transparent status bar
  //   StatusBar.setBarStyle('dark-content');

  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor('transparent');
  //     StatusBar.setTranslucent(true);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Dave.</Text>

        {visible && (
          <SplashScreen
            onAnimationEnd={() => {
              setVisible(false);
            }}
          />
        )}
      </View>
    </Provider>
  );
};
export default App;
