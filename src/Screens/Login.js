import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native'; // Import Alert
import { TextInput } from 'react-native-gesture-handler';
import CustomTextinput from '../common/CustomTextinput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [modalVisible,setModalVisible]=useState(false);
    const handleLogin = () => {
        setModalVisible(true);
        if (email === '') {
            setModalVisible(false);
            setBadEmail(true);
        } else {
            setBadEmail(false);
            if (password === '') {
                setModalVisible(false);
                setBadPassword(true);
            } else {
             
                setBadPassword(false);
                getData();
            }
        }
    };

    const getData = async () => {
        try {
            const mEmail = await AsyncStorage.getItem('EMAIL');
            const mPassword = await AsyncStorage.getItem('PASSWORD');
           console.log(mEmail,mPassword)
            if (email === mEmail && password === mPassword) {
                navigation.navigate('Home');
                setModalVisible(false);
            } else {
                setModalVisible(false);
                // alert('cascasc')
                Alert.alert('Error', 'Invalid email or password');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../Images/logocomnpy.png')}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignSelf: 'center',
                        marginTop: 100,
                    }}
                />
                <Text
                    style={{
                        marginTop: 60,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: 'black',
                    }}>
                    Login
                </Text>
                <CustomTextinput
                    placeholder={'Enter Email ID'}
                    icon={require('../Images/mail.png')}
                    value={email}
                    onChangeText={(txt) => {
                        setEmail(txt);
                    }}
                />
                {badEmail && email === '' && ( // Fix the condition here
                    <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>
                        Please enter an Email
                    </Text>
                )}
                <CustomTextinput
                    type={'password'}
                    placeholder={'Enter password'}
                    icon={require('../Images/pswrd.png')}
                    value={password}
                    onChangeText={(txt) => {
                        setPassword(txt);
                    }}
                />
                {badPassword && password === '' && (
                    <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>
                        Please enter a password
                    </Text>
                )}
                <CommonButton
                    title={'Login'}
                    bgcolor={'#000'}
                    textcolor={'#fff'}
                    onPress={() => {
                        handleLogin(); // Use the corrected function name
                    }}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                    }}
                    onPress={() => {
                        navigation.navigate('Signup');
                    }}>
                    Create New Account?
                </Text>
                <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </View>
        </ScrollView>
    );
};

export default Login;














// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import CustomTextinput from '../common/CustomTextinput';
// import CommonButton from '../common/CommonButton';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = () => {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [badEmail, setBadEmail] = useState(false);
//     const [badPassword, setBadPassword] = useState(false);



//     const Login = () => {
//         if (email === '') {
//             setBadEmail(true);
//         }
//         else {
//             setBadEmail(false);
//             if (password === '') {
//                 setBadPassword(true);
//                 getData();
//             }
//             else {
//                 setBadPassword(false)
//             }
//         }
//         };

//         const getData = async () => {
//             const mEmail = await AsyncStorage.getItem('EMAIL');
//             const mPassword = await AsyncStorage.getItem('PASSWORD');
//             if (email === mEmail && mPassword === password) {
//                 navigation.navigate('Home');
//             } else {
//                 alert('wrong password');
            
           
           
//             // if (email === mEmail && mPass === password) {
//             //     navigation.navigate('Home')
//             // }
//             // else{
//             //     alert('wrong password');
//             }
//         }
//         return (
//             <ScrollView style={{ flex: 1 }}>
//                 <View style={{ flex: 1 }}>
//                     <Image
//                         source={require('../Images/logocomnpy.png')}
//                         style={{
//                             width: 60,
//                             height: 60,
//                             borderRadius: 60,
//                             alignSelf: 'center',
//                             marginTop: 100,
//                         }}
//                     />

//                     <Text
//                         style={{
//                             marginTop: 60,
//                             alignSelf: 'center',
//                             fontWeight: 'bold',
//                             fontSize: 24,
//                             color: 'black',
//                         }}>
//                         Login
//                     </Text>

