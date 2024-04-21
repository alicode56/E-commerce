import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector, tempTotal, } from 'react-redux';
import CommonButton from '../common/CommonButton';
import { ScrollView } from 'react-native-gesture-handler';
;


const Checkout = () => {
    const cartData = useSelector(state => state.Reducers);
    const addressList = useSelector(state => state.AddressReducers)
    const [selectedAddress, setSelectedAddress] = useState();
    const getTotal = () => {
        let tempTotal = 0;
        cartData.map((item) => {
            tempTotal = tempTotal + 1 * item.price;

        })
        return parseFloat(tempTotal).toFixed(2)

    }
    return (
        // <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View>
                    <FlatList
                        data={cartData}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: 70,
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}>
                                    <Image source={item.image}
                                        style={{ width: 70, height: 70, marginLeft: 10 }} />
                                    <View
                                        style={{ padding: 10, marginLeft: '55%' }}>
                                        <Text style={{ fontSize: 18, }}>{item.name}</Text>
                                        <Text>{"₹ " + item.price}</Text>
                                    </View>
                                </View>

                            );
                        }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    height: 50,
                    marginTop: 30,
                    borderTopColor: '#BeBeBe',
                    borderTopWidth: .5,
                }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        Total:</Text>
                    <Text>{"₹ " + getTotal()}</Text>
                </View>

                <View>
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
                                        setSelectedAddress(
                                            'city :' +
                                            item.city +
                                            '' +
                                            ',Building: ' +
                                            item.building +
                                            ',pincode: ' +
                                            item.pin,

                                        )
                                    }}>
                                    <Text>Select  Address</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }} />
                </View>
                <Text style={{ margin: 20, fontSize: 18 }}>Select Address</Text>
                <Text style={{ marginLeft: 20, fontSize: 18 }}>
                    {selectedAddress === '' ? 'please select Address from above List' : selectedAddress} </Text>

                <CommonButton bgcolor={'#000'} textcolor={'#fff'} title={'Place Order'}
                    onPress={() => {
                        //here we metion payment methios which we use 
                        //rozarpay jazzcsh ,easypaisa 
                    }} />
            </View>
        </SafeAreaView>

        // {/* </ScrollView> */}
    )
}

export default Checkout


