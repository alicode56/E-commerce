import { View, Text, Image, TouchableOpacity, onAddWishlist } from 'react-native'
import React, { useState } from 'react';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import { useSelector, useDispatch } from "react-redux";




const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);


  const data = useSelector (state => state);
  // console.log(data)
  return (
    <View style={{ flex: 1,}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View style={{
        width: "100%",
        height: 60,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={
          {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image source={require('../Images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#000' : 'red'
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={
          {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image source={require('../Images/search.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? '#000' : 'red' //BeBe
            }} />
        </TouchableOpacity>


        <View style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <TouchableOpacity style={{
            width: 43,
            height: 43,
            backgroundColor: selectedTab == 2 ? 'green' : '#000',
            borderRadius: 22,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image source={require('../Images/bag.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: '#fff'
              }} />

            <View style={{
              width: 20, height: 20,
              backgroundColor: 'red', borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 5, right: 5
            }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>
              {data.Reducers.length}
              </Text>

            </View>
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={
          {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image source={require('../Images/wishlist.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? '#000' : 'red'
            }} />

          <View style={{
            width: 20, height: 20,
            backgroundColor: 'red', borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 15, right: 20
          }}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
            {data.Reducers2.length}
            </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity style={
          {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image source={require('../Images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? '#000' : 'red'
            }} />
        </TouchableOpacity>







      </View>
    </View>
  )
}

export default Home