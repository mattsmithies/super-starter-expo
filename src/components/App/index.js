import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Container } from './styles';

type Props = {
  children: React.Node,
};

const App = ({ children }: Props): React.Node => (
  <Container>
    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    {children}
  </Container>
);

export default App;
