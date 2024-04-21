import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

let name = '';
const Profile = () => {
  const navigation=useNavigation ();

  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 15 }}>Profile</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 30,
            justifyContent: 'center',
            height: 'center'
          }}>
          <Image source={require('../Images/setting.png')}
            style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <Image source={require('../Images/profile.png')}
        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 20 }} />

      <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}>{name}</Text>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderBottomWidth: .3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          alignSelf: 'center'
        }}
        onPress={()=>{
          navigation.navigate('MyAdress');
        }}>
        <Text style={{}}> My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderBottomWidth: .3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
        <Text style={{}}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderBottomWidth: .3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
        <Text style={{}}>Offers</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Profile