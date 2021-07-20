import React from 'react'
import { View } from 'react-native';
import { Text } from '../../atoms';
import { container } from './styles'

const index = ({ product }) => {
  const { id, brand, price } = product;
  return (
    <View style={container}>
      <Text size="title">{id}. {brand}</Text>
      <Text size="subtitle">${price}</Text>
    </View>
  )
}

export default index
