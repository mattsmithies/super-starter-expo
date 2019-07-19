import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from 'src/constants/Colors';

type Props = {
  name: String,
  focused: Boolean,
};

export default function TabBarIcon(props: Props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
