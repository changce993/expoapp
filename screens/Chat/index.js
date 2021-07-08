import React from 'react';
import { Button } from '../../components/atoms';
import { APP_SCREENS } from '../../utils/constants';

const index = ({ navigation }) => {
  return (
    <Button onPress={() => navigation.navigate(APP_SCREENS.home)}>
      Go to Home
    </Button>
  )
}

export default index
