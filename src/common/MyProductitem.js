import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MyProductitem = ({ item, onAddToCart, onAddWishlist }) => {
    return (
        <View style={{
            width: 170,
            height: 170,
            borderRadius: 10,
            elevation: 5,
            backgroundColor: '#fff',
            marginLeft: 15,
            marginRight:12,
            marginBottom: 10,

        }}>
            <Image source={item.image}
                style={{
                    width: "100%",
                    height: '50%',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10

                }} />
            <Text style={{
                marginLeft: 15,
                marginTop: 10,
                fontWeight: '600',
                fontSize: 18
            }}>
                {item.name}</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingLeft: 5,
                paddingRight: 10,
                marginTop: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '600'
                }}>{"₹" + item.price}</Text>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 6,
                    paddingBottom: 6
                }}
                    onPress={() => {
                        onAddToCart(item)
                    }}
                >
                    <Text style={{ color: '#000' }}> add to cartd</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#fff',
                elevation: 5,
                position: 'absolute',
                top: 10, right: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
                onPress={() => {
                    onAddWishlist(item)
                }}>
                <Image source={require('../Images/heart.png')}
                    style={{ width: 24, height: 24, }} />
            </TouchableOpacity>





        </View>
    )
}

export default MyProductitem