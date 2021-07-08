import React from 'react';
import { Text } from 'react-native';
import { colors, fontSize } from '../../../theme';

const index = ({ children, color, size }) => {

  const styles = {
    color: colors[color] || colors.black,
    fontSize: fontSize[size] || fontSize.text,
  };

  return (
    <Text style={styles}>
      {children}
    </Text>
  )
}

export default index
