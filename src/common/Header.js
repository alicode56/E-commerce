import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{
            width: '100%',
            height: 70,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomWidth: 0.2,
            borderBottomColor: '#BeBeBe',
            backgroundColor: '#fff',
        }}>
            <Text
                style={{
                    fontWeight: '600',
                    fontSize: 20,
                    color: '#000',
                    marginLeft: 1,
                }}>GroceryApp
            </Text>

            <TouchableOpacity
                style={{
                    marginRight: 20,
                    justifyContent: 'center',

                }}>
                <Text>Mode</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Header