//                     <CustomTextinput
//                         placeholder={'Enter Email ID'}
//                         icon={require('../Images/mail.png')}
//                         value={email}
//                         onChangeText={(txt) => {
//                             setEmail(txt);
//                         }}
//                     />
//                     {badPassword && password === '' && (
//                         <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>
//                             Please enter a Email
//                         </Text>
//                     )}


//                     <CustomTextinput
//                         type={'password'}
//                         placeholder={'Enter password'}
//                         icon={require('../Images/pswrd.png')}
//                         value={password}
//                         onChangeText={(txt) => {
//                             setPassword(txt);
//                         }}
//                     />

//                     {badPassword && password === '' && (
//                         <Text style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>
//                             Please enter a password
//                         </Text>
//                     )}

//                     <CommonButton
//                         title={'Login'}
//                         bgcolor={'#000'}
//                         textcolor={'#fff'}
//                         onPress={() => {
//                             Login();
//                         }}
//                     />

//                     <Text
//                         style={{
//                             fontWeight: 'bold',
//                             fontSize: 18,
//                             alignSelf: 'center',
//                             marginTop: 20,
//                             textDecorationLine: 'underline',
//                         }}
//                         onPress={() => {
//                             navigation.navigate('Signup');
//                         }}>
//                         Create New Account?
//                     </Text>
//                 </View>
//             </ScrollView>
//         );
//     };

//     export default Login;



























// import { View, Text, Image, onPress, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { ScrollView, TextInput } from 'react-native-gesture-handler'
// import CustomTextinput from '../common/CustomTextinput'
// import CommonButton from '../common/CommonButton'
// import { useNavigation } from '@react-navigation/native'


// const Login = () => {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [passsword, setPassword] = useState('');
//     const [badEmail, setBadEmail] = useState(false);
//     const [badPassword, setBadPassword] = useState(false)
//     const validate = () => {

//         if (email == '') {
//             setBadEmail(true)
//         }
//         else {
//             setBadEmail(false);
//         }
//         if (passsword == '') {
//             setBadPassword(true)
//         }
//         else {
//             setBadPassword(false);
//         }

//     }
//     return (
//         <ScrollView style={{flex:1}}>
//         <View style={{ flex: 1 }}>
//             <Image source={require('../Images/logocomnpy.png')}
//                 style={{
//                     width: 60,
//                     height: 60,
//                     borderRadius: 60,
//                     alignSelf: 'center',
//                     marginTop: 100
//                 }} />

//             <Text style={{
//                 marginTop: 60,
//                 alignSelf: 'center',
//                 fontWeight: 'bold',
//                 fontSize: 24,
//                 color: 'black'
//             }}>
//                 Login
//             </Text>

//             <CustomTextinput
//                 placeholder={'Enter Email ID'}
//                 icon={require('../Images/mail.png')}
//                 value={email}
//                 onChangeText={(txt) => {
//                     setEmail(txt)
//                 }}
//             />
//           {badEmail== true &&
//           (<Text style={{marginTop:10,color:'red'}}> ali </Text>)
//           }


//             <CustomTextinput
//                 type={'password'}
//                 placeholder={'Enter password'}
//                 icon={require('../Images/pswrd.png')}
//                 Value={passsword}
//                 onChangeText={(txt) => {
//                     setPassword(txt)
//                 }} />

//             {badPassword === true && (
//             <Text
//                     style={{ marginTop: 10, alignSelf: 'center', color: 'red' }}>
//                     please Enter passsword Id
//                 </Text>)}

//             <CommonButton title={'Login'}
//                 bgcolor={'#000'}
//                 textcolor={'#fff'}
//                 onPress={() => {
//                     validate();
//                 }}
//             />



//             <Text
//                 style={{
//                     fontWeight: 'bold',
//                     fontSize: 18,
//                     alignSelf: 'center',
//                     marginTop: 20,
//                     textDecorationLine: 'underline',
//                 }}
//                 onPress={() => {
//                     navigation.navigate('Signup');
//                 }}>
//                 Create New Account ?</Text>





//         </View>
//         </ScrollView>
//     )
// }

// export default Login

