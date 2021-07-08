import React from 'react';
import { Button } from '../../components/atoms';
import { APP_SCREENS } from '../../utils/constants';

const index = ({ navigation }) => {
  return (
    <Button onPress={() => navigation.navigate(APP_SCREENS.chat)}>
      Go to chat
    </Button>
  )
}

export default index
