import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextinput from '../common/CustomTextinput';
import CommonButton from '../common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/Actions/Actions';

const Addaddress = () => {
    const navigation = useNavigation();
    const [city, setCity] = useState('');
    const [building, setBuilding] = useState();
    const [pin, setPin] = useState();
    const dispatch = useDispatch();

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

                <TouchableOpacity
                    style={{
                        marginLeft: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: .2,
                        padding: 7,
                        borderRadius: 10
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image source={require('../Images/backbtn.png')}
                        style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <CustomTextinput
                placeholder={'Enter City Name'}
                value={city}
                onChangeText={(txt) => {
                    setCity(txt);
                }}
                icon={require('../Images/city.png')}
            />

            <CustomTextinput
                placeholder={'Enter Building/colony Name'}
                value={building}
                onChangeText={(txt) => {
                    setBuilding(txt);
                }}
                icon={require('../Images/building.png')}
            />

            <CustomTextinput
                placeholder={'Enter pin/zip code'}
                value={pin}
                keyboardType={'number-pad'}
                onChangeText={(txt) => {
                    setPin(txt);
                }}
                icon={require('../Images/location.png')}
            />
            <CommonButton
                title={'Save Address'}
                bgcolor={'#000'}
                textcolor={'#fff'}
                onPress={() => {
                    if (city !== '' && building !== '' && pin !== '') {
                        dispatch(addAddress({ city: city, building: building, pin: pin }))
                    };
                    navigation.goBack();
                }}/>

        </View>
    )
}

export default Addaddress