import React from 'react';
import { TouchableHighlight } from 'react-native';
import { colors, rounded } from '../../../theme';
import Text from '../Text';

const index = ({ onPress, marginVertical, children }) => {

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: rounded.sm,
    marginVertical: marginVertical || 0
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles}
    >
      <Text color="white">{children}</Text>
    </TouchableHighlight>
  )
};

export default index
