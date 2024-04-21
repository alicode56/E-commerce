import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomTextinput from '../common/CustomTextinput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';

let isValid = true;

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [badName, setBadName] = useState(false); // Fix typo here
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [mobile, setMobile] = useState('');
    const [badMobile, setBadMobile] = useState(false);
    const [password, setPassword] = useState('');
    const [badPassword, setBadPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(''); // Fix typo here
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const validate = () => {
        setButtonDisabled(true)
        if (email === '') {
            setBadEmail(true);
            isValid = false;
        } else {
            setBadEmail(false);
        }

        if (name === '') { // Fix typo here
            setBadName(true);
            isValid = false;
        } else {
            setBadName(false);
        }

        if (mobile === '' || mobile.length < 10) { // Add a condition for empty mobile or incorrect length
            setBadMobile(true);
            isValid = false;
        } else {
            setBadMobile(false);
        }

        if (password === '') {
            setBadPassword(true);
            isValid = false;
        } else {
            setBadPassword(false);
        }

        if (password !== confirmPassword) {
            setBadConfirmPassword(true);
            isValid = false;
        } else {
            setBadConfirmPassword(false);
        }
        setTimeout(() => {
            console.log(isValid)
            if (isValid === true) {
                saveData();
            }
            else {
                setButtonDisabled(false);
            }

        }, 3000)

    };

    const saveData = async () => {

        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('MOBILE', mobile);
        await AsyncStorage.setItem('PASSWORD', password);
        console.log(":yes")
        navigation.navigate(Login);



    }
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../Images/logocomnpy.png')}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignSelf: 'center',
                        marginTop: 50,
                    }}
                />

                <Text
                    style={{
                        marginTop: 30,
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: 'black',
                    }}>
                    Create a New Account
                </Text>

                <CustomTextinput
                    placeholder={'Enter Name'}
                    value={name} // Fix typo here
                    onChangeText={(txt) => {
                        setName(txt);
                    }}
                    icon={require('../Images/user.png')}
                />
                {badName && name === '' && (
                    <Text style={{
                        marginTop: 5, color: 'red', marginLeft: 30,
                    }}>
                        Enter Name
                    </Text>
                )}

                <CustomTextinput
                    placeholder={'Enter Email ID'}
                    value={email} // Fix typo here
                    onChangeText={(txt) => {
                        setEmail(txt);
                    }}
                    icon={require('../Images/mail.png')}
                />

                {badName && name === '' && (
                    <Text style={{ marginTop: 5, color: 'red', marginLeft: 30, }}>
                        Enter Email ID
                    </Text>
                )}

                <CustomTextinput
                    placeholder={'Enter Mobile Number'}
                    value={mobile} // Fix typo here
                    keyboardType={'number-pad'}
                    onChangeText={(txt) => {
                        setMobile(txt);
                    }}
                    icon={require('../Images/tphone.png')}
                />

                {badMobile && (
                    <Text style={{ marginTop: 5, color: 'red', marginLeft: 30, }}>
                        Enter a valid mobile number
                    </Text>
                )}

                <CustomTextinput
                    type={'password'}
                    value={password} // Fix typo here
                    onChangeText={(txt) => {
                        setPassword(txt);
                    }}
                    placeholder={'Enter password'}
                    icon={require('../Images/pswrd.png')}
                />
                {badName && name === '' && (
                    <Text style={{ marginTop: 5, color: 'red', marginLeft: 30, }}>
                        Enter Password
                    </Text>
                )}

                <CustomTextinput
                    type={'confirmPassword'}
                    value={confirmPassword}
                    onChangeText={(txt) => {
                        setConfirmPassword(txt);
                    }}
                    placeholder={'Enter Confirm password'}
                    icon={require('../Images/pswrd.png')}
                />
                {badConfirmPassword && confirmPassword === '' && ( // Fix this line
                    <Text style={{ marginTop: 5, color: 'red', marginLeft: 30 }}>
                        Enter Confirm Password
                    </Text>
                )}

                <CommonButton
                    title={'Sign Up'}
                    bgcolor={buttonDisabled ? '8e8e8e' : '#000'}
                    textcolor={'#fff'}
                    onPress={() => {
                        validate();
                    }}
                    disabled={buttonDisabled}
                />

                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                        marginBottom: 50,
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    Already have an account?
                </Text>
            </View>
        </ScrollView>
    );
};

