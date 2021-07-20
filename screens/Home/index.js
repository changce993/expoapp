import React from 'react';
import { Button } from '../../components/atoms';
import { APP_SCREENS } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../store/actions/products';
import { FlatList } from 'react-native';

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  
  const handleSetProduct = product => {
    navigation.navigate(APP_SCREENS.chat);
    dispatch(setProduct(product));
  };

  return (
    <FlatList
      data={products}
      keyExtractor={product => product.id}
      renderItem={({item}) => (
        <Button
          marginVertical={8}
          onPress={() => handleSetProduct(item)}
        >
          {`Quiero la ${item.brand}`}
        </Button>
      )}
    />
  )
}

export default index
