import React from 'react';
import { Text } from 'react-native';

type Props = {
  style: Object,
};

export function MonoText(props: Props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
