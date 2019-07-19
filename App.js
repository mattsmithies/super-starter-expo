import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AppRoot from 'src/AppRoot';

type Props = {
  skipLoadingScreen: Function,
};

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('src/assets/images/robot-dev.png'),
      require('src/assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('src/assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

const handleLoadingError = (error) => {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.log(error);
};

const handleFinishLoading = (setLoadingComplete) => {
  setLoadingComplete(true);
};

export default function App(props: Props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }

  return <AppRoot />;
}
