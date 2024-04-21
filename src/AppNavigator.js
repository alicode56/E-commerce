import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAdress from './Screens/MyAdress';
import Addaddress from './Screens/Addaddress';
import Checkout from './Screens/Checkout';




const Stack = createStackNavigator();
const AppNavigator = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="MyAdress" component={MyAdress} />
                <Stack.Screen options={{ headerShown: false }} name="AddAddress" component={Addaddress} />
                <Stack.Screen options={{ headerShown: false }} name="Checkout" component={Checkout} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator