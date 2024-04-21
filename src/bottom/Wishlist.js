import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Cartitem from '../common/Cartitem';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeFromCart, removeFromWishlist } from '../redux/Actions/Actions';

const Wishlist = () => {
  const [cartList, SetCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <Cartitem
              isWishList={'swe'}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }} />
          );
        }} />
    </View>
  )
}

export default Wishlist

