import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { Products } from '../common/Product'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MyProductitem from '../common/MyProductitem'
import { addItemToCart, addToWishlist,} from '../redux/Actions/Actions'
import {  useDispatch } from "react-redux";


// import { useDispatch } from 'react-redux/es/exports'
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeanstList, setJeanstList] = useState([]);
  const [shoestList, setTShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [SlipperList, setSlipperList] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  useEffect(() => {
    console.log(Products);
    let tempCategory = []
    Products.category.map(item => {
      tempCategory.push(item)

    })
    setCategoryList(tempCategory)
    setTshirtList(Products.category[0].data);
    setJeanstList(Products.category[1].data);
    setTShoesList(Products.category[2].data);
    setJacketList(Products.category[3].data);
    setSlipperList(Products.category[4].data);
    setTrouserList(Products.category[5].data);


  }, []);


  // const items = useSelector(state => state)
  // console.log(items)
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1,marginBottom:55, }}>
        <Header />
        <Image source={require('../Images/poster.jpg')}
          style={{
            width: '96%',
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 7
          }}
        />


        <View style={{ marginTop: 20, }}>
          <FlatList data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={{
                  padding: 10,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 20,
                }}>
                  <Text style={{ color: '#000' }}>{item.category}</Text>
                </TouchableOpacity>
              )
            }} />
        </View>

        

        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New T shirts</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item))
                  }} />
              )
            }} />
        </View>

        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New Jeans</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={jeanstList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item))
                  }} />
              )
            }} />
        </View>


        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New Shoes</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={shoestList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item))
                  }} />
              )
            }} />
        </View>


        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New Jackets</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={jacketList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                onAddWishlist={x => {
                  dispatch(addToWishlist(x));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(item))
                }} />
              )
            }} />
        </View>


        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New Slippers</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={SlipperList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item))
                  }} />
              )
            }} />
        </View>


        <Text style={{
          marginTop: 20,
          marginLeft: 20,
          color: '#000',
          fontSize: 16,
          fontWeight: '600',
        }}> New Trousers</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={trouserList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <MyProductitem item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item))
                  }} />
              )
            }} />
        </View>
      </View>

    </ScrollView>
  )
}

export default Main