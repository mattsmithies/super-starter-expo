import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components';
import Theme from 'src/styles/Theme';
import AppNavigator from 'src/navigation/AppNavigator';
import { store, persistor } from 'src/store';
import { runSagaMiddleware } from 'src/store/middleware/Saga';
import AppContainer from 'src/components/App';

class AppRoot extends React.PureComponent<{}> {
  render(): React.Node {
    return (
      <ThemeProvider theme={Theme}>
        <AppContainer>
          <Provider store={store}>
            <PersistGate loading={null} onBeforeLift={runSagaMiddleware} persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </Provider>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default AppRoot;
