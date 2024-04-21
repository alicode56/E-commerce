import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Cartitem from '../common/Cartitem';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromCart } from '../redux/Actions/Actions';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const { usePatchesInScope } = require("immer/dist/internal")

const Cart = () => {
  const [cartList, SetCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation= useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (<FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <Cartitem
              onAddWishlist={(x) => {
                dispatch(addToWishlist(x))
              }}
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index))
              }} />
          );
        }} />) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Items Added in Cart</Text>
        </View>

      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton bgcolor={"green"} textcolor={'#fff'} title={'checkout'} 
          onPress={()=>{
            navigation.navigate('Checkout')
          }}/>
        </View>
      ) : null}


    </View>
  )
}

export default Cart



// original code are up

// but feww due to here chtgpt code dwn








// import React from 'react';
// import { View, FlatList } from 'react-native';
// import Cartitem from '../common/Cartitem';
// import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch

// import { removeFromCart } from '../redux/Actions/Actions';

// const Cart = () => {
//   const cartData = useSelector(state => state.Reducers);
//   const dispatch = useDispatch(); // Initialize useDispatch

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={cartData}
//         renderItem={({ item, index }) => ( // Return JSX here
//           <Cartitem
//             item={item}
//             onRemoveItem={() => {
//               dispatch(removeFromCart(index));
//             }}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// }

// export default Cart;
