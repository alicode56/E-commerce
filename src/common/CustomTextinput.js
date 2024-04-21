import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomTextinput = ({ value, onChangeText, placeholder, icon, type, keyboardType }) => {
    const [text, setText] = useState(value);
    return (
        <View style={{
            alignSelf: "center",
            width: '85%',
            paddingLeft: 20,
            height: 50,
            borderRadius: 10,
            borderWidth: .5,
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,


        }}>
            <Image source={icon} style={{ width: 24, height: 24 }} />
            <TextInput
                value={value}
                keyboardType={keyboardType ? keyboardType : 'default'}
                onChangeText={txt => {
                    onChangeText(txt);
                }}
                placeholder={placeholder}
                secureTextEntry={type ? true : false}
                style={{ marginLeft: 10 }} />

        </View>
    )
}

export default CustomTextinput