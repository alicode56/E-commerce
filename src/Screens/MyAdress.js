import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { deleteAddress } from '../redux/Actions/Actions';

let addressList = [];
const MyAdress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducers)
    const dispatch = useDispatch();
    console.log(addressList);
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
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 15 }}>My Adress</Text>
                <TouchableOpacity
                    style={{
                        marginRight: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: .2,
                        padding: 7,
                        borderRadius: 10
                    }}
                    onPress={() => {
                        navigation.navigate('AddAddress');
                    }}>
                    <Text>Add Adress</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={addressList} renderItem={({ item, index }) => {
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 60,
                            borderWidth: .2,
                            borderColor: '#BeBeBe',
                            alignSelf: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ marginLeft: 20 }}>
                                {"City: " + item.city}</Text>
                            <Text style={{ marginLeft: 20 }}>
                                {"Building: " + item.building}</Text>
                            <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                                {"Pincode: " + item.pin}</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                borderWidth: .3,
                                padding: 7,
                                marginRight: 20,
                                borderRadius: 20
                            }} onPress={() => {
                                dispatch(deleteAddress(index));
                            }}>
                            <Text>delete Address</Text>
                        </TouchableOpacity>


                    </View>
                )
            }} />

        </View>
    )
}

export default MyAdress