export default Signup;











// import { View, Text, Image, OnPress, TouchableOpacity, } from 'react-native'
// import React, { useState } from 'react'
// import CustomTextinput from '../common/CustomTextinput'
// import CommonButton from '../common/CommonButton'
// import { useNavigation } from '@react-navigation/native'
// import { ScrollView } from 'react-native-gesture-handler'

// const Signup = () => {
//     const navigation = useNavigation();
//     const [name, setName] = useState('');
//     const [badname, setBadName] = useState(false);
//     const [email, setEmail] = useState('');
//     const [badEmail, setBadEmail] = useState(false);
//     const [mobile, setMobile] = useState('')
//     const [badMobile, setBadMobile] = useState(false);
//     const [passsword, setPassword] = useState('');
//     const [badPassword, setBadPassword] = useState(false);
//     const [confirmPasssword, setConfirmPassword] = useState('');
//     const [badConfirmPassword, setBadConfirmPassword] = useState(false);

//     const validate = () => {
//         if (email == '') {
//             setBadEmail(true)
//         }
//         else {
//             badEmail(false)
//         }

//         if (name == '') {
//             setBadName(true)
//         }
//         else {
//             setBadName(false)
//         }

//         if (mobile == '') {
//             setBadMobile(true)
//         }
//         else if (mobile.length < 10) {
//             setBadMobile(true)
//         }
//         else {
//             badMobile(false)
//         }
//         if (passsword === '') {
//             badPassword(true)
//         }
//         else {
//             setBadPassword(true)
//         }
//         if (passsword !== confirmPasssword) {
//             setBadConfirmPassword(true)
//         }
//         else {
//             setBadConfirmPassword(false)
//         }


//     };


//     return (
//         <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
//             <View style={{ flex: 1 }}>
//                 <Image source={require('../Images/logocomnpy.png')}
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 60,
//                         alignSelf: 'center',
//                         marginTop: 50
//                     }} />

//                 <Text style={{
//                     marginTop: 30,
//                     alignSelf: 'center',
//                     fontWeight: 'bold',
//                     fontSize: 24,
//                     color: 'black'
//                 }}>
//                     Create a New Account
//                 </Text>


//                 <CustomTextinput
//                     placeholder={'Enter Name'}
//                     Value={name}
//                     onChangeText={(txt) => {
//                         setName(txt)
//                     }}
//                     icon={require('../Images/user.png')} />
//                 {badEmail === true &&
//                     (<Text
//                         style={{ marginTop: 5, color: 'red', marginLeft: 30 }}>Enter Name</Text>)
//                 }

//                 <CustomTextinput
//                     placeholder={'Enter Email ID'}
//                     Value={email}
//                     onChangeText={(txt) => {
//                         setEmail(txt)
//                     }}
//                     icon={require('../Images/mail.png')} />

//                 <CustomTextinput
//                     placeholder={'Enter Mobile Number'}
//                     Value={mobile}
//                     keyboardType={'number-pad'}
//                     onChangeText={(txt) => {
//                         setMobile(txt)
//                     }}
//                     icon={require('../Images/tphone.png')} />


//                 <CustomTextinput
//                     type={'passsword'}
//                     Value={passsword}
//                     onChangeText={(txt) => {
//                         setPassword(txt)
//                     }}
//                     // type=('scscs')
//                     placeholder={'Enter password'}
//                     icon={require('../Images/pswrd.png')} />


//                 <CustomTextinput
//                     type={'confirmPassword'}
//                     Value={passsword}
//                     onChangeText={(txt) => {
//                         setConfirmPassword(txt)
//                     }}
//                     placeholder={'Enter Confirm password'}
//                     icon={require('../Images/pswrd.png')} />

//                 <CommonButton title={'Login'}
//                     bgcolor={'#000'}
//                     textcolor={'#fff'}
//                     onPress={() => {
//                         validate();
//                     }}
//                 />

//                 <Text
//                     style={{
//                         fontWeight: 'bold',
//                         fontSize: 18,
//                         alignSelf: 'center',
//                         marginTop: 20,
//                         textDecorationLine: 'underline',
//                         marginBottom: 50,
//                     }}
//                     onPress={() => {
//                         navigation.goBack();
//                     }}>
//                     Already have account ?</Text>



//             </View>

//         </ScrollView>
//     )
// }

// export default Signup