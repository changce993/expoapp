import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../components/atoms';
import { Product } from '../../components/molecules';
import { APP_SCREENS } from '../../utils/constants';

const index = ({ navigation }) => {
  const { product } = useSelector(state => state.products);
  return (
    <>
      <Product product={product}/>
      <Button onPress={() => navigation.navigate(APP_SCREENS.home)}>
        Back to home
      </Button>
    </>
  )
}

export default index
